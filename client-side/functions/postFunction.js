export async function handler(event, context) {
  const auth = new google.auth.GoogleAuth({
    keyFile: "./client-side/credentials.json",
    scopes: "https://www.googleapis.com/auth/spreadsheets",
  });

  const client = await auth.getClient();
  const googleSheets = google.sheets({ version: "v4", auth: client });
  const spreadsheetId = "1SsmyuqEiCMH8mCria-Ea2v53CCJC43yMWYEQGesQ27A";
  const requests = [];

  const addUpdateRequest = (sheetId, range, value) => {
    requests.push({
      updateCells: {
        range: {
          sheetId,
          startRowIndex: range[0],
          endRowIndex: range[1],
          startColumnIndex: range[2],
          endColumnIndex: range[3],
        },
        fields: "userEnteredValue",
        rows: [
          {
            values: [{ userEnteredValue: { stringValue: value } }],
          },
        ],
      },
    });
  };

  // Add update requests for product values
  for (let i = 18; i <= 28; i++) {
    addUpdateRequest(1, [i, i + 1, 0, 1], newProductValues[`item${i - 17}`]);
    addUpdateRequest(1, [i, i + 1, 1, 2], newProductValues[`item${i - 6}`]);
    addUpdateRequest(1, [i, i + 1, 2, 3], newProductValues[`item${i + 5}`]);
    addUpdateRequest(1, [i, i + 1, 3, 4], newProductValues[`item${i + 16}`]);
    addUpdateRequest(1, [i, i + 1, 4, 5], newProductValues[`item${i + 27}`]);
  }

  // Add update requests for customer values
  const customerValues = [
    "nameOne",
    "nameTwo",
    "date",
    "threePart",
    "poNum",
    "receivedBy",
    "bolNum",
    "carrier",
    "lbs",
    "totalCount",
    "vendor",
  ];
  for (let i = 0; i < customerValues.length; i++) {
    addUpdateRequest(1, [i + 1, i + 2, 1, 2], newCustomerValues[customerValues[i]]);
  }

  // Batch update
  await googleSheets.spreadsheets.batchUpdate({
    spreadsheetId,
    resource: {
      requests,
    },
  });

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Success" }),
  };
}