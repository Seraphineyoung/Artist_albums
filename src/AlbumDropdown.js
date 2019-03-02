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
    return (
      <div style={dropDown}>
        <Card.Subtitle body>{this.props.singleArtist}</Card.Subtitle>
        <DropdownButton
          id="dropdown-basic-button"
          size="lg"
          variant="primary"
          title="Albums"
        >
          {this.props.albumTitle.map((title, index) => {
            return (
              <div key={index}>
                <Dropdown.Item href="#/action-1">{title.title}</Dropdown.Item>
              </div>
            );
          })}

          {/* {this.props.albumTitle.map((artist, index) => {
            const artistTitle = [];
            if (artist.id === artistID) {
              return (
                <div>
                  <Card.Subtitle key={index} body>
                    {artist.name}
                  </Card.Subtitle>
                </div>
              );
            }
          })} */}
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
