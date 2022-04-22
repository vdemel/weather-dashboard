var APIkey = '8cf87abd13d1d3d6082dce15342621f0';
var userFormEl = document.querySelector('#user-form');
var cityInputEl = document.querySelector('#cityName');
var cityContainerEl = document.querySelector('#cities-container');
var citySearchTerm = document.querySelector('#city-search-term');

var formSubmitHandler = function (event) {
    event.preventDefault();
    console.log(event);
};
    
    var cityName = cityInputEl.value.trim();

    if (cityName)  {
        getCityWeather(cityName);

        //clear old content
        cityContainerEl.textContent = '';
        cityInputEl.value = '';
    } else {
        alert('Please enter a valid city name');
    }

var getCityWeather = function (cityName) {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=London&appid=APIkey') .then(function(response) { 

        if (response.ok) {
            console.log(response);
            response.json().then(function (data) {
                console.log(data);
                displayWeather(data, cityName);
        });
    } else {
        alert('Error: ' + response.statusText);
    }
    })
    .catch(function (error) {
        alert.apply('Unable to retrieve weather');
    });
};

var displayWeather = function (weather, searchTerm) {

    console.log(weather);
    console.log(searchTerm);

    cityContainerEl.textContent = '';
    citySearchTerm.textContent = searchTerm;

    for (var i = 0; i < 5; i++) {
        var dailyWeather = weather[i].cityName;

        var dailyWeatherEl = document.createElement("span");
        dailyWeather.textContent = weather;

        dailyWeatherEl.appendChild(dailyWeather);


    }
        

    
    
};

userFormEl.addEventListener('submit', formSubmitHandler);



