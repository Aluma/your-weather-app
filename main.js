'use strict';

/* NOTE: This is a publicly found API key. It is not mine. In a real-world production app, we should obfuscate the
apiKey behind an env variable */
const apiKey = 'f24f40b1c24505685fce3b8acd0fcffc';
const city = document.getElementsByClassName('city');
const cityName = document.getElementById('city-name');
const clientErrorMsg = document.getElementById('client-error');
const icon = document.getElementById('icon');
const searchButton = document.getElementById('search-btn');
const searchInput = document.getElementById('search-txt');
const serverErrorMsg = document.getElementById('server-error');
const temp = document.getElementById('temp');
const temperature = document.getElementsByClassName('temperature');


/**
 * @function - Parses the weather data and grabs the city name, temp and icon to display on the UI.
 * @param {string} data - Parsed JSON object with weather data.
 */
const setWeatherResponse = (data) => {
    cityName.innerHTML = data.name;
    icon.src = 'https://openweathermap.org/img/w/' + data.weather[0].icon + '.png';
    temp.innerHTML = parseInt(data.main.temp) + '°F';
};

/**
 * @function - Makes an asynchronous http request.
 * @param {string} url - The url to call and make the request.
 */
const makeAsyncHttpRequest = (url) => {
    fetch(url)
        .then(response => {
            if (response.status >= 400 && response.status <= 451) {
                city[0].classList.add('hidden');
                temperature[0].classList.add('hidden');
                clientErrorMsg.classList.remove('hidden');

            }
            if (response.status >= 500 && response.status <= 511) {
                city[0].classList.add('hidden');
                temperature[0].classList.add('hidden');
                serverErrorMsg.classList.remove('hidden');
            }
            if (response.ok) {
                response.json().then(data => {
                    city[0].classList.remove('hidden');
                    temperature[0].classList.remove('hidden');
                    clientErrorMsg ? clientErrorMsg.classList.add('hidden') : '';
                    serverErrorMsg ? serverErrorMsg.classList.add('hidden') : '';
                    setWeatherResponse(data);
                });
            }
        })
        .catch(err => {
            console.log('Fetch Error :---->', err);
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
 * @function - Checks if search is executed.
 * @param {object} event - global event object for tracking if the enter key was pressed
 */
const isSearchExecuted = (event) => {
    if (event.key === 'Enter') {
        getWeatherData();
    }
};

searchInput.addEventListener('keyup', isSearchExecuted);
searchButton.addEventListener('click', getWeatherData);