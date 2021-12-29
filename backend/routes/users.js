const router = require('express').Router();

const {
  getUsers, getUserById, updateUser, updateAvatar, getCurrentUser,
} = require('../controllers/users');

const { userAboutValidation, avatarValidation, idValidation } = require('../middlewares/validate');

router.get('/users', getUsers);
router.get('/users/me', idValidation, getCurrentUser);
router.get('/users/:Id', idValidation, getUserById);
router.patch('/users/me', userAboutValidation, updateUser);
router.patch('/users/me/avatar', avatarValidation, updateAvatar);

module.exports = router;
