import React from "react";
import "../styles/App.css";
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
