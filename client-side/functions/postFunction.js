import { google } from "googleapis";

export async function handler(event, context) {

  let newCustomerValues
  let newProductValues

  try {

    const customerValues = ["nameOne", "nameTwo", "date", "threePart", "poNum", "receivedBy", "bolNum", "carrier", "lbs", "totalCount", "vendor"]

    const  productValues = []

    for(let i = 1; i <= 64; i++) {
      productValues.push(`item${[i]}`)
    }

    newCustomerValues = {}
    const responseBody = JSON.parse(event.body)

    for(let i = 0; i < customerValues.length; i++){
      newCustomerValues[customerValues[i]] = responseBody[customerValues[i]]
    }

    newProductValues = {}
    for(let i = 0; i < productValues.length; i++){
      newCustomerValues[productValues[i]] = responseBody[productValues[i]]
    }

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


  await updateValues("Enter Data Here!B2", newCustomerValues.nameOne);
  await updateValues("Enter Data Here!B3", newCustomerValues.nameTwo);
  await updateValues("Enter Data Here!B4", newCustomerValues.date);
  await updateValues("Enter Data Here!B5", newCustomerValues.threePart);
  await updateValues("Enter Data Here!B6", newCustomerValues.poNum);
  await updateValues("Enter Data Here!B7", newCustomerValues.receivedBy);
  await updateValues("Enter Data Here!B8", newCustomerValues.bolNum);
  await updateValues("Enter Data Here!B9", newCustomerValues.carrier);
  await updateValues("Enter Data Here!B10", newCustomerValues.lbs);
  await updateValues("Enter Data Here!B11", newCustomerValues.totalCount);
  await updateValues("Enter Data Here!B12", newCustomerValues.vendor);
  await updateValues("Enter Data Here!A18", newProductValues.item1);
  

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Success" })
  };
}