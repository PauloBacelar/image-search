import React from "react";
import "../App.css";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="ui large icon input">
          <input type="text" placeholder="Search for images..." />
          <i className="search icon"></i>
        </div>

        <button class="ui button">Search</button>
      </div>
    );
  }
}

export default App;
