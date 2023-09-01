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

router.get('/users/', getUsers);
router.get('/users/:userId', getUserById);
router.patch('/users/me', updateUser);
router.patch('/users/me/avatar', updateUserAvatar);

module.exports = router;
