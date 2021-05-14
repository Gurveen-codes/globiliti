import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import './dashboard.css'

const Dashboard = () => {
	return (
		<div className="dashboard">
			<Sidebar />
			<Navbar />
		</div>
	)
}

export default Dashboard
