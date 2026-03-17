const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const SearchHistory = sequelize.define('SearchHistory', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'users',
      key: 'id'
    },
    field: 'user_id'
  },
  sessionId: {
    type: DataTypes.STRING(100),
    field: 'session_id'
  },
  searchQuery: {
    type: DataTypes.STRING(100),
    allowNull: false,
    field: 'search_query'
  },
  cityName: {
    type: DataTypes.STRING(100),
    field: 'city_name'
  },
  countryCode: {
    type: DataTypes.STRING(2),
    field: 'country_code'
  },
  latitude: {
    type: DataTypes.DECIMAL(10, 8)
  },
  longitude: {
    type: DataTypes.DECIMAL(11, 8)
  },
  searchType: {
    type: DataTypes.ENUM('city', 'coordinates', 'geolocation'),
    defaultValue: 'city',
    field: 'search_type'
  },
  resultCount: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
    field: 'result_count'
  },
  searchTime: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    field: 'search_time'
  }
}, {
  tableName: 'search_history',
  timestamps: false,
  underscored: true,
  indexes: [
    {
      fields: ['user_id', 'search_time']
    },
    {
      fields: ['session_id', 'search_time']
    }
  ]
});

module.exports = SearchHistory;