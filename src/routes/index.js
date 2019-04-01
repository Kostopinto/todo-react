const combineRouters = require('koa-combine-routers');

const publicRoutes = require('./public');
const privateRoutes = require('./private');

module.exports = combineRouters(publicRoutes, privateRoutes);
