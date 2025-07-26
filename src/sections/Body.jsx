import Cards from '../components/Cards'
import Searchbar from '../components/Searchbar'
import { useContext } from 'react'
import { cityContext } from '../context'
import { useState } from 'react'





const Body = () => {
  const [weather, setWeather] = useState();
  const obj = useContext(cityContext);
  const city = obj.city;
  function get() {
    const apiKey = "ec579c5b287028b0d80aad62987df7c8";
    if (city) {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
      fetch(url).then(response => response.json()).then(data => {
        if (data.cod === "404") {
          alert("City data is not available");
        } else {
          const details = { name: data.name, temp: data.main.temp, dis: data.weather[0].description, icon: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`, Q: "NA" };
          setWeather(details); // ✅ Store in state
        }
      }).catch(err => alert("error while data fetching"));
    }
  }

  return (
    <div className='bg-[url(https://png.pngtree.com/thumb_back/fh260/background/20240522/pngtree-a-tree-on-a-meadow-during-rainy-weather-image_15679740.jpg)]'>
      <Searchbar />
      <button className='border-2' onClick={get}>fetch details</button>

      {weather && (
        <div className='text-white'>
          <span>{weather.name}</span><br />
          <span>Date: {new Date().toLocaleDateString()}</span><br />
          <span>Time: {new Date().toLocaleTimeString()}</span><br />
          <img src={weather.icon} alt="weather icon" />
          <span>{weather.temp} °C</span><br />
          <p>Description: {weather.dis}</p>
        </div>
      )}
      <Cards />
    </div>
  )
}

export default Body
