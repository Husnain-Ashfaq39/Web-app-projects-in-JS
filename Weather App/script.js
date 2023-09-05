let cont1 = document.querySelector('.cont1');
let cont2 = document.querySelector('.cont2');
let ylocation = document.querySelector('.ylocation');
let clocation = document.querySelector('.clocation');
let temp = document.querySelectorAll('.temp');
let clouds = document.querySelectorAll('.clouds');
let city = document.querySelectorAll('.city');
let speed = document.querySelectorAll('.speed');
let humidity = document.querySelectorAll('.humidity');
let cloud_perc = document.querySelectorAll('.cloud_perc');
let input = document.querySelector('input');
let search_button = document.querySelector('.search');
let flag = document.querySelectorAll('.flag');
let weather_icon = document.querySelectorAll('.weather_icon');
let gif = document.querySelector('.gif');

ylocation.addEventListener('click', function (e) {
    if (cont1.classList.contains('disable')) {
        cont1.classList.remove('disable');
        cont2.classList.add('disable');
    }

    showYourWeather();
});

clocation.addEventListener('click', function (e) {
    if (cont2.classList.contains('disable')) {
        cont2.classList.remove('disable');
        cont1.classList.add('disable');
    }

});

search_button.addEventListener('click', () => {
    if (input.value == '') {
        alert("please enter city name first");
    }
    else {
        let city = input.value;
        console.log(city);
        showCustomWeather(city);
    }
})
// function customCityHandler()
// {

// }

async function showYourWeather() {
    // Check if geolocation is available in the browser
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async function (position) {
            let lat = position.coords.latitude;
            let long = position.coords.longitude;

            let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=df46a9cd6e5992c0a6a40feadd021af8`);
            let data = await response.json();

            RenderData(data, 0);
        });
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
}

async function showCustomWeather(city) {

    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=df46a9cd6e5992c0a6a40feadd021af8`);
    let data = await response.json();
    RenderData(data, 1);
}

async function RenderData(data, i) {
    let num = (data.main.temp - 273).toFixed(2);
    temp[i].textContent = `${num}°C`;
    clouds[i].textContent = data.weather[0].description;
    city[i].textContent = data.name;
    speed[i].textContent = `${data.wind.speed}m/s`;
    humidity[i].textContent = `${data.main.humidity}%`;
    cloud_perc[i].textContent = `${data.clouds.all}%`;
    flag[i].src = await `https://flagcdn.com/144x108/${data.sys.country.toLowerCase()}.png`;
    console.log(weather_icon);
    weather_icon[i].src = await `https://openweathermap.org/img/w/${data.weather[0].icon}.png`
    console.log(weather_icon[i].src);
}
