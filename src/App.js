import React, {useEffect, useState} from 'react';
import './App.css';
import WeatherItem from './components/weather-item';
// import WeatherRow from './components/weather-row';


function App(props) {

  const [weatherData, setWeatherData] = useState()
  useEffect( () =>{
    const apiUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=Danielsville&appid=43539669c18751f12183dc36c1143086'
    fetch(apiUrl)
    .then(res => res.json())
    .then(res => res.list.map(a => setWeatherData(weatherData)))
  }, [])
      weatherData.map(weather => {
      return (
        <div className="App">
        <WeatherItem temp={weatherData.temp}/>
      </div>
    );
  })
}


export default App;
