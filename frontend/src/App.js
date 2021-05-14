import React from 'react'
import { Route } from 'react-router-dom'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'

const App = () => {
	return (
		<div className="App">
			<Route path="/login" exact component={LoginScreen}></Route>
			<Route path="/" exact component={RegisterScreen}></Route>
		</div>
	)
}

export default App
