const {
  findByIdAndDelete,
  findByIdAndRemove,
} = require("../models/Genre.model")

const Genre = require("../models/Genre.model")

module.exports.genreController = {
  postGenre: (req, res) => {
    Genre.create({
      genreName: req.body.genreName,
      genreDescription: req.body.genreDescription
    }).then(() => {
      res.json("Жанр добавлен")
    }).catch((err) => res.json("Ошибка при добавлении жанра"))
  },
  deleteDrinkById: (req, res) => {
    Genre.findByIdAndRemove(req.params.id).then(() => {
      res.json("Жанр удален")
    }).catch((err) => res.json("Ошибка при удалении жанра"))
  },
  getGenre: (req, res) => {
    Genre.find().then((data) => {
      res.json(data)
    }).catch((err) => res.json("Ошибка при получении жанра"))
  }
}