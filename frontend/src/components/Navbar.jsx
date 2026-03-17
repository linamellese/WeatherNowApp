import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { WiDaySunny } from 'react-icons/wi'
import { FiMenu, FiX } from 'react-icons/fi'
import styles from './Navbar.module.css'

const Navbar = () => {
  const { t } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  // Debug: log to see what t contains
  console.log('Navbar t:', t)
  console.log('Nav settings:', t?.nav?.settings)

  const navLinks = [
    { path: '/', name: t?.nav?.home || 'Home' },
    { path: '/weather', name: t?.nav?.weather || 'Weather' },
    { path: '/settings', name: t?.nav?.settings || 'Settings' }
  ]

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <WiDaySunny className={styles.logoIcon} />
          <span>WeatherNow</span>
        </Link>

        <button className={styles.menuButton} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        <div className={`${styles.navLinks} ${isOpen ? styles.active : ''}`}>
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`${styles.navLink} ${location.pathname === link.path ? styles.active : ''}`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar