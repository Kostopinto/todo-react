import React from "react";
import PropTypes from "prop-types";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

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
                <div
                  className="list-item"
                  key={index}
                  onClick={this.props.onCompleted(index)}
                >
                  {!item.isChecked ? (
                    <div>{item.description}</div>
                  ) : (
                    <div className="completed">{item.description}</div>
                  )}
                  <div>
                    <i
                      className="material-icons"
                      onClick={this.props.onEdit(index)}
                    >
                      build
                    </i>
                    <i
                      className="material-icons"
                      onClick={this.props.deleteTask(index)}
                    >
                      delete
                    </i>
                  </div>
                </div>
              ) : (
                <div key={index} className="on-edit">
                  <input
                    id={index}
                    className="list-item"
                    defaultValue={item.description}
                  />
                  <div>
                    <i
                      className="material-icons"
                      onClick={this.props.saveEdit(index)}
                    >
                      cached
                    </i>
                    <i
                      className="material-icons"
                      onClick={this.props.onEdit(index)}
                    >
                      power_settings_new
                    </i>
                  </div>
                </div>
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
