const Country = require("../models/Country") // Imports the Class

async function index(req, res) {
    try {
        const countries = await Country.getAll()
        res.status(200).json(countries) 
    } catch(err) {
        res.status(500).json({ error: err.message })
    }
}

async function show(req, res) {
    try {
        let name = req.params.name
        const country = await Country.getOneByCountryName(name)
        res.status(200).json(country)
    } catch(err) {
        res.status(404).json({ error: err.message })
    }
}

async function create(req, res) {
    try {
        const data = req.body
        const newCountry = await Country.create(data)
        res.status(201).json(newCountry)
    } catch(err) {
        res.status(400).json({ error: err.message })
    }
}

async function update (req, res) {
    try {
        const name = req.params.name
        const data = req.body
        const country = await Country.getOneByCountryName(name)
        const result = await country.update(data)
        res.status(200).json(result)
    } catch(err) {
        res.status(404).json({ error: err.message })
    }
}

async function destroy(req, res) {
    try {
        const name = req.params.name
        const country = await Country.getOneByCountryName(name) // Targets the getOneByCountryName method from the Class in models
        const result = await country.destroy() // This isn't being used anywhere - up to us as Devs as to whether or not we use the data. You do need "await country.destroy()" -> removing 'const result =' would also work the same way
        res.status(204).end()
    } catch(err) {
        res.status(404).json({ error: err.message })
    }
}

module.exports = { index, show, create, update, destroy }