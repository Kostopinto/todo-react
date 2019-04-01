const Koa = require("koa");
const logger = require("koa-logger");
const bodyParser = require("koa-bodyparser");
const koaBody = require("koa-body");
const cors = require("koa2-cors");

const routes = require("./routes");

const app = new Koa();

app.use(cors());

app.use(async (ctx, next) => {
  // eslint-disable-next-line
  const db = {
    todos: [],
    users: [
      { login: "user", password: "password" },
      { login: "DarthVader", password: "yoda" },
      { login: "1", password: "1" }
    ]
  };

  ctx.state.db = db;

  await next();
});

app.use(logger());

app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.status = err.status || 500;
    ctx.body = err.message;
    ctx.app.emit("error", err, ctx);
  }
});

app.use(koaBody());
app.use(bodyParser());

app.use(routes());

app.listen(3000);
