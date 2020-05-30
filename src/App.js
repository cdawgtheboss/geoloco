import React, { useEffect, useState } from 'react';

function App() {
  const apiUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=Danielsville&appid=43539669c18751f12183dc36c1143086'
  const [weatherData, setWeatherData] = useState("this is my initial state")
  useEffect( () => {
    fetch(apiUrl)
    .then(res => res.json())
    .then(data => setWeatherData(data))
    

    
  }, [])
  console.log("weatherData", weatherData)
  return(
    <div>
      this is my app
    </div>
  )
}

export default App;

