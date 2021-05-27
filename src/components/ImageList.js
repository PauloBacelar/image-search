import React from "react";
import Image from "./Image";

class ImageList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="image">
        <Image image={this.props.images[0].urls} />
      </div>
    );
  }
}

export default ImageList;
