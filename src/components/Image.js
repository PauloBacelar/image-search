import React from "react";

class Image extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <img src={this.props.image.urls.regular} />;
  }
}

export default Image;
