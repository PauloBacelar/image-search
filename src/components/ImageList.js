import React from "react";
import Image from "./Image";

class ImageList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return this.props.images.map((image) => {
      return <img className="image" src={image.urls.regular}></img>;
    });
  }
}

export default ImageList;
