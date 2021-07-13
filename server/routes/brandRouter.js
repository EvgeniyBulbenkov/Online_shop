const Router = require('express');
const router = new Router();
const brandController = require('../controllers/brandController');

router.post('/', brandController.addBrand);
router.get('/', brandController.getBrand);
router.delete('/', brandController.deleteBrand);

module.exports = router;