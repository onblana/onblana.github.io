const API_KEY = "e4d1ca81e132b8b3da82fb5dcf0a7508";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    // getCurrentPosition로부터 자동으로 전달된 position을 통해 위도와 경도를 알아냄.
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        weather.innerText = `날씨 ${data.weather[0].main} / 기온 ${data.main.temp}도, `;
        city.innerText = `위치 ${data.name}`;
      });
}

function onGeoError() {
    alert("Can't find your location.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);