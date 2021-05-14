import React from 'react'

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

export default Input
