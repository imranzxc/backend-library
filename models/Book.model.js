const mongoose = require('mongoose')

const bookSchema = mongoose.Schema({
  bookName: String,
  bookAuthor: {
    ref: 'Author',
    type: mongoose.SchemaTypes.ObjectId
  },
  bookGenre: {
    ref: 'Genre',
    type: mongoose.SchemaTypes.ObjectId
  }
})

const Book = mongoose.model('Book', bookSchema)

module.exports = Book;