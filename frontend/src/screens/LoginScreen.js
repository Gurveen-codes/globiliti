import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Input from '../components/Input'
import FormContainer from '../components/FormContainer'

toast.configure()
const LoginScreen = () => {
	const [inputFields, setInputFields] = useState({
		email: {
			type: 'email',
			value: '',
			placeholder: 'Email Address',
			label: 'Email',
			required: true,
		},
		password: {
			type: 'password',
			value: '',
			placeholder: 'Password',
			label: 'Password',
			required: true,
		},
		submit: {
			type: 'submit',
			value: 'Login',
		},
	})

	//Input Change Handler
	const inputChangeHandler = (e, inputIdentifier) => {
		const updatedForm = { ...inputFields }
		const updatedFormElement = {
			...updatedForm[inputIdentifier],
		}

		updatedFormElement.value = e.target.value

		updatedForm[inputIdentifier] = updatedFormElement

		setInputFields(updatedForm)
	}

	//Form Submit Handler
	const submitHandler = (e) => {
		e.preventDefault()

		const formData = {
			email: inputFields.email.value,
			password: inputFields.password.value,
		}
		axios
			.post('/api/users/login', formData)
			.then(({ data }) => {
				toast.dark('Login Successful! Visit Dashboard', {
					position: toast.POSITION.TOP_CENTER,
					autoClose: 3000,
				})
				localStorage.setItem('token', data.token)
			})
			.catch((err) => {
				console.log(err)
				toast.error('Login Failed! Try again', {
					position: toast.POSITION.TOP_CENTER,
					autoClose: 3000,
				})
			})
	}

	let inputArray = []
	for (let key in inputFields) {
		inputArray.push({ id: key, config: inputFields[key] })
	}
	return (
		<FormContainer>
			<div className="form-content">
				<h1 className="form-title">Login to your Account</h1>
				<p className="form-desc">Enter your Globiliti credentials </p>
				<form onSubmit={submitHandler}>
					{inputArray.map((input) => (
						<Input
							key={input.id}
							id={input.id}
							label={input.config.label}
							name={input.id}
							onChange={(e) => inputChangeHandler(e, input.id)}
							placeholder={input.config.placeholder}
							required={input.config.required}
							type={input.config.type}
							value={input.config.value}
						></Input>
					))}
				</form>
				<p>
					New user. <Link to="/">Register</Link>
				</p>
			</div>
		</FormContainer>
	)
}

export default LoginScreen
