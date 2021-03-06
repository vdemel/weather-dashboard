var APIkey = '8cf87abd13d1d3d6082dce15342621f0';
var userFormEl = document.querySelector('#user-form');
var cityInputEl = document.querySelector('#cityName');
var weatherContainerEl = document.querySelector('#weather-container');
var citySearchTerm = document.querySelector('#city-search-term');
var humidityEl = document.getElementById('humidity')

var weatherItemEl = document.getElementById("weather-item")
var data = '';
var city = '';

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


var getCityWeather = (city) => {
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIkey;
    fetch(apiUrl)
    .then(res => res.json())
    .then(data => {
        var humidity = data['main']['humidity'];
        var temp = data['main']['temp'];
        var windSpeed = data['wind']['speed'];
    console.log(data)
    console.log(humidity)
    })
}
// var getCityWeather = function (city) {
//     var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIkey;
//     fetch(apiUrl)
//      .then(function(response) { 

//         if (response.ok) {
//             return response.json()
//             .then(function(data) {
//             var weatherArray = data.visibility;
//             for (var i = 0; i < weatherArray.length; i++) {
//                 var weatherItem = document.createElement("li");
//                 weatherItem.textContent = weatherArray[i].visibility;
//                 weatherItemEl.appendChild(weatherItem);
             
//         console.log(data);
//             }
//          });
//      }
//         else {
//             alert('Error: ' + response.statusText);
//      }
//     })    
//     .catch(function(error) {
//         alert.apply('Unable to retrieve weather');
//     });

// }

var displayWeather = function(city) {

    humidityEl = document.createElement('span');
    humidityEl.textContent = innerhtml.humidity;
    humidityEl.appendChild.weatherContainerEl;
    
};

userFormEl.addEventListener('submit', formSubmitHandler);

    