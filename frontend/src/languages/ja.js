const ja = {
  // Navigation
  nav: {
    home: "ホーム",
    weather: "天気",
    settings: "設定"
  },
  
  // Home Page
  home: {
    title: "WeatherNow",
    subtitle: "リアルタイム天気予報",
    description: "美しく直感的なインターフェースで、世界中の都市の正確な天気予報を入手しましょう",
    searchPlaceholder: "都市を検索...",
    features: {
      realtime: "リアルタイムデータ",
      forecast: "5日間予報",
      details: "詳細な指標"
    },
    stats: {
      users: "日次ユーザー数",
      countries: "国",
      accuracy: "精度"
    }
  },
  
  // Weather Page
  weather: {
    searchPlaceholder: "都市を検索 (例: 東京,JP)",
    currentWeather: "現在の天気",
    forecast: "5日間予報",
    details: "天気詳細",
    feelsLike: "体感温度",
    humidity: "湿度",
    windSpeed: "風速",
    pressure: "気圧",
    visibility: "視程",
    sunrise: "日の出",
    sunset: "日の入り",
    cloudCover: "雲量",
    windGust: "突風",
    noForecast: "現在、予報データは利用できません。",
    tryAgain: "再試行",
    cityNotFound: "都市が見つかりません。名前を確認してもう一度お試しください。"
  },
  
  // Settings
  settings: {
    title: "設定",
    appearance: "外観",
    theme: "テーマ",
    themeDescription: "ライトモードとダークモードを切り替え",
    lightMode: "ライトモード",
    darkMode: "ダークモード",
    
    units: "単位",
    temperatureUnit: "温度単位",
    temperatureDescription: "摂氏と華氏を切り替え",
    wind: "風",
    pressure: "気圧",
    visibility: "視程",
    
    notifications: "通知",
    enableNotifications: "通知を有効にする",
    notificationsDescription: "気象警報と日次予報を受け取る",
    alertTypes: "アラートタイプ",
    rainAlerts: "雨警報",
    stormWarnings: "暴風警報",
    temperatureExtremes: "極端な気温",
    snowAlerts: "雪警報",
    highWindWarnings: "強風警報",
    
    dataRefresh: "データ更新",
    autoRefresh: "自動更新",
    autoRefreshDescription: "天気データを自動的に更新",
    refreshInterval: "更新間隔",
    minutes15: "15分",
    minutes30: "30分",
    hour1: "1時間",
    hours2: "2時間",
    
    language: "言語と地域",
    languageLabel: "言語",
    
    about: "このアプリについて",
    version: "WeatherNow v1.0.0",
    description: "ReactとNode.jsで構築されたモダンな天気予報アプリケーション。OpenWeatherMap API搭載。",
    saveAll: "設定を保存",
    saved: "設定を保存しました！"
  },
  
  // Footer
  footer: {
    rights: "全著作権所有",
    poweredBy: "OpenWeatherMap搭載"
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
    locationError: "位置情報を取得できませんでした。都市を検索してください。",
    apiError: "天気データの取得に失敗しました。もう一度お試しください。"
  }
};

export default ja;