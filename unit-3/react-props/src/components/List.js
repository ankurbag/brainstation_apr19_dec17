import Item from './Item';
import './List.scss';

function List(props) {
  console.log('List props', props);

  return (
    <ul className="List">
      {props.users
        .filter((user) => user.id !== 3)
        .map((user) => (
          <Item
            key={user.id}
            firstName={user.first_name}
            lastName={user.last_name}
            avatar={user.avatar}
          />
        ))}
    </ul>
  );
}

export default List;
