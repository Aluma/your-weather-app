# your-weather-app

This is a simple JavaScript ES6+ PWA (Progressive Web Application) weather app that takes a city name and returns the current weather for that city by using the openweathermap API. I have consciously chosen to make this app minimal. There are no libraries (unless you want to count FontAwesome), frameworks, tests, task runners, build tools, etc.

Tech used:

JavaScript ES6+

HTML5

CSS3
______________________________________________________________________________________________________________________________

NOTE: I believe the publicly sourced API key that I'm using to access the openweathermap API is no longer working. I strongly urge you to replace the 'const apiKey' on line 5 of the 'main.js' file with a reference to your own private API key that you can obtain for free from openweathermap.

Instructions:

1) Download the repo ZIP file, or clone the repo:
https://github.com/Aluma/your-weather-app.git

2) Open the index.html file in one of the popular browsers.

3) Enter city name in the appropriate field and execute the search via 'Enter' key or clicking/tapping the search icon. Please enter city name only; no state. This is due to a limitation of the openweathermap API as detailed below.

That's it! :-)
_____________________________________________________________________________________________________________________________

*** Known Limitation: openweathermap API currently only accepts city name in the search field. It has no way of identifying U.S. state abbreviations. So, for cities with duplicate names one would have to provide the exact geo coordinates, or perhaps the city code. This limitaion is discussed here:
https://openweathermap.desk.com/customer/portal/questions/16829365-state-is-missing-from-the-location-information-only-shows-city-this-is-critical-for-us-clients

______________________________________________________________________________________________________________________________

DEMO:
https://aluma.github.io/your-weather-app/index.html
<br>
<br>
Lighthouse Audit Report:
<br>
<img src="https://i.ibb.co/sbzMmXk/lighthouse-audit-report.png" alt="Lighthouse audit report" border="0">
<br>
<br>
Before weather search:
<br>
<img src="https://i.ibb.co/9GVC8B5/Screen-Shot-2018-12-08-at-12-55-59-AM.png" alt="app screenshot" border="0">
<br>
<br>
After weather search:
<br>
<img src="https://i.ibb.co/NWgvG0v/Screen-Shot-2018-12-10-at-1-22-28-AM.png" alt="search result screenshot" border="0">
<br>
<br>
______________________________________________________________________________________________________________________________
