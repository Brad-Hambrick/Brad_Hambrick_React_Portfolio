import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation(props) {
  return (
    <div className=" row navigation" id="navigation">
      <NavLink to="/about">about </NavLink>
      <NavLink to="/portfolio">portfolio </NavLink>
      <NavLink to="/contact">resume </NavLink>
      <NavLink to="/resume">contact </NavLink>
    </div>
  );
}

export default Navigation;
