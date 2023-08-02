const searchButton = document.getElementById('searchButton');
searchButton.addEventListener('click', searchWeather);

function searchWeather() {
  const searchInput = document.getElementById('search').value;
  const cityId = getCityId(searchInput);

  if (cityId) {
    const apiUrl = `https://www.nishita-lab.org/web-contents/jsons/openweather/${cityId}.json`;
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('都市の天気情報が見つかりませんでした。');
        }
        return response.json();
      })
      .then(data => displayWeather(data))
      .catch(error => {
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = `<p>${error.message}</p>`;
      });
  } else {
    console.log('都市名が正しくありません。');
  }
}

function getCityId(cityName) {
  const cityIds = {
    'カイロ': 360630,
    'モスクワ': 524901,
    'ヨハネスブルク': 993800,
    '北京': 1816670,
    '東京': 1850147,
    'シンガポール': 1880252,
    'シドニー': 2147714,
    'ロンドン': 2643743,
    'パリ': 2968815,
    'リオデジャネイロ': 3451189,
    'ニューヨーク': 5128581,
    'ロサンゼルス': 5368361
  };

  const cityNamesInKatakana = Object.keys(cityIds);
  const cityNameInKatakana = cityNamesInKatakana.find(
    name => name === cityName
  );

  return cityNameInKatakana ? cityIds[cityNameInKatakana] : null;
}

function displayWeather(data) {
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = `
    <h2>${data.name}</h2>
    <p>天気: ${data.weather[0].description}</p>
    <p>気温: ${data.main.temp} ℃</p>
    <p>最低気温: ${data.main.temp_min} ℃</p>
    <p>最高気温: ${data.main.temp_max} ℃</p>
    <p>湿度: ${data.main.humidity} %</p>
    <p>風速: ${data.wind.speed} m/s</p>
    <p>風向: ${data.wind.deg} °</p>
  `;
}
