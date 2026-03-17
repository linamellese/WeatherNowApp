import axios from 'axios'

const API_BASE_URL = '/api'

export const getCurrentWeather = async (city, unit = 'metric') => {
  try {
    const response = await axios.get(`${API_BASE_URL}/weather/current/${encodeURIComponent(city)}`, {
      params: { unit }
    })
    return response.data
  } catch (error) {
    throw error
  }
}

export const getForecast = async (city, unit = 'metric') => {
  try {
    const response = await axios.get(`${API_BASE_URL}/weather/forecast/${encodeURIComponent(city)}`, {
      params: { unit }
    })
    return response.data
  } catch (error) {
    throw error
  }
}

export const getWeatherByCoords = async (lat, lon, unit = 'metric') => {
  try {
    const response = await axios.get(`${API_BASE_URL}/weather/coords`, {
      params: { lat, lon, unit }
    })
    return response.data
  } catch (error) {
    throw error
  }
}