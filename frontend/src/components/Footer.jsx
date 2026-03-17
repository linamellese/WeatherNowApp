import React from 'react'
import { useLanguage } from '../context/LanguageContext'
import { WiDaySunny, WiCloudy, WiRain, WiSnow } from 'react-icons/wi'
import styles from './Footer.module.css'

const Footer = () => {
  const { t } = useLanguage() // Add language
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.weatherIcons}>
          <WiDaySunny className={styles.icon} />
          <WiCloudy className={styles.icon} />
          <WiRain className={styles.icon} />
          <WiSnow className={styles.icon} />
        </div>
        <div className={styles.content}>
          <p>&copy; {currentYear} WeatherNow. {t.footer.rights}</p>
          <p>{t.footer.poweredBy}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer