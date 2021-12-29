const jwt = require('jsonwebtoken');
const { AuthError } = require('../errors/AuthError');

const auth = (req, res, next) => {
  const authorization = req.headers.cookie;

  if (!authorization || !authorization.startsWith('jwt=')) {
    throw new AuthError('Необходима авторизация');
  }

  const token = authorization.replace('jwt=', '');
  let payload;

  try {
    payload = jwt.verify(token, 'secret-key');
  } catch (err) {
    throw new AuthError('Необходима авторизация');
  }
  req.user = payload;

  next();
};

module.exports = auth;
