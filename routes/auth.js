const router = require('express').Router();
const { Joi, celebrate } = require('celebrate');

const { signup, signin } = require('../controllers/auth');

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
        .string()
        .regex(/https?:\/\/(w{3,}\.)?[\w\d-]*\.[\w]{2,3}[\w\d\W]*#?/),
      email: Joi
        .string()
        .required()
        .email(),
      password: Joi
        .string()
        .required(),
    }),
  }),
  signup,
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
        .required(),
    }),
  }),
  signin,
);

module.exports = router;
