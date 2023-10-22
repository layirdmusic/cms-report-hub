import { google } from "googleapis";

export async function handler(event, context) {

  let newCustomerValues
  let newProductValues
  const productValues = []
  for(let i = 1; i <= 55; i++) {
    productValues.push(`item${[i]}`)
  }

  try {

    const customerValues = ["nameOne", "nameTwo", "date", "threePart", "poNum", "receivedBy", "bolNum", "carrier", "lbs", "totalCount", "vendor"]

    newCustomerValues = {}
    const responseBody = JSON.parse(event.body)

    for(let i = 0; i < customerValues.length; i++){
      newCustomerValues[customerValues[i]] = responseBody[customerValues[i]]
    }

    newProductValues = {}
    for(let i = 0; i < productValues.length; i++){
      newProductValues[productValues[i]] = responseBody[productValues[i]]
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

  const updateValues = async (updates) => {
    return googleSheets.spreadsheets.values.batchUpdate({
      auth,
      spreadsheetId,
      resource: {
        data: updates.map(([range, value]) => ({
          range,
          values: [[value]],
        })),
        valueInputOption: "USER_ENTERED",
      },
    });
  };
  
  


let customer = [
[newCustomerValues.threePart, newCustomerValues.nameOne, newCustomerValues.nameTwo, newCustomerValues.date, newCustomerValues.poNum, newCustomerValues.receivedBy, newCustomerValues.bolNum, newCustomerValues.carrier, newCustomerValues.lbs, newCustomerValues.totalCount, newCustomerValues.vendor ]
]

googleSheets.spreadsheets.values.append({
  auth,
  spreadsheetId,
  range: "Customer Database",
  valueInputOption: "USER_ENTERED",
  resource: {
    values: customer,
  },
});




  const updates = [];

  for (let i = 18; i <= 28; i++) {
    updates.push([`Enter Data Here!A${i}`, newProductValues[`item${i - 17}`]]);
    updates.push([`Enter Data Here!B${i}`, newProductValues[`item${i - 6}`]]);
    updates.push([`Enter Data Here!C${i}`, newProductValues[`item${i + 5}`]]);
    updates.push([`Enter Data Here!D${i}`, newProductValues[`item${i + 16}`]]);
    updates.push([`Enter Data Here!E${i}`, newProductValues[`item${i + 27}`]]);
  }

  const customerUpdates = [
    ["Enter Data Here!B2", newCustomerValues.nameOne],
    ["Enter Data Here!B3", newCustomerValues.nameTwo],
    ["Enter Data Here!B4", newCustomerValues.date],
    ["Enter Data Here!B5", newCustomerValues.threePart],
    ["Enter Data Here!B6", newCustomerValues.poNum],
    ["Enter Data Here!B7", newCustomerValues.receivedBy],
    ["Enter Data Here!B8", newCustomerValues.bolNum],
    ["Enter Data Here!B9", newCustomerValues.carrier],
    ["Enter Data Here!B10", newCustomerValues.lbs],
    ["Enter Data Here!B11", newCustomerValues.totalCount],
    ["Enter Data Here!B12", newCustomerValues.vendor],
  ];

  const product = [
    [newProductValues[`item12`] ? newCustomerValues.threePart : null, newProductValues[`item1`], newProductValues[`item12`], newProductValues[`item23`], newProductValues[`item34`], newProductValues[`item45`]],
    [newProductValues[`item13`] ? newCustomerValues.threePart : null, newProductValues[`item2`], newProductValues[`item13`], newProductValues[`item24`], newProductValues[`item35`], newProductValues[`item46`]],
    [newProductValues[`item14`] ? newCustomerValues.threePart : null, newProductValues[`item3`], newProductValues[`item14`], newProductValues[`item25`], newProductValues[`item36`], newProductValues[`item47`]],
    [newProductValues[`item15`] ? newCustomerValues.threePart : null, newProductValues[`item4`], newProductValues[`item15`], newProductValues[`item26`], newProductValues[`item37`], newProductValues[`item48`]],
    [newProductValues[`item16`] ? newCustomerValues.threePart : null, newProductValues[`item5`], newProductValues[`item16`], newProductValues[`item27`], newProductValues[`item38`], newProductValues[`item49`]],
    [newProductValues[`item17`] ? newCustomerValues.threePart : null, newProductValues[`item6`], newProductValues[`item17`], newProductValues[`item28`], newProductValues[`item39`], newProductValues[`item50`]],
    [newProductValues[`item18`] ? newCustomerValues.threePart : null, newProductValues[`item7`], newProductValues[`item18`], newProductValues[`item29`], newProductValues[`item40`], newProductValues[`item51`]],
    [newProductValues[`item19`] ? newCustomerValues.threePart : null, newProductValues[`item8`], newProductValues[`item19`], newProductValues[`item30`], newProductValues[`item41`], newProductValues[`item52`]],
    [newProductValues[`item20`] ? newCustomerValues.threePart : null, newProductValues[`item9`], newProductValues[`item20`], newProductValues[`item31`], newProductValues[`item42`], newProductValues[`item53`]],
    [newProductValues[`item21`] ? newCustomerValues.threePart : null, newProductValues[`item10`], newProductValues[`item21`], newProductValues[`item32`], newProductValues[`item43`], newProductValues[`item54`]],
    [newProductValues[`item22`] ? newCustomerValues.threePart : null, newProductValues[`item11`], newProductValues[`item22`], newProductValues[`item33`], newProductValues[`item44`], newProductValues[`item55`]],
  ];

  // for (let i = 18; i <= 28; i++) {
  //   updates.push([newProductValues[`item${i - 17}`]]);
  //   updates.push([newProductValues[`item${i - 6}`]]);
  //   updates.push([newProductValues[`item${i + 5}`]]);
  //   updates.push([newProductValues[`item${i + 16}`]]);
  //   updates.push([newProductValues[`item${i + 27}`]]);
  // }

  googleSheets.spreadsheets.values.append({
    auth,
    spreadsheetId,
    range: "Product Database",
    valueInputOption: "USER_ENTERED",
    resource: {
      values: product,
    },
  });

  const allUpdates = updates.concat(customerUpdates);
  // const allappend = customerUpdates;

  await updateValues(allUpdates);
  // await appendValues(allappend)

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Success" })
  };
}