const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const axios = require('axios');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const API_KEY = process.env.OPENWEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

// Middleware
app.use(cors({
    origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
    credentials: true
}));
app.use(express.json());

// Health check
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'Server is running' });
});

// Get current weather
app.get('/api/weather/current/:city', async (req, res) => {
    try {
        const { city } = req.params;
        const { unit = 'metric' } = req.query;
        
        console.log(`Fetching weather for: ${city}`);
        
        const response = await axios.get(`${BASE_URL}/weather`, {
            params: {
                q: city,
                appid: API_KEY,
                units: unit
            }
        });
        
        const data = response.data;
        
        const formattedData = {
            location: `${data.name}, ${data.sys.country}`,
            current: {
                temp: Math.round(data.main.temp),
                feelsLike: Math.round(data.main.feels_like),
                humidity: data.main.humidity,
                pressure: data.main.pressure,
                windSpeed: data.wind.speed,
                condition: data.weather[0].main,
                description: data.weather[0].description,
                icon: data.weather[0].icon,
                clouds: data.clouds.all,
                visibility: data.visibility,
                sunrise: data.sys.sunrise,
                sunset: data.sys.sunset
            }
        };
        
        res.json({
            status: 'success',
            data: formattedData
        });
    } catch (error) {
        console.error('Error:', error.response?.data || error.message);
        res.status(error.response?.status || 500).json({
            status: 'error',
            message: error.response?.data?.message || 'Failed to fetch weather data'
        });
    }
});

// Get forecast
app.get('/api/weather/forecast/:city', async (req, res) => {
    try {
        const { city } = req.params;
        const { unit = 'metric' } = req.query;
        
        console.log(`Fetching forecast for: ${city}`);
        
        const response = await axios.get(`${BASE_URL}/forecast`, {
            params: {
                q: city,
                appid: API_KEY,
                units: unit
            }
        });
        
        // Process 5-day forecast
        const dailyMap = {};
        
        response.data.list.forEach(item => {
            const date = new Date(item.dt * 1000).toLocaleDateString('en-US', {
                weekday: 'short',
                month: 'short',
                day: 'numeric'
            });
            
            if (!dailyMap[date]) {
                dailyMap[date] = {
                    date: date,
                    high: item.main.temp_max,
                    low: item.main.temp_min,
                    condition: item.weather[0].main,
                    icon: item.weather[0].icon
                };
            } else {
                dailyMap[date].high = Math.max(dailyMap[date].high, item.main.temp_max);
                dailyMap[date].low = Math.min(dailyMap[date].low, item.main.temp_min);
            }
        });
        
        const forecast = Object.values(dailyMap).slice(0, 5);
        
        res.json({
            status: 'success',
            data: forecast
        });
    } catch (error) {
        console.error('Error:', error.response?.data || error.message);
        res.status(error.response?.status || 500).json({
            status: 'error',
            message: error.response?.data?.message || 'Failed to fetch forecast data'
        });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
    console.log(`🌐 CORS enabled for: ${process.env.CORS_ORIGIN || 'http://localhost:3000'}`);
});