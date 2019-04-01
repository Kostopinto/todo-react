import React from "react";
import PropTypes from "prop-types";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

import TodoItem from "./components/TodoItem";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
});

export class TodoList extends React.Component {
  componentDidMount() {
    this.props.getAllTodos();
  }

  render() {
    return (
      <div className="list">
        <Paper className={this.props.classes.root} elevation={0}>
          <Typography variant="h5" component="p" className="static">
            Your tasks today
          </Typography>
          <Typography component="div">
            {this.props.todos.map(item => (
              <TodoItem
                key={item.id}
                item={item}
                completedTask={this.props.completedTask}
                editTask={this.props.editTask}
                deleteTask={this.props.deleteTask}
                saveEditTask={this.props.saveEditTask}
              />
            ))}
          </Typography>
        </Paper>
      </div>
    );
  }
}

TodoList.propTypes = {
  todos: PropTypes.array,
  completedTask: PropTypes.func,
  editTask: PropTypes.func,
  deleteTask: PropTypes.func,
  saveEditTask: PropTypes.func,
  getAllTodos: PropTypes.func,
  classes: PropTypes.object,
  root: PropTypes.string
};

export default withStyles(styles)(TodoList);
