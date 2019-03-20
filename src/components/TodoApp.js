import React from "react";
import PropTypes from "prop-types";

import TodoInput from "./TodoInput";
import ListCreator from "./ListCreator/ListCreator";

class TodoApp extends React.Component {
  render() {
    return (
      <>
        <TodoInput addTask={this.props.addTask} />
        <ListCreator
          todos={this.props.todos}
          deleteTask={this.props.deleteTask}
          editTask={this.props.editTask}
          saveEditTask={this.props.saveEditTask}
          completedTask={this.props.completedTask}
        />
      </>
    );
  }
}

TodoApp.propTypes = {
  addTask: PropTypes.func,
  todos: PropTypes.array,
  deleteTask: PropTypes.func,
  editTask: PropTypes.func,
  saveEditTask: PropTypes.func,
  completedTask: PropTypes.func
};

export default TodoApp;
