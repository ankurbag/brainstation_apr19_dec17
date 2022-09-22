import './styles.css';

function Button(props) {
  console.log('Button props', props);

  return (
    <button
      onClick={props.handleBtnClick}
      className={`Btn ${props.size === 'large' && 'Btn--large'} ${
        props.size === 'small' && 'Btn--small'
      }`}
    >
      {props.text}
    </button>
  );

}

export default Button;
