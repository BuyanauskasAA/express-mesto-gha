const mongoose = require('mongoose');
const validator = require('validator');

const cardSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Поле должно быть заполнено'],
    minlength: [2, 'Минимальная длина поля - 2'],
    maxlength: [30, 'Максимальная длина поля - 30'],
  },
  link: {
    type: String,
    required: [true, 'Поле должно быть заполнено'],
    validate: {
      validator: (v) => validator.isURL(v),
      message: 'Поле должно быть URL',
    },
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: [true, 'Поле должно быть заполнено'],
  },
  likes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    default: [],
  }],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
}, { versionKey: false });

module.exports = mongoose.model('card', cardSchema);
