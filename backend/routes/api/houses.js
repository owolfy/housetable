const express = require('express');
const { validateHouseInput } = require('../../middlewares/validators');
const houseController = require('../../controllers/houses-controller');
const router = express.Router();

router.post('/', validateHouseInput, houseController.createHouse);
router.get('/:id', houseController.getHouseById);
router.put('/:id', validateHouseInput, houseController.updateHouse);

module.exports = router;
