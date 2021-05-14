import express from 'express'
import {
	getUserById,
	loginUser,
	registerUser,
	updateUserById,
} from '../controllers/userController.js'
const router = express.Router()

// @desc Register a new user
// @route POST /api/users
// @access Public
router.route('/').post(registerUser)

// @desc login user
// @route POST /api/users/login
// @access Public
router.route('/login').post(loginUser)

// @desc Get user by ID
// @route GET /api/users/:id
// @access Private
router.route('/:id').get(getUserById)

// @desc   Update user by ID
// @route  PUT /api/users/:id
// @access Private
router.route('/:id').put(updateUserById)

export default router
