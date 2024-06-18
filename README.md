# 🌤️ Weather App

Welcome to the Weather App! This application provides real-time weather information for any location around the globe. This README file will guide you through the setup, usage, and features of the app.

## Features

- 🌡️ Real-time weather updates
- 🔍 Search weather by city name
- 📊 Display current temperature, humidity, wind speed, and weather conditions
- 🌈 Dynamic background images based on weather conditions
- 📱 Responsive design for different screen sizes

## Demo

You can view a live demo of the Weather App [here](#).

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/weather-app.git
   ```
2. **Navigate to the project directory:**
   ```bash
   cd weather-app
   ```

## Usage

1. **Open `index.html` in your browser:**
   Simply double-click the `index.html` file or right-click and choose "Open with" and select your browser.

2. **Enter a city name:**
   Type the name of the city you want to get the weather information for in the search bar and press Enter.

3. **View the weather details:**
   The app will display the current weather details for the specified city.

## Technologies Used

- **HTML5:** For structuring the app
- **CSS3:** For styling the app
- **JavaScript:** For functionality and API interactions
- **Bootstrap 5:** For responsive design and UI components

## API Reference

This app uses the [Weather by API Ninjas](https://rapidapi.com/weather-api-ninjas/api/weather-by-api-ninjas) to fetch weather data. You will need an API key to use the service.

1. **Sign up and get an API key from RapidAPI:**
   Register at [RapidAPI](https://rapidapi.com/) and get your API key.

2. **Add your API key to the JavaScript file:**
   Open the `script.js` file and replace `YOUR_API_KEY` with your actual API key.
   ```javascript
   const options = {
       method: "GET",
       headers: {
           "X-RapidAPI-Key": "YOUR_API_KEY",
           "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com"
       }
   };
   ```

Thank you for using the Weather App! 🌍☀️🌧️
