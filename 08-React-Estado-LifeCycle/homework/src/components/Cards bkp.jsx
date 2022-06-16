import React from 'react';
import Card from './Card bkp';
import cardsStyles from '../styles/cards.module.css';

export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map
  // cities={data}

  if(props.cities){

  // alert("entra");
  return (<div className={cardsStyles.styleCards}> {props.cities.map(city => <Card  
                                                    max={city.main.temp_max}
                                                    min={city.main.temp_min}
                                                    name={city.name}
                                                    img={city.weather[0].icon}
                                                    onClose={() => alert(city.name)}
                                                    key = {city.id}
                                                    />)}
          </div>
          );
  }
  else {
    // alert("sin ciudades");
    return(
      <div>Sin ciudades</div>
    );
  }
};