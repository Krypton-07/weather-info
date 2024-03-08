let showWeather = document.getElementById("showWeather");

showWeather.onclick = async function weather() {
    let apiKey = "b6e9d683c6d84e19c1222f44be25ce03";
    let x = "http:/";
    let cityInput = document.getElementById("cityInput").value;
    let apiUrl = `${x}/api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`;
    let response = await fetch(apiUrl);
    let data = await response.json();
    let city = document.getElementById("city");
    let temp = document.getElementById("temp");
    let humidity = document.getElementById("humidity");
    let windSpeed = document.getElementById("windSpeed");
    
    city.innerHTML = data.name;
    temp.innerHTML = Math.round(data.main.temp) + "°C";
    humidity.innerHTML = data.main.humidity + "%";
    windSpeed.innerHTML = data.wind.speed + "km/h";
    
    if(cityInput == ""){
        city.innerHTML = "...";
        temp.innerHTML = "...";
        humidity.innerHTML  = "...";
        windSpeed.innerHTML = "...";
    }

}
let cityInput = document.getElementById("cityInput").value;
if (cityInput == "") {
    city.innerHTML = "...";
    temp.innerHTML = "...";
    humidity.innerHTML  = "...";
    windSpeed.innerHTML = "...";
}
