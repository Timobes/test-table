const Router = require('express')
const tableController = require('../controllers/tableController.js')
const tableRouter = new Router()

tableRouter.get('/', tableController.test)

module.exports = tableRouter
    