const User = require('./User');
const FavoriteLocation = require('./FavoriteLocation');
const SearchHistory = require('./SearchHistory');
const WeatherAlert = require('./WeatherAlert');

// Define associations
User.hasMany(FavoriteLocation, { foreignKey: 'userId', as: 'favorites' });
FavoriteLocation.belongsTo(User, { foreignKey: 'userId' });

User.hasMany(SearchHistory, { foreignKey: 'userId', as: 'searches' });
SearchHistory.belongsTo(User, { foreignKey: 'userId' });

User.hasMany(WeatherAlert, { foreignKey: 'userId', as: 'alerts' });
WeatherAlert.belongsTo(User, { foreignKey: 'userId' });

FavoriteLocation.hasMany(WeatherAlert, { foreignKey: 'locationId', as: 'alerts' });
WeatherAlert.belongsTo(FavoriteLocation, { foreignKey: 'locationId' });

module.exports = {
  User,
  FavoriteLocation,
  SearchHistory,
  WeatherAlert
};