const Router = require('koa-router');

const loginRoutes = require('./login');

const router = Router();

router.post('/login', loginRoutes.login);

module.exports = router;
