const pt = {
  // Navigation
  nav: {
    home: "Início",
    weather: "Clima",
    settings: "Configurações"
  },
  
  // Home Page
  home: {
    title: "WeatherNow",
    subtitle: "Previsão do Tempo em Tempo Real",
    description: "Obtenha previsões meteorológicas precisas para qualquer cidade do mundo com nossa interface bonita e intuitiva",
    searchPlaceholder: "Buscar uma cidade...",
    features: {
      realtime: "Dados em tempo real",
      forecast: "Previsão de 5 dias",
      details: "Métricas detalhadas"
    },
    stats: {
      users: "Usuários Diários",
      countries: "Países",
      accuracy: "Precisão"
    }
  },
  
  // Weather Page
  weather: {
    searchPlaceholder: "Buscar cidade (ex., Lisboa,PT)",
    currentWeather: "Clima Atual",
    forecast: "Previsão de 5 Dias",
    details: "Detalhes do Clima",
    feelsLike: "Sensação térmica",
    humidity: "Umidade",
    windSpeed: "Velocidade do vento",
    pressure: "Pressão",
    visibility: "Visibilidade",
    sunrise: "Nascer do sol",
    sunset: "Pôr do sol",
    cloudCover: "Cobertura de nuvens",
    windGust: "Rajada de vento",
    noForecast: "Dados de previsão não disponíveis no momento.",
    tryAgain: "Tentar novamente",
    cityNotFound: "Cidade não encontrada. Verifique o nome e tente novamente."
  },
  
  // Settings
  settings: {
    title: "Configurações",
    appearance: "Aparência",
    theme: "Tema",
    themeDescription: "Escolha entre modo claro e escuro",
    lightMode: "Modo Claro",
    darkMode: "Modo Escuro",
    
    units: "Unidades",
    temperatureUnit: "Unidade de Temperatura",
    temperatureDescription: "Alternar entre Celsius e Fahrenheit",
    wind: "Vento",
    pressure: "Pressão",
    visibility: "Visibilidade",
    
    notifications: "Notificações",
    enableNotifications: "Ativar notificações",
    notificationsDescription: "Receber alertas meteorológicos e previsões diárias",
    alertTypes: "Tipos de alerta",
    rainAlerts: "Alertas de chuva",
    stormWarnings: "Avisos de tempestade",
    temperatureExtremes: "Temperaturas extremas",
    snowAlerts: "Alertas de neve",
    highWindWarnings: "Avisos de vento forte",
    
    dataRefresh: "Atualização de dados",
    autoRefresh: "Atualização automática",
    autoRefreshDescription: "Atualizar dados meteorológicos automaticamente",
    refreshInterval: "Intervalo de atualização",
    minutes15: "15 minutos",
    minutes30: "30 minutos",
    hour1: "1 hora",
    hours2: "2 horas",
    
    language: "Idioma e região",
    languageLabel: "Idioma",
    
    about: "Sobre",
    version: "WeatherNow v1.0.0",
    description: "Um aplicativo moderno de previsão do tempo construído com React e Node.js. Desenvolvido com OpenWeatherMap API.",
    saveAll: "Salvar configurações",
    saved: "Configurações salvas!"
  },
  
  // Footer
  footer: {
    rights: "Todos os direitos reservados",
    poweredBy: "Desenvolvido por OpenWeatherMap"
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
    locationError: "Não foi possível obter sua localização. Por favor, busque uma cidade.",
    apiError: "Falha ao obter dados meteorológicos. Tente novamente."
  }
};

export default pt;