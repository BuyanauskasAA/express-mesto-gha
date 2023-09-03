const BadRequestError = require('./bad-request-err');
const ConflictError = require('./conflict-err');
const ForbiddenError = require('./forbidden-err');
const NotFoundError = require('./not-found-err');
const UnauthorizedError = require('./unauthorized-err');

module.exports = {
  BadRequestError,
  ConflictError,
  ForbiddenError,
  NotFoundError,
  UnauthorizedError,
};
