import React, { useEffect, useState } from 'react';

const WeatherItem = (props) => {
  const item = props.item
  return(
    <div>
      {item.weather[0].description}
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
    <div>
      {weatherData && weatherData.list.map(wd => <WeatherItem item={wd} />)}
    </div>
  )
}

export default App;

