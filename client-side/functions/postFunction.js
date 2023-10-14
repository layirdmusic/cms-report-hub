import { google } from "googleapis";

export async function handler(event, context) {


  try {
    nameOne = JSON.parse(event.body).nameOne;
    nameTwo = JSON.parse(event.body).nameTwo;
    date = JSON.parse(event.body).date;
    threePart = JSON.parse(event.body).threePart;
    poNum = JSON.parse(event.body).poNum;
    receivedBy = JSON.parse(event.body).receivedBy;
    bolNum = JSON.parse(event.body).bolNum;
    carrier = JSON.parse(event.body).carrier;
    lbs = JSON.parse(event.body).lbs;
    totalCount = JSON.parse(event.body).totalCount;
    vendor = JSON.parse(event.body).vendor;
  } catch(error) {
    console.error('Error parsing JSON:', error)
  }
  

  const auth = new google.auth.GoogleAuth({
      keyFile: "./client-side/credentials.json",
      scopes: "https://www.googleapis.com/auth/spreadsheets"
  });

  const client = await auth.getClient();

  const googleSheets = google.sheets({ version: "v4", auth: client });
  const spreadsheetId = "1SsmyuqEiCMH8mCria-Ea2v53CCJC43yMWYEQGesQ27A";

  const metaData = await googleSheets.spreadsheets.get({
    auth,
    spreadsheetId
  });

  const getRows = await googleSheets.spreadsheets.values.get({
    auth,
    spreadsheetId,
    range: "Enter Data Here!A:A"
  });

  const updateValues = async (range, value) => {
    return googleSheets.spreadsheets.values.update({
      auth,
      spreadsheetId,
      range,
      valueInputOption: "USER_ENTERED",
      resource: {
        values: [[value]],
      },
    });
  };

  await updateValues("Enter Data Here!B2", nameOne);
  await updateValues("Enter Data Here!B3", nameTwo);
  await updateValues("Enter Data Here!B4", date);
  await updateValues("Enter Data Here!B5", threePart);
  await updateValues("Enter Data Here!B6", poNum);
  await updateValues("Enter Data Here!B7", receivedBy);
  await updateValues("Enter Data Here!B8", bolNum);
  await updateValues("Enter Data Here!B9", carrier);
  await updateValues("Enter Data Here!B10", lbs);
  await updateValues("Enter Data Here!B11", totalCount);
  await updateValues("Enter Data Here!B12", vendor);

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Success" })
  };
}