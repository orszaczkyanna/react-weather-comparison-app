import { useState, useEffect } from "react";
import Inputs from "./components/Inputs";
import CurrentWeather from "./components/CurrentWeather";
import Forecast from "./components/Forecast";
import getFormattedData from "./weatherService";

function WeatherCard({ removeCard, initialCity, initialUnits }) {
  const [weather, setWeather] = useState(null);
  const [query, setQuery] = useState({ q: initialCity });
  const [units, setUnits] = useState(initialUnits);

  useEffect(() => {
    getWeather();
  }, [query, units]);

  async function getWeather() {
    try {
      const data = await getFormattedData({ ...query, units });
      setWeather(data);
      console.log(data);
    } catch (err) {
      console.error("Error fetching weather data:", err);
      setWeather(null);
    }
  }

  return (
    <div className="weather-card">
      <Inputs
        initialUnits={initialUnits}
        setQuery={setQuery}
        setUnits={setUnits}
      />
      {weather && (
        <>
          <CurrentWeather weather={weather} units={units} />
          <hr />
          <Forecast forecast={weather.dailyForecast} />
        </>
      )}
      <button className="btn-remove-card" onClick={removeCard}>
        ×
      </button>
    </div>
  );
}

export default WeatherCard;
