class WeatherUtils {
  // Convert temperature
  static convertTemperature(temp, fromUnit, toUnit) {
    if (fromUnit === toUnit) return temp;
    
    if (fromUnit === 'celsius' && toUnit === 'fahrenheit') {
      return (temp * 9/5) + 32;
    } else if (fromUnit === 'fahrenheit' && toUnit === 'celsius') {
      return (temp - 32) * 5/9;
    }
    
    return temp;
  }

  // Convert wind speed
  static convertWindSpeed(speed, fromUnit, toUnit) {
    if (fromUnit === toUnit) return speed;
    
    // m/s to mph
    if (fromUnit === 'm/s' && toUnit === 'mph') {
      return speed * 2.23694;
    }
    // mph to m/s
    else if (fromUnit === 'mph' && toUnit === 'm/s') {
      return speed / 2.23694;
    }
    
    return speed;
  }

  // Get wind direction from degrees
  static getWindDirection(degrees) {
    const directions = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
    const index = Math.round(degrees / 22.5) % 16;
    return directions[index];
  }

  // Get weather icon based on condition and time
  static getWeatherIcon(condition, isDay = true) {
    const iconMap = {
      'Clear': isDay ? '01d' : '01n',
      'Clouds': isDay ? '02d' : '02n',
      'Scattered Clouds': '03d',
      'Broken Clouds': '04d',
      'Shower Rain': '09d',
      'Rain': isDay ? '10d' : '10n',
      'Thunderstorm': '11d',
      'Snow': '13d',
      'Mist': '50d'
    };
    
    return iconMap[condition] || '01d';
  }

  // Format date
  static formatDate(timestamp, format = 'full') {
    const date = new Date(timestamp * 1000);
    
    const formats = {
      short: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      medium: date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }),
      full: date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
      time: date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
    };
    
    return formats[format] || formats.full;
  }

  // Get UV index category
  static getUVCategory(uvIndex) {
    if (uvIndex <= 2) return 'Low';
    if (uvIndex <= 5) return 'Moderate';
    if (uvIndex <= 7) return 'High';
    if (uvIndex <= 10) return 'Very High';
    return 'Extreme';
  }

  // Get precipitation type
  static getPrecipitationType(code) {
    const types = {
      500: 'Light Rain',
      501: 'Moderate Rain',
      502: 'Heavy Rain',
      503: 'Very Heavy Rain',
      504: 'Extreme Rain',
      511: 'Freezing Rain',
      520: 'Light Shower Rain',
      521: 'Shower Rain',
      522: 'Heavy Shower Rain',
      600: 'Light Snow',
      601: 'Snow',
      602: 'Heavy Snow',
      611: 'Sleet',
      612: 'Light Shower Sleet',
      613: 'Shower Sleet',
      615: 'Light Rain and Snow',
      616: 'Rain and Snow',
      620: 'Light Shower Snow',
      621: 'Shower Snow',
      622: 'Heavy Shower Snow'
    };
    
    return types[code] || 'Unknown';
  }

  // Calculate heat index
  static calculateHeatIndex(temp, humidity) {
    // Heat index calculation for Fahrenheit
    const c1 = -42.379;
    const c2 = 2.04901523;
    const c3 = 10.14333127;
    const c4 = -0.22475541;
    const c5 = -6.83783e-3;
    const c6 = -5.481717e-2;
    const c7 = 1.22874e-3;
    const c8 = 8.5282e-4;
    const c9 = -1.99e-6;

    const T = temp;
    const R = humidity;

    const heatIndex = c1 + 
                     (c2 * T) + 
                     (c3 * R) + 
                     (c4 * T * R) + 
                     (c5 * T * T) + 
                     (c6 * R * R) + 
                     (c7 * T * T * R) + 
                     (c8 * T * R * R) + 
                     (c9 * T * T * R * R);

    return Math.round(heatIndex);
  }

  // Calculate dew point
  static calculateDewPoint(temp, humidity) {
    const a = 17.27;
    const b = 237.7;
    
    const alpha = ((a * temp) / (b + temp)) + Math.log(humidity / 100);
    const dewPoint = (b * alpha) / (a - alpha);
    
    return Math.round(dewPoint * 10) / 10;
  }
}

module.exports = WeatherUtils;