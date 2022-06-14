import React from 'react';
import cardStyles from '../styles/card.module.css';

export default function SearchBar(props) {
  // acá va tu código
  return <div id={cardStyles.divSearch}>
          <input id={cardStyles.inputSearch} type="text" placeholder='Ciudad...'/>   
          <button id={cardStyles.botonAgregar} onClick={props.onSearch}>Agregar
          </button>
        </div>
};