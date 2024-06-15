
const options = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key": "763c810bdfmshb9f4669b80c3925p18d818jsn3db5be365864",
        "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com"
    }
};
const getWeather = (city) =>{
	cityName.innerHTML=city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
    .then(response => {
        if (!response.ok) {
            throw new Error('HTTP error! status: ${response.status}');
        }
        return response.json();
    })
    .then(response => {
        console.log(response);
        // Populate your HTML elements with the data
       
        temp.innerHTML = response.temp
        min_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp
        cloud_pct.innerHTML = response.cloud_pct
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        wind_speed.innerHTML = response.wind_speed
        wind_degrees.innerHTML = response.wind_degrees
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset 
    })
    .catch(err => {
        console.error(err);
        alert("An error occurred while fetching the weather data. Please try again later.");
    });
}
submit.addEventListener("click",(e)=>{
	e.preventDefault()
	getWeather(city.value)
})
getWeather("Delhi")