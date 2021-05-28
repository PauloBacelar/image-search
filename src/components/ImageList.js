import React from "react";
import Image from "./Image";

class ImageList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="grid-container">
        {this.props.images.map((image) => {
          return <Image className="image" image={image} key={image.id} />;
        })}
      </div>
    );
  }
}

export default ImageList;
