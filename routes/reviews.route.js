const {
  Router
} = require('express');
const {
  reviewController
} = require('../controllers/reviews.controller.js');

const router = Router();

router.get('/reviews', reviewController.getReviewByBook)
router.post('/reviews/:id', reviewController.postReview)
router.delete('/reviews/:id', reviewController.deleteReviewById)

module.exports = router;