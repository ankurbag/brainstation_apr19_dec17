import './Item.scss';

function Item(props) {
  return (
    <li className="Item">
      <h3 className="Item__title">
        {props.firstName} {props.lastName}
      </h3>
      <img className="Item__avatar" src={props.avatar} alt={props.first_name} />
    </li>
  );
}

export default Item;
