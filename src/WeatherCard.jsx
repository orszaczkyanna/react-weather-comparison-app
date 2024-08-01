import { useState } from "react";
import Inputs from "./components/Inputs";
import CurrentWeather from "./components/CurrentWeather";
import Forecast from "./components/Forecast";

function WeatherCard({ id, removeCard }) {
  return (
    <div className="weather-card">
      <button className="btn-remove-card" onClick={removeCard}>
        ×
      </button>
      <Inputs />
      <CurrentWeather />
      <hr />
      <Forecast />
    </div>
  );
}

export default WeatherCard;
