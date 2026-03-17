module.exports = {
  // API endpoints
  API_ENDPOINTS: {
    CURRENT_WEATHER: 'https://api.openweathermap.org/data/2.5/weather',
    FORECAST: 'https://api.openweathermap.org/data/2.5/forecast',
    GEOCODING: 'https://api.openweathermap.org/geo/1.0/direct',
    REVERSE_GEOCODING: 'https://api.openweathermap.org/geo/1.0/reverse',
    AIR_POLLUTION: 'https://api.openweathermap.org/data/2.5/air_pollution'
  },

  // HTTP status codes
  HTTP_STATUS: {
    OK: 200,
    CREATED: 201,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    TOO_MANY_REQUESTS: 429,
    INTERNAL_SERVER_ERROR: 500
  },

  // Weather condition codes
  WEATHER_CODES: {
    THUNDERSTORM: [200, 201, 202, 210, 211, 212, 221, 230, 231, 232],
    DRIZZLE: [300, 301, 302, 310, 311, 312, 313, 314, 321],
    RAIN: [500, 501, 502, 503, 504, 511, 520, 521, 522, 531],
    SNOW: [600, 601, 602, 611, 612, 613, 615, 616, 620, 621, 622],
    ATMOSPHERE: [701, 711, 721, 731, 741, 751, 761, 762, 771, 781],
    CLEAR: [800],
    CLOUDS: [801, 802, 803, 804]
  },

  // Cache TTL in seconds
  CACHE_TTL: {
    CURRENT_WEATHER: 600, // 10 minutes
    FORECAST: 1800, // 30 minutes
    GEOCODING: 86400, // 24 hours
    AIR_QUALITY: 1800 // 30 minutes
  },

  // Rate limits
  RATE_LIMITS: {
    WINDOW_MS: 15 * 60 * 1000, // 15 minutes
    MAX_REQUESTS: 100 // 100 requests per window
  },

  // Supported units
  UNITS: {
    METRIC: 'metric',
    IMPERIAL: 'imperial',
    STANDARD: 'standard'
  },

  // Unit conversions
  UNIT_CONVERSIONS: {
    METRIC: {
      TEMP: '°C',
      SPEED: 'm/s',
      PRESSURE: 'hPa',
      DISTANCE: 'km'
    },
    IMPERIAL: {
      TEMP: '°F',
      SPEED: 'mph',
      PRESSURE: 'inHg',
      DISTANCE: 'mi'
    }
  }
};