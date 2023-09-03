const router = require('express').Router();
const { Joi, celebrate } = require('celebrate');
const urlRegex = require('../utils/url-regex');

const {
  getUsers,
  getCurrentUser,
  getUserById,
  updateUser,
  updateUserAvatar,
} = require('../controllers/users');

router.get('/', getUsers);
router.get('/me', getCurrentUser);

router.get(
  '/:userId',
  celebrate({
    params: Joi.object().keys({
      userId: Joi
        .string()
        .hex()
        .length(24),
    }),
  }),
  getUserById,
);

router.patch(
  '/me',
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
    }),
  }),
  updateUser,
);

router.patch(
  '/me/avatar',
  celebrate({
    body: Joi.object().keys({
      avatar: Joi
        .string()
        .regex(urlRegex),
    }),
  }),
  updateUserAvatar,
);

module.exports = router;
