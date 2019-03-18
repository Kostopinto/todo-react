import React from "react";
import PropTypes from "prop-types";

class DefaultList extends React.Component {
  render() {
    const { index, item, onCompleted, onEdit, deleteTask } = this.props;
    return (
      <div className="list-item">
        {!item.isChecked ? (
          <div onClick={onCompleted(index)}>{item.description}</div>
        ) : (
          <div className="completed" onClick={onCompleted(index)}>
            {item.description}
          </div>
        )}
        <div>
          <i className="material-icons" onClick={onEdit(index)}>
            build
          </i>
          <i className="material-icons" onClick={deleteTask(index)}>
            delete
          </i>
        </div>
      </div>
    );
  }
}

DefaultList.propTypes = {
  index: PropTypes.number,
  item: PropTypes.object,
  onCompleted: PropTypes.func,
  onEdit: PropTypes.func,
  deleteTask: PropTypes.func
};

export default DefaultList;
