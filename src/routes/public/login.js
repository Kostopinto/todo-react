const jwt = require('jsonwebtoken');

const config = require('../../config');

const login = async (ctx) => {
  ctx.set('Content-Type', 'application/json');
  try {
    const user = ctx.state.db.users.find(item => item.login === ctx.request.body.login);
    if (!user || user.password !== ctx.request.body.password) {
      ctx.body = {
        message: 'Authentication error',
        status: 400,
      };
    } else {
      ctx.body = {
        token: jwt.sign(user, config.jwt.secret, {
          algorithm: 'HS256',
        }),
status: 200,
        message: 'Success',
      };
    }
  } catch (err) {
    ctx.status = err.statusCode || err.status || 500;
    ctx.body = {
      message: err.message,
    };
  }
};

module.exports = {
  login,
};
