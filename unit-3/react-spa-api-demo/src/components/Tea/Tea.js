import './Tea.scss';

function Tea({ name, image, description }) {
  return (
    <div className="Tea">
      <h3 className="Tea__name">{name}</h3>
      <img
        className="Tea__img"
        src={`https://tea-api-vic-lo.herokuapp.com/${image}`}
        alt={name}
      />
      {description && <p>{description}</p>}
    </div>
  );
}

export default Tea;
