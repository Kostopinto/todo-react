import React from "react";
import PropTypes from "prop-types";

class Item extends React.Component {
  render() {
    const { index, item, completedTask, editTask, deleteTask } = this.props;
    return (
      <div className="list-item">
        {!item.isChecked ? (
          <div onClick={() => completedTask(index)}>{item.description}</div>
        ) : (
          <div className="completed" onClick={() => completedTask(index)}>
            {item.description}
          </div>
        )}
        <div>
          <i className="material-icons" onClick={() => editTask(index)}>
            build
          </i>
          <i className="material-icons" onClick={() => deleteTask(index)}>
            delete
          </i>
        </div>
      </div>
    );
  }
}

Item.propTypes = {
  index: PropTypes.number,
  item: PropTypes.object,
  completedTask: PropTypes.func,
  editTask: PropTypes.func,
  deleteTask: PropTypes.func
};

export default Item;
