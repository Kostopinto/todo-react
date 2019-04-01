import React from "react";
import PropTypes from "prop-types";

class Item extends React.Component {
  render() {
    const { item, completedTask, editTask, deleteTask } = this.props;
    return (
      <div className="list-item">
        {!item.isChecked ? (
          <div onClick={() => completedTask(item.id)}>{item.description}</div>
        ) : (
          <div className="completed" onClick={() => completedTask(item.id)}>
            {item.description}
          </div>
        )}
        <div>
          <i className="material-icons" onClick={() => editTask(item.id)}>
            build
          </i>
          <i className="material-icons" onClick={() => deleteTask(item.id)}>
            delete
          </i>
        </div>
      </div>
    );
  }
}

Item.propTypes = {
  item: PropTypes.object,
  completedTask: PropTypes.func,
  editTask: PropTypes.func,
  deleteTask: PropTypes.func
};

export default Item;
