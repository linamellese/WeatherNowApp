const axios = require('axios');

const API_KEY = process.env.OPENWEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

class WeatherService {
  // Get current weather
  async getCurrentWeather(city, unit = 'metric') {
    try {
      console.log(`Fetching weather for city: ${city}`);
      
      const response = await axios.get(`${BASE_URL}/weather`, {
        params: {
          q: city,
          appid: API_KEY,
          units: unit
        }
      });

      console.log('Weather API response received');
      
      return this.formatCurrentWeather(response.data, unit);
    } catch (error) {
      console.error('Weather API Error:', error.response?.data || error.message);
      throw this.handleApiError(error);
    }
  }

  // Get 5-day forecast
  async getForecast(city, unit = 'metric') {
    try {
      console.log(`Fetching forecast for city: ${city}`);
      
      const response = await axios.get(`${BASE_URL}/forecast`, {
        params: {
          q: city,
          appid: API_KEY,
          units: unit
        }
      });

      console.log('Forecast API response received');
      
      return this.formatForecast(response.data, unit);
    } catch (error) {
      console.error('Forecast API Error:', error.response?.data || error.message);
      throw this.handleApiError(error);
    }
  }

  // Format current weather data
  formatCurrentWeather(data, unit) {
    return {
      location: `${data.name}, ${data.sys.country}`,
      current: {
        temp: Math.round(data.main.temp),
        feelsLike: Math.round(data.main.feels_like),
        humidity: data.main.humidity,
        pressure: data.main.pressure,
        windSpeed: data.wind.speed,
        windDeg: data.wind.deg,
        condition: data.weather[0].main,
        description: data.weather[0].description,
        icon: data.weather[0].icon,
        clouds: data.clouds.all,
        visibility: data.visibility,
        sunrise: data.sys.sunrise,
        sunset: data.sys.sunset
      },
      coordinates: {
        lat: data.coord.lat,
        lon: data.coord.lon
      }
    };
  }

  // Format forecast data
  formatForecast(data, unit) {
    const dailyForecasts = {};
    
    data.list.forEach(item => {
      const date = new Date(item.dt * 1000).toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric'
      });
      
      if (!dailyForecasts[date]) {
        dailyForecasts[date] = {
          date: date,
          high: item.main.temp_max,
          low: item.main.temp_min,
          condition: item.weather[0].main,
          icon: item.weather[0].icon
        };
      } else {
        dailyForecasts[date].high = Math.max(dailyForecasts[date].high, item.main.temp_max);
        dailyForecasts[date].low = Math.min(dailyForecasts[date].low, item.main.temp_min);
      }
    });

    // Take first 5 days
    return Object.values(dailyForecasts).slice(0, 5);
  }

  // Handle API errors
  handleApiError(error) {
    if (error.response) {
      const status = error.response.status;
      const message = error.response.data?.message || 'Weather API error';
      
      switch (status) {
        case 401:
          return new Error('Invalid API key. Please check your OpenWeatherMap API key.');
        case 404:
          return new Error(`City not found. Please check the city name and try again.`);
        case 429:
          return new Error('Too many requests. Please try again later.');
        default:
          return new Error(message);
      }
    } else if (error.request) {
      return new Error('Unable to connect to weather service. Please check your internet connection.');
    } else {
      return error;
    }
  }
}

module.exports = new WeatherService();