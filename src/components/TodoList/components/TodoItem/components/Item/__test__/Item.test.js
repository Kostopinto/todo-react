import React from "react";

import Item from "../Item";

import { shallow } from "enzyme";

describe("<Item />", () => {
  let props = {
    completedTask: jest.fn(() => "completedTask"),
    editTask: jest.fn(() => "editTask"),
    deleteTask: jest.fn(() => "deleteTask"),
    item: {
      isChecked: false,
      description: "test"
    }
  };
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Item {...props} />);
    jest.restoreAllMocks();
  });

  it("Should checked task correctly, whne task not completed", () => {
    expect(wrapper.find(".completed")).toHaveLength(0);
  });

  it("Should checked task correctly, when task completed", () => {
    wrapper = shallow(<Item item={{ isChecked: true }} />);
    expect(wrapper.find(".completed")).toHaveLength(1);
  });

  it("Should rendered Item component correctly ", () => {
    expect(wrapper.find(".list-item").children()).toHaveLength(2);
    expect(wrapper.find(".material-icons")).toHaveLength(2);
    expect(
      wrapper
        .find(".material-icons")
        .at(0)
        .text()
    ).toEqual("build");
    expect(
      wrapper
        .find(".material-icons")
        .at(1)
        .text()
    ).toEqual("delete");
    wrapper = shallow(<Item item={{ isChecked: true, description: "test" }} />);
    expect(
      wrapper
        .find(".completed")
        .parent()
        .is("div")
    ).toEqual(true);
    expect(wrapper.find(".completed").text()).toEqual("test");
  });

  it("Should run function onClick,  when task completed", () => {
    wrapper = shallow(
      <Item
        item={{ isChecked: true }}
        editTask={props.editTask}
        completedTask={props.completedTask}
        deleteTask={props.deleteTask}
      />
    );
    wrapper
      .find(".material-icons")
      .at(0)
      .simulate("click");
    expect(props.editTask).toHaveBeenCalled();
    wrapper
      .find(".material-icons")
      .at(1)
      .simulate("click");
    expect(props.deleteTask).toHaveBeenCalled();
    wrapper
      .find(".completed")
      .at(0)
      .simulate("click");
    expect(props.completedTask).toHaveBeenCalled();
  });

  it("Should run function onClick,  when task not completed", () => {
    wrapper = shallow(
      <Item item={{ isChecked: false }} completedTask={props.completedTask} />
    );
    wrapper
      .find(".list-item")
      .at(0)
      .simulate("click");
    expect(props.completedTask).toHaveBeenCalled();
  });
});
