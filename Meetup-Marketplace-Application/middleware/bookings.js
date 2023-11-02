const { body, param, validationResult } = require('express-validator')
const { AuthUser } = require('../middleware/index')

const validateNewBookingInputs = [
    // validations
    // body().custom((value, { req }) => AuthUser(req)),
    body('payment').notEmpty().withMessage('Payment value not Found!')
        .isNumeric().withMessage('Payment value not Numeric!'),
    body('mentorEmail').notEmpty().withMessage('Mentor Email not Found!')
        .isEmail().withMessage('Mentor Email not valid!'),
    body('dateTime').notEmpty().withMessage('Time slot value not Found!')
        .toDate().custom((value) => {
            if (value.getMinutes() !== 0 || value.getSeconds() !== 0 || value.getMilliseconds() !== 0) {
                throw new Error('Time slot value is Invalid!')
            }
            else {
                return true
            }
        }),

    // handle validation errors
    (req, res, next) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
        next();
    }
]

const validateBookingInputs = [
    // validations
    body().custom((value, { req, res }) => VerifyToken(req, res)),
    param('id').notEmpty().withMessage('Booking ID not Found!'),
    body('user').notEmpty().withMessage('user not present!'),

    // handle validation errors
    (req, res, next) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
        next();
    }
]

const validateBookingApproveInputs = [
    // validation
    body().custom((value, { req, res }) => VerifyToken(req, res)),
    body('userEmail').notEmpty().withMessage('Mentor Email not Found!'),
    body('userEmail').isEmail().withMessage('Mentor Email not valid!'),
    body('dateTime').notEmpty().withMessage('Time slot value not Found!'),
    body('dateTime').toDate().custom((value) => {
        if (value.getMinutes() !== 0 || value.getSeconds() !== 0 || value.getMilliseconds() !== 0) {
            throw new Error('Time slot value is Invalid!')
        }
        else {
            return true
        }
    }),

    // handle validation errors
    (req, res, next) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
        next();
    }
]

const validateBookingRejectInputs = [
    body().custom((value, { req,res }) => AuthUser(req)),
    body('userEmail').notEmpty().withMessage('Mentor Email not Found!'),
    body('userEmail').isEmail().withMessage('Mentor Email not valid!'),
    body('dateTime').notEmpty().withMessage('Time slot value not Found!'),
    body('dateTime').toDate().custom((value) => {
        if (value.getMinutes() !== 0 || value.getSeconds() !== 0 || value.getMilliseconds() !== 0) {
            throw new Error('Time slot value is Invalid!')
        }
        else {
            return true
        }
    }),

    // handle validation errors
    (req, res, next) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
        next();
    }
]

const validateBookingsInputs = [
    //validations
    body().custom((value, { req, res }) => VerifyToken(req, res)),

    // handle validation errors
    (req, res, next) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
        next();
    }
]

module.exports = { validateBookingsInputs, validateBookingInputs, validateBookingApproveInputs, validateBookingRejectInputs, validateNewBookingInputs }
