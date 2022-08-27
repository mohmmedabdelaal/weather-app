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
  const FULL_URL = `${URL}?q=${city}&appid=${API_KEY}&units=imperial`;
  const fetchData = fetch(FULL_URL);
  return fetchData.then((response) => {
    return response.json();
  });
};

/**
 * Retrieve city input and get the weather data
 * HINT: Use the promise returned from getWeatherData()
 */
const cityName = document.getElementById('city-name');
const weatherType = document.getElementById('weather-type');
const showWeatherData = (weatherData) => {
  console.log(weatherData);
  const { weather } = weatherData;
  const { description } = weather[0];
  cityName.textContent = weatherData.name;
  weatherType.textContent = description;
  //CODE GOES HERE
};

searchBtn.addEventListener('click', () => {
  const city = document.getElementById('city-input').value;
  console.log(city);
  getWeatherData(city)
    .then((res) => showWeatherData(res) || console.log(res))
    .catch((err) => console.log(err.message));
  // CODE GOES HERE
});
/**
 * Show the weather data in HTML
 * HINT: make sure to console log the weatherData to see how the data looks like
 */
