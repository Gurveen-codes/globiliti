import React from 'react'
import CampaignCard from '../../components/CampaignCard'
import DashboardList from '../../components/DashboardList/DashboardList'
import LearningCard from '../../components/LearningCard'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import ToolCard from '../../components/ToolCard'
import './dashboard.css'

const Dashboard = () => {
	return (
		<div className="dashboard">
			<Sidebar />
			<Navbar />
			<DashboardList
				className="campaign-list"
				Card={CampaignCard}
				numItems={2}
				header="Impact Campaigns"
				footer="Start new campaign"
			/>
			<DashboardList
				className="learning-list"
				Card={LearningCard}
				numItems={3}
				header="Learning Tools"
				footer="Add new tool"
			/>
			<DashboardList
				className="tool-list"
				Card={ToolCard}
				numItems={4}
				header="Tool Pilots"
				footer="Add new pilot"
			/>
		</div>
	)
}

export default Dashboard
