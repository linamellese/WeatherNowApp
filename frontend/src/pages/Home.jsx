import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useWeather } from '../context/WeatherContext'
import { useLanguage } from '../context/LanguageContext'
import SearchBar from '../components/SearchBar'
import { WiDaySunny, WiCloudy, WiRain, WiSnow, WiThunderstorm } from 'react-icons/wi'
import styles from './Home.module.css'

const Home = () => {
  const navigate = useNavigate()
  const { t } = useLanguage() // Add language
  const { fetchWeatherData, loading } = useWeather()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const handleSearch = async (city, lat, lon) => {
    if (city) {
      await fetchWeatherData(city)
      navigate('/weather')
    } else if (lat && lon) {
      navigate('/weather')
    }
  }

  const floatingIcons = [
    { Icon: WiDaySunny, delay: '0s', size: '4rem', top: '10%', left: '10%' },
    { Icon: WiCloudy, delay: '2s', size: '5rem', top: '20%', right: '15%' },
    { Icon: WiRain, delay: '1s', size: '3.5rem', bottom: '30%', left: '20%' },
    { Icon: WiSnow, delay: '3s', size: '4rem', bottom: '15%', right: '25%' },
    { Icon: WiThunderstorm, delay: '2.5s', size: '4.5rem', top: '40%', right: '10%' },
    { Icon: WiDaySunny, delay: '1.5s', size: '3rem', bottom: '40%', left: '15%' }
  ]

  return (
    <div className={styles.container}>
      <div 
        className={styles.background}
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
        }}
      />
      
      <div className={styles.floatingIcons}>
        {floatingIcons.map((item, index) => (
          <div
            key={index}
            className={styles.floatingIcon}
            style={{
              animation: `float 6s ${item.delay} ease-in-out infinite`,
              fontSize: item.size,
              top: item.top,
              left: item.left,
              right: item.right,
              bottom: item.bottom,
              position: 'absolute'
            }}
          >
            <item.Icon />
          </div>
        ))}
      </div>

      <div className={styles.content}>
        <div className={styles.hero}>
          <h1 className={styles.title}>
            {t.home.title}
            <span className={styles.titleGradient}>{t.home.subtitle}</span>
          </h1>
          
          <p className={styles.subtitle}>
            {t.home.description}
          </p>

          <div className={styles.searchSection}>
            <SearchBar onSearch={handleSearch} />
            
            <div className={styles.features}>
              <div className={styles.feature}>
                <span className={styles.featureDot} />
                {t.home.features.realtime}
              </div>
              <div className={styles.feature}>
                <span className={styles.featureDot} />
                {t.home.features.forecast}
              </div>
              <div className={styles.feature}>
                <span className={styles.featureDot} />
                {t.home.features.details}
              </div>
            </div>
          </div>

          <div className={styles.stats}>
            <div className={styles.statItem}>
              <span className={styles.statValue}>10M+</span>
              <span className={styles.statLabel}>{t.home.stats.users}</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statValue}>200+</span>
              <span className={styles.statLabel}>{t.home.stats.countries}</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statValue}>99.9%</span>
              <span className={styles.statLabel}>{t.home.stats.accuracy}</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.wave}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="rgba(255,255,255,0.1)" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,170.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  )
}

export default Home