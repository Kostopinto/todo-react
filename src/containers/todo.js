import { connect } from "react-redux";

import TodoApp from "../components/TodoApp";
import {
  addTask,
  deleteTask,
  editTask,
  completedTask,
  saveEditTask
} from "../actions/todo";

const mapStateToProps = state => ({
  todos: state.todo.todos
});

const mapDispatchToProps = {
  addTask,
  deleteTask,
  editTask,
  completedTask,
  saveEditTask
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoApp);
