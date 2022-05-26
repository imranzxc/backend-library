const express = require('express')
const mongoose = require('mongoose')
const app = express()

app.use(express.json())
app.use(require('./routes/books.route'))
app.use(require('./routes/genres.route'))
app.use(require('./routes/reviews.route'))


mongoose.connect('mongodb+srv://admin:1111@cluster0.eazqc.mongodb.net/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Успешно соединились с сервером MongoDB'))
  .catch(() => console.log('Ошибка при соединении с сервером MongoDB'))

app.listen(3000, () => {
  console.log(`Example app listening at http://localhost:${3000}`)
})