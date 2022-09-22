import './Button.scss';

function Button(props) {
  console.log('Button props', props);

  // let classString = 'Btn';

  // if (props.size === 'large') {
  //   console.log('large button');
  //   classString = classString + ' Btn--large';
  // }

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

  /* ternary example */
  // return (
  //   <button className={`Btn ${props.size === 'large' ? 'Btn--large' : ''}`}>
  //     {props.text}
  //   </button>
  // );
}

export default Button;
