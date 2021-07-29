const Router = require('express');
const router = new Router();
const userController = require('../controllers/userController');
const authMiddleware =require('../middleware/authMiddleware');

router.post('/registration', userController.registerUser);
router.post('/login', userController.login);
router.get('/auth', authMiddleware, userController.checkRegistration);

module.exports = router;