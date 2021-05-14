import React, { useState } from 'react'
import axios from 'axios'
import Input from '../components/Input'

const LoginScreen = () => {
	const [inputFields, setInputFields] = useState({
		email: {
			type: 'email',
			value: '',
			placeholder: 'Email Address',
			required: true,
		},
		password: {
			type: 'password',
			value: '',
			placeholder: 'Password',
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
			.then((res) => console.log(res.data))
			.catch((err) => console.log(err))
	}

	let inputArray = []
	for (let key in inputFields) {
		inputArray.push({ id: key, config: inputFields[key] })
	}
	return (
		<form onSubmit={submitHandler}>
			{inputArray.map((input) => (
				<Input
					key={input.id}
					id={input.id}
					name={input.id}
					onChange={(e) => inputChangeHandler(e, input.id)}
					placeholder={input.config.placeholder}
					required={input.config.required}
					type={input.config.type}
					value={input.config.value}
				></Input>
			))}
		</form>
	)
}

export default LoginScreen
