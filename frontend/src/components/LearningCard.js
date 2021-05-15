import React from 'react'
import logoImage from '../assets/images/brand-logo.png'

const LearningCard = () => {
	return (
		<div className="card learning-card">
			<img src={logoImage} alt="Logo" />
			<div className="learning-card-text">
				<div className="card-title">Classcraft</div>
				<p>Creative Thinking, +1 more</p>
			</div>
		</div>
	)
}

export default LearningCard
