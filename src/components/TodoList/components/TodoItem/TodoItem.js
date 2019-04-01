import React from "react";
import PropTypes from "prop-types";

import Item from "./components/Item/";
import EditItem from "./components/EditItem/";

const TodoItem = props =>
  !props.item.isEditing ? (
    <Item
      completedTask={props.completedTask}
      editTask={props.editTask}
      deleteTask={props.deleteTask}
      item={props.item}
    />
  ) : (
    <EditItem
      saveEditTask={props.saveEditTask}
      editTask={props.editTask}
      item={props.item}
    />
  );

TodoItem.propTypes = {
  item: PropTypes.object,
  completedTask: PropTypes.func,
  editTask: PropTypes.func,
  deleteTask: PropTypes.func,
  saveEditTask: PropTypes.func
};

export default TodoItem;
