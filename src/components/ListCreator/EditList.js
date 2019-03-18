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
    this.props.saveEdit(this.state.inputValue, this.props.index);
  };

  render() {
    const { index, item, onEdit } = this.props;

    return (
      <div className="on-edit">
        <input
          id={index}
          className="list-item"
          defaultValue={item.description}
          onChange={this.changeInputLocal}
        />
        <div>
          <i className="material-icons" onClick={this.saveEdit}>
            cached
          </i>
          <i className="material-icons" onClick={onEdit(index)}>
            power_settings_new
          </i>
        </div>
      </div>
    );
  }
}
//onClick={saveEdit(index)}
EditList.propTypes = {
  saveEdit: PropTypes.func,
  onEdit: PropTypes.func,
  index: PropTypes.number,
  item: PropTypes.object
};

export default EditList;
