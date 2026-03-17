const weatherService = require('../services/weatherService');

const weatherController = {
  // Get current weather for a city
  getCurrentWeather: async (req, res) => {
    try {
      const { city } = req.params;
      const { unit = 'metric' } = req.query;

      if (!city) {
        return res.status(400).json({
          status: 'error',
          message: 'City name is required'
        });
      }

      console.log(`Processing current weather request for: ${city}`);
      
      const weatherData = await weatherService.getCurrentWeather(city, unit);
      
      res.json({
        status: 'success',
        data: weatherData
      });
    } catch (error) {
      console.error('Controller error:', error.message);
      res.status(500).json({
        status: 'error',
        message: error.message || 'Failed to fetch weather data'
      });
    }
  },

  // Get 5-day forecast for a city
  getForecast: async (req, res) => {
    try {
      const { city } = req.params;
      const { unit = 'metric' } = req.query;

      if (!city) {
        return res.status(400).json({
          status: 'error',
          message: 'City name is required'
        });
      }

      console.log(`Processing forecast request for: ${city}`);
      
      const forecastData = await weatherService.getForecast(city, unit);
      
      res.json({
        status: 'success',
        data: forecastData
      });
    } catch (error) {
      console.error('Controller error:', error.message);
      res.status(500).json({
        status: 'error',
        message: error.message || 'Failed to fetch forecast data'
      });
    }
  }
};

module.exports = weatherController;