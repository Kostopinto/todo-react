const Router = require("koa-router");
const jwt = require("koa-jwt");

const todoRoutes = require("./todos");

const config = require("../../config");

const router = new Router({
  prefix: "/todos"
});

router.use(jwt(config.jwt));
router.get("/all", todoRoutes.getAllTodos);
router.post("/addTask", todoRoutes.addTodos);
router.delete("/:id", todoRoutes.deleteTodos);
router.put("/:id", todoRoutes.editInputTodo);
router.put("/saveTodos/:id", todoRoutes.editTodoSave);
router.delete("/uiTodos/:id", todoRoutes.editTodoCancel);
router.put("/checkTodos/:id", todoRoutes.completedTodo);

module.exports = router;
