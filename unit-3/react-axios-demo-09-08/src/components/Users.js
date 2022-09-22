import axios from "axios";
import React from "react";
import User from "./User";

class Users extends React.Component {
  // Initialization
  constructor(props) {
    super(props);
    this.state = {
      usersData: [],
    };
  }

  // In mounting phase , fetch all the users
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log(response.data);
        this.setState({ usersData: response.data });
      })
      .catch((e) => {
        console.error("The err :", e);
      });
  }

  // Post some information to the server
  componentDidUpdate() {
    console.log("*************** componentDidUpdate ****************");
    axios
      .post("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response.data);
      })
      .catch((e) => {
        console.error("The err :", e);
      });
  }

  render() {
    // Render List of Users
    return (
      <div>
        <h1>Users:</h1>
        {this.state.usersData.map((user) => (
          <User user={user} />
        ))}
      </div>
    );
  }
}

export default Users;
