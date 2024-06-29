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
            const response = await axios.get(`https://greenthumb-kmir.onrender.com/api/weather?location=${encodeURIComponent(city)}`);
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
        <div className="weather-container">
            <h1 className="title">Weather Display</h1>
            <form onSubmit={handleSubmit} className="weather-form">
                <label>
                    Enter City Name:
                    <input type="text" value={cityName} onChange={handleChange} className="input" />
                </label>
                <button type="submit" className="submit-button">Get Weather</button>
            </form>

            {error && <p className="error-message">{error}</p>}

            {weather && weather.current && (
                <div className="weather-info">
                    <h2 className="subtitle">Current Weather</h2>
                    <h3 className="location">Location: {cityName}</h3>
                    <img src={getWeatherIcon(weather.current.weather_code)} alt="Weather icon" className="weather-icon" />
                    <p className="temperature">Temperature: {weather.current.temperature_2m}°F</p>
                    <p className="cloud-cover">Cloud Cover: {weather.current.cloud_cover}%</p>
                    <p className="wind-speed">Wind Speed: {weather.current.wind_speed_10m} mph</p>
                </div>
            )}
        </div>
    );
};

export default WeatherDisplay;
