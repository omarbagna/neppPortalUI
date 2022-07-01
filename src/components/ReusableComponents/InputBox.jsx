import { TextField } from '@mui/material';
import React from 'react';

//import { TextFieldElement } from 'react-hook-form-mui';

const InputBox = ({
	placeholder,
	type,
	required,
	multiline,
	focused,
	onChange,
	symbol,
	disabled = false,
	name,
	min,
	max,
	error,
	rule,
	helperText,
	value,
}) => {
	return (
		<div className="w-full">
			<TextField
				{...rule}
				variant="standard"
				className="w-full"
				InputProps={{
					startAdornment: symbol,
				}}
				error={error}
				helperText={helperText}
				placeholder={placeholder}
				multiline={multiline}
				defaultValue={value}
				rows={4}
				label={placeholder}
				focused={focused}
				onChange={onChange}
				type={type}
				required={required}
				disabled={disabled}
				name={name}
				min={min}
				max={max}
			/>
		</div>
	);
};

export default InputBox;
