import React from "react";
import PropTypes from "prop-types";

import TodoInput from "./TodoInput/components";
import TodoList from "./TodoList";
import Login from "./Login/components";

const TodoApp = props => (
  <>
    {!props.token ? (
      <Login
        login={props.login}
        addToken={props.addToken}
        token={props.token}
      />
    ) : (
      <>
        <TodoInput addTask={props.addTask} />
        <TodoList
          todos={props.todos}
          deleteTask={props.deleteTask}
          editTask={props.editTask}
          saveEditTask={props.saveEditTask}
          completedTask={props.completedTask}
          getAllTodos={props.getAllTodos}
        />
      </>
    )}
  </>
);

TodoApp.propTypes = {
  addTask: PropTypes.func,
  todos: PropTypes.array,
  deleteTask: PropTypes.func,
  editTask: PropTypes.func,
  saveEditTask: PropTypes.func,
  completedTask: PropTypes.func,
  login: PropTypes.func,
  addToken: PropTypes.func,
  getAllTodos: PropTypes.func,
  token: PropTypes.string
};

export default TodoApp;
