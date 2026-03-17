import React from 'react'
import { FiX, FiSun, FiMoon, FiThermometer } from 'react-icons/fi'
import styles from './SettingsModal.module.css'

const SettingsModal = ({ onClose, currentUnit, currentTheme, toggleUnit, toggleTheme }) => {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <div className={styles.header}>
          <h2>Settings</h2>
          <button className={styles.closeButton} onClick={onClose}>
            <FiX />
          </button>
        </div>

        <div className={styles.content}>
          <div className={styles.settingItem}>
            <div className={styles.settingInfo}>
              <span className={styles.settingLabel}>Theme</span>
              <span className={styles.settingDescription}>
                Switch between light and dark mode
              </span>
            </div>
            <button 
              className={`${styles.themeToggle} ${currentTheme === 'dark' ? styles.dark : ''}`}
              onClick={() => {
                toggleTheme()
              }}
            >
              {currentTheme === 'light' ? <FiMoon /> : <FiSun />}
              <span>{currentTheme === 'light' ? 'Dark Mode' : 'Light Mode'}</span>
            </button>
          </div>

          <div className={styles.settingItem}>
            <div className={styles.settingInfo}>
              <span className={styles.settingLabel}>Temperature Unit</span>
              <span className={styles.settingDescription}>
                Switch between Celsius and Fahrenheit
              </span>
            </div>
            <button 
              className={styles.unitToggle}
              onClick={() => {
                toggleUnit()
              }}
            >
              <FiThermometer />
              <span>{currentUnit === 'metric' ? '°C' : '°F'}</span>
            </button>
          </div>

          <div className={styles.infoBox}>
            <p className={styles.version}>WeatherNow v1.0.0</p>
            <p className={styles.api}>Powered by OpenWeatherMap</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SettingsModal