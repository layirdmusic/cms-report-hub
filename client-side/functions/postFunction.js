const { google } = require("googleapis");

exports.handler = async function(event, context) {

  let request
  let name;

  try {
    request = "hello";
    name = "bye";
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

  await updateValues("Enter Data Here!B2", request);
  await updateValues("Enter Data Here!B3", name);

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Success" })
  };
};