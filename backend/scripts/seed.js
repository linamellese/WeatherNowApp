const { sequelize } = require('../config/database');
const { User, FavoriteLocation, SearchHistory } = require('../models');
const bcrypt = require('bcryptjs');

const seedDatabase = async () => {
  try {
    console.log('🌱 Seeding database...');

    // Clear existing data
    await sequelize.sync({ force: true });

    // Create demo users
    const users = await User.bulkCreate([
      {
        username: 'john_doe',
        email: 'john@example.com',
        password: 'Password123!',
        firstName: 'John',
        lastName: 'Doe',
        preferredUnit: 'metric',
        theme: 'light'
      },
      {
        username: 'jane_smith',
        email: 'jane@example.com',
        password: 'Password123!',
        firstName: 'Jane',
        lastName: 'Smith',
        preferredUnit: 'imperial',
        theme: 'dark'
      },
      {
        username: 'weather_enthusiast',
        email: 'weather@example.com',
        password: 'Password123!',
        firstName: 'Weather',
        lastName: 'Lover',
        preferredUnit: 'metric',
        theme: 'light'
      }
    ]);

    console.log(`✅ Created ${users.length} users`);

    // Create favorite locations for users
    const favorites = await FavoriteLocation.bulkCreate([
      {
        userId: users[0].id,
        cityName: 'New York',
        countryCode: 'US',
        latitude: 40.7128,
        longitude: -74.0060,
        displayName: 'Big Apple',
        isDefault: true,
        order: 1
      },
      {
        userId: users[0].id,
        cityName: 'London',
        countryCode: 'GB',
        latitude: 51.5074,
        longitude: -0.1278,
        displayName: 'London UK',
        order: 2
      },
      {
        userId: users[1].id,
        cityName: 'Tokyo',
        countryCode: 'JP',
        latitude: 35.6762,
        longitude: 139.6503,
        displayName: 'Tokyo',
        isDefault: true,
        order: 1
      },
      {
        userId: users[1].id,
        cityName: 'Paris',
        countryCode: 'FR',
        latitude: 48.8566,
        longitude: 2.3522,
        displayName: 'City of Light',
        order: 2
      },
      {
        userId: users[2].id,
        cityName: 'Sydney',
        countryCode: 'AU',
        latitude: -33.8688,
        longitude: 151.2093,
        displayName: 'Sydney Opera House',
        isDefault: true,
        order: 1
      }
    ]);

    console.log(`✅ Created ${favorites.length} favorite locations`);

    // Create search history
    const searches = await SearchHistory.bulkCreate([
      {
        userId: users[0].id,
        searchQuery: 'New York',
        cityName: 'New York',
        countryCode: 'US',
        latitude: 40.7128,
        longitude: -74.0060,
        searchType: 'city',
        resultCount: 1
      },
      {
        userId: users[0].id,
        searchQuery: 'London',
        cityName: 'London',
        countryCode: 'GB',
        latitude: 51.5074,
        longitude: -0.1278,
        searchType: 'city',
        resultCount: 1
      },
      {
        userId: users[1].id,
        searchQuery: 'Tokyo',
        cityName: 'Tokyo',
        countryCode: 'JP',
        latitude: 35.6762,
        longitude: 139.6503,
        searchType: 'city',
        resultCount: 1
      },
      {
        sessionId: 'guest_session_123',
        searchQuery: 'Paris',
        cityName: 'Paris',
        countryCode: 'FR',
        latitude: 48.8566,
        longitude: 2.3522,
        searchType: 'city',
        resultCount: 1
      }
    ]);

    console.log(`✅ Created ${searches.length} search history entries`);
    console.log('🎉 Database seeding completed successfully!');
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Seeding failed:', error);
    process.exit(1);
  }
};

seedDatabase();