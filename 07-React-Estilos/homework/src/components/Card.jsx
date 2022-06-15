import React from 'react';
import cardStyles from '../styles/card.module.css';

// http://openweathermap.org/img/wn/02d@2x.png
export default function Card({max, min, name, img, onClose}) {
  // acá va tu código
  // props = {max, min, name, img, onClose}

  

  return  (<div id={cardStyles.div}>
            <div id={cardStyles.styleCards}>
              <button className={cardStyles.boton} onClick={onClose}>x</button>
              <h1 className={cardStyles.cityName}>{name}</h1>
                <div id={cardStyles.divMin}>
                  <h2>Min {min}</h2>
                </div>
                <div id={cardStyles.divMax}>
                  <h2>Max {max}</h2>
                </div>
                <div>
                  <img className={cardStyles.imgStyle} src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt=""/>
                </div>
              </div>
          </div>
  ) 
};

