import React from "react";
import './Header.scss';
import Icon from '@material-ui/core/Icon';

export const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">
        Rule of Thumb
      </h1>
      <div className="header__options">
        <a className="header__option header__option--active" href="#home">
          Past Trials
        </a>
        <a className="header__option" href="#contact">How It Works</a>
        <a className="header__option" href="#about">Log In/Sign Up</a>
        <a className="header__option header__option--icon" href="#about">
          <Icon style={{ fontSize: 30 }}>search</Icon>
        </a>
      </div>

    </header>
  );
};
