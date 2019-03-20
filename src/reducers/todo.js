import {
  ADD_TASK,
  DELETE_TASK,
  EDIT_TASK,
  COMPLETED_TASK,
  SAVE_EDIT_TASK
} from "../actions/actionTypes";

const initialState = {
  todos: [
    {
      description: "kotelvaaaa",
      isEditing: false,
      isChecked: false
    }
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      const newTODO = {
        description: action.newTodoValue,
        isEditing: false,
        isChecked: false
      };
      return {
        ...state,
        todos: [...state.todos, newTODO]
      };

    case DELETE_TASK:
      return {
        ...state,
        todos: state.todos.filter((item, index) => index !== action.index)
      };

    case EDIT_TASK:
      const editItem = state.todos[action.index];
      return {
        ...state,
        todos: [...state.todos],
        editItem: (editItem.isEditing = !editItem.isEditing)
      };

    case COMPLETED_TASK:
      const complitedItem = state.todos[action.index];
      return {
        ...state,
        todos: [...state.todos],
        complitedItem: (complitedItem.isChecked = !complitedItem.isChecked)
      };

    case SAVE_EDIT_TASK:
      const saveEditItem = state.todos[action.index];
      return {
        ...state,
        todos: [...state.todos],
        saveEditItem: ((saveEditItem.isEditing = !saveEditItem.isEditing),
        (saveEditItem.description = action.editValue))
      };

    default:
      return state;
  }
};
