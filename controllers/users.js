const User = require('../models/user');
const NotFoundError = require('../errors/not-found-err');

const getUsers = (req, res, next) => {
  User.find()
    .then((users) => res.send(users))
    .catch(next);
};

const getCurrentUser = (req, res, next) => {
  User.findById(req.user._id)
    .orFail(new NotFoundError('Пользователь не найден!'))
    .then((user) => res.send(user))
    .catch(next);
};

const getUserById = (req, res, next) => {
  User.findById(req.params.userId)
    .orFail(new NotFoundError('Пользователь не найден!'))
    .then((user) => res.send(user))
    .catch(next);
};

const updateUser = (req, res, next) => {
  User.findByIdAndUpdate(
    req.user._id,
    { ...req.body },
    { new: true, runValidators: true },
  )
    .orFail(new NotFoundError('Пользователь не найден!'))
    .then((user) => res.send(user))
    .catch(next);
};

const updateUserAvatar = (req, res, next) => {
  const { avatar } = req.body;
  User.findByIdAndUpdate(
    req.user._id,
    { avatar },
    { new: true, runValidators: true },
  )
    .orFail(new NotFoundError('Пользователь не найден!'))
    .then((user) => res.send(user))
    .catch(next);
};

module.exports = {
  getUsers,
  getCurrentUser,
  getUserById,
  updateUser,
  updateUserAvatar,
};
