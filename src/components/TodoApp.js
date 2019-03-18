import React from "react";
import PropTypes from "prop-types";

import TodoInput from "./TodoInput";
import ListCreator from "./ListCreator/ListCreator";

class TodoApp extends React.Component {
  addTask = newTodoValue => {
    const newTODO = {
      description: newTodoValue,
      isEditing: false,
      isChecked: false
    };
    this.props.newTask(newTODO);
  };

  deleteTask = index => () => {
    this.props.removeTask(index);
  };

  onEdit = index => () => {
    this.props.editTask(index);
  };

  saveEdit = (editValue, index) => {
    this.props.saveEditTask(editValue, index);
  };

  onCompleted = index => () => {
    this.props.completedTask(index);
  };

  render() {
    return (
      <>
        <TodoInput addTask={this.addTask} />
        <ListCreator
          todos={this.props.todos}
          deleteTask={this.deleteTask}
          onEdit={this.onEdit}
          saveEdit={this.saveEdit}
          onCompleted={this.onCompleted}
        />
      </>
    );
  }
}

TodoApp.propTypes = {
  todos: PropTypes.array,
  newTask: PropTypes.func,
  removeTask: PropTypes.func,
  editTask: PropTypes.func,
  saveEditTask: PropTypes.func,
  completedTask: PropTypes.func
};

export default TodoApp;
