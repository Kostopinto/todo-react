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
      const payload = "test2";
      const testItem = {
        description: payload,
        isEditing: false,
        isChecked: false
      };
      const expectedState = { todos: [...mockState.todos, testItem] };
      const actualState = todo(prevState, {
        type: ADD_TASK,
        payload
      });
      expect(actualState).toEqual(expectedState);
    });
  });

  describe(`Handle ${DELETE_TASK} action correctly`, () => {
    it(`When delete task`, () => {
      const prevState = mockState;
      const payload = 0;
      const expectedState = {
        ...mockState,
        todos: mockState.todos.filter((item, index) => index !== payload)
      };
      const actualState = todo(prevState, {
        type: DELETE_TASK,
        payload
      });
      expect(actualState).toEqual(expectedState);
    });
  });

  describe(`Handle ${EDIT_TASK} action correctly`, () => {
    it(`When edit task`, () => {
      const prevState = mockState;
      const payload = 0;
      const expectedState = {
        ...mockState,
        todos: mockState.todos.map((item, index) =>
          index === payload ? { ...item, isEditing: !item.isEditing } : item
        )
      };
      const actualState = todo(prevState, {
        type: EDIT_TASK,
        payload
      });
      expect(actualState).toEqual(expectedState);
    });
  });

  describe(`Handle ${COMPLETED_TASK} action correctly`, () => {
    it(`When comleted task`, () => {
      const prevState = mockState;
      const payload = 0;
      const expectedState = {
        ...mockState,
        todos: mockState.todos.map((item, index) =>
          index === payload ? { ...item, isChecked: !item.isChecked } : item
        )
      };
      const actualState = todo(prevState, {
        type: COMPLETED_TASK,
        payload
      });
      expect(actualState).toEqual(expectedState);
    });
  });

  describe(`Handle ${SAVE_EDIT_TASK} action correctly`, () => {
    it(`When save task after editing`, () => {
      const prevState = mockState;
      const payload = {
        index: 0,
        editValue: "test test"
      };
      const expectedState = {
        ...mockState,
        todos: mockState.todos.map((item, index) =>
          index === payload.index
            ? {
                ...item,
                isEditing: !item.isEditing,
                description: payload.editValue
              }
            : item
        )
      };
      const actualState = todo(prevState, {
        type: SAVE_EDIT_TASK,
        payload
      });
      expect(actualState).toEqual(expectedState);
    });

    describe("Handle default action correctly", () => {
      it("When action is nonexistent", () => {
        const expectedState = mockState;
        const actualState = todo(mockState, {
          type: "ACTION_FOR_TESTING_DEFAULT_STATE"
        });
        expect(actualState).toEqual(expectedState);
      });
    });
  });
});
