const User = require('../models/user');

const createUser = (req, res) => {
  const { name, about, avatar } = req.body;

  User.create({ name, about, avatar })
    .then((user) => res.status(201).send(user))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        res.status(400).send({ message: err.message });
        return;
      }

      res.status(500).send({ message: err.message });
    });
};

const getUsers = (req, res) => {
  User.find()
    .then((users) => res.status(200).send(users))
    .catch((err) => res.status(500).send({ message: err.message }));
};

const getUserById = (req, res) => {
  User.findById(req.params.userId)
    .orFail(new Error('NotValidId'))
    .then((user) => res.status(200).send(user))
    .catch((err) => {
      if (err.name === 'CastError') {
        res.status(400).send({ message: err.message });
        return;
      }

      if (err.message === 'NotValidId') {
        res.status(404).send({ message: 'Пользователь не найден' });
        return;
      }

      res.status(500).send({ message: err.message });
    });
};

const updateUser = (req, res) => {
  User.findByIdAndUpdate(
    req.user._id,
    { ...req.body },
    { new: true, runValidators: true },
  )
    .orFail(new Error('NotValidId'))
    .then((user) => res.status(200).send(user))
    .catch((err) => {
      if (err.message === 'NotValidId') {
        res.status(404).send({ message: 'Пользователь не найден' });
        return;
      }
      if (err.name === 'ValidationError' || err.name === 'CastError') {
        res.status(400).send({ message: err.message });
        return;
      }

      res.status(500).send({ message: err.message });
    });
};

const updateUserAvatar = (req, res) => {
  const { avatar } = req.body;
  User.findByIdAndUpdate(
    req.user._id,
    { avatar },
    { new: true, runValidators: true },
  )
    .orFail(new Error('NotValidId'))
    .then((user) => res.status(200).send(user))
    .catch((err) => {
      if (err.name === 'ValidationError' || err.name === 'CastError') {
        res.status(400).send({ message: err.message });
        return;
      }

      if (err.message === 'NotValidId') {
        res.status(404).send({ message: 'Пользователь не найден' });
        return;
      }

      res.status(500).send({ message: err.message });
    });
};

module.exports = {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  updateUserAvatar,
};
