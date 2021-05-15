import React from 'react'
import './dashboardList.css'

const DashboardList = ({ header, Card, footer, numItems }) => {
	return (
		<div className="dashboard-list">
			<div className="list-header">
				<p>{header}</p>
				<i className="fas fa-plus"></i>
			</div>

			<ul>
				{[...Array(numItems)].map((_, i) => (
					<Card key={i} className="list-item" />
				))}
			</ul>
			<div className="list-footer">
				<i className="fas fa-plus"></i>
				<p>{footer}</p>
			</div>
		</div>
	)
}

export default DashboardList
