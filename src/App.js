import React, { Component } from "react";
import "./App.css";
import Users from "./Users";
import AlbumDropdown from "./AlbumDropdown";
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
      artistID: 0,
      albumTitles: [],

      singleArtist: []
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

  albumTitleFetch = index => {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({
          albumTitle: data
        });
      });
  };

  render() {
    console.log(this.state.singleArtist);
    let albumDropdown = null;
    if (this.state.AlbumDropDown === true) {
      albumDropdown = (
        <AlbumDropdown
          Users={this.state.Users}
          artistID={this.state.artistID}
          albumTitleFetch={this.albumTitleFetch}
          albumTitles={this.state.albumTitles}
          singleArtist={this.state.singleArtist}
        />
      );
    }

    return (
      <Container style={myContainer}>
        <Col xs="4">
          <Users
            usersdetails={this.state.Users}
            albumDropdown={this.albumDropdown}
          />
        </Col>
        <Col xs="auto">{albumDropdown}</Col>
      </Container>
    );
  }
}

export default App;
