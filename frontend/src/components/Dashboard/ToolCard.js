import React from 'react'
import userImg from '../../assets/images/Oval.png'

const ToolCard = () => {
	return (
		<>
			<div className="tool-card card">
				<div className="card-title">ReadToMe: Pilot 1</div>
				<div className="card-btn">In Progress</div>
				<div className="card-flex">
					<div>
						<i className="fas fa-clock"></i>Fall 2020
					</div>
					<div>
						<i className="fas fa-check"></i>Student Pod
					</div>
				</div>
				<div className="card-flex">
					<img src={userImg} alt="User" />
					<div>$50k/year</div>
				</div>
			</div>
			<div className="topics">
				<p>Accuracy</p>
				<p>response</p>
				<p>completion</p>
				<p>development</p>
			</div>
		</>
	)
}

export default ToolCard
