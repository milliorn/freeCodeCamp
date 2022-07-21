import React from "react";
import "./CurrentWeather.css";

const CurrentWeather = () => {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">Austin</p>
          <p className="weather-desc">Sunny</p>
        </div>
        <img src="icons/01d.png" alt="weather" className="weather-icon" />
      </div>
      <div className="bottom">
        <p className="temperature">98°F</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label">Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels like</span>
            <span className="parameter-value"> 110°F</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value"> 4 mph</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value"> 70%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value"> 10 hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
