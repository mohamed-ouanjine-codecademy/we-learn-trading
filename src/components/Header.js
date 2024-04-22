import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <header className='bg-white shadow-sm text-dark sticky-top  p-3'>
        <ul className="nav nav-underline d-flex justify-content-around">
          <li className="nav-item">
            <NavLink className={`nav-link ${({ isActive }) => isActive && 'active'}`} aria-current="page" to="./">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={`nav-link ${({ isActive }) => isActive && 'active'}`} aria-current="page" to="./road-map">Road Map</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={`nav-link ${({ isActive }) => isActive && 'active'}`} to="./resources">Resources</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={`nav-link ${({ isActive }) => isActive && 'active'}`} to="./articles">Articles</NavLink>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;