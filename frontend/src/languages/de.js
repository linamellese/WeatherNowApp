const de = {
  // Navigation
  nav: {
    home: "Startseite",
    weather: "Wetter",
    settings: "Einstellungen"
  },
  
  // Home Page
  home: {
    title: "WeatherNow",
    subtitle: "Echtzeit-Wettervorhersage",
    description: "Erhalten Sie genaue Wettervorhersagen für jede Stadt der Welt mit unserer schönen und intuitiven Benutzeroberfläche",
    searchPlaceholder: "Stadt suchen...",
    features: {
      realtime: "Echtzeitdaten",
      forecast: "5-Tage-Vorhersage",
      details: "Detaillierte Metriken"
    },
    stats: {
      users: "Tägliche Nutzer",
      countries: "Länder",
      accuracy: "Genauigkeit"
    }
  },
  
  // Weather Page
  weather: {
    searchPlaceholder: "Stadt suchen (z.B. Berlin,DE)",
    currentWeather: "Aktuelles Wetter",
    forecast: "5-Tage-Vorhersage",
    details: "Wetterdetails",
    feelsLike: "Gefühlt",
    humidity: "Luftfeuchtigkeit",
    windSpeed: "Windgeschwindigkeit",
    pressure: "Luftdruck",
    visibility: "Sichtweite",
    sunrise: "Sonnenaufgang",
    sunset: "Sonnenuntergang",
    cloudCover: "Bewölkung",
    windGust: "Windböen",
    noForecast: "Vorhersagedaten derzeit nicht verfügbar.",
    tryAgain: "Erneut versuchen",
    cityNotFound: "Stadt nicht gefunden. Bitte überprüfen Sie den Namen und versuchen Sie es erneut."
  },
  
  // Settings
  settings: {
    title: "Einstellungen",
    appearance: "Erscheinungsbild",
    theme: "Design",
    themeDescription: "Zwischen hellem und dunklem Modus wählen",
    lightMode: "Heller Modus",
    darkMode: "Dunkler Modus",
    
    units: "Einheiten",
    temperatureUnit: "Temperatureinheit",
    temperatureDescription: "Zwischen Celsius und Fahrenheit wechseln",
    wind: "Wind",
    pressure: "Druck",
    visibility: "Sichtweite",
    
    notifications: "Benachrichtigungen",
    enableNotifications: "Benachrichtigungen aktivieren",
    notificationsDescription: "Wetterwarnungen und tägliche Vorhersagen erhalten",
    alertTypes: "Alert-Typen",
    rainAlerts: "Regenwarnungen",
    stormWarnings: "Sturmwarnungen",
    temperatureExtremes: "Extreme Temperaturen",
    snowAlerts: "Schneewarnungen",
    highWindWarnings: "Starkwindwarnungen",
    
    dataRefresh: "Datenaktualisierung",
    autoRefresh: "Automatische Aktualisierung",
    autoRefreshDescription: "Wetterdaten automatisch aktualisieren",
    refreshInterval: "Aktualisierungsintervall",
    minutes15: "15 Minuten",
    minutes30: "30 Minuten",
    hour1: "1 Stunde",
    hours2: "2 Stunden",
    
    language: "Sprache und Region",
    languageLabel: "Sprache",
    
    about: "Über",
    version: "WeatherNow v1.0.0",
    description: "Eine moderne Wettervorhersage-App mit React und Node.js. Unterstützt durch OpenWeatherMap API.",
    saveAll: "Einstellungen speichern",
    saved: "Einstellungen gespeichert!"
  },
  
  // Footer
  footer: {
    rights: "Alle Rechte vorbehalten",
    poweredBy: "Unterstützt von OpenWeatherMap"
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
    locationError: "Standort konnte nicht ermittelt werden. Bitte suchen Sie nach einer Stadt.",
    apiError: "Wetterdaten konnten nicht abgerufen werden. Bitte versuchen Sie es erneut."
  }
};

export default de;