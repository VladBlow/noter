const express = require('express')
const { createNote, listNotes } = require('../db')

notesRouter.get('/', (req, res, next) => {
  listNotes().then(data => res.send(data))
})

notesRouter.post('/note', (req, res, next) => {
  createNote({ title: 'Text23', text: 'ads' }).then(data => res.send(data))
})

module.exports = notesRouter
