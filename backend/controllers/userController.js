import asyncHandler from 'express-async-handler'
import bcrypt from 'bcryptjs'
import User from '../models/userModel.js'
import generateToken from '../utils/generateToken.js'

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
			token: generateToken(user._id),
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

	const emailExists = await User.findOne({ email })
	const userNameExists = await User.findOne({ userName })
	if (emailExists || userNameExists) {
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
			token: generateToken(user._id),
		})
	} else {
		res.status(400)
		throw new Error('Invalid user data')
	}
})

// @desc Get logged in user data
// @route GET /api/users/profile
// @access Private
const getUserById = asyncHandler(async (req, res) => {
	if (req.user) {
		res.json(req.user)
	} else {
		res.status(404)
		throw new Error('User not found')
	}
})

// @desc   Update logged in user data
// @route  PUT /api/users/profile
// @access Private
const updateUserById = asyncHandler(async (req, res) => {
	if (req.user) {
		req.user.firstName = req.body.userName
			? req.body.userName.split(' ')[0]
			: req.user.firstName
		req.user.lastName = req.body.userName
			? req.body.userName.split(' ').splice(1).join(' ')
			: req.user.lastName
		req.user.email = req.body.email || req.user.email
		req.user.userName = req.body.userName || req.user.userName
		const updatedUser = await req.user.save()

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
