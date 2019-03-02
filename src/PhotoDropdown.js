import React, { Component } from "react";
// import "./photo.css";
import { DropdownButton, Dropdown, Card } from "react-bootstrap";

const dropDown = {
  paddingLeft: "10rem",
  marginTop: "5rem"
};

class PhotoDropdown extends Component {
  render() {
    console.log(this.props.fourPhoto);
    return (
      <div style={{ margin: "none" }}>
        {this.props.fourPhoto.map((photo, index) => {
          return (
            <Card style={{ width: "12rem" }} key={index} body>
              <img src={photo.thumbnailUrl} />
              <p>{photo.title}</p>
            </Card>
          );
        })}
      </div>
    );
  }
}
export default PhotoDropdown;
