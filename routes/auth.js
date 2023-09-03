const router = require('express').Router();
const { Joi, celebrate } = require('celebrate');
const { signup, signin, signout } = require('../controllers/auth');
const urlRegex = require('../utils/url-regex');

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
        .regex(urlRegex),
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

router.post('/signout', signout);

module.exports = router;
