const exprese = require('express')
const tableRouter = require('./routers/tableRouter')
const cors = require('cors')

const app = exprese()
const port = 8080

app.use(exprese.json())
app.use(cors())
app.use('/api', tableRouter)

app.get('/', function (req, res) {
    res.send('<h1>HI!</h1>')
})

app.listen(port)