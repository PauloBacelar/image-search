import React from "react";
import "../styles/Image.css";

class Image extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <img
        src={this.props.image.urls.regular}
        alt={this.props.image.alt_description}
        className="unique-image"
      />
    );
  }
}

export default Image;
