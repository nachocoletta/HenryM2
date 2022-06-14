import React from 'react';


// http://openweathermap.org/img/wn/02d@2x.png
export default function Card({max, min, name, img, onClose}) {
  // acá va tu código
  // props = {max, min, name, img, onClose}

  

  return  (<div>
            <button onClick={onClose}>x</button>
            <h1>{name}</h1>
            <div>
              <h2>Min {min}</h2>
            </div>
            <div>
              <h2>Max {max}</h2>
            </div>
            <div>
              <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt=""/>
            </div>

          </div>
  ) 
};

