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

router.delete(
  '/:cardId',
  celebrate({
    params: Joi.object().keys({
      cardId: Joi
        .string()
        .hex()
        .length(24),
    }),
  }),
  deleteCard,
);

router.put(
  '/:cardId/likes',
  celebrate({
    params: Joi.object().keys({
      cardId: Joi
        .string()
        .hex()
        .length(24),
    }),
  }),
  likeCard,
);

router.delete(
  '/:cardId/likes',
  celebrate({
    params: Joi.object().keys({
      cardId: Joi
        .string()
        .hex()
        .length(24),
    }),
  }),
  dislikeCard,
);

router.get('/', getCards);

module.exports = router;
