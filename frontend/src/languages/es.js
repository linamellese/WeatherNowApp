const es = {
  // Navigation
  nav: {
    home: "Inicio",
    weather: "Clima",
    settings: "Configuración"
  },
  
  // Home Page
  home: {
    title: "WeatherNow",
    subtitle: "Pronóstico del Tiempo en Tiempo Real",
    description: "Obtén pronósticos meteorológicos precisos para cualquier ciudad del mundo con nuestra interfaz hermosa e intuitiva",
    searchPlaceholder: "Buscar una ciudad...",
    features: {
      realtime: "Datos en tiempo real",
      forecast: "Pronóstico de 5 días",
      details: "Métricas detalladas"
    },
    stats: {
      users: "Usuarios Diarios",
      countries: "Países",
      accuracy: "Precisión"
    }
  },
  
  // Weather Page
  weather: {
    searchPlaceholder: "Buscar ciudad (ej., Madrid,ES)",
    currentWeather: "Clima Actual",
    forecast: "Pronóstico de 5 Días",
    details: "Detalles del Clima",
    feelsLike: "Sensación térmica",
    humidity: "Humedad",
    windSpeed: "Velocidad del viento",
    pressure: "Presión",
    visibility: "Visibilidad",
    sunrise: "Amanecer",
    sunset: "Atardecer",
    cloudCover: "Cobertura de nubes",
    windGust: "Ráfaga de viento",
    noForecast: "Datos de pronóstico no disponibles por el momento.",
    tryAgain: "Intentar de nuevo",
    cityNotFound: "Ciudad no encontrada. Por favor verifica el nombre e intenta de nuevo."
  },
  
  // Settings
  settings: {
    title: "Configuración",
    appearance: "Apariencia",
    theme: "Tema",
    themeDescription: "Elige entre modo claro y oscuro",
    lightMode: "Modo Claro",
    darkMode: "Modo Oscuro",
    
    units: "Unidades",
    temperatureUnit: "Unidad de Temperatura",
    temperatureDescription: "Cambiar entre Celsius y Fahrenheit",
    wind: "Viento",
    pressure: "Presión",
    visibility: "Visibilidad",
    
    notifications: "Notificaciones",
    enableNotifications: "Activar Notificaciones",
    notificationsDescription: "Recibe alertas meteorológicas y pronósticos diarios",
    alertTypes: "Tipos de Alerta",
    rainAlerts: "Alertas de Lluvia",
    stormWarnings: "Advertencias de Tormenta",
    temperatureExtremes: "Temperaturas Extremas",
    snowAlerts: "Alertas de Nieve",
    highWindWarnings: "Advertencias de Viento Fuerte",
    
    dataRefresh: "Actualización de Datos",
    autoRefresh: "Actualización automática",
    autoRefreshDescription: "Actualizar datos meteorológicos automáticamente",
    refreshInterval: "Intervalo de actualización",
    minutes15: "15 minutos",
    minutes30: "30 minutos",
    hour1: "1 hora",
    hours2: "2 horas",
    
    language: "Idioma y Región",
    languageLabel: "Idioma",
    
    about: "Acerca de",
    version: "WeatherNow v1.0.0",
    description: "Una aplicación moderna de pronóstico del tiempo construida con React y Node.js. Desarrollada con OpenWeatherMap API.",
    saveAll: "Guardar Configuración",
    saved: "¡Configuración guardada!"
  },
  
  // Footer
  footer: {
    rights: "Todos los derechos reservados",
    poweredBy: "Desarrollado por OpenWeatherMap"
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
    locationError: "No se pudo obtener tu ubicación. Por favor busca una ciudad.",
    apiError: "Error al obtener datos del clima. Por favor intenta de nuevo."
  }
};

export default es;