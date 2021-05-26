import React from "react";
import "../App.css";
import Input from "./Input";

class App extends React.Component {
  state = {
    persons: [],
  };

  render() {
    return (
      <div className="container">
        <Input />
      </div>
    );
  }
}

export default App;
