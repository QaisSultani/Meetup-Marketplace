const express = require('express');
const router = express.Router();
const { getCurrentAvailabilityByMentor } = require('../controller/availabilityController')
const { validateAvailabilityInputs } = require('../middleware/availability')

// router.get('/', validateAvailabilityInputs, availability)
router.get('/mentor/availability', getCurrentAvailabilityByMentor)

module.exports = router