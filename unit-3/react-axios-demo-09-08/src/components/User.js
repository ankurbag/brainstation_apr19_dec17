import React from "react";

class User extends React.Component {

    render() {
        const user = this.props.user;
        return (
            <div>
            <p>{user.id}:
            {user.name}</p>
            </div>
        )
    }
}

export default User;