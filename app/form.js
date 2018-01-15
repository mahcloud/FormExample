import Input from "./input";
import React from "react";

class Example extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      first_name: "Mike",
      last_name: "Hoffert"
    };
  }

  handleInputChange(key, value) {
    let newState = this.state;
    newState[key] = value;

    this.setState(newState);
  }

  render() {
    return(
      <div>
        <Input name="First Name" value={this.state.first_name} onChange={(e) => this.handleInputChange("first_name", e.target.value)}/>
        <Input name="Last Name" value={this.state.last_name}  onChange={(e) => this.handleInputChange("last_name", e.target.value)}/>
        <div>First Name: {this.state.first_name}</div>
        <div>Last Name: {this.state.last_name}</div>
      </div>
    );
  }
}

module.exports = Example;
