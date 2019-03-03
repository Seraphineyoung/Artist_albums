import React, { Component } from "react";
import "./album.css";
import { DropdownButton, Dropdown, Card } from "react-bootstrap";

const dropDown = {
  paddingLeft: "10rem",
  marginTop: "3rem"
};

class AlbumDropdown extends Component {
  render() {
    let selectedAlbum = this.props.displaytitleAlbum;
    let defaultAlbumTitle;
    let selectedAlbumTitle = selectedAlbum.map(title => title.title);

    if (selectedAlbumTitle.length === 0) {
      defaultAlbumTitle = "Albums";
    } else {
      defaultAlbumTitle = selectedAlbumTitle;
    }

    return (
      <div style={dropDown}>
        <Card.Subtitle body>{this.props.singleArtist}</Card.Subtitle>
        <DropdownButton
          id="dropdown-basic-button"
          size="lg"
          variant="primary"
          title={defaultAlbumTitle}
          onClick={() => {
            this.props.displayPhoto();
          }}
        >
          {this.props.fourTitles.map((title, index) => {
            return (
              <div key={index}>
                <a
                  href="#"
                  onClick={() => {
                    this.props.showPhoto(index);
                    // this.props.showSingleAlbumTitle(index);
                  }}
                >
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
