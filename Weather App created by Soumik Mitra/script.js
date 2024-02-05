"use strict";
//57f6b78c94138a4ee8baddd7b23294a3 -- My API key.

const search = document.querySelector(".search-icon");
search.addEventListener("click", () => {
  const apiKey = "57f6b78c94138a4ee8baddd7b23294a3";
  const cityInput = document.getElementById("cityInput").value;
  const cityName = document.querySelector(".cityName");
  const currTemp = document.querySelector(".temp");
  const feelsLike = document.querySelector(".feelsLike");
  const maxTemp = document.querySelector(".maxTemp");
  const minTemp = document.querySelector(".minTemp");
  const weatherDesc = document.querySelector(".weatherDesc");
  const weatherIcon = document.querySelector(".weatherIcon");
  const imageURL = 'https://openweathermap.org/img/wn/';

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=metric&appid=${apiKey}`
  )
    .then((Response) => Response.json())
    .then((json) => {
      console.log(json);
      cityName.textContent = json.name + ", " + json.sys["country"];
      currTemp.textContent = json.main["temp"];
      feelsLike.textContent = json.main["feels_like"];
      maxTemp.textContent = json.main["temp_max"];
      minTemp.textContent = json.main["temp_min"];
      weatherDesc.textContent = json.weather["0"]["description"];
      weatherIcon.src = `${imageURL}${json.weather['0']["icon"]}@2x.png`;
    });
});
