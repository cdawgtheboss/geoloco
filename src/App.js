import React from 'react';
import './App.css';
import WeatherItem from './components/weather-item';
import WeatherRow from './components/weather-row';


function App(props) {
  return (
    <div className="App">
      <WeatherItem name={""}/>
      <WeatherRow/>
    </div>
  );
}


export default App;
