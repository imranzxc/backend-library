const {
  Router
} = require('express');
const {
  genreController
} = require('../controllers/genres.controller.js');

const router = Router();

router.get('/genre', genreController.getGenre)
router.post('/genre/:id', genreController.postGenre)
router.delete('/genre/:id', genreController.deleteDrinkById)

module.exports = router;