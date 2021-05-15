import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Input from '../components/Input'
import FormContainer from '../components/FormContainer'

toast.configure()
const RegisterScreen = () => {
	const [inputFields, setInputFields] = useState({
		userName: {
			type: 'text',
			value: '',
			placeholder: 'Your Name',
			label: "What's your full name?",
			required: true,
		},
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
			value: 'Create Account',
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
			userName: inputFields.userName.value,
			email: inputFields.email.value,
			password: inputFields.password.value,
		}
		axios
			.post('/api/users', formData)
			.then(({ data }) => {
				localStorage.setItem('token', data.token)
				toast.dark('Registration Successful! Visit Dashboard', {
					position: toast.POSITION.TOP_CENTER,
					autoClose: 3000,
				})
			})
			.catch((err) => {
				console.log(err)
				toast.error('Registration Failed! Try again', {
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
				<h1 className="form-title">Welcome to Globilti!</h1>
				<p className="form-desc">Create your school account</p>
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
					Already have an account? <Link to="/login">Login</Link>
				</p>
			</div>
		</FormContainer>
	)
}

export default RegisterScreen
