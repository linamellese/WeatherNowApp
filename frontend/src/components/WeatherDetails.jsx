import React from 'react'
import { useLanguage } from '../context/LanguageContext'
import { 
  WiBarometer, 
  WiSunrise, 
  WiSunset, 
  WiCloudy,
  WiStrongWind,
  WiRaindrop,
  WiThermometer
} from 'react-icons/wi'
import { FiEye } from 'react-icons/fi'
import styles from './WeatherDetails.module.css'

const WeatherDetails = ({ data, unit }) => {
  const { t } = useLanguage() // Add language

  if (!data) {
    return (
      <div className={styles.container}>
        <p className={styles.noData}>Weather details not available</p>
      </div>
    )
  }

  const current = data.current || {}
  const speedUnit = unit === 'metric' ? t.units.ms : t.units.mph

  const formatTime = (timestamp) => {
    if (!timestamp) return '--:--'
    return new Date(timestamp * 1000).toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const details = [
    {
      icon: <WiBarometer />,
      label: t.weather.pressure,
      value: current.pressure ? `${current.pressure} ${t.units.hPa}` : '--'
    },
    {
      icon: <FiEye />,
      label: t.weather.visibility,
      value: current.visibility ? `${(current.visibility / 1000).toFixed(1)} ${t.units.km}` : '--'
    },
    {
      icon: <WiSunrise />,
      label: t.weather.sunrise,
      value: formatTime(current.sunrise)
    },
    {
      icon: <WiSunset />,
      label: t.weather.sunset,
      value: formatTime(current.sunset)
    },
    {
      icon: <WiCloudy />,
      label: t.weather.cloudCover,
      value: current.clouds ? `${current.clouds}%` : '--'
    },
    {
      icon: <WiStrongWind />,
      label: t.weather.windGust,
      value: current.gust ? `${current.gust} ${speedUnit}` : '--'
    },
    {
      icon: <WiRaindrop />,
      label: t.weather.humidity,
      value: current.humidity ? `${current.humidity}%` : '--'
    },
    {
      icon: <WiThermometer />,
      label: t.weather.feelsLike,
      value: current.feelsLike ? `${Math.round(current.feelsLike)}${unit === 'metric' ? t.units.celsius : t.units.fahrenheit}` : '--'
    }
  ]

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{t.weather.details}</h3>
      <div className={styles.grid}>
        {details.map((detail, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.icon}>{detail.icon}</div>
            <div className={styles.info}>
              <span className={styles.label}>{detail.label}</span>
              <span className={styles.value}>{detail.value}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WeatherDetails