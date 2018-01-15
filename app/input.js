import PropTypes from "prop-types";
import React from "react";

class Input extends React.Component {
  render() {
    const props = {
      name: this.props.name,
      onChange: this.props.onChange,
      type: this.props.type,
      value: this.props.value
    };
    return(<input {...props}/>);
  }
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  type: PropTypes.string,
  value: PropTypes.string
};

Input.defaultProps = {
  onChange: () => {},
  type: "text",
  value: ""
};

module.exports = Input;