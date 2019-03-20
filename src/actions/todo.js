import {
  ADD_TASK,
  DELETE_TASK,
  EDIT_TASK,
  COMPLETED_TASK,
  SAVE_EDIT_TASK
} from "./actionTypes";

export const addTask = newTodoValue => ({ type: ADD_TASK, newTodoValue });

export const deleteTask = index => ({ type: DELETE_TASK, index });

export const editTask = index => ({ type: EDIT_TASK, index });

export const completedTask = index => ({ type: COMPLETED_TASK, index });

export const saveEditTask = (editValue, index) => ({
  type: SAVE_EDIT_TASK,
  editValue,
  index
});
