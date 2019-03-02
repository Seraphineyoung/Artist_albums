import React, { Component } from "react";
import "./album.css";
import { DropdownButton, Dropdown, Card } from "react-bootstrap";

const dropDown = {
  paddingLeft: "10rem",
  marginTop: "5rem"
};

class AlbumDropdown extends Component {
  render() {
    console.log(this.props.fourPhoto);

    return (
      <div style={dropDown}>
        <Card.Subtitle body>{this.props.singleArtist}</Card.Subtitle>
        <DropdownButton
          id="dropdown-basic-button"
          size="lg"
          variant="primary"
          title="Albums"
        >
          {this.props.fourTitles.map((title, index) => {
            return (
              <div key={index}>
                <a href="#" onClick={() => this.props.showPhoto(index)}>
                  <Dropdown.Item href="#">
                    {title.title} key={index}
                  </Dropdown.Item>
                </a>
              </div>
            );
          })}
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
  // const be = ab.map((item, index) => {
  //   if (fiveItems.length <= 5) {
  //     fiveItems.push(item);
  //     break;
  //   }
  // });
  // console.log(be);
}
