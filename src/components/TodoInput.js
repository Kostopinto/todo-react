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
  render() {
    return (
      <div className="todo-input">
        <TextField
          id="new-task-input"
          label="Task"
          className={styles.textField}
          margin="normal"
          variant="outlined"
        />
        <Fab color="primary" className={styles.fab}>
          <AddIcon onClick={this.props.addTask} />
        </Fab>
      </div>
    );
  }
}

TodoInput.propTypes = {
  addTask: PropTypes.func
};

export default TodoInput;
