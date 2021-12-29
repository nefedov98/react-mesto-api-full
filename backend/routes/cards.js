const router = require('express').Router();

const {
  getCards, createCard, deleteCard, likeCard, dislikeCard,
} = require('../controllers/cards');

const { cardValidation, idValidation } = require('../middlewares/validate');

router.get('/cards', getCards);
router.post('/cards', cardValidation, createCard);
router.delete('/cards/:cardId', idValidation, deleteCard);
router.put('/cards/:_id/likes', idValidation, likeCard);
router.delete('/cards/:_id/likes', idValidation, dislikeCard);

module.exports = router;
