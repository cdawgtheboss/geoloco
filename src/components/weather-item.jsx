import React, {useEffect, useState} from 'react';


const kelvinToFahrenheit = (k) => {
  return 32 + 9/5 * (k - 273.15)
}

const WeatherItem = (props) => {
  const [weatherData, setWeatherData] = useState()
  useEffect( () =>{
  
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=Danielsville&appid=43539669c18751f12183dc36c1143086')
    .then(res => res.json())
    .then(res => res.list.forEach(a => console.log(a.weather[0].main)))
  }, [])
  
  return(
    <div>

    </div>
  )
}

export default WeatherItem;

