import { google } from "googleapis";

export async function handler(event, context) {
  const productValues = Array.from({length: 55}, (_, i) => `item${i+1}`);
  const customerValues = ["nameOne", "nameTwo", "date", "threePart", "poNum", "receivedBy", "bolNum", "carrier", "lbs", "totalCount", "vendor"];
  const responseBody = JSON.parse(event.body);

  const newCustomerValues = Object.fromEntries(customerValues.map(key => [key, responseBody[key]]));
  const newProductValues = Object.fromEntries(productValues.map(key => [key, responseBody[key]]));

  try {
    const auth = new google.auth.GoogleAuth({
      keyFile: "./client-side/credentials.json",
      scopes: "https://www.googleapis.com/auth/spreadsheets"
    });

    const client = await auth.getClient();

    const googleSheets = google.sheets({ version: "v4", auth: client });
    const spreadsheetId = "1SsmyuqEiCMH8mCria-Ea2v53CCJC43yMWYEQGesQ27A";

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
   
    for(let i = 18; i <= 28; i++) {
      await Promise.all([
        updateValues(`Enter Data Here!A${i}`, newProductValues[`item${i-17}`]),
        updateValues(`Enter Data Here!B${i}`, newProductValues[`item${i-6}`]),
        updateValues(`Enter Data Here!C${i}`, newProductValues[`item${i+5}`]),
        updateValues(`Enter Data Here!D${i}`, newProductValues[`item${i+16}`]),
        updateValues(`Enter Data Here!E${i}`, newProductValues[`item${i+27}`])
      ]);
    }

    const customerUpdatePromises = customerValues.map((key, index) => {
      return updateValues(`Enter Data Here!B${index + 2}`, newCustomerValues[key]);
    });

    await Promise.all(customerUpdatePromises);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Success" })
    };
  } catch(error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Internal Server Error" })
    };
  }
}