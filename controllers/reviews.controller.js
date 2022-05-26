const {
  findByIdAndDelete,
  findByIdAndRemove,
} = require("../models/Review.model")
const Review = require("../models/Review.model")

module.exports.reviewController = {
  postReview: (req, res) => {
    Review.findById(req.params.id).create({
      reviewText: req.body.reviewText,
      reviewAuthor: req.body.reviewAuthor,
      reviewBook: req.body.reviewBook
    }).then(() => {
      res.json("Рецензия добавлена")
    }).catch((err) => res.json("Ошибка при добавлении рецензии"))
  },
  deleteReviewById: (req, res) => {
    Review.findByIdAndRemove(req.params.id).then(() => {
      res.json("Рецензия удален")
    }).catch((err) => res.json("Ошибка при удалении рецензии"))
  },
  getReviewByBook: (req, res) => {
    Review.find({
      reviewBook: req.params.id
    }).then((data) => {
      res.json(data)
    }).catch((err) => res.json("Ошибка при получении рецензии"))
  }
}