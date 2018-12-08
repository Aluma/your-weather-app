'use strict';

/* NOTE: In a real-world production app, we should obfuscate the apiKey behind an env variable */
const apiKey = 'f24f40b1c24505685fce3b8acd0fcffc';
const cityName = document.getElementById('city-name');
const icon = document.getElementById('icon');
const searchButton = document.getElementById('search-btn');
const searchInput = document.getElementById('search-txt');
const temperature = document.getElementById('temp');


/**
 * @function - Parses the weather data and grabs the city name, temperature and icon to display on the UI.
 * @param {string} data - Parsed JSON object with weather data.
 */
const setWeatherResponse = (data) => {
    cityName.innerHTML = data.name;
    icon.src = 'https://openweathermap.org/img/w/' + data.weather[0].icon + '.png';
    temperature.innerHTML = parseInt(data.main.temp) + '°F';
};

/**
 * @function - Makes an asynchronous http request.
 * @param {string} url - The url to call and make the request.
 */
const makeAsyncHttpRequest = (url) => {
    fetch(url)
        .then(response => {
            if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' + response.status);
                return;
            }
            response.json().then(data => {
                setWeatherResponse(data);
            });
        })
        .catch(err => {
            console.log('Fetch Error :-S', err);
        });
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
        makeAsyncHttpRequest(apiQueryString);
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
