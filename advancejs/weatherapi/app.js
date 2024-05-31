const sets = [];

const data = async () => {
  try {
    let q = search.value;
    const API = 'f76939971b744b26025b5dabbbfdc107';
    const forecast = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${q}&appid=${API}`);
    const response = await forecast.json();
    sets.push(response);
    console.log(sets);
  } catch (error) {
    console.error(error);
  }
};

data();

const populate = async () => {
  const search = document.getElementById('search');
  const cityName = document.querySelector('#content h2');
  const day = document.querySelector('#content p');
  const temperature = document.querySelectorAll('.one p')[1];

  search.addEventListener('input', (event) => {
    const userInput = event.target.value;
    const cityData = sets[0];


    cityName.textContent = cityData.city.name;


    const relevantForecast = cityData.list.find(item => {
      const forecastDate = new Date(item.dt_txt);
      const userDate = new Date(userInput);
      return forecastDate.getDate() === userDate.getDate();
    });


    if (relevantForecast) {
      const date = new Date(relevantForecast.dt_txt);
      day.textContent = date.toLocaleDateString('en-US', { weekday: 'long' });
      temperature.textContent = `${Math.round(relevantForecast.main.temp - 273.15)}°C`;
    } else {
      day.textContent = 'Day not found';
      temperature.textContent = 'Temperature not available';
    }
  });
};

populate();
