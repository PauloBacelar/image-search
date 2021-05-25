import React from "react";

class Input extends React.Component {
  constructor() {
    super();
    this.state = { inputValue: "" };

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    this.setState({ inputValue: event.target.value });
  }

  render() {
    return (
      <div>
        <div className="ui large icon input">
          <input
            type="text"
            placeholder="Search for images"
            value={this.state.inputValue}
            onChange={this.onInputChange}
          />
          <i className="search icon"></i>
        </div>

        <button class="ui button">Search</button>
      </div>
    );
  }
}

export default Input;
