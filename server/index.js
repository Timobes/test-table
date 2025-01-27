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

app.get('/not-db', function (req, res) {
    res.json({
        "message": [
            {
                "id": 1,
                "data": "2050-10-31T21:00:00.000Z",
                "job_title": "web developer",
                "level": 2,
                "address": "123 Sample St, Sydney",
                "phone": "15550000000",
                "email": "hello@relume.io",
                "skills": "webflow, figma",
                "language": "english",
                "experience": "5+ years",
                "img": "link"
            },
            {
                "id": 2,
                "data": "2050-10-31T21:00:00.000Z",
                "job_title": "web developer",
                "level": 2,
                "address": "123 Sample St, Sydney",
                "phone": "15550000000",
                "email": "hello@relume.io",
                "skills": "webflow, figma",
                "language": "english",
                "experience": "5+ years",
                "img": "link"
            },
            {
                "id": 3,
                "data": "2050-10-31T21:00:00.000Z",
                "job_title": "web developer 2",
                "level": 2,
                "address": "123 Sample St, Sydney",
                "phone": "15550000000",
                "email": "hello@relume.io",
                "skills": "webflow, figma",
                "language": "english",
                "experience": "5+ years",
                "img": "link"
            },
            {
                "id": 4,
                "data": "2050-10-31T21:00:00.000Z",
                "job_title": "web developer 3",
                "level": 2,
                "address": "123 Sample St, Sydney",
                "phone": "15550000000",
                "email": "hello@relume.io",
                "skills": "webflow, figma",
                "language": "english",
                "experience": "5+ years",
                "img": "link"
            },
            {
                "id": 5,
                "data": "2050-10-31T21:00:00.000Z",
                "job_title": "web developer 4",
                "level": 2,
                "address": "123 Sample St, Sydney",
                "phone": "15550000000",
                "email": "hello@relume.io",
                "skills": "webflow, figma",
                "language": "english",
                "experience": "5+ years",
                "img": "link"
            },
            {
                "id": 6,
                "data": "2050-10-31T21:00:00.000Z",
                "job_title": "web developer 5",
                "level": 2,
                "address": "123 Sample St, Sydney",
                "phone": "15550000000",
                "email": "hello@relume.io",
                "skills": "webflow, figma",
                "language": "english",
                "experience": "5+ years",
                "img": "link"
            }
        ]
    })
})

app.listen(port)