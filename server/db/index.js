const mongoose = require('mongoose')

const MONGO_HOST = 'cluster-free-g7w74.mongodb.net/test?retryWrites=true'

const connection = mongoose.createConnection(
  `mongodb+srv://vladblow:34nF2nqcTbza70Jy@${MONGO_HOST}`
)

const NoteSchema = new mongoose.Schema({
  title: { type: String },
  text: { type: String, required: true },
  color: { type: String },
  createdAt: { type: Date },
})

const Note = connection.model('Note', NoteSchema)

const createNote = data =>
  Note.create({
    title: data.title,
    text: data.text,
    color: data.color,
    createdAt: new Date(),
  })

const listNotes = () => Note.find()

const deleteNote = id => Note.findById(id).remove()

// const updateNote = (id, data) => Note.updateOne()

module.exports = {
  createNote,
  listNotes,
  deleteNote,
}
