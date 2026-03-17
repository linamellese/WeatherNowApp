import React, { useState, useEffect, useRef } from 'react'
import { FiSearch, FiMapPin } from 'react-icons/fi'
import { useWeather } from '../context/WeatherContext'
import { useLanguage } from '../context/LanguageContext'  // ← ADD THIS IMPORT
import styles from './SearchBar.module.css'

const SearchBar = ({ onSearch }) => {
    
  const [query, setQuery] = useState('')
  const [suggestions, setSuggestions] = useState([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const { recentSearches = [], fetchWeatherData } = useWeather() 
  const { t } = useLanguage()  // ← ADD THIS HOOK
  const searchRef = useRef(null)

  const popularCities = [
    { name: 'New York', country: 'US', display: 'New York, US' },
    { name: 'London', country: 'GB', display: 'London, GB' },
    { name: 'Tokyo', country: 'JP', display: 'Tokyo, JP' },
    { name: 'Paris', country: 'FR', display: 'Paris, FR' },
    { name: 'Sydney', country: 'AU', display: 'Sydney, AU' },
    { name: 'Dubai', country: 'AE', display: 'Dubai, AE' },
    { name: 'Addis Ababa', country: 'ET', display: 'Addis Ababa, ET' },
    { name: 'Cairo', country: 'EG', display: 'Cairo, EG' },
    { name: 'Nairobi', country: 'KE', display: 'Nairobi, KE' },
    { name: 'Lagos', country: 'NG', display: 'Lagos, NG' },
    { name: 'Johannesburg', country: 'ZA', display: 'Johannesburg, ZA' },
    { name: 'Beijing', country: 'CN', display: 'Beijing, CN' },
    { name: 'Moscow', country: 'RU', display: 'Moscow, RU' },
    { name: 'Berlin', country: 'DE', display: 'Berlin, DE' },
    { name: 'Rome', country: 'IT', display: 'Rome, IT' },
    { name: 'Madrid', country: 'ES', display: 'Madrid, ES' },
    { name: 'Amsterdam', country: 'NL', display: 'Amsterdam, NL' },
    { name: 'Athens', country: 'GR', display: 'Athens, GR' },
    { name: 'Auckland', country: 'NZ', display: 'Auckland, NZ' },
    { name: 'Austin', country: 'US', display: 'Austin, US' },
    { name: 'Atlanta', country: 'US', display: 'Atlanta, US' },
    { name: 'Alexandria', country: 'EG', display: 'Alexandria, EG' },
    { name: 'Algiers', country: 'DZ', display: 'Algiers, DZ' },
    { name: 'Ankara', country: 'TR', display: 'Ankara, TR' }
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSuggestions(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleInputChange = (e) => {
    const value = e.target.value
    setQuery(value)
    
    if (value.length > 0) {
      const filtered = popularCities.filter(city => 
        city.name.toLowerCase().startsWith(value.toLowerCase())
      )
      filtered.sort((a, b) => a.name.localeCompare(b.name))
      setSuggestions(filtered)
      setShowSuggestions(true)
    } else {
      setSuggestions([])
      setShowSuggestions(false)
    }
  }

  const handleSearch = (searchTerm) => {
    if (searchTerm && searchTerm.trim()) {
      let searchQuery;
      
      // If searchTerm is an object (from suggestions)
      if (typeof searchTerm === 'object') {
        searchQuery = `${searchTerm.name},${searchTerm.country}`;
      } else {
        searchQuery = searchTerm;
      }
      
      console.log('🔍 Searching for:', searchQuery);
      
      // Call the onSearch prop (from WeatherPage)
      onSearch(searchQuery);
      
      // Also fetch weather data directly
      fetchWeatherData(searchQuery);
      
      // Clear input and close suggestions
      setQuery('');
      setShowSuggestions(false);
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch(query)
    }
  }

  const handleSuggestionClick = (city) => {
    console.log('👉 City clicked:', city);
    
    // Format the city name with country code
    const searchQuery = `${city.name},${city.country}`;
    
    // Set the input value to show the selected city
    setQuery(city.display);
    
    // Perform the search immediately
    onSearch(searchQuery);
    fetchWeatherData(searchQuery);
    
    // Close suggestions
    setShowSuggestions(false);
  }

  const handleUseMyLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          onSearch(null, position.coords.latitude, position.coords.longitude)
        },
        (error) => {
          console.error('Error getting location:', error)
          alert(t.errors.locationError || 'Unable to get your location. Please search for a city instead.')
        }
      )
    }
  }

  return (
    <div className={styles.searchContainer} ref={searchRef}>
      <div className={styles.searchBar}>
        <FiSearch className={styles.searchIcon} />
        <input
          type="text"
          placeholder={t?.weather?.searchPlaceholder || "Search for a city..."}
          value={query}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          onFocus={() => query.length > 0 && setShowSuggestions(true)}
          className={styles.searchInput}
          autoComplete="off"
        />
        <button 
          className={styles.locationButton}
          onClick={handleUseMyLocation}
          title={t?.weather?.useMyLocation || "Use my location"}
        >
          <FiMapPin />
        </button>
        <button 
          className={styles.searchButton}
          onClick={() => handleSearch(query)}
        >
          {t?.weather?.search || "Search"}
        </button>
      </div>

      {showSuggestions && (
        <div className={styles.suggestions}>
          {suggestions.length > 0 ? (
            <>
              <div className={styles.suggestionsHeader}>
                {t?.weather?.citiesStartingWith || "Cities starting with"} "{query}"
              </div>
              {suggestions.map((city, index) => (
                <div
                  key={index}
                  className={styles.suggestionItem}
                  onClick={() => handleSuggestionClick(city)}
                >
                  <FiSearch className={styles.suggestionIcon} />
                  <span className={styles.cityName}>{city.name}</span>
                  <span className={styles.countryBadge}>{city.country}</span>
                </div>
              ))}
            </>
          ) : query.length > 0 ? (
            <div className={styles.noSuggestions}>
              <p>{t?.weather?.noCitiesFound || "No cities found starting with"} "{query}"</p>
              <div className={styles.exampleFormats}>
                <span>{t?.weather?.try || "Try"}: Addis Ababa</span>
                <span>London</span>
                <span>Paris</span>
              </div>
            </div>
          ) : null}

          {recentSearches.length > 0 && query.length === 0 && (
            <div className={styles.recentSearches}>
              <div className={styles.recentTitle}>{t?.weather?.recentSearches || "Recent Searches"}</div>
              {recentSearches.map((city, index) => (
                <div
                  key={index}
                  className={styles.suggestionItem}
                  onClick={() => handleSearch(city)}
                >
                  <span className={styles.recentIcon}>⏱️</span>
                  {city}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default SearchBar