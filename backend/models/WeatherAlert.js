const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const WeatherAlert = sequelize.define('WeatherAlert', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'users',
      key: 'id'
    },
    field: 'user_id'
  },
  locationId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'favorite_locations',
      key: 'id'
    },
    field: 'location_id'
  },
  cityName: {
    type: DataTypes.STRING(100),
    allowNull: false,
    field: 'city_name'
  },
  alertType: {
    type: DataTypes.ENUM(
      'rain', 
      'storm', 
      'snow', 
      'extreme_temp', 
      'wind', 
      'fog', 
      'air_quality'
    ),
    allowNull: false,
    field: 'alert_type'
  },
  threshold: {
    type: DataTypes.DECIMAL(10, 2)
  },
  condition: {
    type: DataTypes.ENUM('above', 'below', 'equals', 'any')
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
    field: 'is_active'
  },
  notificationMethod: {
    type: DataTypes.ENUM('email', 'push', 'both'),
    defaultValue: 'both',
    field: 'notification_method'
  },
  lastTriggered: {
    type: DataTypes.DATE,
    field: 'last_triggered'
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    field: 'created_at'
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    onUpdate: DataTypes.NOW,
    field: 'updated_at'
  }
}, {
  tableName: 'weather_alerts',
  timestamps: true,
  underscored: true
});

module.exports = WeatherAlert;