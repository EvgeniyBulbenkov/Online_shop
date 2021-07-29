const Router = require('express');
const router = new Router();
const typeController = require('../controllers/typeController');
const checkRole = require('../middleware/checkRoleMiddleware');

router.post('/', checkRole('ADMIN'), typeController.addType);
router.get('/', typeController.getAllTypes);
router.delete('/', checkRole('ADMIN'), typeController.deleteType);

module.exports = router;