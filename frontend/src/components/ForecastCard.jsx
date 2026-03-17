import React from 'react'
import { useLanguage } from '../context/LanguageContext'
import { getWeatherIcon } from '../utils/weatherIcons'
import styles from './ForecastCard.module.css'

const ForecastCard = ({ data, unit }) => {
  const { t, currentLanguage } = useLanguage() // Add language
  
  if (!data) return null

  const tempUnit = unit === 'metric' ? t.units.celsius : t.units.fahrenheit
  const date = new Date(data.date)
  
  const formattedDate = date.toLocaleDateString(currentLanguage, { 
    weekday: 'short', 
    month: 'short', 
    day: 'numeric' 
  })

  return (
    <div className={styles.card}>
      <div className={styles.date}>
        <span className={styles.day}>{formattedDate}</span>
      </div>
      
      <div className={styles.weather}>
        {getWeatherIcon(data.icon)}
      </div>
      
      <div className={styles.temperatures}>
        <span className={styles.high}>{Math.round(data.high)}{tempUnit}</span>
        <span className={styles.low}>{Math.round(data.low)}{tempUnit}</span>
      </div>
      
      <div className={styles.condition}>
        {data.condition}
      </div>
    </div>
  )
}

export default ForecastCard