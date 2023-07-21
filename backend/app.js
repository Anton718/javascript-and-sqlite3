const sqlite3 = require('sqlite3').verbose();
const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(cors())

app.get('/', async function (req, res) {
    try {
        const db = new sqlite3.Database('cars.db', sqlite3.OPEN_READWRITE, (err) => {
            if (err) throw err;
            console.log('Connected..');
        })
        await db.all("SELECT * FROM cars order by id desc", (err, rows) => {
            db.close()
            res.json(rows)
        })
       }
        catch {console.log('error')}
    })

app.post("/cars", async function (req, res) {
    try {
    const db = new sqlite3.Database('cars.db', sqlite3.OPEN_READWRITE, (err) => {
        if (err) throw err;
        console.log('Connected..');
    })
    await db.run("INSERT into cars (name, price) VALUES(?,?)", [req.body.name, req.body.price])
    db.close()
    res.sendStatus(201)
   }
    catch {console.log('error')}
})

app.listen(3000, function () {
    console.log("Server is running on 3000");
});
