import {
  ADD_TASK,
  DELETE_TASK,
  EDIT_TASK,
  COMPLETED_TASK,
  SAVE_EDIT_TASK
} from "./actionTypes";

export const addTask = newTodoValue => ({
  type: ADD_TASK,
  payload: newTodoValue
});

export const deleteTask = index => ({ type: DELETE_TASK, payload: index });

export const editTask = index => ({ type: EDIT_TASK, payload: index });

export const completedTask = index => ({
  type: COMPLETED_TASK,
  payload: index
});

export const saveEditTask = (editValue, index) => ({
  type: SAVE_EDIT_TASK,
  payload: {
    editValue,
    index
  }
});
