import React, { createContext, useState, useContext, useEffect } from "react";
import { getCurrentWeather, getForecast } from "../services/weatherApi";

const WeatherContext = createContext();

export const useWeather = () => {
   const context = useContext(WeatherContext);
   if (!context) {
      throw new Error("useWeather must be used within a WeatherProvider");
   }
   return context;
};

export const WeatherProvider = ({ children }) => {
   const [currentWeather, setCurrentWeather] = useState(null);
   const [forecast, setForecast] = useState([]);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(null);
   
   // User preferences with localStorage persistence
   const [unit, setUnit] = useState(() => {
      return localStorage.getItem('weatherUnit') || "metric";
   });
   
   const [theme, setTheme] = useState(() => {
      return localStorage.getItem('weatherTheme') || "light";
   });
   
   const [language, setLanguage] = useState(() => {
      return localStorage.getItem('weatherLanguage') || "en";
   });
   
   const [notifications, setNotifications] = useState(() => {
      return localStorage.getItem('weatherNotifications') === 'true' || false;
   });
   
   const [autoRefresh, setAutoRefresh] = useState(() => {
      return localStorage.getItem('weatherAutoRefresh') !== 'false';
   });
   
   const [refreshInterval, setRefreshInterval] = useState(() => {
      return parseInt(localStorage.getItem('weatherRefreshInterval')) || 30;
   });
   
   const [notificationTypes, setNotificationTypes] = useState(() => {
      const saved = localStorage.getItem('weatherNotificationTypes');
      return saved ? JSON.parse(saved) : {
         rain: true,
         storm: true,
         extremeTemp: false,
         snow: false,
         wind: false
      };
   });

   // Apply theme to document when it changes
   useEffect(() => {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('weatherTheme', theme);
   }, [theme]);

   // Save preferences to localStorage when they change
   useEffect(() => {
      localStorage.setItem('weatherUnit', unit);
   }, [unit]);

   useEffect(() => {
      localStorage.setItem('weatherLanguage', language);
   }, [language]);

   useEffect(() => {
      localStorage.setItem('weatherNotifications', notifications);
   }, [notifications]);

   useEffect(() => {
      localStorage.setItem('weatherAutoRefresh', autoRefresh);
   }, [autoRefresh]);

   useEffect(() => {
      localStorage.setItem('weatherRefreshInterval', refreshInterval);
   }, [refreshInterval]);

   useEffect(() => {
      localStorage.setItem('weatherNotificationTypes', JSON.stringify(notificationTypes));
   }, [notificationTypes]);

   // Auto-refresh functionality
   useEffect(() => {
      let intervalId;
      
      if (autoRefresh && refreshInterval && currentWeather) {
         intervalId = setInterval(() => {
            console.log('🔄 Auto-refreshing weather data...');
            const cityParts = currentWeather.location.split(',');
            const cityName = cityParts[0].trim();
            const countryCode = cityParts[1] ? cityParts[1].trim() : '';
            const searchQuery = countryCode ? `${cityName},${countryCode}` : cityName;
            fetchWeatherData(searchQuery, true);
         }, refreshInterval * 60 * 1000);
      }
      
      return () => {
         if (intervalId) clearInterval(intervalId);
      };
   }, [autoRefresh, refreshInterval, currentWeather]);

   const fetchWeatherData = async (city, silent = false) => {
      if (!city) return;
      
      if (!silent) setLoading(true);
      setError(null);
      
      try {
         console.log('🔍 Fetching weather data for:', city);
         
         const [currentData, forecastData] = await Promise.all([
            getCurrentWeather(city, unit),
            getForecast(city, unit)
         ]);
         
         console.log('✅ Current weather raw:', currentData);
         console.log('✅ Forecast raw:', forecastData);
         
         // ----- ADAPT CURRENT WEATHER -----
         let adaptedCurrent = null;
         
         if (currentData) {
            if (currentData.main && currentData.weather) {
               adaptedCurrent = {
                  location: `${currentData.name || city}, ${currentData.sys?.country || ''}`,
                  current: {
                     temp: currentData.main.temp,
                     feelsLike: currentData.main.feels_like,
                     humidity: currentData.main.humidity,
                     pressure: currentData.main.pressure,
                     windSpeed: currentData.wind?.speed || 0,
                     condition: currentData.weather[0]?.main || 'Unknown',
                     icon: currentData.weather[0]?.icon || '01d',
                     clouds: currentData.clouds?.all || 0,
                     visibility: currentData.visibility || 0,
                     sunrise: currentData.sys?.sunrise,
                     sunset: currentData.sys?.sunset
                  }
               };
            } else if (currentData.data?.current) {
               adaptedCurrent = currentData.data;
            } else if (currentData.current) {
               adaptedCurrent = currentData;
            } else {
               adaptedCurrent = {
                  location: city,
                  current: currentData
               };
            }
         }
         
         // ----- ADAPT FORECAST -----
         let adaptedForecast = [];
         
         if (forecastData) {
            if (forecastData.list && Array.isArray(forecastData.list)) {
               adaptedForecast = forecastData.list
                 .filter((_, index) => index % 8 === 0)
                 .map(item => ({
                    date: item.dt * 1000,
                    high: item.main.temp_max,
                    low: item.main.temp_min,
                    condition: item.weather[0]?.main || 'Unknown',
                    icon: item.weather[0]?.icon || '01d'
                 }));
            } else if (forecastData.daily && Array.isArray(forecastData.daily)) {
               adaptedForecast = forecastData.daily.slice(0, 5).map(day => ({
                  date: day.dt * 1000,
                  high: day.temp.max,
                  low: day.temp.min,
                  condition: day.weather[0]?.main || 'Unknown',
                  icon: day.weather[0]?.icon || '01d'
               }));
            } else if (Array.isArray(forecastData)) {
               adaptedForecast = forecastData;
            } else if (forecastData.data && Array.isArray(forecastData.data)) {
               adaptedForecast = forecastData.data;
            }
         }
         
         console.log('✅ Adapted current:', adaptedCurrent);
         console.log('✅ Adapted forecast:', adaptedForecast);
         
         setCurrentWeather(adaptedCurrent);
         setForecast(adaptedForecast);
         
      } catch (err) {
         console.error('❌ Error:', err);
         setError(err.message || 'Failed to fetch weather data.');
         setCurrentWeather(null);
         setForecast([]);
      } finally {
         if (!silent) setLoading(false);
      }
   };

   const toggleUnit = () => {
      setUnit((prev) => (prev === "metric" ? "imperial" : "metric"));
      if (currentWeather) {
         const city = currentWeather.location.split(",")[0];
         fetchWeatherData(city);
      }
   };

   const toggleTheme = () => {
      setTheme((prev) => (prev === "light" ? "dark" : "light"));
   };

   const value = {
      currentWeather,
      forecast,
      loading,
      error,
      unit,
      theme,
      language,
      notifications,
      autoRefresh,
      refreshInterval,
      notificationTypes,
      fetchWeatherData,
      toggleUnit,
      toggleTheme,
      setLanguage,
      setNotifications,
      setAutoRefresh,
      setRefreshInterval,
      setNotificationTypes,
   };
 
   return (
      <WeatherContext.Provider value={value}>
         {children}
      </WeatherContext.Provider>
   );
};