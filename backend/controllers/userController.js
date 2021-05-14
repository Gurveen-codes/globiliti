import asyncHandler from 'express-async-handler'
import bcrypt from 'bcryptjs'
import User from '../models/userModel.js'

// @desc Login User
// @route POST /api/users/login
// @access Public
const loginUser = asyncHandler(async (req, res) => {
	const { email, password } = req.body

	const user = await User.findOne({ email })

	if (user && (await user.matchPassword(password))) {
		res.json({
			_id: user._id,
			userName: user.userName,
			email: user.email,
		})
	} else {
		res.status(401)
		throw new Error('Invalid email or password')
	}
})

// @desc Register a new user
// @route POST /api/users
// @access Public
const registerUser = asyncHandler(async (req, res) => {
	const { userName, email, password } = req.body

	const userExists = await User.findOne({ email })
	if (userExists) {
		res.status(400) // Bad request
		throw new Error('User already exists')
	}

	const user = await User.create({
		firstName: userName.split(' ')[0],
		lastName: userName.split(' ').splice(1).join(' '),
		userName,
		email,
		password: bcrypt.hashSync(password, 10),
	})

	if (user) {
		res.status(201).json({
			_id: user._id,
			userName: user.userName,
			email: user.email,
		})
	} else {
		res.status(400)
		throw new Error('Invalid user data')
	}
})

// @desc Get user by ID
// @route GET /api/users/:id
// @access Private
const getUserById = asyncHandler(async (req, res) => {
	const user = await User.findById(req.params.id).select('-password')
	if (user) {
		res.status(200)
		res.json(user)
	} else {
		res.status(404)
		throw new Error('User not found')
	}
})

// @desc   Update user by ID
// @route  PUT /api/users/:id
// @access Private
const updateUserById = asyncHandler(async (req, res) => {
	const user = await User.findById(req.params.id)
	if (user) {
		user.firstName = req.body.userName
			? req.body.userName.split(' ')
			: user.firstName
		user.lastName = req.body.userName
			? req.body.userName.split(' ').splice(1).join(' ')
			: user.lastName
		user.email = req.body.email || user.email
		user.userName = req.body.userName || user.userName
		const updatedUser = await user.save()

		res.json({
			_id: updatedUser._id,
			email: updatedUser.email,
			firstName: updatedUser.firstName,
			lastName: updatedUser.lastName,
			userName: updatedUser.userName,
		})
	} else {
		res.status(404)
		throw new Error('User Not Found')
	}
})

export { loginUser, registerUser, getUserById, updateUserById }
