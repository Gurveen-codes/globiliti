import React from 'react'
import titleImage from '../../../assets/images/titleImage.png'
import userImg from '../../../assets/images/Oval.png'
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
					<li className="sidebar-menu-item active">
						<i className="fas fa-home"></i>Home
					</li>
					<li className="sidebar-menu-item">
						<i className="fas fa-paper-plane"></i>My Pilots
					</li>
					<li className="sidebar-menu-item">
						<i className="fas fa-inbox"></i>Inbox
					</li>
					<li className="sidebar-menu-item">
						<i className="fas fa-user-friends"></i>My Team
					</li>
				</ul>
			</div>

			<div className="sidebar-team-list">
				<div className="team-list-title">
					<p>Add Team Members</p>
					<i className="fas fa-plus-circle"></i>
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
				<div className="sidebar-footer-item">
					<i className="fas fa-cog"></i>Settings
				</div>
				<div className="sidebar-footer-item">
					<i className="fas fa-sign-out-alt"></i>Sign-Out
				</div>
			</div>
		</aside>
	)
}

export default Sidebar
