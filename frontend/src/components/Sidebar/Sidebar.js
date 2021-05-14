import React from 'react'
import titleImage from '../../assets/images/titleImage.png'
import userImg from '../../assets/images/Oval.png'
import './sidebar.css'

const Sidebar = () => {
	return (
		<aside className="sidebar">
			<div className="sidebar-title">
				<img src={titleImage} alt="Globiliti" />
				<i className="fas fa-bars sidebar-toggle"></i>
			</div>

			<div className="sidebar-menu">
				<ul>
					<li className="sidebar-menu-item active">Home</li>
					<li className="sidebar-menu-item">My Pilots</li>
					<li className="sidebar-menu-item">Inbox</li>
					<li className="sidebar-menu-item">My Team</li>
				</ul>
			</div>

			<div className="sidebar-team-list">
				<div className="team-list-title">
					<p>Add Team Members</p>
					<i class="fas fa-plus-circle"></i>
				</div>
				<ul>
					{[...Array(4)].map((_, i) => (
						<li key={i} className="sidebar-team-item">
							<img src={userImg} alt="A user" />
							<div className="user-detail">
								<p className="user-name">Patricia M.</p>
								<p className="user-desc">Teacher</p>
							</div>
						</li>
					))}
				</ul>
			</div>

			<div className="sidebar-footer">
				<div className="sidebar-footer-item">Settings</div>
				<div className="sidebar-footer-item">Sign-Out</div>
			</div>
		</aside>
	)
}

export default Sidebar
