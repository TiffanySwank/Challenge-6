// script.js
const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
const searchForm = document.getElementById('search-form');
const cityInput = document.getElementById('city-input');
const currentWeather = document.getElementById('current-weather');
const forecast = document.getElementById('forecast');
const searchHistory = document.getElementById('search-history');
let searchHistoryData = [];

// Function to fetch weather data using an API (e.g., OpenWeatherMap API)
async function fetchWeatherData(city) {
    try {
        // Make API request and handle the response
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        return null;
    }
}
// Function to display current weather
function displayCurrentWeather(data) {
    // Create HTML elements to display current weather information
    // Update the currentWeather section with the data
}

// Function to display 5-day forecast
function displayForecast(data) {
    // Create HTML elements to display 5-day forecast
    // Update the forecast section with the data
}

// Function to handle form submission
async function handleFormSubmit(event) {
    event.preventDefault();
    const city = cityInput.value.trim();
    if (city === '') return;

    // Fetch weather data for the entered city
    const weatherData = await fetchWeatherData(city);

    if (weatherData) {
        // Update the current weather and forecast sections
        displayCurrentWeather(weatherData);
        displayForecast(weatherData);

        // Update search history
        searchHistoryData.push(city);
        updateSearchHistory();
    }

    // Clear the input field
    cityInput.value = '';
}

// Function to update the search history
function updateSearchHistory() {
    // Update the searchHistory section with searchHistoryData
}

// Event listener for form submission
