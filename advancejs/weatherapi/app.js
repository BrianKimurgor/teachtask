const sets = [];

const data = async () => {
  try {
    let q = 'Nakuru';
    const API = 'f76939971b744b26025b5dabbbfdc107';
    const forecast = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${API}`);
    const response = await forecast.json();
    sets.push(response);
    console.log(sets); // Logs the array with data after successful fetch
  } catch (error) {
    console.error(error);
  }
};

data();

const populate = async () => {
  await data();
  const main = document.createElement('main');
  document.body.appendChild(main);

  sets.map(set => {
    const div = document.createElement('div');
    const day = document.createElement('p');
    const city = document.createElement('h2');
    const description = document.createElement('p');


    day.textContent = `${set.state}`;
    city.textContent = `${set.name}`;
    description.textContent = `${set.country}`;

    main.appendChild(div);
    div.appendChild(day);
    div.appendChild(city);
    div.appendChild(description);
  });
};

populate();
