const myKey = "524de47951348514881bedc93af15627";

async function weatherChecking() {
  try {
    const city = document.getElementById('cityName').value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myKey}&units=metric`;

    let getApi = await fetch(apiUrl);
    let realData = await getApi.json();
    console.log(realData);

    let display = document.getElementById('result');
    let div = document.getElementById('main');

    if (realData.cod === 200) {
      display.innerHTML = `
        <h1>${realData.name} Weather</h1>
        <p>${realData.main.temp} °C</p>
        <p>${realData.main.humidity} %</p>
      `;

      // background change based on temperature
      if (realData.main.temp < 15) {
        div.style.backgroundImage = "url('./assets/cold.jpeg')";
      } else {
        div.style.backgroundImage = "url('./assets/hot.jpeg')";
      }
    } else {
      display.innerHTML = `${realData.message}`;
      div.style.backgroundImage = "url('./assets/normal.jpeg')";
    }

  } catch (err) {
    console.log(err);
  }
}