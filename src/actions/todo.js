import {
  ADD_TASK,
  DELETE_TASK,
  EDIT_TASK,
  COMPLETED_TASK,
  SAVE_EDIT_TASK,
  LOGIN,
  ADD_TOKEN,
  GET_ALL_TODOS,
  GET_TODOS_BACK
} from "./actionTypes";

export const addTask = newTodoValue => ({
  type: ADD_TASK,
  payload: newTodoValue
});

export const deleteTask = id => ({ type: DELETE_TASK, payload: id });

export const editTask = id => ({ type: EDIT_TASK, payload: id });

export const completedTask = id => ({
  type: COMPLETED_TASK,
  payload: id
});

export const saveEditTask = (editValue, id) => ({
  type: SAVE_EDIT_TASK,
  payload: {
    editValue,
    id
  }
});

export const login = (login, password) => ({
  type: LOGIN,
  payload: {
    login,
    password
  }
});

export const addToken = token => ({
  type: ADD_TOKEN,
  payload: token
});

export const getAllTodos = () => ({
  type: GET_ALL_TODOS
});

export const getTodosBack = res => ({
  type: GET_TODOS_BACK,
  payload: res
});

export function loginUser(payload) {
  console.log("local", localStorage);
  return dispatch => {
    return fetch(`http://localhost:3000/login`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify({
        login: payload.inputValueLogin,
        password: payload.inputValuePass
      })
    })
      .then(res => res.json())
      .then(res => {
        if (res.status === 200) {
          localStorage.setItem("token", res.token);
          dispatch(addToken(res.token));
        } else {
          console.log("error", res.status);
        }
      });
  };
}

export function getAll() {
  return dispatch => {
    return fetch(`http://localhost:3000/todos/all`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`
      },
      method: "GET"
    })
      .then(res => res.json())
      .then(res => {
        dispatch(getTodosBack(res));
      });
  };
}

export function addTaskBack(payload) {
  return dispatch => {
    return fetch(`http://localhost:3000/todos/addTask`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`
      },
      method: "POST",
      body: JSON.stringify({
        description: payload,
        isEditing: false,
        isChecked: false
      })
    })
      .then(res => res.json())
      .then(res => {
        dispatch(addTask(res));
      });
  };
}

export function deleteTaskBack(payload) {
  return dispatch => {
    return fetch(`http://localhost:3000/todos/${payload}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`
      },
      method: "DELETE"
    })
      .then(res => res.json())
      .then(res => {
        dispatch(deleteTask(payload));
      });
  };
}

export function editTaskBack(payload) {
  return dispatch => {
    return fetch(`http://localhost:3000/todos/${payload}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`
      },
      method: "PUT"
    })
      .then(res => res.json())
      .then(res => {
        dispatch(editTask(res));
      });
  };
}

export function completedTaskBack(payload) {
  return dispatch => {
    return fetch(`http://localhost:3000/todos/checkTodos/${payload}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`
      },
      method: "PUT"
    })
      .then(res => res.json())
      .then(res => {
        dispatch(completedTask(res));
      });
  };
}

export function saveEditTaskBack(payload) {
  return dispatch => {
    return fetch(`http://localhost:3000/todos/saveTodos/${payload.id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`
      },
      method: "PUT",
      body: JSON.stringify({
        editValue: payload.editValue
      })
    })
      .then(res => res.json())
      .then(res => {
        dispatch(saveEditTask(payload.editValue, payload.id));
      });
  };
}
