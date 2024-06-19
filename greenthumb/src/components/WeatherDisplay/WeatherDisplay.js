// WeatherDisplay.js

import React, { useState } from 'react';
import axios from 'axios';
import './WeatherDisplay.css';

// Import your weather icons/images
import clearDayIcon from './images/Sunny.png';
import cloudyIcon from './images/Cloudy.png';
import rainIcon from './images/Rainy.png';
import defaultIcon from './images/Snowy.png'; // Default icon for fallback

const WeatherDisplay = () => {
    const [weather, setWeather] = useState(null);
    const [cityName, setCityName] = useState('');
    const [error, setError] = useState(null);

    const fetchWeather = async (city) => {
        try {
            const response = await axios.get(`http://localhost:5001/api/weather?location=${encodeURIComponent(city)}`);
            console.log('Weather API response:', response.data); // Log the response
            setWeather(response.data);
            setError(null);
        } catch (error) {
            console.error('Error fetching weather data:', error);
            setError('Failed to fetch weather data. Please try again.');
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        fetchWeather(cityName);
    };

    const handleChange = (event) => {
        setCityName(event.target.value);
    };

    const getWeatherIcon = (weatherCode) => {
        switch (weatherCode) {
            case 0:
                return clearDayIcon;
            case 1:
            case 2:
            case 3:
                return cloudyIcon;
            case 4000:
            case 4200:
            case 4001:
            case 4201:
            case 5000:
            case 5001:
            case 5100:
            case 5101:
                return rainIcon;
            default:
                return defaultIcon;
        }
    };

    return (
        <div>
            <h1>Weather Display</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Enter City Name:
                    <input type="text" value={cityName} onChange={handleChange} />
                </label>
                <button type="submit">Get Weather</button>
            </form>

            {error && <p>{error}</p>}

            {weather && weather.current && (
                <div>
                    <h2>Current Weather</h2>
                    <h3>Location: {cityName}</h3> {/* Display entered city name */}
                    <img src={getWeatherIcon(weather.current.weather_code)} alt="Weather icon" />
                    <p>Temperature: {weather.current.temperature_2m}°F</p>
                    <p>Cloud Cover: {weather.current.cloud_cover}%</p>
                    <p>Wind Speed: {weather.current.wind_speed_10m} mph</p>
                </div>
            )}
        </div>
    );
};

export default WeatherDisplay;
