const router = require('express').Router();
const auth = require('../middlewares/auth');
const usersRouter = require('./users');
const cardsRouter = require('./cards');
const authRouter = require('./auth');

router.use('/', authRouter);
router.use('/users', auth, usersRouter);
router.use('/cards', auth, cardsRouter);

router.use('*', (req, res) => {
  res.status(404).send({ message: 'Неверный URL запроса к серверу' });
});

module.exports = router;
