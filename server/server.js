require("dotenv").config();
const express = require('express')
const app = express()
const port = process.env.PORT || 8080
// database connection
const mongoDbConnection = require('./config/mongoDbConnection.js')

app.get('/', (req, res) => res.send('Hello world !'))
app.listen(port, () => console.log(`Server is running on port 8080`))