import React from "react";
import PropTypes from "prop-types";

import TodoInput from "./TodoInput";
import ListCreator from "./ListCreator";

class TodoApp extends React.Component {
  addTask = () => {
    const newTODO = {
      description: document.getElementById("new-task-input").value,
      isEditing: false,
      isChecked: false
    };
    this.props.newTask(newTODO);
    document.getElementById("new-task-input").value = "";
  };

  deleteTask = index => event => {
    event.stopPropagation();
    this.props.removeTask(index);
  };

  onEdit = index => event => {
    event.stopPropagation();
    this.props.editTask(index);
  };

  saveEdit = index => () => {
    const newValue = document.getElementById(index).value;
    this.props.saveEditTask(index, newValue);
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
