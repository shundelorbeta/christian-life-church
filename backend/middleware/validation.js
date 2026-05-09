// Validation middleware
const { body, validationResult } = require('express-validator');

const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      message: 'Validation failed',
      errors: errors.array()
    });
  }
  next();
};

const validateContactForm = [
  body('name').trim().isLength({ min: 2 }).withMessage('Name must be at least 2 characters'),
  body('email').isEmail().withMessage('Please provide a valid email'),
  body('message').trim().isLength({ min: 10 }).withMessage('Message must be at least 10 characters'),
  handleValidationErrors
];

const validateEventRegistration = [
  body('name').trim().isLength({ min: 2 }).withMessage('Name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('phone').optional().isMobilePhone().withMessage('Valid phone number required'),
  body('eventId').isMongoId().withMessage('Valid event ID required'),
  handleValidationErrors
];

const validateVolunteerApplication = [
  body('name').trim().isLength({ min: 2 }).withMessage('Name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('skills').optional().isArray().withMessage('Skills must be an array'),
  handleValidationErrors
];

const validatePrayerRequest = [
  body('message').trim().isLength({ min: 10 }).withMessage('Prayer request must be at least 10 characters'),
  body('anonymous').optional().isBoolean().withMessage('Anonymous must be true or false'),
  handleValidationErrors
];

module.exports = {
  validateContactForm,
  validateEventRegistration,
  validateVolunteerApplication,
  validatePrayerRequest,
  handleValidationErrors
};