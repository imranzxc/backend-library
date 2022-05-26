const mongoose = require('mongoose')

const reviewSchema = mongoose.Schema({
  reviewText: String,
  reviewAuthor: {
    ref: 'Genre',
    type: mongoose.SchemaTypes.ObjectId
  },
  reviewBook: {
    ref: 'Genre',
    type: mongoose.SchemaTypes.ObjectId
  }
})

const Review = mongoose.model('Review', reviewSchema)

module.exports = Review;