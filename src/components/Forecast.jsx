import { useState } from "react";

function Forecast() {
  const dataExample = [
    {
      id: 1,
      icon_url: "https://openweathermap.org/img/wn/01d@2x.png",
      date: "Wed, July 12",
      weather_description: "Clear",
      temp: "23°",
    },
    {
      id: 2,
      icon_url: "https://openweathermap.org/img/wn/02d@2x.png",
      date: "Thurs, July 13",
      weather_description: "Few Clouds",
      temp: "26°",
    },
    {
      id: 3,
      icon_url: "https://openweathermap.org/img/wn/03d@2x.png",
      date: "Fri, July 14",
      weather_description: "Scattered Clouds",
      temp: "30°",
    },
    {
      id: 4,
      icon_url: "https://openweathermap.org/img/wn/10d@2x.png",
      date: "Sat, July 15",
      weather_description: "Rain",
      temp: "24°",
    },
    {
      id: 5,
      icon_url: "https://openweathermap.org/img/wn/01d@2x.png",
      date: "Sun, July 16",
      weather_description: "Clear",
      temp: "20°",
    },
  ];

  return (
    <div className="forecast-container">
      <h2>Daily Forecast</h2>
      <div>
        {dataExample.map((data) => (
          <div key={data.id} className="forecast-row">
            <div className="forecast-icon-and-temp">
              <img
                src={data.icon_url}
                alt="weather icon"
                className="forecast-icon"
              />
              <div>
                <p className="forecast-temp">{data.temp}</p>
                <p className="forecast-description">
                  {data.weather_description}
                </p>
              </div>
            </div>
            <p className="forecast-date">{data.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forecast;
