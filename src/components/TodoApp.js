import React from "react";
import PropTypes from "prop-types";

import TodoInput from "./TodoInput/components";
import TodoList from "./TodoList";

const TodoApp = props => (
  <>
    <TodoInput addTask={props.addTask} />
    <TodoList
      todos={props.todos}
      deleteTask={props.deleteTask}
      editTask={props.editTask}
      saveEditTask={props.saveEditTask}
      completedTask={props.completedTask}
    />
  </>
);

TodoApp.propTypes = {
  addTask: PropTypes.func,
  todos: PropTypes.array,
  deleteTask: PropTypes.func,
  editTask: PropTypes.func,
  saveEditTask: PropTypes.func,
  completedTask: PropTypes.func
};

export default TodoApp;
