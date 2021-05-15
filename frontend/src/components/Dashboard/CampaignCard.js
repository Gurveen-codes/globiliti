import React from 'react'
import userImg from '../../assets/images/Oval.png'

const CampaignCard = () => {
	return (
		<div className="camp-card card">
			<div className="card-title">Career Development</div>
			<div className="card-btn">High</div>
			<div className="card-flex">
				<div className="card-flex-item">
					<i className="fas fa-user"></i>Students
				</div>
				<div className="card-flex-item">
					<i className="fas fa-link"></i> 2 Tools
				</div>
			</div>
			<div className="card-flex">
				<img src={userImg} alt="User" />
				<div className="date">29 Sep - 10 Oct</div>
			</div>
		</div>
	)
}

export default CampaignCard
