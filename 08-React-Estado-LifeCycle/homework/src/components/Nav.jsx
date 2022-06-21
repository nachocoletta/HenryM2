import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({onSearch}) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <img src={Logo} alt="" />
        <span>Henry Weather App</span>
        <SearchBar onSearch={onSearch}/>
      </nav>
    </div>
  );
};

export default Nav;
