import React from "react";

import EditItem from "../EditItem";

import { shallow, mount } from "enzyme";
import { wrap } from "module";

describe("<EditItem />", () => {
  let props = {
    editTask: jest.fn(() => "editTask"),
    saveEditTask: jest.fn(() => "saveEditTask"),
    index: 1,
    item: {
      isEditing: true,
      isChecked: false,
      description: "test"
    }
  };

  const saveEdit = jest.fn(() => "saveEdit");
  let wrapper;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("Should render EditItem component correctly", () => {
    wrapper = shallow(<EditItem {...props} />);

    it("Should EditItem component have correctly number of children ", () => {
      expect(wrapper.find(".on-edit").children()).toHaveLength(2);
    });

    it("Should EditItem component render correctly elements", () => {
      expect(
        wrapper
          .find(".on-edit")
          .childAt(0)
          .hasClass("list-item")
      ).toBe(true);
      expect(
        wrapper
          .find(".material-icons")
          .at(0)
          .text()
      ).toEqual("cached");
      expect(
        wrapper
          .find(".material-icons")
          .at(1)
          .text()
      ).toEqual("power_settings_new");
    });
    it("Should defaultInput value in input will correctly", () => {
      const input = wrapper.find("input").get(0);
      expect(input.props.defaultValue).toEqual(props.item.description);
    });
  });

  describe("Should run function onClick", () => {
    wrapper = shallow(
      <EditItem
        item={{ description: "test" }}
        index={props.index}
        editTask={props.editTask}
        saveEditTask={props.saveEditTask}
      />
    );

    it("Should saveEdit onClick  called saveEditTask function", () => {
      wrapper
        .find(".material-icons")
        .at(0)
        .simulate("click");
      expect(props.saveEditTask).toHaveBeenCalled();
    });

    it("Should editTask function work", () => {
      wrapper = shallow(
        <EditItem
          item={{ description: "test" }}
          index={1}
          editTask={props.editTask}
          saveEditTask={props.saveEditTask}
        />
      );
      wrapper
        .find(".material-icons")
        .at(1)
        .simulate("click");
      expect(props.editTask).toHaveBeenCalled();
      expect(props.editTask).toHaveBeenCalledWith(props.index);
    });
  });

  describe("Should simulate keydown events", () => {
    wrapper = shallow(
      <EditItem
        item={{ description: "test" }}
        saveEditTask={props.saveEditTask}
      />
    );
    it("Should onKeyPress Enter key on input called SaveEditTask func", () => {
      wrapper
        .find(".list-item")
        .simulate("keypress", { key: "Enter", keyCode: 13 });
      expect(props.saveEditTask).toHaveBeenCalled();
    });
  });

  describe("Should onChangeInput will change state ", () => {
    beforeEach(() => {
      wrapper = shallow(
        <EditItem
          item={{ description: "test" }}
          saveEditTask={props.saveEditTask}
          saveEdit={saveEdit}
        />
      );
    });

    it("Should changeInputLocal method called after input change", () => {
      const wrapperInstance = wrapper.instance();
      const mockSaveEditLocal = jest.spyOn(wrapperInstance, "changeInputLocal");
      wrapperInstance.forceUpdate();
      wrapper
        .find(".list-item")
        .simulate("change", { target: { value: props.item.description } });
      expect(mockSaveEditLocal).toHaveBeenCalled();
    });

    it("Should state has been changed", () => {
      wrapper.setState({ inputValue: "test test" });
      expect(wrapper.instance().state.inputValue).toBe("test test");
    });
  });
});
