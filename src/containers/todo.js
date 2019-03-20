import { connect } from "react-redux";

import TodoApp from "../components/TodoApp";
import {
  addTask,
  deleteTask,
  editTask,
  completedTask,
  saveEditTask
} from "../actions/todo";

const mapStateToProps = state => {
  return {
    todos: state.todo.todos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addTask: newTodoValue => dispatch(addTask(newTodoValue)),
    deleteTask: index => dispatch(deleteTask(index)),
    editTask: index => dispatch(editTask(index)),
    completedTask: index => dispatch(completedTask(index)),
    saveEditTask: (editValue, index) => dispatch(saveEditTask(editValue, index))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoApp);
