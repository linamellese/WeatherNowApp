import React, { createContext, useContext, useEffect } from 'react';
import { useWeather } from './WeatherContext';
import languages from '../languages';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const { language } = useWeather();
  
  // Get current language translations
  const t = languages[language] || languages.en;
  
  // Function to format dates according to language
  const formatDate = (date, options = {}) => {
    return new Date(date).toLocaleDateString(language, options);
  };
  
  const value = {
    t,
    formatDate,
    currentLanguage: language
  };
  
  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};