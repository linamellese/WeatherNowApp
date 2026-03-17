import React from 'react'
import { WiDaySunny } from 'react-icons/wi'
import styles from './Loader.module.css'

const Loader = () => {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loader}>
        <WiDaySunny className={styles.icon} />
        <div className={styles.spinner}></div>
      </div>
      <p className={styles.text}>Fetching weather data...</p>
    </div>
  )
}

export default Loader