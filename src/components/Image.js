import React from "react";
import "../styles/Image.css";

class Image extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <img
        src={this.props.image.urls.regular}
        alt={this.props.image.alt_description}
      />
    );
  }
}

export default Image;
