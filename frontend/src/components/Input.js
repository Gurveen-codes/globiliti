import React from 'react'

const Input = ({ id, name, onChange, placeholder, required, type, value }) => {
	return (
		<div>
			<label htmlFor={id}>{placeholder}</label>
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

export default Input
