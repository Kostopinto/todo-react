// eslint-disable-next-line
let id = 0;

const db = {
  todos: [
    {
      id: (id += 1),
      description: "test 1",
      isChecked: false,
      isEditing: false
    },
    {
      id: (id += 1),
      description: "test 2",
      isChecked: false,
      isEditing: false
    }
  ]
};

const getAllTodos = async (ctx, next) => {
  ctx.set("Content-Type", "application/json");
  ctx.body = db.todos;
  await next();
};

const addTodos = async (ctx, next) => {
  ctx.set("Content-Type", "application/json");
  await next();
  try {
    const task = ctx.request.body;
    // eslint-disable-next-line no-multi-assign
    task.id = id += 1;
    db.todos.push(task);
    ctx.body = JSON.stringify(task);
  } catch (err) {
    ctx.status = err.statusCode || err.status || 500;
    ctx.body = {
      message: err.message
    };
  }
};

const deleteTodos = async (ctx, next) => {
  ctx.set("Content-Type", "application/json");
  await next();
  try {
    const afterDelete = db.todos.filter(
      item => item.id !== parseInt(ctx.params.id, 10)
    );
    const deleteItem = db.todos.find(
      item => item.id === parseInt(ctx.params.id, 10)
    );
    db.todos.splice(0, db.todos.length, ...afterDelete);
    ctx.body = JSON.stringify(deleteItem);
  } catch (err) {
    ctx.status = err.statusCode || err.status || 500;
    ctx.body = {
      message: err.message
    };
  }
};

const editInputTodo = async (ctx, next) => {
  ctx.set("Content-Type", "application/json");
  await next();
  try {
    const currentItem = db.todos.find(
      el => el.id === parseInt(ctx.params.id, 10)
    );
    currentItem.isEditing = !currentItem.isEditing;
    ctx.body = currentItem;
  } catch (err) {
    ctx.status = err.statusCode || err.status || 500;
    ctx.body = {
      message: err.message
    };
  }
};

const editTodoSave = async (ctx, next) => {
  ctx.set("Content-Type", "application/json");
  await next();
  try {
    const currentItem = db.todos.find(
      el => el.id === parseInt(ctx.params.id, 10)
    );
    currentItem.description = ctx.request.body.editValue;
    currentItem.isEditing = !currentItem.isEditing;
    ctx.body = currentItem;
  } catch (err) {
    ctx.status = err.statusCode || err.status || 500;
    ctx.body = {
      message: err.message
    };
  }
};

const editTodoCancel = async (ctx, next) => {
  ctx.set("Content-Type", "application/json");
  await next();
  try {
    const afterDelete = db.ui.filter(
      item => item.id !== parseInt(ctx.params.id, 10)
    );
    const deleteItem = db.ui.find(
      item => item.id === parseInt(ctx.params.id, 10)
    );
    db.ui.splice(0, db.ui.length, ...afterDelete);
    ctx.body = JSON.stringify(deleteItem);
  } catch (err) {
    ctx.status = err.statusCode || err.status || 500;
    ctx.body = {
      message: err.message
    };
  }
};

const completedTodo = async (ctx, next) => {
  ctx.set("Content-Type", "application/json");
  await next();
  try {
    const currentItem = db.todos.find(
      el => el.id === parseInt(ctx.params.id, 10)
    );
    currentItem.isChecked = !currentItem.isChecked;
    ctx.body = currentItem;
  } catch (err) {
    ctx.status = err.statusCode || err.status || 500;
    ctx.body = {
      message: err.message
    };
  }
};

module.exports = {
  getAllTodos,
  addTodos,
  deleteTodos,
  editInputTodo,
  editTodoSave,
  editTodoCancel,
  completedTodo
};
