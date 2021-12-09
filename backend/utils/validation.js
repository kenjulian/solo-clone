// backend/utils/validation.js
const { check, validationResult } = require('express-validator');

// middleware for formatting errors from express-validator middleware

const handleValidationErrors = (req, _res, next) => {
  const validationErrors = validationResult(req);

  if (!validationErrors.isEmpty()) {
    const errors = validationErrors
      .array()
      .map((error) => `${error.msg}`);

    const err = Error('Bad request.');
    err.errors = errors;
    err.status = 400;
    err.title = 'Bad request.';
    next(err);
  }
  next();
};

//validates input data for posting a song
const validatePostInput = [
  check("songUrl")
  .exists({ checkFalsy: true })
  .isURL()
  .withMessage("The url for this file does not exist."),
  check("picUrl")
  .exists({ checkFalsy: true })
  .isURL()
  .withMessage('Please provide a valid image url to finish uploading.'),
  check("title")
  .exists({ checkFalsy: true })
  .not()
  .withMessage("Please provide a title."),
  handleValidationErrors
];
module.exports = {
  handleValidationErrors,
  validatePostInput
};