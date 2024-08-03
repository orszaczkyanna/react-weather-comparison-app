import { BiSolidDropletHalf } from "react-icons/bi";
import { FiWind } from "react-icons/fi";

function CurrentWeather({
  weather: {
    cityName,
    country,
    formattedLocalDate,
    formattedLocalTime,
    weatherDescr,
    icon,
    temp,
    humidity,
    windSpeed,
  },
  units,
}) {
  const horizontalDetails = [
    {
      id: 1,
      Icon: BiSolidDropletHalf,
      title: "Humidity",
      data: `${humidity}%`,
    },
    {
      id: 2,
      Icon: FiWind,
      title: "Wind Speed",
      data: `${windSpeed.toFixed()} ${units === "metric" ? "m/s" : "mph"}`,
    },
  ];

  return (
    <div className="current-weather-container">
      <h1>
        {cityName}, {country}
      </h1>
      <p className="current-date">{formattedLocalDate}</p>
      <p className="current-time">Local time: {formattedLocalTime}</p>
      <img src={icon} alt="weather icon" className="current-weather-icon" />
      <p className="current-weather-temp">{temp.toFixed()}°</p>
      <p className="current-weather-description">{weatherDescr}</p>

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
