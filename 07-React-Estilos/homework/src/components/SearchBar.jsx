import React from 'react';
// import cardStyles from '../styles/card.module.css';
import searchStyles from '../styles/searchBar.module.css';

export default function SearchBar(props) {
  // acá va tu código
  return <div id={searchStyles.divSearch}>
          <input id={searchStyles.inputSearch} type="text" placeholder='Ciudad...'/>   
          <button id={searchStyles.botonAgregar} onClick={props.onSearch}>Agregar
          </button>
        </div>
};