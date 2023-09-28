import mysql from 'mysql2';
import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors());
app.use(express.json())

const db = mysql.createConnection({
  user: '51g5ci0n5d0q4koweaba',
  host: 'aws.connect.psdb.cloud',
  password: 'pscale_pw_ExBULljNKEWeHXPZT3mg3ZzsICUdOoEFcNdflJHqGT0',
  database: 'cms-customers',
  ssl: {
    rejectUnauthorized: true,
  },
})

app.post('/create', (req, res) => {
      const threePart = req.body.threePart
      const name = req.body.name

      db.query('INSERT INTO `customer-details` (`3-part`, `name`) VALUES (?,?)', [threePart, name],
      (err, result) => {
        if (err) {
          console.log(err)
        } else {
          res.send("Values Inserted")
        }
      }
  );
})

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});