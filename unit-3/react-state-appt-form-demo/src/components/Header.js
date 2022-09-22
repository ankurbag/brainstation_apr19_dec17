import './../styles.css';
import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header class="header">
        <h1 class="header__title">{this.props.title}</h1>
      </header>
    );
  }
}

export default Header;
