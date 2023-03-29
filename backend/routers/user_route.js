const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user_ctrl');

router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);
router.get('/', userCtrl.findAll);
router.delete('/:id', userCtrl.deleteUser);

module.exports = router;