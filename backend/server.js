import path from 'path'
import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'

import connectDB from './config/db.js'
import errorHandler from './middleware/errorMiddleware.js'
import userRoutes from './routes/userRoutes.js'

//use environmental variables
dotenv.config()

const app = express()

//Connect to database
connectDB()

//Accept form data in request body
app.use(bodyParser.urlencoded({ extended: true }))

///Accept json data in req body
app.use(express.json())

//User routes
app.use('/api/users', userRoutes)

//Serve frontend build folder as static in production
if (process.env.NODE_ENV === 'production') {
	const __dirname = path.resolve()
	app.use(express.static(path.join(__dirname, '/frontend/build')))

	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
	})
} else {
	app.get('/', (req, res) => {
		res.send('Backend API is running')
	})
}

//Middleware to catch all errors
app.use(errorHandler)

app.listen(
	process.env.PORT || 5000,
	console.log(
		`Server running in ${process.env.NODE_ENV} mode on port: ${process.env.PORT}`
	)
)
