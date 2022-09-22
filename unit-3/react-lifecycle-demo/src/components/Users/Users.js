import { Component } from 'react';
import User from './User';
import userData from '../../data/users.json';
import './Users.scss';

class Users extends Component {
  state = {
    currentUser: null,
    users: [],
  };

  componentDidMount() {
    console.log('componentDidMount');
    // add userData, similar to setting after axios api call
    this.setState({
      users: userData,
    });

    if (this.props.match.params.id) {
      console.log(`id: ${this.props.match.params.id}`);
      this.setState({ currentUser: this.props.match.params.id });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
    if (this.props.match.params.id) {
      const id = this.props.match.params.id;
      console.log(`id: ${id}`);
      if (prevState.currentUser !== id) {
        this.setState({ currentUser: id });
      }
    }
  }

  render() {
    return (
      <div className="Users">
        <h2>Users</h2>
        {!this.state.currentUser ? (
          <p>no user selected</p>
        ) : (
          <p>{this.state.currentUser}</p>
        )}
        <ul className="Users__list">
          {this.state.users.map((user) => (
            <li key={user.id} className="Users__item">
              <User user={user} url={this.props.match.url} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Users;
