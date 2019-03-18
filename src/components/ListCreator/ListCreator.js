import React from "react";
import PropTypes from "prop-types";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import DefaultList from "./DefaultList";
import EditList from "./EditList";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
});

class ListCreator extends React.Component {
  render() {
    return (
      <div className="list">
        <Paper className={styles.root} elevation={0}>
          <Typography variant="h5" component="p" className="static">
            Your tasks today
          </Typography>
          <Typography component="div">
            {this.props.todos.map((item, index) =>
              !item.isEditing ? (
                <DefaultList
                  onCompleted={this.props.onCompleted}
                  onEdit={this.props.onEdit}
                  deleteTask={this.props.deleteTask}
                  item={item}
                  index={index}
                  key={index}
                />
              ) : (
                <EditList
                  saveEdit={this.props.saveEdit}
                  onEdit={this.props.onEdit}
                  item={item}
                  index={index}
                  key={index}
                />
              )
            )}
          </Typography>
        </Paper>
      </div>
    );
  }
}

ListCreator.propTypes = {
  todos: PropTypes.array,
  onCompleted: PropTypes.func,
  onEdit: PropTypes.func,
  deleteTask: PropTypes.func,
  saveEdit: PropTypes.func
};

export default ListCreator;
