import React from 'react'
import {
  WiDaySunny,
  WiNightClear,
  WiDayCloudy,
  WiNightAltCloudy,
  WiCloud,
  WiCloudy,
  WiRain,
  WiShowers,
  WiThunderstorm,
  WiSnow,
  WiFog,
  WiDayRain,
  WiNightRain,
  WiDayThunderstorm,
  WiNightThunderstorm,
  WiDaySnow,
  WiNightSnow,
  WiDayFog,
  WiNightFog
} from 'react-icons/wi'

export const getWeatherIcon = (iconCode) => {
  const iconMap = {
    '01d': <WiDaySunny />,
    '01n': <WiNightClear />,
    '02d': <WiDayCloudy />,
    '02n': <WiNightAltCloudy />,
    '03d': <WiCloud />,
    '03n': <WiCloud />,
    '04d': <WiCloudy />,
    '04n': <WiCloudy />,
    '09d': <WiShowers />,
    '09n': <WiShowers />,
    '10d': <WiDayRain />,
    '10n': <WiNightRain />,
    '11d': <WiDayThunderstorm />,
    '11n': <WiNightThunderstorm />,
    '13d': <WiDaySnow />,
    '13n': <WiNightSnow />,
    '50d': <WiDayFog />,
    '50n': <WiNightFog />
  }

  return iconMap[iconCode] || <WiDaySunny />
}

export const getWeatherCondition = (iconCode) => {
  const conditionMap = {
    '01d': 'Clear Sky',
    '01n': 'Clear Night',
    '02d': 'Few Clouds',
    '02n': 'Few Clouds',
    '03d': 'Scattered Clouds',
    '03n': 'Scattered Clouds',
    '04d': 'Broken Clouds',
    '04n': 'Broken Clouds',
    '09d': 'Shower Rain',
    '09n': 'Shower Rain',
    '10d': 'Rain',
    '10n': 'Rain',
    '11d': 'Thunderstorm',
    '11n': 'Thunderstorm',
    '13d': 'Snow',
    '13n': 'Snow',
    '50d': 'Fog',
    '50n': 'Fog'
  }

  return conditionMap[iconCode] || 'Unknown'
}