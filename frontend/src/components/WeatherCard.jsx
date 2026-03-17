import React from 'react'
import { useLanguage } from '../context/LanguageContext'
import { WiHumidity, WiStrongWind, WiThermometer } from 'react-icons/wi'
import { getWeatherIcon } from '../utils/weatherIcons'
import styles from './WeatherCard.module.css'

const WeatherCard = ({ data, unit }) => {
  const { t } = useLanguage() // Add language

  if (!data) {
    return (
      <div className={styles.card}>
        <div className={styles.content}>
          <p className={styles.noData}>Weather data not available</p>
        </div>
      </div>
    )
  }

  const location = data.location || 'Unknown Location'
  const current = data.current || {}
  
  const temp = current.temp ?? '--'
  const feelsLike = current.feelsLike ?? '--'
  const humidity = current.humidity ?? '--'
  const windSpeed = current.windSpeed ?? '--'
  const condition = current.condition || 'Unknown'
  const icon = current.icon || '01d'
  
  const tempUnit = unit === 'metric' ? t.units.celsius : t.units.fahrenheit
  const speedUnit = unit === 'metric' ? t.units.ms : t.units.mph

  const today = new Date()
  const formattedDate = today.toLocaleDateString(useLanguage().currentLanguage, { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })

  return (
    <div className={styles.card}>
      <div className={styles.glassEffect}></div>
      <div className={styles.content}>
        <div className={styles.location}>
          <h2>{location}</h2>
          <p className={styles.date}>{formattedDate}</p>
        </div>

        <div className={styles.mainWeather}>
          <div className={styles.temperature}>
            <span className={styles.temp}>{temp}</span>
            <span className={styles.unit}>{tempUnit}</span>
          </div>
          <div className={styles.condition}>
            {getWeatherIcon(icon)}
            <span>{condition}</span>
          </div>
        </div>

        <div className={styles.details}>
          <div className={styles.detailItem}>
            <WiThermometer className={styles.detailIcon} />
            <div className={styles.detailInfo}>
              <span className={styles.detailLabel}>{t.weather.feelsLike}</span>
              <span className={styles.detailValue}>{feelsLike}{tempUnit}</span>
            </div>
          </div>

          <div className={styles.detailItem}>
            <WiHumidity className={styles.detailIcon} />
            <div className={styles.detailInfo}>
              <span className={styles.detailLabel}>{t.weather.humidity}</span>
              <span className={styles.detailValue}>{humidity}%</span>
            </div>
          </div>

          <div className={styles.detailItem}>
            <WiStrongWind className={styles.detailIcon} />
            <div className={styles.detailInfo}>
              <span className={styles.detailLabel}>{t.weather.windSpeed}</span>
              <span className={styles.detailValue}>{windSpeed} {speedUnit}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeatherCard