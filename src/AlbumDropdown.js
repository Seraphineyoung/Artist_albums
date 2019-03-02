import React, { Component } from "react";
import "./album.css";
import { DropdownButton, Dropdown, Card } from "react-bootstrap";

const options = ["one", "two", "three"];

const dropDown = {
  paddingLeft: "10rem",
  marginTop: "5rem"
};

class AlbumDropdown extends Component {
  render() {
    this.props.albumTitleFetch();

    return (
      <div style={dropDown}>
        <Card.Subtitle body>{this.props.singleArtist}</Card.Subtitle>
        <DropdownButton
          id="dropdown-basic-button"
          size="lg"
          variant="primary"
          title="Albums"
          onClick={() => this.props.albumTitleFetch()}
        >
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </DropdownButton>
      </div>
    );
  }
}
export default AlbumDropdown;

{
  /* {this.props.Users.map((artist, index) => {
          const artistID = this.props.artistID;
          if (artist.id === artistID) {
            return (
              <div>
                <Card.Subtitle key={index} body>
                  {artist.name}
                </Card.Subtitle>
              </div>
            );
          }
        })} */
}
