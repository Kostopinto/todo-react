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
        description: action.payload,
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
        todos: state.todos.filter((item, index) => index !== action.payload)
      };

    case EDIT_TASK:
      return {
        ...state,
        todos: state.todos.map((item, index) =>
          index === action.payload
            ? { ...item, isEditing: !item.isEditing }
            : item
        )
      };

    case COMPLETED_TASK:
      return {
        ...state,
        todos: state.todos.map((item, index) =>
          index === action.payload
            ? { ...item, isChecked: !item.isChecked }
            : item
        )
      };

    case SAVE_EDIT_TASK:
      return {
        ...state,
        todos: state.todos.map((item, index) =>
          index === action.payload.index
            ? {
                ...item,
                isEditing: !item.isEditing,
                description: action.payload.editValue
              }
            : item
        )
      };
    default:
      return state;
  }
};
