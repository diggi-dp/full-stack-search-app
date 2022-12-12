const express = require('express')
const cors = require('cors')
const connectMongoDB = require('./db.js')
const router = require('./src/routes/companyRoute')
const app = express()

require('dotenv').config()

app.use(cors())

connectMongoDB()

app.use(express.json())
app.use(router)


const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log('Server is running port', `http://localhost:${PORT}`)
})