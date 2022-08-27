import '../assets/css/style.css';
/**
 * Weather App
 * TODO: Complete getWeatherData() to return json response Promise
 * TODO: Complete searchCity() to get user input and get data using getWeatherData()
 * TODO: Complete showWeatherData() to set the data in the the html file from response
 */

// API_KEY for maps api
let API_KEY = 'c354b8bdf0316e61199a54c4a37f9a7d';
const searchBtn = document.querySelector('.search-btn');
const cityName = document.getElementById('city-name');
const weatherType = document.getElementById('weather-type');
const temp = document.getElementById('temp');
const minTemp = document.getElementById('min-temp');
const maxTemp = document.getElementById('max-temp');

/**
 * Retrieve weather data from openweathermap
 * HINT: Use fetch()
 * HINT: URL should look like this:
 * https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
 *
 *
 */
const getWeatherData = (city) => {
  const URL = 'https://api.openweathermap.org/data/2.5/weather';
  const weatherUrl = `${URL}?q=${city}&appid=${API_KEY}&units=imperial`;
  const weatherPromise = fetch(weatherUrl);
  return weatherPromise
    .then((res) => res.json())
    .then((data) => showWeatherData(data))
    .catch((err) => console.log(err.message));
};

/**
 * Retrieve city input and get the weather data
 * HINT: Use the promise returned from getWeatherData()
 */

const showWeatherData = ({ main, name, weather }) => {
  //CODE GOES HERE
  const { description } = weather[0];
  cityName.textContent = name;
  weatherType.textContent = description;
  temp.textContent = main.temp;
  minTemp.textContent = main.temp_min;
  maxTemp.textContent = main.temp_max;
};

searchBtn.addEventListener('click', () => {
  const city = document.getElementById('city-input').value;
  getWeatherData(city);
  // CODE GOES HERE
});

String.prototype.reality = function () {
  return typeof this;
};

const nickName = 'El3aw';

console.log(nickName.reality());
