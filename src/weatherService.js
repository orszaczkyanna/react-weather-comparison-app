import { DateTime } from "luxon";

// https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}
// https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&units=metric&appid={API_KEY}
const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5/";

// Fetch weather data from the OpenWeatherMap API
function getWeatherData(infoType, searchParams) {
  const url = new URL(BASE_URL + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Could not fetch resource");
      }
      return response.json();
    })
    .catch((err) => console.error(err));
}

// Create URL from icon code
function iconUrlFromCode(icon) {
  return `https://openweathermap.org/img/wn/${icon}@2x.png`;
}

// Convert Unix timestamp to formatted local time
function formatToLocalTime(secs, offset, format) {
  return DateTime.fromSeconds(secs + offset, { zone: "utc" }).toFormat(format);
}

// Destructure and format weather data from API response
function formatCurrentWeather(data) {
  const {
    coord: { lat, lon },
    name: cityName, // rename "name" to "cityName"
    sys: { country },
    dt, // when the data was fetched in epoch time
    timezone,
    main: { temp, humidity },
    wind: { speed: windSpeed }, // rename "speed" to "windSpeed"
    weather: [
      {
        main: weatherDescr, // rename "main" to "weatherDescr"
        icon,
      },
    ],
  } = data;

  const formattedLocalDate = formatToLocalTime(
    dt,
    timezone,
    "cccc, dd LLL yyyy"
  );
  const formattedLocalTime = formatToLocalTime(dt, timezone, "HH:mm");

  return {
    lat,
    lon,
    cityName,
    country,
    dt,
    timezone,
    temp,
    humidity,
    windSpeed,
    weatherDescr,
    icon: iconUrlFromCode(icon),
    formattedLocalDate,
    formattedLocalTime,
  };
}

// Format forecast data to provide daily data
function formatForecastWeather(data, offset, secs) {
  // const currentDay = formatToLocalTime(secs, offset, "dd");

  const dailyForecast = data
    // .filter((d) => {
    //   // forecast at 9 a.m
    //   const forecastDay = d.dt_txt.slice(8, 10); // d.dt_txt: 2024-08-03 09:00:00
    //   return d.dt_txt.slice(-8) === "09:00:00" && forecastDay !== currentDay;
    // })
    .filter((d) => d.dt_txt.slice(-8) === "09:00:00") // forecast at 9 a.m
    .slice(0, 5)
    .map((d) => ({
      temp: d.main.temp,
      date: formatToLocalTime(d.dt, offset, "ccc, LLL dd"),
      date_txt: d.dt_txt,
      icon: iconUrlFromCode(d.weather[0].icon),
      weatherDescr: d.weather[0].main,
    }));

  return { dailyForecast };
}

// Apply formatting
async function getFormattedData(searchParams) {
  // current weather
  const formattedCurrentWeatherData = await getWeatherData(
    "weather",
    searchParams
  ).then((data) => formatCurrentWeather(data));

  // forecast
  const { dt, lat, lon, timezone } = formattedCurrentWeatherData;
  const formattedCurrentForecastData = await getWeatherData("forecast", {
    lat,
    lon,
    units: searchParams.units,
  }).then((data) => formatForecastWeather(data.list, timezone, dt));

  return { ...formattedCurrentWeatherData, ...formattedCurrentForecastData };
}

export default getFormattedData;
