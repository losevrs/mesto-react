import React from 'react';
import logo from '../images/header/logo.svg';

export default class Header extends React.PureComponent {
  render() {
    return (
      <header className="header" >
        <img className="header__logo"
          src={logo}
          alt="Логотип" />
      </header>
    )
  };
}