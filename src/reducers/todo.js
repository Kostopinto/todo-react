import {
  ADD_TASK,
  DELETE_TASK,
  EDIT_TASK,
  COMPLETED_TASK,
  SAVE_EDIT_TASK,
  LOGIN,
  ADD_TOKEN,
  GET_TODOS_BACK
} from "../actions/actionTypes";

const initialState = {
  todos: [],
  token: localStorage.getItem("token")
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };

    case ADD_TOKEN:
      return {
        ...state,
        token: action.payload
      };

    case DELETE_TASK:
      return {
        ...state,
        todos: state.todos.filter(item => item.id !== action.payload)
      };

    case EDIT_TASK:
      return {
        ...state,
        todos: state.todos.map(item =>
          item.id === action.payload.id
            ? { ...item, isEditing: !item.isEditing }
            : item
        )
      };

    case COMPLETED_TASK:
      return {
        ...state,
        todos: state.todos.map(item =>
          item.id === action.payload.id
            ? { ...item, isChecked: !item.isChecked }
            : item
        )
      };

    case SAVE_EDIT_TASK:
      return {
        ...state,
        todos: state.todos.map(item =>
          item.id === action.payload.id
            ? {
                ...item,
                isEditing: !item.isEditing,
                description: action.payload.editValue
              }
            : item
        )
      };

    case GET_TODOS_BACK:
      return {
        ...state,
        todos: [...state.todos, ...action.payload]
      };

    default:
      return state;
  }
};
