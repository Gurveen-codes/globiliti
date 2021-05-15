import express from 'express'
import {
	getUserById,
	loginUser,
	registerUser,
	updateUserById,
} from '../controllers/userController.js'
import { protectedRoute } from '../middleware/authMiddleware.js'
const router = express.Router()

// @desc Register a new user
// @route POST /api/users
// @access Public
router.route('/').post(registerUser)

// @desc login user
// @route POST /api/users/login
// @access Public
router.route('/login').post(loginUser)

// @desc Get logged in user data
// @route GET /api/users/profile
// @access Private
router.route('/profile').get(protectedRoute, getUserById)

/// @desc   Update logged in user data
// @route  PUT /api/users/profile
// @access Private
router.route('/profile').put(protectedRoute, updateUserById)

export default router
