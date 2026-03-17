const it = {
  // Navigation
  nav: {
    home: "Home",
    weather: "Meteo",
    settings: "Impostazioni"
  },
  
  // Home Page
  home: {
    title: "WeatherNow",
    subtitle: "Previsioni Meteo in Tempo Reale",
    description: "Ottieni previsioni meteo accurate per qualsiasi città del mondo con la nostra interfaccia bella e intuitiva",
    searchPlaceholder: "Cerca una città...",
    features: {
      realtime: "Dati in tempo reale",
      forecast: "Previsioni a 5 giorni",
      details: "Metriche dettagliate"
    },
    stats: {
      users: "Utenti giornalieri",
      countries: "Paesi",
      accuracy: "Precisione"
    }
  },
  
  // Weather Page
  weather: {
    searchPlaceholder: "Cerca città (es., Roma,IT)",
    currentWeather: "Meteo Attuale",
    forecast: "Previsioni a 5 Giorni",
    details: "Dettagli Meteo",
    feelsLike: "Percepita",
    humidity: "Umidità",
    windSpeed: "Velocità del vento",
    pressure: "Pressione",
    visibility: "Visibilità",
    sunrise: "Alba",
    sunset: "Tramonto",
    cloudCover: "Copertura nuvolosa",
    windGust: "Raffiche",
    noForecast: "Dati di previsione non disponibili al momento.",
    tryAgain: "Riprova",
    cityNotFound: "Città non trovata. Controlla il nome e riprova."
  },
  
  // Settings
  settings: {
    title: "Impostazioni",
    appearance: "Aspetto",
    theme: "Tema",
    themeDescription: "Scegli tra modalità chiara e scura",
    lightMode: "Modalità Chiara",
    darkMode: "Modalità Scura",
    
    units: "Unità",
    temperatureUnit: "Unità di Temperatura",
    temperatureDescription: "Passa da Celsius a Fahrenheit",
    wind: "Vento",
    pressure: "Pressione",
    visibility: "Visibilità",
    
    notifications: "Notifiche",
    enableNotifications: "Attiva notifiche",
    notificationsDescription: "Ricevi allerte meteo e previsioni giornaliere",
    alertTypes: "Tipi di allerta",
    rainAlerts: "Allerte pioggia",
    stormWarnings: "Avvisi di tempesta",
    temperatureExtremes: "Temperature estreme",
    snowAlerts: "Allerte neve",
    highWindWarnings: "Avvisi vento forte",
    
    dataRefresh: "Aggiornamento dati",
    autoRefresh: "Aggiornamento automatico",
    autoRefreshDescription: "Aggiorna automaticamente i dati meteo",
    refreshInterval: "Intervallo di aggiornamento",
    minutes15: "15 minuti",
    minutes30: "30 minuti",
    hour1: "1 ora",
    hours2: "2 ore",
    
    language: "Lingua e regione",
    languageLabel: "Lingua",
    
    about: "Informazioni",
    version: "WeatherNow v1.0.0",
    description: "Un'app moderna di previsioni meteo costruita con React e Node.js. Alimentata da OpenWeatherMap API.",
    saveAll: "Salva impostazioni",
    saved: "Impostazioni salvate!"
  },
  
  // Footer
  footer: {
    rights: "Tutti i diritti riservati",
    poweredBy: "Alimentato da OpenWeatherMap"
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
    locationError: "Impossibile ottenere la tua posizione. Cerca una città.",
    apiError: "Impossibile recuperare i dati meteo. Riprova."
  }
};

export default it;