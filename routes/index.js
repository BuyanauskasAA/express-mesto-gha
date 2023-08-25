const router = require('express').Router();
const usersRouter = require('./users');
const cardsRouter = require('./cards');

router.use('*', (req, res) => {
  res.status(404).send({ message: 'Wrong URL request to server' });
});

router.use('/users', usersRouter);
router.use('/cards', cardsRouter);

module.exports = router;
