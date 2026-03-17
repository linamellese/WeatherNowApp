const en = {
  // Navigation
  nav: {
    home: "Home",
    weather: "Weather",
    setting: "Settings"
  },
  
  // Home Page
  home: {
    title: "WeatherNow",
    subtitle: "Real Time Weather Forecast",
    description: "Get accurate weather forecasts for any city in the world with our beautiful and intuitive interface",
    searchPlaceholder: "Search for a city...",
    features: {
      realtime: "Real-time data",
      forecast: "5-day forecast",
      details: "Detailed metrics"
    },
    stats: {
      users: "Daily Users",
      countries: "Countries",
      accuracy: "Accuracy"
    }
  },
  
  // Weather Page
  weather: {
    searchPlaceholder: "Search for a city (e.g., Addis Ababa,ET)",
    currentWeather: "Current Weather",
    forecast: "5-Day Forecast",
    details: "Weather Details",
    feelsLike: "Feels like",
    humidity: "Humidity",
    windSpeed: "Wind Speed",
    pressure: "Pressure",
    visibility: "Visibility",
    sunrise: "Sunrise",
    sunset: "Sunset",
    cloudCover: "Cloud Cover",
    windGust: "Wind Gust",
    noForecast: "Forecast data not available at the moment.",
    tryAgain: "Try Again",
    cityNotFound: "City not found. Please check the name and try again.",
    searchPlaceholder: "Search for a city (e.g., Addis Ababa,ET)",
  useMyLocation: "Use my location",
  search: "Search",
  citiesStartingWith: "Cities starting with",
  noCitiesFound: "No cities found starting with",
  recentSearches: "Recent Searches",
  try: "Try",
  },
  
  // Settings
  settings: {
    title: "Settings",
    appearance: "Appearance",
    theme: "Theme",
    themeDescription: "Choose between light and dark mode",
    lightMode: "Light Mode",
    darkMode: "Dark Mode",
    
    units: "Units",
    temperatureUnit: "Temperature Unit",
    temperatureDescription: "Switch between Celsius and Fahrenheit",
    wind: "Wind",
    pressure: "Pressure",
    visibility: "Visibility",
    
    notifications: "Notifications",
    enableNotifications: "Enable Notifications",
    notificationsDescription: "Get weather alerts and daily forecasts",
    alertTypes: "Alert Types",
    rainAlerts: "Rain Alerts",
    stormWarnings: "Storm Warnings",
    temperatureExtremes: "Temperature Extremes",
    snowAlerts: "Snow Alerts",
    highWindWarnings: "High Wind Warnings",
    
    dataRefresh: "Data Refresh",
    autoRefresh: "Auto-refresh",
    autoRefreshDescription: "Automatically update weather data",
    refreshInterval: "Refresh Interval",
    minutes15: "15 minutes",
    minutes30: "30 minutes",
    hour1: "1 hour",
    hours2: "2 hours",
    
    language: "Language & Region",
    languageLabel: "Language",
    
    about: "About",
    version: "WeatherNow v1.0.0",
    description: "A modern weather forecast application built with React and Node.js. Powered by OpenWeatherMap API.",
    saveAll: "Save All Settings",
    saved: "Settings saved!"
  },
  
  // Footer
  footer: {
    rights: "All rights reserved",
    poweredBy: "Powered by OpenWeatherMap"
  },
  
  // Units
  units: {
    celsius: "°C",
    fahrenheit: "°F",
    ms: "m/s",
    mph: "mph",
    hPa: "hPa",
    km: "km"
  },
  
  // Errors
  errors: {
    locationError: "Unable to get your location. Please search for a city instead.",
    apiError: "Failed to fetch weather data. Please try again."
  }
};

export default en;