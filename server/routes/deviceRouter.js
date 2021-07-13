const Router = require('express');
const router = new Router();
const deviceController = require('../controllers/deviceController');

router.post('/', deviceController.addDevice);
router.get('/', deviceController.getAllDevices);
router.get('/:id', deviceController.getOneDevices);
router.delete('/:id', deviceController.deleteDevice);

module.exports = router;