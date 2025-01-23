
const TableService = require('../services/tableService.js')
class TableController {
    async test(req, res) {
        try {
            const test = await TableService.Get()
            console.log(test)
            res.json({message: test})
        } catch (error) {
            logger.error(error) 
        }
    }
}

module.exports = new TableController