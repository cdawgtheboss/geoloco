import React, { useEffect, useState } from 'react';
import "./App.css";

const WeatherItem = (props) => {
  const item = props.item
  console.log("item", item)

  const kelvinToFahrenheit = (k) => {
    return 32 + 9/5 * (k - 273.15)
  }

  

  return(
    <div className="weather-item rain">
      <div>{Math.round(kelvinToFahrenheit(item.main.temp))}f</div>
      <div>{item.weather[0].description}</div>
      <div>{item.weather[0].main}</div>
    </div>
  )
}

function App() {
  const apiUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=Danielsville&appid=43539669c18751f12183dc36c1143086'
  const [weatherData, setWeatherData] = useState()
  useEffect( () => {
    fetch(apiUrl)
    .then(res => res.json())
    .then(data => setWeatherData(data))
  }, [])
  
  
  
  console.log("weatherData", weatherData)
  return(
    <div className="weather-row">
      <div className="city-name">{weatherData && weatherData.city.name}</div>
      <div>{weatherData && weatherData.list.map(wd => <WeatherItem item={wd} />)}</div> 
    </div>
  )
}

export default App;

