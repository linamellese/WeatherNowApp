const { body, query, param, validationResult } = require('express-validator');

// Validation rules
const validationRules = {
  cityParam: param('city')
    .isString()
    .trim()
    .notEmpty()
    .withMessage('City name is required')
    .isLength({ min: 2, max: 100 })
    .withMessage('City name must be between 2 and 100 characters'),

  unitQuery: query('unit')
    .optional()
    .isIn(['metric', 'imperial'])
    .withMessage('Unit must be either metric or imperial'),

  coordinatesQuery: [
    query('lat')
      .isFloat({ min: -90, max: 90 })
      .withMessage('Latitude must be between -90 and 90'),
    query('lon')
      .isFloat({ min: -180, max: 180 })
      .withMessage('Longitude must be between -180 and 180')
  ],

  searchQuery: query('query')
    .isString()
    .trim()
    .isLength({ min: 2 })
    .withMessage('Search query must be at least 2 characters long')
};

// Validation middleware
const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      status: 'error',
      errors: errors.array().map(err => ({
        field: err.param,
        message: err.msg
      }))
    });
  }
  next();
};

module.exports = {
  validationRules,
  validate
};