const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const FavoriteLocation = sequelize.define('FavoriteLocation', {
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
  cityName: {
    type: DataTypes.STRING(100),
    allowNull: false,
    field: 'city_name'
  },
  countryCode: {
    type: DataTypes.STRING(2),
    field: 'country_code'
  },
  latitude: {
    type: DataTypes.DECIMAL(10, 8),
    allowNull: false
  },
  longitude: {
    type: DataTypes.DECIMAL(11, 8),
    allowNull: false
  },
  displayName: {
    type: DataTypes.STRING(100),
    field: 'display_name'
  },
  notes: {
    type: DataTypes.TEXT
  },
  isDefault: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    field: 'is_default'
  },
  order: {
    type: DataTypes.INTEGER,
    defaultValue: 0
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
  tableName: 'favorite_locations',
  timestamps: true,
  underscored: true,
  indexes: [
    {
      unique: true,
      fields: ['user_id', 'city_name', 'country_code']
    }
  ]
});

module.exports = FavoriteLocation;