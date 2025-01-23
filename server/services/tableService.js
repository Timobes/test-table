const db = require('../db/db')

class TableService {
    async Get() {
        try {
            const test = await db.query("SELECT * FROM test")

            // console.log(test.rows)

            return test.rows
        } catch (error) {
            logger.error(error) 
        }
    }
}

module.exports = new TableService 
    