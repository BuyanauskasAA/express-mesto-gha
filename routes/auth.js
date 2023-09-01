const router = require('express').Router();
const { Joi, celebrate } = require('celebrate');

const { createUser, login } = require('../controllers/users');

router.post(
  '/signup',
  celebrate({
    body: Joi.object().keys({
      name: Joi
        .string()
        .min(2)
        .max(30),
      about: Joi
        .string()
        .min(2)
        .max(30),
      avatar: Joi
        .string
        .uri(),
      email: Joi
        .string()
        .required()
        .email(),
      password: Joi
        .string()
        .min(8)
        .required(),
    }).unknown(true),
  }),
  createUser,
);

router.post(
  '/signin',
  celebrate({
    body: Joi.object().keys({
      email: Joi
        .string()
        .required()
        .email(),
      password: Joi
        .string()
        .min(8)
        .required(),
    }),
  }),
  login,
);

module.exports = router;
