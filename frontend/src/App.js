import React from 'react'
import { Route, Switch } from 'react-router-dom'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import Dashboard from './screens/Dashboard/Dashboard'

const App = () => {
	return (
		<div className="App">
			<Switch>
				<Route path="/dashboard" exact component={Dashboard}></Route>
				<Route path="/login" exact component={LoginScreen}></Route>
				<Route path="/" component={RegisterScreen}></Route>
			</Switch>
		</div>
	)
}

export default App
