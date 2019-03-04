import React, { Component } from "react";
import "./App.css";
import Users from "./Users";
import AlbumDropdown from "./AlbumDropdown";
import PhotoDropdown from "./PhotoDropdown";
import { Col } from "react-bootstrap";

const myContainer = {
  padding: "1rem",
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
      fourPhoto: [],
      displayPhoto: false,
      displaytitleAlbum: []
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
    //check if this.state.displaytitleAlbum already has a state and delete it
    if (this.state.displaytitleAlbum.length === 1) {
      this.setState({
        displaytitleAlbum: []
      });
    }

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

    var fiveItems = [];
    for (var i = 0; i < userIndex.length; i++) {
      if (fiveItems.length <= 3) {
        fiveItems.push(userIndex[i]);
      }
    }

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
    let displaytitleAlbum = this.state.fourTitles;
    let photos = this.state.photos;
    let newIndex = index + 1;
    let sigleartistID = this.state.artistID;

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

    // AllupdateAlbumTitle has all the titles  of the albums
    let AllupdateAlbumTitle = [];
    for (var i = 0; i < displaytitleAlbum.length; i++) {
      if (displaytitleAlbum[i].userId === sigleartistID) {
        AllupdateAlbumTitle.push(displaytitleAlbum[i]);
      }
    }

    let newdisplaytitleAlbum = [];
    for (var i = 0; i < AllupdateAlbumTitle.length; i++) {
      if (i === index) {
        newdisplaytitleAlbum.push(AllupdateAlbumTitle[i]);
      }
    }

    this.setState({
      PhotoDropdown: true,
      fourPhoto: fourPhoto,
      displayPhoto: true,
      displaytitleAlbum: newdisplaytitleAlbum
    });
  };

  displayPhoto = () => {
    if (this.state.PhotoDropdown && this.state.displayPhoto === true) {
      this.setState(prevState => ({
        displayPhoto: !prevState.displayPhoto
      }));
    }
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
          displayPhoto={this.displayPhoto}
          displaytitleAlbum={this.state.displaytitleAlbum}
        />
      );
    }

    if (this.state.PhotoDropdown === true && this.state.displayPhoto) {
      photoDropdown = <PhotoDropdown fourPhoto={this.state.fourPhoto} />;
    }

    return (
      <div style={myContainer}>
        <Col xs="3">
          <Users
            usersdetails={this.state.Users}
            albumDropdown={this.albumDropdown}
            displayPhoto={this.displayPhoto}
            albumTitleFive={this.albumTitleFive}
          />
        </Col>
        <Col xs="auto">
          {albumDropdown}
          {photoDropdown}
        </Col>
      </div>
    );
  }
}

export default App;
