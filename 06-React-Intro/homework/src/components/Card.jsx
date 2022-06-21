import React from 'react';

export default function Card({max, min, name, img, onClose}) {
  // acá va tu código
  return (<div>
            <button onClick={onClose}>x</button>
            <h1>{name}</h1>
            <h2>Min = {min}</h2>
            <h2>Max = {max}</h2>
            <img src= {`http://openweathermap.org/img/wn/${img}@2x.png`} alt="" />
          </div>)
};

