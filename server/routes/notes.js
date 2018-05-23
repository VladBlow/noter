const express = require('express')
const { createNote, listNotes, deleteNote } = require('../db')

const notesRouter = express.Router()

notesRouter.get('/', (req, res) => {
  listNotes().then(data => res.send(data))
})

const success = data => ({
  status: 'success',
  id: data._id.valueOf(),
})

notesRouter.post('/', (req, res) => {
  createNote(req.body)
    .then(data => res.send(success(data)))
    .catch(err => res.status(500).send(err))
})

notesRouter.put('/:id', (req, res) => {
  createNote({ title: 'Text23', text: 'ads' }).then(data =>
    res.send(success(data))
  )
})

notesRouter.delete('/:id', (req, res) => {
  deleteNote(req.params.id).then(data => res.send(success(data)))
})

module.exports = notesRouter
