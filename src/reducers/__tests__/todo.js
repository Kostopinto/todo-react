import todo from "../todo";

import {
  ADD_TASK,
  DELETE_TASK,
  EDIT_TASK,
  COMPLETED_TASK,
  SAVE_EDIT_TASK
} from "../../actions/actionTypes";

const mockState = {
  todos: [
    {
      description: "kotelvaaaa",
      isEditing: false,
      isChecked: false
    },
    {
      description: "poltavvaaa",
      isEditing: false,
      isChecked: false
    }
  ]
};

describe("todo reducer", () => {
  describe(`Handle  ${ADD_TASK} action correctly`, () => {
    it(`When add new task`, () => {
      const prevState = mockState;
      const newTodoValue = "test2";
      const testItem = {
        description: newTodoValue,
        isEditing: false,
        isChecked: false
      };
      const expectedState = { todos: [...mockState.todos, testItem] };
      const actualState = todo(prevState, {
        type: ADD_TASK,
        newTodoValue
      });
      expect(actualState).toEqual(expectedState);
    });
  });

  describe(`Handle ${DELETE_TASK} action correctly`, () => {
    it(`When delete task`, () => {
      const prevState = mockState;
      const index = 0;
      const expectedState = {
        ...mockState,
        todos: mockState.todos.filter((item, arrIndexx) => arrIndexx !== index)
      };
      const actualState = todo(prevState, {
        type: DELETE_TASK,
        index
      });
      expect(actualState).toEqual(expectedState);
    });
  });

  describe(`Handle ${EDIT_TASK} action correctly`, () => {
    it(`When edit task`, () => {
      const mockStateEdit = {
        todos: [
          {
            description: "kotelvaaaa",
            isEditing: false,
            isChecked: false
          },
          {
            description: "poltavvaaa",
            isEditing: false,
            isChecked: false
          }
        ]
      };
      const prevState = mockState;
      const index = 1;
      const editItem = mockStateEdit.todos[index];
      const expectedState = {
        ...mockStateEdit,
        todos: [...mockStateEdit.todos],
        editItem: (editItem.isEditing = !editItem.isEditing)
      };
      const actualState = todo(prevState, {
        type: EDIT_TASK,
        index
      });
      expect(actualState).toEqual(expectedState);
    });
  });

  describe(`Handle ${COMPLETED_TASK} action correctly`, () => {
    it(`When comleted task`, () => {
      const mockStateCompleted = {
        todos: [
          {
            description: "kotelvaaaa",
            isEditing: false,
            isChecked: false
          },
          {
            description: "poltavvaaa",
            isEditing: false,
            isChecked: false
          }
        ]
      };
      const prevState = mockState;
      const index = 1;
      const complitedItem = mockStateCompleted.todos[index];
      const expectedState = {
        ...mockStateCompleted,
        todos: [...mockStateCompleted.todos],
        complitedItem: (complitedItem.isChecked = !complitedItem.isChecked)
      };
      const actualState = todo(prevState, {
        type: COMPLETED_TASK,
        index
      });
      expect(actualState).toEqual(expectedState);
    });
  });
});
