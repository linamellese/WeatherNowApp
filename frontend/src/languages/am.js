const am = {
   // Navigation
   nav: {
      home: "መነሻ",
      weather: "የአየር ሁኔታ",
      settings: "ቅንብሮች",
   },

   // Home Page
   home: {
      title: "ዌዘርናው",
      subtitle: "የአሁኑ ጊዜ የአየር ሁኔታ ትንበያ",
      description:
         "በሚያምር እና ለመረዳት ቀላል በሆነ በይነገጽ ለማንኛውም የአለም ከተማ ትክክለኛ የአየር ሁኔታ ትንበያ ያግኙ",
      searchPlaceholder: "ከተማ ይፈልጉ...",
      features: {
         realtime: "የአሁኑ ጊዜ መረጃ",
         forecast: "የ5 ቀን ትንበያ",
         details: "ዝርዝር መረጃዎች",
      },
      stats: {
         users: "ዕለታዊ ተጠቃሚዎች",
         countries: "ሀገራት",
         accuracy: "ትክክለኛነት",
      },
   },

   // Weather Page
   weather: {
      searchPlaceholder: "ከተማ ይፈልጉ (ለምሳሌ፡ አዲስ አበባ,ET)",
      currentWeather: "የአሁኑ የአየር ሁኔታ",
      forecast: "የ5 ቀን ትንበያ",
      details: "የአየር ሁኔታ ዝርዝሮች",
      feelsLike: "የሚሰማው ሙቀት",
      humidity: "እርጥበት",
      windSpeed: "የንፋስ ፍጥነት",
      pressure: "ግፊት",
      visibility: "ታይነት",
      sunrise: "ፀሐይ መውጣት",
      sunset: "ፀሐይ መጥለቅ",
      cloudCover: "ደመና ሽፋን",
      windGust: "የንፋስ መጨመር",
      noForecast: "የአየር ሁኔታ ትንበያ በአሁኑ ጊዜ አይገኝም።",
      tryAgain: "እንደገና ሞክር",
      cityNotFound: "ከተማ አልተገኘችም። እባክዎ ስሙን ያረጋግጡ እና እንደገና ይሞክሩ።",
       searchPlaceholder: "ከተማ ይፈልጉ (ለምሳሌ፡ አዲስ አበባ,ET)",
  useMyLocation: "የእኔን ቦታ ተጠቀም",
  search: "ፈልግ",
  citiesStartingWith: "የሚጀምሩ ከተሞች",
  noCitiesFound: "ምንም ከተሞች አልተገኙም የሚጀምሩት",
  recentSearches: "የቅርብ ጊዜ ፍለጋዎች",
  try: "ሞክር",
   },

   // Settings
   settings: {
      title: "ቅንብሮች",
      appearance: "መልክ",
      theme: "ገጽታ",
      themeDescription: "በብርሃን እና በጨለማ ሁነታ መካከል ይምረጡ",
      lightMode: "ብርሃን ሁነታ",
      darkMode: "ጨለማ ሁነታ",

      units: "አሃዶች",
      temperatureUnit: "የሙቀት መጠን አሃድ",
      temperatureDescription: "በሴልሲየስ እና ፋራናይት መካከል ይቀያይሩ",
      wind: "ንፋስ",
      pressure: "ግፊት",
      visibility: "ታይነት",

      notifications: "ማሳወቂያዎች",
      enableNotifications: "ማሳወቂያዎችን አንቃ",
      notificationsDescription: "የአየር ሁኔታ ማስጠንቀቂያዎችን እና ዕለታዊ ትንበያዎችን ያግኙ",
      alertTypes: "የማስጠንቀቂያ ዓይነቶች",
      rainAlerts: "የዝናብ ማስጠንቀቂያዎች",
      stormWarnings: "የማዕበል ማስጠንቀቂያዎች",
      temperatureExtremes: "ከፍተኛ የሙቀት መጠን",
      snowAlerts: "የበረዶ ማስጠንቀቂያዎች",
      highWindWarnings: "ከፍተኛ ንፋስ ማስጠንቀቂያዎች",

      dataRefresh: "ውሂብ ማደስ",
      autoRefresh: "ራስ-ሰር ማደስ",
      autoRefreshDescription: "የአየር ሁኔታ ውሂብን በራስ-ሰር ያዘምኑ",
      refreshInterval: "የማደሻ ክፍተት",
      minutes15: "15 ደቂቃዎች",
      minutes30: "30 ደቂቃዎች",
      hour1: "1 ሰዓት",
      hours2: "2 ሰዓቶች",

      language: "ቋንቋ እና ክልል",
      languageLabel: "ቋንቋ",

      about: "ስለ",
      version: "ዌዘርናው v1.0.0",
      description:
         "በReact እና Node.js የተገነባ ዘመናዊ የአየር ሁኔታ ትንበያ መተግበሪያ። በOpenWeatherMap ኤፒአይ የተጎላበተ።",
      saveAll: "ሁሉንም ቅንብሮች አስቀምጥ",
      saved: "ቅንብሮች ተቀምጠዋል!",
   },

   // Footer
   footer: {
      rights: "መብቱ በህግ የተጠበቀ ነው",
      poweredBy: "በOpenWeatherMap የተጎላበተ",
   },

   // Units
   units: {
      celsius: "°ሴ",
      fahrenheit: "°ፋ",
      ms: "ሜ/ሰ",
      mph: "ማይል/ሰ",
      hPa: "ሄፓ",
      km: "ኪሜ",
   },

   // Errors
   errors: {
      locationError: "የእርስዎን ቦታ ማግኘት አልተቻለም። እባክዎ በምትኩ ከተማ ይፈልጉ።",
      apiError: "የአየር ሁኔታ ውሂብ ማምጣት አልተሳካም። እባክዎ እንደገና ይሞክሩ።",
   },
};

export default am;
