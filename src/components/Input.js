/* eslint-disable */
import React from "react";
import axios from "axios";
import unsplash from "../api/unsplash";

class Input extends React.Component {
  constructor() {
    super();
    this.state = { inputValue: "" };

    this.onInputChange = this.onInputChange.bind(this);
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onInputChange(event) {
    this.setState({ inputValue: event.target.value });
  }

  onButtonClick = async (term) => {
    const response = await unsplash.get(
      "https://api.unsplash.com/search/photos",
      {
        params: {
          query: term,
        },
      }
    );
  };

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

        <button
          className="ui button"
          onClick={() => this.onButtonClick(this.state.inputValue)}
        >
          Search
        </button>
      </div>
    );
  }
}

export default Input;
