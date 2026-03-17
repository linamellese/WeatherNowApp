import React, { useEffect, useState } from 'react'
import { useWeather } from '../context/WeatherContext'
import { useLanguage } from '../context/LanguageContext'
import SearchBar from '../components/SearchBar'
import WeatherCard from '../components/WeatherCard'
import ForecastCard from '../components/ForecastCard'
import WeatherDetails from '../components/WeatherDetails'
import Loader from '../components/Loader'
import SettingsModal from '../components/SettingsModal'
import { FiRefreshCw, FiSettings } from 'react-icons/fi'
import styles from './WeatherPage.module.css'

const WeatherPage = () => {
  const { 
    currentWeather, 
    forecast, 
    loading, 
    error, 
    unit,
    theme,
    fetchWeatherData,
    toggleUnit,
    toggleTheme 
  } = useWeather()
  
  const { t, formatDate } = useLanguage() // Add language
  
  const [refreshing, setRefreshing] = useState(false)
  const [showSettings, setShowSettings] = useState(false)

  useEffect(() => {
    if (!currentWeather && !loading) {
      fetchWeatherData('New York,US')
    }
  }, [])

  const handleSearch = async (city, lat, lon) => {
    if (city) {
      await fetchWeatherData(city)
    }
  }

  const handleRefresh = async () => {
    if (currentWeather) {
      setRefreshing(true)
      const cityParts = currentWeather.location.split(',')
      const cityName = cityParts[0].trim()
      const countryCode = cityParts[1] ? cityParts[1].trim() : ''
      const searchQuery = countryCode ? `${cityName},${countryCode}` : cityName
      
      await fetchWeatherData(searchQuery)
      setRefreshing(false)
    }
  }

  const handleSettingsSave = (newUnit, newTheme) => {
    if (newUnit !== unit) toggleUnit()
    if (newTheme !== theme) toggleTheme()
  }

  const forecastArray = Array.isArray(forecast) ? forecast : []

  if (loading && !currentWeather) {
    return <Loader />
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <SearchBar onSearch={handleSearch} />
        
        <div className={styles.headerButtons}>
          <button 
            className={styles.iconButton}
            onClick={() => setShowSettings(true)}
            title={t.settings.title}
          >
            <FiSettings />
          </button>
          
          {currentWeather && (
            <button 
              className={styles.iconButton}
              onClick={handleRefresh}
              disabled={refreshing}
              title={t.settings.dataRefresh}
            >
              <FiRefreshCw className={refreshing ? styles.spinning : ''} />
            </button>
          )}
        </div>
      </div>

      {error && (
        <div className={styles.error}>
          <p>{error}</p>
          <button onClick={() => fetchWeatherData('New York,US')}>
            {t.weather.tryAgain}
          </button>
        </div>
      )}

      {currentWeather && (
        <>
          <WeatherCard data={currentWeather} unit={unit} />
          
          {forecastArray.length > 0 && (
            <div className={styles.forecastSection}>
              <h3 className={styles.sectionTitle}>{t.weather.forecast}</h3>
              <div className={styles.forecastContainer}>
                {forecastArray.map((day, index) => (
                  <ForecastCard 
                    key={index} 
                    data={day} 
                    unit={unit} 
                    formatDate={formatDate}
                  />
                ))}
              </div>
            </div>
          )}

          {forecastArray.length === 0 && !loading && (
            <div className={styles.noForecast}>
              <p>{t.weather.noForecast}</p>
            </div>
          )}

          <WeatherDetails data={currentWeather} unit={unit} />
        </>
      )}

      {showSettings && (
        <SettingsModal 
          onClose={() => setShowSettings(false)}
          currentUnit={unit}
          currentTheme={theme}
          onSave={handleSettingsSave}
          toggleUnit={toggleUnit}
          toggleTheme={toggleTheme}
        />
      )}
    </div>
  )
}

export default WeatherPage