const zh = {
  // Navigation
  nav: {
    home: "首页",
    weather: "天气",
    settings: "设置"
  },
  
  // Home Page
  home: {
    title: "WeatherNow",
    subtitle: "实时天气预报",
    description: "通过我们美观直观的界面，获取全球任何城市的准确天气预报",
    searchPlaceholder: "搜索城市...",
    features: {
      realtime: "实时数据",
      forecast: "5天预报",
      details: "详细指标"
    },
    stats: {
      users: "日活跃用户",
      countries: "国家",
      accuracy: "准确率"
    }
  },
  
  // Weather Page
  weather: {
    searchPlaceholder: "搜索城市 (例如: 北京,CN)",
    currentWeather: "当前天气",
    forecast: "5天预报",
    details: "天气详情",
    feelsLike: "体感温度",
    humidity: "湿度",
    windSpeed: "风速",
    pressure: "气压",
    visibility: "能见度",
    sunrise: "日出",
    sunset: "日落",
    cloudCover: "云量",
    windGust: "阵风",
    noForecast: "目前无法获取预报数据。",
    tryAgain: "重试",
    cityNotFound: "未找到城市。请检查名称后重试。"
  },
  
  // Settings
  settings: {
    title: "设置",
    appearance: "外观",
    theme: "主题",
    themeDescription: "选择浅色或深色模式",
    lightMode: "浅色模式",
    darkMode: "深色模式",
    
    units: "单位",
    temperatureUnit: "温度单位",
    temperatureDescription: "在摄氏度和华氏度之间切换",
    wind: "风",
    pressure: "气压",
    visibility: "能见度",
    
    notifications: "通知",
    enableNotifications: "启用通知",
    notificationsDescription: "接收天气警报和每日预报",
    alertTypes: "警报类型",
    rainAlerts: "降雨警报",
    stormWarnings: "风暴警告",
    temperatureExtremes: "极端温度",
    snowAlerts: "降雪警报",
    highWindWarnings: "大风警告",
    
    dataRefresh: "数据刷新",
    autoRefresh: "自动刷新",
    autoRefreshDescription: "自动更新天气数据",
    refreshInterval: "刷新间隔",
    minutes15: "15分钟",
    minutes30: "30分钟",
    hour1: "1小时",
    hours2: "2小时",
    
    language: "语言与地区",
    languageLabel: "语言",
    
    about: "关于",
    version: "WeatherNow v1.0.0",
    description: "基于React和Node.js构建的现代天气预报应用程序。由OpenWeatherMap API提供支持。",
    saveAll: "保存设置",
    saved: "设置已保存！"
  },
  
  // Footer
  footer: {
    rights: "版权所有",
    poweredBy: "由OpenWeatherMap提供支持"
  },
  
  // Units
  units: {
    celsius: "°C",
    fahrenheit: "°F",
    ms: "米/秒",
    mph: "英里/小时",
    hPa: "百帕",
    km: "公里"
  },
  
  // Errors
  errors: {
    locationError: "无法获取您的位置。请搜索城市。",
    apiError: "获取天气数据失败。请重试。"
  }
};

export default zh;