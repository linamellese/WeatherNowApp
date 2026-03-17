const ru = {
  // Navigation
  nav: {
    home: "Главная",
    weather: "Погода",
    settings: "Настройки"
  },
  
  // Home Page
  home: {
    title: "WeatherNow",
    subtitle: "Прогноз погоды в реальном времени",
    description: "Получайте точные прогнозы погоды для любого города мира с нашим красивым и интуитивным интерфейсом",
    searchPlaceholder: "Поиск города...",
    features: {
      realtime: "Данные в реальном времени",
      forecast: "Прогноз на 5 дней",
      details: "Детальные метрики"
    },
    stats: {
      users: "Ежедневных пользователей",
      countries: "Стран",
      accuracy: "Точность"
    }
  },
  
  // Weather Page
  weather: {
    searchPlaceholder: "Поиск города (напр., Москва,RU)",
    currentWeather: "Текущая погода",
    forecast: "Прогноз на 5 дней",
    details: "Детали погоды",
    feelsLike: "Ощущается как",
    humidity: "Влажность",
    windSpeed: "Скорость ветра",
    pressure: "Давление",
    visibility: "Видимость",
    sunrise: "Восход",
    sunset: "Закат",
    cloudCover: "Облачность",
    windGust: "Порывы ветра",
    noForecast: "Данные прогноза временно недоступны.",
    tryAgain: "Попробовать снова",
    cityNotFound: "Город не найден. Проверьте название и попробуйте снова."
  },
  
  // Settings
  settings: {
    title: "Настройки",
    appearance: "Внешний вид",
    theme: "Тема",
    themeDescription: "Выберите между светлым и темным режимом",
    lightMode: "Светлый режим",
    darkMode: "Темный режим",
    
    units: "Единицы измерения",
    temperatureUnit: "Единица температуры",
    temperatureDescription: "Переключение между Цельсием и Фаренгейтом",
    wind: "Ветер",
    pressure: "Давление",
    visibility: "Видимость",
    
    notifications: "Уведомления",
    enableNotifications: "Включить уведомления",
    notificationsDescription: "Получать оповещения о погоде и ежедневные прогнозы",
    alertTypes: "Типы оповещений",
    rainAlerts: "Оповещения о дожде",
    stormWarnings: "Предупреждения о шторме",
    temperatureExtremes: "Экстремальные температуры",
    snowAlerts: "Оповещения о снеге",
    highWindWarnings: "Предупреждения о сильном ветре",
    
    dataRefresh: "Обновление данных",
    autoRefresh: "Автообновление",
    autoRefreshDescription: "Автоматически обновлять данные погоды",
    refreshInterval: "Интервал обновления",
    minutes15: "15 минут",
    minutes30: "30 минут",
    hour1: "1 час",
    hours2: "2 часа",
    
    language: "Язык и регион",
    languageLabel: "Язык",
    
    about: "О приложении",
    version: "WeatherNow v1.0.0",
    description: "Современное приложение прогноза погоды, созданное с React и Node.js. Работает на OpenWeatherMap API.",
    saveAll: "Сохранить настройки",
    saved: "Настройки сохранены!"
  },
  
  // Footer
  footer: {
    rights: "Все права защищены",
    poweredBy: "Работает на OpenWeatherMap"
  },
  
  // Units
  units: {
    celsius: "°C",
    fahrenheit: "°F",
    ms: "м/с",
    mph: "миль/ч",
    hPa: "гПа",
    km: "км"
  },
  
  // Errors
  errors: {
    locationError: "Не удалось определить ваше местоположение. Пожалуйста, найдите город.",
    apiError: "Не удалось получить данные о погоде. Пожалуйста, попробуйте снова."
  }
};

export default ru;