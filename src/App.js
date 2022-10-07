import { useState } from "react";
import { WEATHER_API_KEY, WEATHER_API_URL } from "./api/api";
import "./App.css";
import CurrentWeather from "./Components/CurrentWeather";
import Forecast from "./Components/Forecast";
import Search from "./Components/Search";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const getCurrentWeather = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const getForecast = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([getCurrentWeather, getForecast])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch(console.log);
  };
  console.log(forecast);

  return (
    <div className=".container">
      <h1>Weather App</h1>
      <div className="searchWidget">
        <Search onSearchChange={handleOnSearchChange} />
        {currentWeather && <CurrentWeather data={currentWeather} />}
        {forecast && <Forecast data={forecast} />}
      </div>
    </div>
  );
}

export default App;
