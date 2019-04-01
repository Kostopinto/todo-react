import React from "react";

import TodoItem from "../../TodoItem";
import Item from "../Item";
import EditItem from "../EditItem";

import { shallow } from "enzyme";

describe("<TodoItem />", () => {
  let props = {
    completedTask: jest.fn(() => "completedTask"),
    editTask: jest.fn(() => "editTask"),
    deleteTask: jest.fn(() => "deleteTask"),
    saveEditTask: jest.fn(() => "saveEditTask"),
    item: {
      isEditing: false
    }
  };
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<TodoItem {...props} />);
  });

  it("Should rendered Item component correctly", () => {
    expect(wrapper.find(Item)).toHaveLength(1);
    expect(wrapper.find(EditItem)).toHaveLength(0);
  });

  it("Should rendered EditItem component correctly", () => {
    wrapper = shallow(<TodoItem item={{ isEditing: true }} />);
    expect(wrapper.find(EditItem)).toHaveLength(1);
    expect(wrapper.find(Item)).toHaveLength(0);
  });
});
