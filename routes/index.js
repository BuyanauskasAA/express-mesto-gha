const router = require('express').Router();
const usersRouter = require('./users');
const cardsRouter = require('./cards');

router.use('/', usersRouter);
router.use('/cards', cardsRouter);
router.use('*', (req, res) => {
  res.status(404).send({ message: 'Неверный URL запроса к серверу' });
});

module.exports = router;
