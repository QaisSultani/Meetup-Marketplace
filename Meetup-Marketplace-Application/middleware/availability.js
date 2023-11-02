const { body, validationResult } = require('express-validator')
const { AuthUser } = require('../middleware/index')

const validateAvailabilityInputs = [
    // validation
    // body().custom((value, { req }) => AuthUser(req)),
    body('mentorEmail').notEmpty().withMessage('Mentor Email not Found!')
        .isEmail().withMessage('Mentor Email not valid!'),
    body('startDate').notEmpty().withMessage('Start Date not Found!')
    .isISO8601().withMessage('Start date not valid'),
    body('endDate').notEmpty().withMessage('End Date not Found!')
    .isISO8601().withMessage('End date not valid'),
    

    // handle validation errors
    (req, res, next) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
        next();
    }
]

module.exports = { validateAvailabilityInputs }