import React, { useRef } from 'react'

const Input = ({
	id,
	label,
	name,
	onChange,
	placeholder,
	required,
	type,
	value,
}) => {
	const passwordRef = useRef()

	//Handle show password
	const mouseHandler = (e) => {
		if (e.type === 'mousedown') {
			passwordRef.current.type = 'text'
		} else {
			passwordRef.current.type = 'password'
		}
	}

	if (id === 'password') {
		return (
			<div className="input-item">
				<i
					className="fas fa-eye"
					onMouseDown={mouseHandler}
					onMouseUp={mouseHandler}
				></i>
				<label htmlFor={id}>{label}</label>
				<input
					ref={passwordRef}
					type={type}
					id={id}
					name={name}
					placeholder={placeholder}
					required={required}
					value={value}
					onChange={onChange}
				/>
			</div>
		)
	} else {
		return (
			<div className="input-item">
				<label htmlFor={id}>{label}</label>
				<input
					type={type}
					id={id}
					name={name}
					placeholder={placeholder}
					required={required}
					value={value}
					onChange={onChange}
				/>
			</div>
		)
	}
}

export default Input
