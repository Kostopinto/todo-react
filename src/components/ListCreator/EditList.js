import React from "react";
import PropTypes from "prop-types";

class EditList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: this.props.item.description
    };
  }

  changeInputLocal = event => {
    const { value } = event.target;
    this.setState({ inputValue: value });
  };

  saveEdit = () => {
    this.props.saveEditTask(this.state.inputValue, this.props.index);
  };

  render() {
    const { index, item, editTask } = this.props;

    return (
      <div className="on-edit">
        <input
          className="list-item"
          defaultValue={item.description}
          onChange={this.changeInputLocal}
          onKeyPress={event => {
            if (event.key === "Enter") {
              this.saveEdit();
            }
          }}
        />
        <div>
          <i className="material-icons" onClick={() => this.saveEdit()}>
            cached
          </i>
          <i className="material-icons" onClick={() => editTask(index)}>
            power_settings_new
          </i>
        </div>
      </div>
    );
  }
}

EditList.propTypes = {
  saveEdit: PropTypes.func,
  editTask: PropTypes.func,
  saveEditTask: PropTypes.func,
  index: PropTypes.number,
  item: PropTypes.object
};

export default EditList;
