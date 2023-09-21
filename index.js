const apiKey = "f97549144ba3c63318474426e8160c6c";
const apiUrlWeather = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon")
const urlCountryUser = "https://api.country.is/"
async function checkWeather(city) {
    const response = await fetch(apiUrlWeather + city + `&appid=${apiKey}`);
    let data = await response.json();

    console.log(data)

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    document.querySelector(".direction").innerHTML = data.wind.deg + "°";
    document.querySelector(".country").innerHTML = data.sys.country;

    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "images/clouds.png"
    } else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "images/clear.png"
    } else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "images/rain.png"
    } else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "images/drizzle.png"
    } else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "images/mist.png"
    } else {
        weatherIcon.src = "images/snow.png"
    }
}

async function checkCountryUser() {
    const response = await fetch(urlCountryUser);
    let data = await response.json();

    console.log(data)
    document.querySelector(".country-user").innerHTML = "Vous êtes actuellement connecté depuis : " + data.country;

}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value)
    
})

checkCountryUser()


