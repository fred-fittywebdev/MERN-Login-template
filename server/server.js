require("dotenv").config();
const express = require('express')
const app = express()
const cors = require('cors')
app.use(express.json())
// routes
const authRoute = require('./routes/auth.routes')
const userRoute = require('./routes/user.routes')

// port
const port = process.env.PORT || 8080
// database connection
const mongoDbConnection = require('./config/mongoDbConnection.js')

app.use(cors())

app.use('/api/auth', authRoute)
app.use('/api/user', userRoute)
app.get('/', (req, res) => res.send('Hello world !'))
app.listen(port, () => console.log(`Server is running on port ${port}`))