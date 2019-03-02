import React, { Component } from "react";
import "./App.css";
import Users from "./Users";
import AlbumDropdown from "./AlbumDropdown";
import PhotoDropdown from "./PhotoDropdown";
import { Container, Col } from "react-bootstrap";

const myContainer = {
  padding: "1.2rem",
  height: "100vh",
  display: "flex"
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      Users: [],
      AlbumDropDown: false,
      PhotoDropdown: false,
      artistID: 0,
      albumTitles: [],
      singleArtist: [],
      fourTitles: [],
      photos: [],
      fourPhoto: []
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => {
        // console.log(data);
        this.setState({
          Users: data
        });
      });
    this.albumTitleFetch();
    this.photoFetch();
  }

  albumDropdown = index => {
    const artistID = index + 1;
    this.state.Users.map((artist, index) => {
      if (artist.id === artistID) {
        this.setState({
          AlbumDropDown: true,
          artistID: artistID,
          singleArtist: artist.name
        });
      }
    });
  };

  albumTitleFetch = () => {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then(response => response.json())
      .then(data => {
        this.setState({
          albumTitles: data
        });
      });
  };

  albumTitleFive = index => {
    let newIndex = index + 1;
    let albums = this.state.albumTitles;
    let userIndex = [];
    for (var i = 0; i < albums.length; i++) {
      if (albums[i].userId === newIndex) {
        userIndex.push(albums[i]);
      }
    }
    // console.log(userIndex);
    var fiveItems = [];
    for (var i = 0; i < userIndex.length; i++) {
      if (fiveItems.length <= 3) {
        fiveItems.push(userIndex[i]);
      }
    }
    // console.log(fiveItems);
    this.setState({
      fourTitles: fiveItems
    });
  };

  photoFetch = () => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then(response => response.json())
      .then(data => {
        this.setState({
          photos: data
        });
      });
  };

  showPhoto = index => {
    let photos = this.state.photos;
    let newIndex = index + 1;
    let PhotoIndex = [];
    for (var i = 0; i < photos.length; i++) {
      if (photos[i].albumId === newIndex) {
        PhotoIndex.push(photos[i]);
      }
    }

    var fourPhoto = [];
    for (var i = 0; i < PhotoIndex.length; i++) {
      if (fourPhoto.length <= 11) {
        fourPhoto.push(PhotoIndex[i]);
      }
    }
    // console.log(fourPhoto);
    this.setState({
      fourPhoto: fourPhoto,
      PhotoDropdown: true
    });
  };

  render() {
    let albumDropdown = null;
    let photoDropdown = null;
    if (this.state.AlbumDropDown === true) {
      albumDropdown = (
        <AlbumDropdown
          Users={this.state.Users}
          artistID={this.state.artistID}
          albumTitles={this.state.albumTitles}
          singleArtist={this.state.singleArtist}
          fourTitles={this.state.fourTitles}
          showPhoto={this.showPhoto}
        />
      );
    }

    if (this.state.PhotoDropdown === true) {
      photoDropdown = <PhotoDropdown fourPhoto={this.state.fourPhoto} />;
    }

    return (
      <Container style={myContainer}>
        <Col xs="4">
          <Users
            usersdetails={this.state.Users}
            albumDropdown={this.albumDropdown}
            albumTitleFive={this.albumTitleFive}
          />
        </Col>
        <Col xs="auto">
          {albumDropdown}
          {photoDropdown}
        </Col>
      </Container>
    );
  }
}

export default App;
