const fr = {
  // Navigation
  nav: {
    home: "Accueil",
    weather: "Météo",
    settings: "Paramètres"
  },
  
  // Home Page
  home: {
    title: "WeatherNow",
    subtitle: "Prévisions Météo en Temps Réel",
    description: "Obtenez des prévisions météorologiques précises pour n'importe quelle ville du monde avec notre interface belle et intuitive",
    searchPlaceholder: "Rechercher une ville...",
    features: {
      realtime: "Données en temps réel",
      forecast: "Prévisions sur 5 jours",
      details: "Métriques détaillées"
    },
    stats: {
      users: "Utilisateurs quotidiens",
      countries: "Pays",
      accuracy: "Précision"
    }
  },
  
  // Weather Page
  weather: {
    searchPlaceholder: "Rechercher une ville (ex., Paris,FR)",
    currentWeather: "Météo Actuelle",
    forecast: "Prévisions sur 5 Jours",
    details: "Détails Météo",
    feelsLike: "Ressenti",
    humidity: "Humidité",
    windSpeed: "Vitesse du vent",
    pressure: "Pression",
    visibility: "Visibilité",
    sunrise: "Lever du soleil",
    sunset: "Coucher du soleil",
    cloudCover: "Couverture nuageuse",
    windGust: "Rafales",
    noForecast: "Données de prévisions non disponibles pour le moment.",
    tryAgain: "Réessayer",
    cityNotFound: "Ville non trouvée. Vérifiez le nom et réessayez."
  },
  
  // Settings
  settings: {
    title: "Paramètres",
    appearance: "Apparence",
    theme: "Thème",
    themeDescription: "Choisir entre mode clair et sombre",
    lightMode: "Mode Clair",
    darkMode: "Mode Sombre",
    
    units: "Unités",
    temperatureUnit: "Unité de Température",
    temperatureDescription: "Passer de Celsius à Fahrenheit",
    wind: "Vent",
    pressure: "Pression",
    visibility: "Visibilité",
    
    notifications: "Notifications",
    enableNotifications: "Activer les notifications",
    notificationsDescription: "Recevoir des alertes météo et des prévisions quotidiennes",
    alertTypes: "Types d'alertes",
    rainAlerts: "Alertes pluie",
    stormWarnings: "Avertissements d'orage",
    temperatureExtremes: "Températures extrêmes",
    snowAlerts: "Alertes neige",
    highWindWarnings: "Avertissements vent fort",
    
    dataRefresh: "Actualisation des données",
    autoRefresh: "Actualisation automatique",
    autoRefreshDescription: "Mettre à jour automatiquement les données météo",
    refreshInterval: "Intervalle d'actualisation",
    minutes15: "15 minutes",
    minutes30: "30 minutes",
    hour1: "1 heure",
    hours2: "2 heures",
    
    language: "Langue et région",
    languageLabel: "Langue",
    
    about: "À propos",
    version: "WeatherNow v1.0.0",
    description: "Une application moderne de prévisions météo construite avec React et Node.js. Propulsée par OpenWeatherMap API.",
    saveAll: "Enregistrer les paramètres",
    saved: "Paramètres enregistrés !"
  },
  
  // Footer
  footer: {
    rights: "Tous droits réservés",
    poweredBy: "Propulsé par OpenWeatherMap"
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
    locationError: "Impossible d'obtenir votre position. Veuillez rechercher une ville.",
    apiError: "Échec de la récupération des données météo. Veuillez réessayer."
  }
};

export default fr;