import React from 'react'
import './navbar.css'

const Navbar = () => {
	return (
		<div className="navbar">
			<div className="nav-title">Shenzhen Houde Academy</div>
			<div className="nav-menu">
				<ul>
					<li className="nav-menu-item">Discover</li>
					<li className="nav-menu-item active">Impact Board</li>
					<li className="nav-menu-item">Learning pods</li>
				</ul>
			</div>
		</div>
	)
}

export default Navbar
