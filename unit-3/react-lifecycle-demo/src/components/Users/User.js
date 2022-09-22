import { Link } from 'react-router-dom';

function User({ user, url }) {
  return (
    <Link className="User" to={`/users/${user.id}`}>
      <h3>
        {user.first_name} {user.last_name}
      </h3>
    </Link>
  );
}

export default User;
