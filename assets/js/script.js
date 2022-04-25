var APIkey = '8cf87abd13d1d3d6082dce15342621f0';
var userFormEl = document.querySelector('#user-form');
var cityInputEl = document.querySelector('#cityName');
var weatherContainerEl = document.querySelector('#weather-container');
var citySearchTerm = document.querySelector('#city-search-term');

var data = '';

var formSubmitHandler = function (event) {
    event.preventDefault();
    console.log(event);

    var cityName = cityInputEl.value.trim();

    if (cityName)  {
        getCityWeather(cityName);
        cityInputEl.value = '';
    } else {
        alert('Please enter a valid city name');
    }
};

var getCityWeather = function (city) {
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIkey;
    fetch(apiUrl)
     .then(function(response) { 

        if (response.ok) {
            console.log(response);
            response.json().then(function (data) {
                console.log(data);
                displayWeather(data);
                const { temp } = data.main;
                const place = data.name;
                const { description, icon} = data.weather[0];
                const { sunrise, sunset } = data.sys;
                
        });
    } else {
        alert('Error: ' + response.statusText);
    }
    })
    .catch(function (error) {
        alert.apply('Unable to retrieve weather');
    });

    
};



var displayWeather = function (weatherData) {

    for (var i = 0; i < data.length; i++) {
    const {weather, wind} = data;
    console.log(place);
    console.log(temp);
    var humidityEl = document.createElement('span');
    humidityEl.textContent = weatherData.main.humidity;
    humidityEl.appendChild.weatherContainerEl;
    }
};

userFormEl.addEventListener('submit', formSubmitHandler);



