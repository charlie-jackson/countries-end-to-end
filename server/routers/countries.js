const { Router } = require("express")

const countryController = require("../controllers/countries")

const countryRouter =  Router()

countryRouter.get("/", countryController.index) // Use this as a Middleware in the project so must be exported
countryRouter.get("/:name", countryController.show) // targers countryController.show = show async function from countries controller
countryRouter.post("/", countryController.create)
countryRouter.patch("/:name", countryController.update)
countryRouter.delete("/:name", countryController.destroy)

module.exports = countryRouter