const router = require('express').Router();
const { Joi, celebrate } = require('celebrate');

const {
  createCard,
  getCards,
  deleteCard,
  likeCard,
  dislikeCard,
} = require('../controllers/cards');

router.post(
  '/',
  celebrate({
    body: Joi.object().keys({
      name: Joi
        .string()
        .required()
        .min(2)
        .max(30),
      link: Joi
        .string()
        .regex(/https?:\/\/(w{3,}\.)?[\w\d-]*\.[\w]{2,3}[\w\d\W]*#?/)
        .required(),
    }),
  }),
  createCard,
);

router.get('/', getCards);
router.delete('/:cardId', deleteCard);
router.put('/:cardId/likes', likeCard);
router.delete('/:cardId/likes', dislikeCard);

module.exports = router;
