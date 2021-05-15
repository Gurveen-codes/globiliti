import React from 'react'
import { Link } from 'react-router-dom'
import titleImage from '../assets/images/titleImage.png'
import bannerImg from '../assets/images/bannerImg.png'
import bannerLeftImg from '../assets/images/banner-left.png'
import bannerRightImg from '../assets/images/banner-right.png'

const FormContainer = (props) => {
	return (
		<div className="form-container">
			<div className="title-img">
				<img src={titleImage} alt="Globiliti"></img>
				<Link className="dashboard-link" to="/dashboard">
					Dashboard
				</Link>
			</div>
			{props.children}
			<div className="banner-img">
				<img className="banner-center-img" src={bannerImg} alt=" " />
				<img className="banner-left-img" src={bannerLeftImg} alt=" " />
				<img className="banner-right-img" src={bannerRightImg} alt=" " />
			</div>
		</div>
	)
}

export default FormContainer
