import React from "react";
import PropTypes from "prop-types";

import TextField from "@material-ui/core/TextField";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  fab: {
    margin: theme.spacing.unit * 2
  }
});

class TodoInput extends React.Component {
  state = {
    inputValue: ""
  };

  changeInputLocal = event => {
    const { value } = event.target;
    this.setState({ inputValue: value });
  };

  addTask = () => {
    this.props.addTask(this.state.inputValue);
    this.setState({ inputValue: "" });
  };

  render() {
    return (
      <div className="todo-input">
        <TextField
          id="new-task-input"
          label="Task"
          className={styles.textField}
          margin="normal"
          variant="outlined"
          onChange={this.changeInputLocal}
          value={this.state.inputValue}
          onKeyPress={event => {
            if (event.key === "Enter") {
              this.addTask();
            }
          }}
        />
        <Fab
          color="primary"
          className={styles.fab}
          disabled={this.state.inputValue === ""}
        >
          <AddIcon onClick={this.addTask} />
        </Fab>
      </div>
    );
  }
}

TodoInput.propTypes = {
  addTask: PropTypes.func
};

export default TodoInput;
