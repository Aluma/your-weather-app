'use strict';

/* NOTE: In a real-world production app, we should obfuscate the apiKey behind an env variable */
const apiKey = 'f24f40b1c24505685fce3b8acd0fcffc';
const cityName = document.getElementById('city-name');
const icon = document.getElementById('icon');
const searchButton = document.getElementById('search-btn');
const searchInput = document.getElementById('search-txt');
const temperature = document.getElementById('temp');


/**
 * @function - Makes an asynchronous http request.
 * @param {string} url - The url to call and make the request.
 * @param {function} callback - Invoked if http request is successful and passes the response to it.
 */
const makeAsyncHttpRequest = (url, callback) => {
    const request = new XMLHttpRequest();
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            callback(request.responseText);
        }
        else {
            console.log('REQUEST STATUS:', request.status);
        }
    };
    request.open('GET', url, true);
    request.send();
};

/**
 * @function - Parses the weather response and grabs the city name, temperature and icon to display on the UI.
 * @param {string} response - Stringified JSON object with weather data.
 */
const setWeatherResponse = (response) => {
    const jsonObject = JSON.parse(response);
    cityName.innerHTML = jsonObject.name;
    icon.src = 'http://openweathermap.org/img/w/' + jsonObject.weather[0].icon + '.png';
    temperature.innerHTML = parseInt(jsonObject.main.temp) + '°';
};

/**
 * @function - Checks for valid input then builds the request query string, passes it to the http request
 * along with the response, and executes the http request.
 */
const getWeatherData = () => {
    if (searchInput.value === '') {
        searchInput.reportValidity();
    } else {
        const apiQueryString = 'https://api.openweathermap.org/data/2.5/weather?q=' + searchInput.value +
            '&units=imperial' + '&appid=' + apiKey;
        makeAsyncHttpRequest(apiQueryString, setWeatherResponse);
    }
};

/**
 * @function
 * @param {object} event - global event object for tracking if the enter key was pressed
 */
const isSearchExecuted = (event) => {
    if (event.key === 'Enter') {
        getWeatherData();
    }
};

searchInput.addEventListener('keyup', isSearchExecuted);
searchButton.addEventListener('click', getWeatherData);

