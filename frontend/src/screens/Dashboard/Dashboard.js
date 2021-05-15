import React from 'react'
import CampaignCard from '../../components/Dashboard/CampaignCard'
import DashboardList from '../../components/Dashboard/DashboardList/DashboardList'
import LearningCard from '../../components/Dashboard/LearningCard'
import Navbar from '../../components/Dashboard/Navbar/Navbar'
import Sidebar from '../../components/Dashboard/Sidebar/Sidebar'
import ToolCard from '../../components/Dashboard/ToolCard'
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
