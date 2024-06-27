// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fetch = require('node-fetch');
const dotenv = require('dotenv');
const axios = require('axios');
const routes = require('./routes');

dotenv.config(); // Load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', routes);
app.use(express.json());



const geocoder = axios.create({
    baseURL: 'https://api.opencagedata.com',
    params: {
        key: process.env.OPENCAGE_API_KEY,
        language: 'en',
        limit: 1, // Limit to one result (best match)
        no_annotations: 1 // Remove annotations from response
    }
});

// Test route
app.get('/', (req, res) => {
    res.send('Hello from GreenThumb backend!');
});

// Plant data route (example)
app.get('/api/plants', async (req, res) => {
    const page = req.query.page || 1;
    try {
        const response = await fetch(`https://perenual.com/api/species-list?key=${process.env.PERENUAL_API_KEY}&page=${page}`);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const json = await response.json();
        res.json(json);
    } catch (error) {
        console.error('Error fetching plant data:', error);
        res.status(500).json({ error: 'Failed to fetch plant data' });
    }
});

// Weather data route (example)
app.get('/api/weather', async (req, res) => {
    const { location } = req.query;

    try {
        // Use OpenCage Geocoder to get coordinates from city name
        const geoResponse = await geocoder.get('/geocode/v1/json', {
            params: {
                q: location
            }
        });

        // Extract coordinates from geocoding response
        const { lat, lng } = geoResponse.data.results[0].geometry;

        // Make API call to Open-Meteo API using coordinates
        const response = await axios.get('https://api.open-meteo.com/v1/forecast', {
            params: {
                latitude: lat,
                longitude: lng,
                current: 'temperature_2m,weather_code,cloud_cover,wind_speed_10m',
                temperature_unit: 'fahrenheit',
                wind_speed_unit: 'mph',
                timezone: 'America/New_York'
            }
        });

        const weatherData = response.data;
        console.log(weatherData);
        res.json(weatherData);
    } catch (error) {
        console.error('Error fetching weather data:', error.message);
        res.status(500).json({ error: 'Failed to fetch weather data' });
    }
});


app.post('/api/get-completion', async (req, res) => {
    try {
        const response = await axios.post(
            'https://api.openai.com/v1/completions',
            {
                model: req.body.model || 'gpt-3.5-turbo',
                prompt: req.body.prompt,
                max_tokens: req.body.max_tokens
            },
            {
                headers: {
                    'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
                    'Content-Type': 'application/json'
                }
            }
        );
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching completion:', error);
        res.status(500).json({ error: 'Failed to fetch completion. Please try again later.' });
    }
});


// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

