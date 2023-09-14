import React from 'react';
import style from './HeaderUI.module.css';

const Header = (props) => {
  return (
    <div className={`${style.header} ${props.style}`}>
      <img src="../../../assets/logo.png" />
      {props.children}
    </div>
  );
};

export default Header;
