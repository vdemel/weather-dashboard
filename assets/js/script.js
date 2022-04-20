var APIkey = "8cf87abd13d1d3d6082dce15342621f0";
var userFormEl = document.querySelector("#user-form");
var cityInputEl = document.querySelector("#cityName");
var cityContainerEl = document.querySelector("#cities-container");
var citySearchTerm = document.querySelector("city-search-term");

var formSubmitHandler = function(event) {
    event.preventDefault();
    // get value from input element
    var cityName = cityInputEl.value.trim();

    if (cityName)  {
        getCityWeather(cityName);

        //clear old content
        cityContainerEl.textContent = "";
        cityInputEl.value = "";
    } else {
        alert("Please enter a valid city name");
    }
} 

var getCityWeather = function(cityName) {
    fetch("http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=8cf87abd13d1d3d6082dce15342621f0").then(function(response) {
        response.json().then(function(data) {
            displayWeather(data, cityName);
        });
    });
}

var displayWeather = function (cityName, SearchTerm) {
    console.log(cityName);
    console.log(citySearchTerm);
};

// add event listener to form
userFormEl.addEventListener("submit", formSubmitHandler);

getCityWeather();

