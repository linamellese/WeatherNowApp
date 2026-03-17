const express = require('express');
const router = express.Router();
const weatherController = require('../controllers/weatherController');

// GET /api/weather/current/:city - Get current weather for a city
router.get('/current/:city', weatherController.getCurrentWeather);

// GET /api/weather/forecast/:city - Get 5-day forecast for a city
router.get('/forecast/:city', weatherController.getForecast);

// GET /api/weather/coords - Get weather by coordinates
router.get('/coords', weatherController.getWeatherByCoords);

// GET /api/weather/search - Search for cities
router.get('/search', weatherController.searchCities);

// GET /api/weather/air-quality/:city - Get air quality data
router.get('/air-quality/:city', weatherController.getAirQuality);

// GET /api/weather/weather-alerts/:city - Get weather alerts
router.get('/weather-alerts/:city', weatherController.getWeatherAlerts);

module.exports = router;