import React, {useEffect, useState} from 'react';


const kelvinToFahrenheit = (k) => {
  return 32 + 9/5 * (k - 273.15)
}

const WeatherItem = (props) => {
  
  
  return(
    <div>
      <h3>{props.date}</h3>
      weather image
      temperature
    </div>
  )
}

export default WeatherItem;