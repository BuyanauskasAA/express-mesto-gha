const router = require('express').Router();
const {
  createUser,
  login,
  getUsers,
  getUserById,
  updateUser,
  updateUserAvatar,
} = require('../controllers/users');
const auth = require('../middlewares/auth');

router.post('/signup', createUser);
router.post('/signin', login);

router.use(auth);

router.get('/', getUsers);
router.get('/:userId', getUserById);
router.patch('/me', updateUser);
router.patch('/me/avatar', updateUserAvatar);

module.exports = router;
