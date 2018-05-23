const express = require('express')
const bodyParser = require('body-parser')
const notesRouter = require('./routes/notes')

const app = express()

app.use(bodyParser.json())

app.use('/notes', notesRouter)

/* Config listener */

const PORT = 8000

app.listen(PORT, () => console.log(`Start server on ${PORT} port`))
