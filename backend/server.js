import express from 'express'
import morgan from 'morgan'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import connectDB from './config/db.js'

//use environmental variables
dotenv.config()

const app = express()

//Connect to database
connectDB()

//use morgan logger in development mode
process.env.NODE_ENV === 'development' && app.use(morgan('dev'))
//Accept form data in request body
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json()) ///Accept json data in req body

app.get('/', (req, res) => {
	res.send('Backend API is running')
})

app.listen(
	process.env.PORT || 5000,
	console.log(
		`Server running in ${process.env.NODE_ENV} mode on port: ${process.env.PORT}`
	)
)
