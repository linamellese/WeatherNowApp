import axios from 'axios'

const getApiBaseUrl = () => {
  const url = import.meta.env.VITE_API_URL
  if (!url) return '/api'
  const cleanUrl = url.endsWith('/') ? url.slice(0, -1) : url
  return cleanUrl.endsWith('/api') ? cleanUrl : `${cleanUrl}/api`
}

const API_BASE_URL = getApiBaseUrl()

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