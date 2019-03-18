import React from "react";

import TodoApp from "./components/TodoApp";

import "./styles/App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          description: "kotelva",
          isEditing: false,
          isChecked: false
        }
      ]
    };
  }

  newTask = newTODO => {
    this.setState({ todos: [...this.state.todos, newTODO] });
  };

  removeTask = index => {
    const newarr = [...this.state.todos];
    newarr.splice(index, 1);
    this.setState({ todos: newarr });
  };

  editTask = index => {
    const newarr = [...this.state.todos];
    !newarr[index].isEditing
      ? (newarr[index].isEditing = true)
      : (newarr[index].isEditing = false);
    this.setState({ todos: newarr });
  };

  saveEditTask = (index, newValue) => {
    const newarr = [...this.state.todos];
    newarr[index].description = newValue;
    newarr[index].isEditing = false;
    this.setState({ todos: newarr });
  };

  completedTask = index => {
    const newarr = [...this.state.todos];
    !newarr[index].isChecked
      ? (newarr[index].isChecked = true)
      : (newarr[index].isChecked = false);
    this.setState({ todos: newarr });
  };

  render() {
    return (
      <div>
        <h1>My React App!</h1>
        <TodoApp
          todos={this.state.todos}
          newTask={this.newTask}
          removeTask={this.removeTask}
          editTask={this.editTask}
          saveEditTask={this.saveEditTask}
          completedTask={this.completedTask}
        />
      </div>
    );
  }
}

export default App;
