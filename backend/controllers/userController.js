const { User, FavoriteLocation, SearchHistory, WeatherAlert } = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { sequelize } = require('../config/database');

const generateToken = (user) => {
  return jwt.sign(
    { 
      id: user.id, 
      username: user.username, 
      email: user.email 
    },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRE }
  );
};

const userController = {
  // Register new user
  register: async (req, res, next) => {
    const transaction = await sequelize.transaction();
    
    try {
      const { username, email, password, firstName, lastName } = req.body;

      // Check if user exists
      const existingUser = await User.findOne({
        where: {
          [sequelize.Op.or]: [{ email }, { username }]
        }
      });

      if (existingUser) {
        return res.status(400).json({
          status: 'error',
          message: 'User with this email or username already exists'
        });
      }

      // Create user
      const user = await User.create({
        username,
        email,
        password,
        firstName,
        lastName
      }, { transaction });

      await transaction.commit();

      // Generate token
      const token = generateToken(user);

      res.status(201).json({
        status: 'success',
        data: {
          user: user.toJSON(),
          token
        }
      });
    } catch (error) {
      await transaction.rollback();
      next(error);
    }
  },

  // Login user
  login: async (req, res, next) => {
    try {
      const { email, password } = req.body;

      // Find user
      const user = await User.findOne({ where: { email } });

      if (!user) {
        return res.status(401).json({
          status: 'error',
          message: 'Invalid email or password'
        });
      }

      // Validate password
      const isValidPassword = await user.validatePassword(password);
      if (!isValidPassword) {
        return res.status(401).json({
          status: 'error',
          message: 'Invalid email or password'
        });
      }

      // Update last login
      await user.update({ lastLogin: new Date() });

      // Generate token
      const token = generateToken(user);

      res.json({
        status: 'success',
        data: {
          user: user.toJSON(),
          token
        }
      });
    } catch (error) {
      next(error);
    }
  },

  // Get user profile
  getProfile: async (req, res, next) => {
    try {
      const user = await User.findByPk(req.user.id, {
        attributes: { exclude: ['password'] },
        include: [
          {
            model: FavoriteLocation,
            as: 'favorites',
            limit: 10
          }
        ]
      });

      res.json({
        status: 'success',
        data: user
      });
    } catch (error) {
      next(error);
    }
  },

  // Update user profile
  updateProfile: async (req, res, next) => {
    try {
      const { firstName, lastName, preferredUnit, theme } = req.body;

      const user = await User.findByPk(req.user.id);
      
      await user.update({
        firstName,
        lastName,
        preferredUnit,
        theme
      });

      res.json({
        status: 'success',
        data: user.toJSON()
      });
    } catch (error) {
      next(error);
    }
  },

  // Change password
  changePassword: async (req, res, next) => {
    try {
      const { currentPassword, newPassword } = req.body;

      const user = await User.findByPk(req.user.id);

      // Verify current password
      const isValidPassword = await user.validatePassword(currentPassword);
      if (!isValidPassword) {
        return res.status(401).json({
          status: 'error',
          message: 'Current password is incorrect'
        });
      }

      // Update password
      user.password = newPassword;
      await user.save();

      res.json({
        status: 'success',
        message: 'Password updated successfully'
      });
    } catch (error) {
      next(error);
    }
  },

  // Get favorites
  getFavorites: async (req, res, next) => {
    try {
      const favorites = await FavoriteLocation.findAll({
        where: { userId: req.user.id },
        order: [
          ['isDefault', 'DESC'],
          ['order', 'ASC'],
          ['createdAt', 'DESC']
        ]
      });

      res.json({
        status: 'success',
        data: favorites
      });
    } catch (error) {
      next(error);
    }
  },

  // Add favorite
  addFavorite: async (req, res, next) => {
    const transaction = await sequelize.transaction();
    
    try {
      const { cityName, countryCode, latitude, longitude, displayName, notes } = req.body;

      // Check if already exists
      const existing = await FavoriteLocation.findOne({
        where: {
          userId: req.user.id,
          cityName,
          countryCode
        }
      });

      if (existing) {
        return res.status(400).json({
          status: 'error',
          message: 'Location already in favorites'
        });
      }

      // Get count for order
      const count = await FavoriteLocation.count({
        where: { userId: req.user.id }
      });

      const favorite = await FavoriteLocation.create({
        userId: req.user.id,
        cityName,
        countryCode,
        latitude,
        longitude,
        displayName,
        notes,
        order: count,
        isDefault: count === 0 // First favorite becomes default
      }, { transaction });

      await transaction.commit();

      res.status(201).json({
        status: 'success',
        data: favorite
      });
    } catch (error) {
      await transaction.rollback();
      next(error);
    }
  },

  // Remove favorite
  removeFavorite: async (req, res, next) => {
    const transaction = await sequelize.transaction();
    
    try {
      const favorite = await FavoriteLocation.findOne({
        where: {
          id: req.params.id,
          userId: req.user.id
        }
      });

      if (!favorite) {
        return res.status(404).json({
          status: 'error',
          message: 'Favorite not found'
        });
      }

      const wasDefault = favorite.isDefault;

      await favorite.destroy({ transaction });

      // If this was default, set another favorite as default
      if (wasDefault) {
        const nextFavorite = await FavoriteLocation.findOne({
          where: { userId: req.user.id },
          order: [['createdAt', 'DESC']],
          transaction
        });

        if (nextFavorite) {
          await nextFavorite.update({ isDefault: true }, { transaction });
        }
      }

      await transaction.commit();

      res.json({
        status: 'success',
        message: 'Favorite removed successfully'
      });
    } catch (error) {
      await transaction.rollback();
      next(error);
    }
  },

  // Set default favorite
  setDefaultFavorite: async (req, res, next) => {
    const transaction = await sequelize.transaction();
    
    try {
      // Remove default from all
      await FavoriteLocation.update(
        { isDefault: false },
        { 
          where: { userId: req.user.id },
          transaction 
        }
      );

      // Set new default
      const favorite = await FavoriteLocation.findOne({
        where: {
          id: req.params.id,
          userId: req.user.id
        },
        transaction
      });

      if (!favorite) {
        await transaction.rollback();
        return res.status(404).json({
          status: 'error',
          message: 'Favorite not found'
        });
      }

      await favorite.update({ isDefault: true }, { transaction });

      await transaction.commit();

      res.json({
        status: 'success',
        data: favorite
      });
    } catch (error) {
      await transaction.rollback();
      next(error);
    }
  },

  // Get search history
  getSearchHistory: async (req, res, next) => {
    try {
      const { limit = 20, offset = 0 } = req.query;

      const history = await SearchHistory.findAndCountAll({
        where: { 
          [sequelize.Op.or]: [
            { userId: req.user.id },
            { sessionId: req.headers['x-session-id'] }
          ]
        },
        order: [['searchTime', 'DESC']],
        limit: parseInt(limit),
        offset: parseInt(offset)
      });

      res.json({
        status: 'success',
        data: {
          total: history.count,
          items: history.rows
        }
      });
    } catch (error) {
      next(error);
    }
  },

  // Clear search history
  clearSearchHistory: async (req, res, next) => {
    try {
      await SearchHistory.destroy({
        where: { userId: req.user.id }
      });

      res.json({
        status: 'success',
        message: 'Search history cleared'
      });
    } catch (error) {
      next(error);
    }
  },

  // Get alerts
  getAlerts: async (req, res, next) => {
    try {
      const alerts = await WeatherAlert.findAll({
        where: { userId: req.user.id },
        include: [
          {
            model: FavoriteLocation,
            as: 'location',
            required: false
          }
        ],
        order: [['createdAt', 'DESC']]
      });

      res.json({
        status: 'success',
        data: alerts
      });
    } catch (error) {
      next(error);
    }
  },

  // Create alert
  createAlert: async (req, res, next) => {
    try {
      const { 
        locationId, 
        cityName, 
        alertType, 
        threshold, 
        condition,
        notificationMethod 
      } = req.body;

      const alert = await WeatherAlert.create({
        userId: req.user.id,
        locationId,
        cityName,
        alertType,
        threshold,
        condition,
        notificationMethod
      });

      res.status(201).json({
        status: 'success',
        data: alert
      });
    } catch (error) {
      next(error);
    }
  },

  // Update alert
  updateAlert: async (req, res, next) => {
    try {
      const alert = await WeatherAlert.findOne({
        where: {
          id: req.params.id,
          userId: req.user.id
        }
      });

      if (!alert) {
        return res.status(404).json({
          status: 'error',
          message: 'Alert not found'
        });
      }

      await alert.update(req.body);

      res.json({
        status: 'success',
        data: alert
      });
    } catch (error) {
      next(error);
    }
  },

  // Delete alert
  deleteAlert: async (req, res, next) => {
    try {
      const alert = await WeatherAlert.findOne({
        where: {
          id: req.params.id,
          userId: req.user.id
        }
      });

      if (!alert) {
        return res.status(404).json({
          status: 'error',
          message: 'Alert not found'
        });
      }

      await alert.destroy();

      res.json({
        status: 'success',
        message: 'Alert deleted successfully'
      });
    } catch (error) {
      next(error);
    }
  },

  // Logout
  logout: async (req, res) => {
    // Client should remove token
    res.json({
      status: 'success',
      message: 'Logged out successfully'
    });
  }
};

module.exports = userController;