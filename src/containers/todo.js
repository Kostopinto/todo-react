import { connect } from "react-redux";

import TodoApp from "../components/TodoApp";
import {
  addTask,
  deleteTask,
  editTask,
  completedTask,
  saveEditTask,
  login,
  loginUser,
  addToken,
  getAllTodos,
  getAll,
  addTaskBack,
  deleteTaskBack,
  editTaskBack,
  completedTaskBack,
  saveEditTaskBack
} from "../actions/todo";

const mapStateToProps = state => ({
  todos: state.todo.todos,
  token: state.todo.token
});

const mapDispatchToProps = dispatch => {
  return {
    login: payload => dispatch(loginUser(payload)),
    addToken: payload => dispatch(addToken(payload)),
    getAllTodos: () => dispatch(getAll()),
    addTask: payload => dispatch(addTaskBack(payload)),
    deleteTask: payload => dispatch(deleteTaskBack(payload)),
    editTask: payload => dispatch(editTaskBack(payload)),
    completedTask: payload => dispatch(completedTaskBack(payload)),
    saveEditTask: payload => dispatch(saveEditTaskBack(payload))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoApp);
