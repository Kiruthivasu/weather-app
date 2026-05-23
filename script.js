async function getWeather() {

  const city = document.getElementById("city").value;

  const apiKey = "f650dafd2b2f4aec974125554261005";

  const url =
  `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

  try {

    const response = await fetch(url);

    const data = await response.json();

    console.log(data);

    if (data.error) {
      alert(data.error.message);
      return;
    }

    document.getElementById("cityName").innerText =
    `${data.location.name}, ${data.location.country}`;

    document.getElementById("temp").innerText =
    `${data.current.temp_c}°C`;

    document.getElementById("condition").innerText =
    data.current.condition.text;

    document.getElementById("humidity").innerText =
    `${data.current.humidity}%`;

    document.getElementById("wind").innerText =
    `${data.current.wind_kph} km/h`;

    document.getElementById("icon").src =
    `https:${data.current.condition.icon}`;

  }

  catch (error) {

    console.log(error);

    alert("Something went wrong");

  }
}