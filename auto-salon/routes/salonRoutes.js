const express = require('express');
const router = express.Router();

const controller = require('../controllers/salonController');

router.get('/', controller.getHomePage);

router.get('/brands', controller.getBrands);
router.get('/configurations', controller.getConfigurations);
router.get('/clients', controller.getClients);
router.get('/sales', controller.getSales);
router.get('/options', controller.getOptions);

// Форма редагування
router.get('/:type/edit/:id', controller.getEditForm);

// Збереження змін
router.post('/:type/edit/:id', controller.updateItem);

module.exports = router;