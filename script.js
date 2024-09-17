
// const options = {
//     method: "GET",
//     headers: {
//         "X-RapidAPI-Key": "1d53d369c2msh369610687b84d7ep18ba10jsnf572dd61be67",
//         "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com"
//     }
// };
// const getWeather = (city) =>{
// 	cityName.innerHTML=city
// fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('HTTP error! status: ${response.status}');
//         }
//         return response.json();
//     })
//     .then(response => {
//         console.log(response);
//         // Populate your HTML elements with the data
       
//         temp.innerHTML = response.temp
//         min_temp.innerHTML = response.min_temp
//         max_temp.innerHTML = response.max_temp
//         cloud_pct.innerHTML = response.cloud_pct
//         feels_like.innerHTML = response.feels_like
//         humidity.innerHTML = response.humidity
//         wind_speed.innerHTML = response.wind_speed
//         wind_degrees.innerHTML = response.wind_degrees
//         sunrise.innerHTML = response.sunrise
//         sunset.innerHTML = response.sunset 
//     })
//     .catch(err => {
//         console.error(err);
//         alert("An error occurred while fetching the weather data. Please try again later.");
//     });
// }
// submit.addEventListener("click",(e)=>{
// 	e.preventDefault()
// 	getWeather(city.value)
// })
// getWeather("Delhi")
// -----------------------------------------------------------------------------------------------------------------------------------
// const apiKey = '641a05a07fccc72af7a85bd094cc42f2';  // Replace with your OpenWeatherMap API key

// async function getWeather(city) {
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

//     try {
//         const response = await fetch(url);
//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const data = await response.json();
//         updateWeatherUI(data);
//     } catch (error) {
//         console.error('Error:', error);
//         alert("An error occurred while fetching the weather data. Please try again later.");
//     }
// }

// function updateWeatherUI(data) {
//     document.getElementById('cityName').textContent = data.name;
//     document.getElementById('temp').textContent = data.main.temp;
//     document.getElementById('min_temp').textContent = data.main.temp_min;
//     document.getElementById('max_temp').textContent = data.main.temp_max;
//     document.getElementById('cloud_pct').textContent = data.clouds.all;
//     document.getElementById('feels_like').textContent = data.main.feels_like;
//     document.getElementById('humidity').textContent = data.main.humidity;
//     document.getElementById('wind_speed').textContent = data.wind.speed;
//     document.getElementById('wind_degrees').textContent = data.wind.deg;
//     document.getElementById('sunrise').textContent = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
//     document.getElementById('sunset').textContent = new Date(data.sys.sunset * 1000).toLocaleTimeString();
// }

// // Event listener for form submission
// document.getElementById('submit').addEventListener('click', (e) => {
//     e.preventDefault();  // Prevent form submission
//     const city = document.getElementById('city').value;
//     getWeather(city);
// });

// // Event listener for dropdown selection
// document.querySelectorAll('.dropdown-item').forEach(item => {
//     item.addEventListener('click', (e) => {
//         const city = e.target.textContent;
//         getWeather(city);
//     });
// });

// // Initial call to populate default weather data
// getWeather("Delhi");


const apiKey = '641a05a07fccc72af7a85bd094cc42f2';  // Replace with your OpenWeatherMap API key

async function getWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
}

function updateWeatherUI(data) {
    if (!data) return;
    document.getElementById('cityName').textContent = data.name;
    document.getElementById('temp').textContent = `${data.main.temp}`;
    document.getElementById('min_temp').textContent = `${data.main.temp_min}`;
    document.getElementById('max_temp').textContent = `${data.main.temp_max}`;
    document.getElementById('cloud_pct').textContent = `${data.clouds.all}`;
    document.getElementById('feels_like').textContent = `${data.main.feels_like}`;
    document.getElementById('humidity').textContent = `${data.main.humidity}`;
    document.getElementById('wind_speed').textContent = `${data.wind.speed}`;
    document.getElementById('wind_degrees').textContent = `${data.wind.deg}`;
    document.getElementById('sunrise').textContent = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
    document.getElementById('sunset').textContent = new Date(data.sys.sunset * 1000).toLocaleTimeString();
}

async function updateWeatherTable() {
    const cities = ['Chennai', 'Mumbai', 'Lucknow', 'Kolkata'];
    for (const city of cities) {
        const data = await getWeather(city);
        if (data) {
            const row = document.querySelector(`tr[data-city='${city}']`);
            if (row) {
                const cells = row.querySelectorAll('td');
                cells[0].textContent = `${data.clouds.all}%`;
                cells[1].textContent = `${data.main.temp}°C`;
                cells[2].textContent = `${data.main.feels_like}°C`;
                cells[3].textContent = `${data.main.humidity}%`;
                cells[4].textContent = `${data.main.temp_min}°C`;
                cells[5].textContent = `${data.main.temp_max}°C`;
                cells[6].textContent = `${data.wind.speed} m/s`;
                cells[7].textContent = `${data.wind.deg}°`;
                cells[8].textContent = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
                cells[9].textContent = new Date(data.sys.sunset * 1000).toLocaleTimeString();
            }
        }
    }
}


// Event listener for form submission
document.getElementById('submit').addEventListener('click', async (e) => {
    e.preventDefault();  // Prevent form submission
    const city = document.getElementById('city').value;
    const data = await getWeather(city);
    updateWeatherUI(data);
});

// Event listener for dropdown selection
document.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', async (e) => {
        const city = e.target.textContent;
        const data = await getWeather(city);
        updateWeatherUI(data);
    });
});

// Initial calls to populate weather data
getWeather("Delhi").then(updateWeatherUI);
updateWeatherTable();

// Update table every 10 minutes
setInterval(updateWeatherTable, 600000);