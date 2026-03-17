const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/auth');
const { validate } = require('../middleware/validation');
const { body } = require('express-validator');

// Public routes
router.post('/register', [
  body('username').isLength({ min: 3 }).trim(),
  body('email').isEmail().normalizeEmail(),
  body('password').isLength({ min: 6 })
], validate, userController.register);

router.post('/login', [
  body('email').isEmail().normalizeEmail(),
  body('password').notEmpty()
], validate, userController.login);

// Protected routes
router.use(authMiddleware);

router.get('/profile', userController.getProfile);
router.put('/profile', userController.updateProfile);
router.put('/password', [
  body('currentPassword').notEmpty(),
  body('newPassword').isLength({ min: 6 })
], validate, userController.changePassword);

router.get('/favorites', userController.getFavorites);
router.post('/favorites', [
  body('cityName').notEmpty(),
  body('latitude').isFloat(),
  body('longitude').isFloat()
], validate, userController.addFavorite);
router.delete('/favorites/:id', userController.removeFavorite);
router.put('/favorites/:id/default', userController.setDefaultFavorite);

router.get('/search-history', userController.getSearchHistory);
router.delete('/search-history', userController.clearSearchHistory);

router.get('/alerts', userController.getAlerts);
router.post('/alerts', userController.createAlert);
router.put('/alerts/:id', userController.updateAlert);
router.delete('/alerts/:id', userController.deleteAlert);

router.post('/logout', userController.logout);

module.exports = router;