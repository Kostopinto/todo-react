import React from "react";

import TodoList from "../TodoList";

import { mount } from "enzyme";

let props = {
  todos: [{ description: "test" }, { description: "test2" }]
};

describe("<TodoList />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<TodoList todos={props.todos} />);
  });

  it("Should list render correctly", () => {
    expect(wrapper.find("TodoItem").length).toBe(props.todos.length);
    wrapper.setProps({ todos: [...props.todos, { description: "bar" }] });
    props.todos.push({ description: "bar" });
    expect(wrapper.find("TodoItem").length).toBe(props.todos.length);
  });
});
