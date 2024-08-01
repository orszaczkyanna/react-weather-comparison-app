import { useState } from "react";
import { BiSolidDropletHalf } from "react-icons/bi";
import { FiWind } from "react-icons/fi";

function CurrentWeather() {
  const horizontalDetails = [
    {
      id: 1,
      Icon: BiSolidDropletHalf,
      title: "Humidity",
      data: "75%",
    },
    {
      id: 2,
      Icon: FiWind,
      title: "Wind Speed",
      data: "3 m/s",
    },
  ];

  return (
    <div className="current-weather-container">
      <h1>London, GB</h1>
      <p className="current-date">Thursday, 01 Aug 2024</p>
      <p className="current-time">Local time: 13:17</p>
      <img
        src="https://openweathermap.org/img/wn/01d@2x.png"
        alt="weather icon"
        className="current-weather-icon"
      />
      <p className="current-weather-temp">19°</p>
      <p className="current-weather-description">Clouds</p>

      <div className="current-weather-details">
        {horizontalDetails.map((detail) => (
          <div key={detail.id}>
            <detail.Icon size={20} />
            <p className="current-weather-details-title">{detail.title}</p>
            <p className="current-weather-details-data">{detail.data}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CurrentWeather;
