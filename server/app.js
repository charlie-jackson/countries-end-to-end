const express = require("express")
const cors = require("cors")

const app = express()

const logger = require("./logger")
const countryRouter = require("./routers/countries")

// MIDDLEWARE
app.use(cors())
app.use(express.json()) // Converts JSON into JavaScript for POSTing / 'create' function
app.use(logger)
// app.method() // Only the exact string will be triggered

app.use("/countries", countryRouter) // This goes below the first two app.use because they need to initialise first before processing this

module.exports = app