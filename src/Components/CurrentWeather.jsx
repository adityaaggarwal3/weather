import "./cweather.css";

const CurrentWeather = ({ data }) => {
  return (
    <div className="weather">
      <div className="overlay"></div>
      <div className="top">
        <div className="text">
          <p className="city">{data.city}</p>
          <p className="desc">{data.weather[0].description}</p>
        </div>
        <img
          src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
          alt="Weather Icon"
          className="wIcon"
        />
      </div>
      <div className="bottom">
        <p className="temperature">{data.main.temp} °C</p>
        <div className="details">
          <div className="info-row">
            <span className="info-heading">Details</span>
          </div>
          <div className="info-row">
            <span className="info-label">Feels like</span>
            <span className="info-value">
              {Math.round(data.main.feels_like)}°C
            </span>
          </div>
          <div className="info-row">
            <span className="info-label">Wind Speed</span>
            <span className="info-value">{data.wind.speed} m/s</span>
          </div>
          <div className="info-row">
            <span className="info-label">Humidity</span>
            <span className="info-value">{data.main.humidity}%</span>
          </div>
          <div className="info-row">
            <span className="info-label">Pressure</span>
            <span className="info-value">{data.main.pressure} hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
