import React, { Component } from "react";

import { Card, Alert } from "react-bootstrap";

const aTag = {
  color: "inherit",
  textDecoration: "none"
};

const myCard = {
  marginBottom: "1rem",
  border: "2px solid grey",
  padding: "0.5rem"
};

const myUser = {
  padding: "0.2rem",
  marginTop: "1.5rem",
  border: "2px solid grey",
  textAlign: "center"
};

const nav_btn = {
  padding: "1rem 7rem",
  marginBottom: "1rem",
  border: "0px",
  backgroundColor: "#c3e6cb",
  color: "#155724"
};

class Users extends Component {
  render() {
    return (
      <div>
        <div style={myUser}>
          <div>
            <Card.Header>
              <p>Users </p>
            </Card.Header>
          </div>

          {this.props.usersdetails.map((user, index) => {
            return (
              <div key={index}>
                <a
                  style={aTag}
                  href="#"
                  onClick={() => {
                    this.props.albumDropdown(index);
                    this.props.albumTitleFive(index);
                    this.props.displayPhoto(index);
                  }}
                >
                  <Alert color="light" style={myCard} key={index} body>
                    {user.name}key={index}
                  </Alert>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default Users;
