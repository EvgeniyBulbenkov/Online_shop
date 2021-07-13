const Router = require('express');
const router = new Router();
const userController = require('../controllers/userController');

router.post('/registration', userController.registerUser);
router.post('/login', userController.login);
router.get('/auth', userController.checkRegistration);

module.exports = router;