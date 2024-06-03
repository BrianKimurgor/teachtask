const sets = [
  // {
  //   "cod": "200",
  //   "message": 0,
  //   "cnt": 5,
  //   "list": [
  //     {
  //       "dt": 1717146000,
  //       "main": {
  //         "temp": 292.88,
  //         "feels_like": 292.79,
  //         "temp_min": 292.88,
  //         "temp_max": 296.48,
  //         "pressure": 1023,
  //         "sea_level": 1023,
  //         "grnd_level": 840,
  //         "humidity": 72,
  //         "temp_kf": -3.6
  //       },
  //       "weather": [
  //         {
  //           "id": 802,
  //           "main": "Clouds",
  //           "description": "scattered clouds",
  //           "icon": "03d"
  //         }
  //       ],
  //       "clouds": {
  //         "all": 34
  //       },
  //       "wind": {
  //         "speed": 2.3,
  //         "deg": 187,
  //         "gust": 2.03
  //       },
  //       "visibility": 10000,
  //       "pop": 0,
  //       "sys": {
  //         "pod": "d"
  //       },
  //       "dt_txt": "2024-05-31 09:00:00"
  //     },
  //     {
  //       "dt": 1717156800,
  //       "main": {
  //         "temp": 295.03,
  //         "feels_like": 294.94,
  //         "temp_min": 295.03,
  //         "temp_max": 297.01,
  //         "pressure": 1017,
  //         "sea_level": 1017,
  //         "grnd_level": 839,
  //         "humidity": 64,
  //         "temp_kf": -1.98
  //       },
  //       "weather": [
  //         {
  //           "id": 500,
  //           "main": "Rain",
  //           "description": "light rain",
  //           "icon": "10d"
  //         }
  //       ],
  //       "clouds": {
  //         "all": 50
  //       },
  //       "wind": {
  //         "speed": 2.34,
  //         "deg": 129,
  //         "gust": 2.59
  //       },
  //       "visibility": 10000,
  //       "pop": 0.27,
  //       "rain": {
  //         "3h": 1.17
  //       },
  //       "sys": {
  //         "pod": "d"
  //       },
  //       "dt_txt": "2024-05-31 12:00:00"
  //     },
  //     {
  //       "dt": 1717167600,
  //       "main": {
  //         "temp": 292.29,
  //         "feels_like": 292.43,
  //         "temp_min": 292.29,
  //         "temp_max": 292.29,
  //         "pressure": 1016,
  //         "sea_level": 1016,
  //         "grnd_level": 838,
  //         "humidity": 83,
  //         "temp_kf": 0
  //       },
  //       "weather": [
  //         {
  //           "id": 501,
  //           "main": "Rain",
  //           "description": "moderate rain",
  //           "icon": "10d"
  //         }
  //       ],
  //       "clouds": {
  //         "all": 74
  //       },
  //       "wind": {
  //         "speed": 3.13,
  //         "deg": 75,
  //         "gust": 5.67
  //       },
  //       "visibility": 10000,
  //       "pop": 0.84,
  //       "rain": {
  //         "3h": 3.45
  //       },
  //       "sys": {
  //         "pod": "d"
  //       },
  //       "dt_txt": "2024-05-31 15:00:00"
  //     },
  //     {
  //       "dt": 1717178400,
  //       "main": {
  //         "temp": 290.39,
  //         "feels_like": 290.52,
  //         "temp_min": 290.39,
  //         "temp_max": 290.39,
  //         "pressure": 1018,
  //         "sea_level": 1018,
  //         "grnd_level": 839,
  //         "humidity": 90,
  //         "temp_kf": 0
  //       },
  //       "weather": [
  //         {
  //           "id": 500,
  //           "main": "Rain",
  //           "description": "light rain",
  //           "icon": "10n"
  //         }
  //       ],
  //       "clouds": {
  //         "all": 72
  //       },
  //       "wind": {
  //         "speed": 3.06,
  //         "deg": 52,
  //         "gust": 5.89
  //       },
  //       "visibility": 10000,
  //       "pop": 0.89,
  //       "rain": {
  //         "3h": 1.39
  //       },
  //       "sys": {
  //         "pod": "n"
  //       },
  //       "dt_txt": "2024-05-31 18:00:00"
  //     },
  //     {
  //       "dt": 1717189200,
  //       "main": {
  //         "temp": 289.57,
  //         "feels_like": 289.7,
  //         "temp_min": 289.57,
  //         "temp_max": 289.57,
  //         "pressure": 1019,
  //         "sea_level": 1019,
  //         "grnd_level": 839,
  //         "humidity": 93,
  //         "temp_kf": 0
  //       },
  //       "weather": [
  //         {
  //           "id": 500,
  //           "main": "Rain",
  //           "description": "light rain",
  //           "icon": "10n"
  //         }
  //       ],
  //       "clouds": {
  //         "all": 79
  //       },
  //       "wind": {
  //         "speed": 2.11,
  //         "deg": 50,
  //         "gust": 5.24
  //       },
  //       "visibility": 10000,
  //       "pop": 0.31,
  //       "rain": {
  //         "3h": 0.4
  //       },
  //       "sys": {
  //         "pod": "n"
  //       },
  //       "dt_txt": "2024-05-31 21:00:00"
  //     }
  //   ],
  //   "city": {
  //     "id": 184745,
  //     "name": "Nairobi",
  //     "coord": {
  //       "lat": -1.2833,
  //       "lon": 36.8167
  //     },
  //     "country": "KE",
  //     "population": 2750547,
  //     "timezone": 10800,
  //     "sunrise": 1717126147,
  //     "sunset": 1717169528
  //   }
  // }
];

const data = async () => {
  try {
    let q = 'Nairobi';
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


const populate = async () =>{
  const search = document.getElementById('search')
  const btn = document.getElementById('button')
  const content = document.getElementById('content')
  await data()


  content.textContent = `${sets.name}`
}
