import express from "express";
import { google } from "googleapis";
import cors from "cors"
import bodyParser from "body-parser";

const app = express()

app.use(cors())


app.use(express.urlencoded({extended: true}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.post("/",async(req, res) => {

    const request = req.body.request; 
    const name = req.body.name;

    console.log("The Request Value", request)
    console.log("The Name Value", name)
    console.log(req.body);

    const auth = new google.auth.GoogleAuth({
        keyFile: "credentials.json",
        scopes: "https://www.googleapis.com/auth/spreadsheets"
    });

    //create client instance for auth
    const client = await auth.getClient()


    //instance of google sheets API
    const googleSheets = google.sheets({ version: "v4", auth: client});


    const spreadsheetId = "1SsmyuqEiCMH8mCria-Ea2v53CCJC43yMWYEQGesQ27A"

    //Get Meta data about spreadsheet
    const metaData = await googleSheets.spreadsheets.get({

        auth,
        spreadsheetId
        
    });

    //read rows from spreadsheet
    const getRows = await googleSheets.spreadsheets.values.get({
        auth,
        spreadsheetId,
        range: "Enter Data Here!A:A"
    });


    //write rows(s) to spreadsheet
    googleSheets.spreadsheets.values.update({
        auth,
        spreadsheetId,
        range: "Enter Data Here!B2",
        valueInputOption: "USER_ENTERED",
        resource: {
            values: [[request]],
        },
    });
    
    googleSheets.spreadsheets.values.update({
        auth,
        spreadsheetId,
        range: "Enter Data Here!B3",
        valueInputOption: "USER_ENTERED",
        resource: {
            values: [[name]],
        },
    });


    res.json({ message: "Success" });
});


app.listen(1337, (req, res) => console.log("running on 1337"))