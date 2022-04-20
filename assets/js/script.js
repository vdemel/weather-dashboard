var APIkey = "8cf87abd13d1d3d6082dce15342621f0";

var getCityWeather = function() {
    fetch("http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=8cf87abd13d1d3d6082dce15342621f0");
};

getCityWeather();