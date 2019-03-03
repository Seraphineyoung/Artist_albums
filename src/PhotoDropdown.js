import React, { Component } from "react";
import "./photo.css";
import { DropdownButton, Dropdown, Card } from "react-bootstrap";

const dropDown = {
  paddingLeft: "10rem",
  marginTop: "5rem"
};

class PhotoDropdown extends Component {
  render() {
    return (
      <div style={{ marginTop: "1rem" }}>
        {this.props.fourPhoto.map((photo, index) => {
          return (
            <Card style={{ width: "16rem", margin: "1rem" }} key={index}>
              <Card.Img variant="top" src={photo.thumbnailUrl} />
              <Card.Body>
                <Card.Text>{photo.title}</Card.Text>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    );
  }
}
export default PhotoDropdown;
