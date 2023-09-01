const router = require('express').Router();
const auth = require('../middlewares/auth');
const usersRouter = require('./users');
const cardsRouter = require('./cards');
const authRouter = require('./auth');

router.use('/', authRouter);

router.use(auth);

router.use('/users', usersRouter);
router.use('/cards', cardsRouter);

router.use('*', (req, res) => {
  res.status(404).send({ message: 'Неверный URL запроса к серверу' });
});

module.exports = router;
