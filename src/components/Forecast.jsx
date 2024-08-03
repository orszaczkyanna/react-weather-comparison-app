function Forecast({ forecast }) {
  return (
    <div className="forecast-container">
      <h2>Daily Forecast</h2>
      <div>
        {forecast.map((f, index) => (
          <div key={index} className="forecast-row">
            <div className="forecast-icon-and-temp">
              <img src={f.icon} alt="weather icon" className="forecast-icon" />
              <div>
                <p className="forecast-temp">{`${f.temp.toFixed()}°`}</p>
                <p className="forecast-description">{f.weatherDescr}</p>
              </div>
            </div>
            <p className="forecast-date">{f.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forecast;
