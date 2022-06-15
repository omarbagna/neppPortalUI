import React from 'react';

import { TextFieldElement } from 'react-hook-form-mui';

const InputBox = ({
	placeholder,
	type,
	required,
	multiline,
	focused,
	onChange,
	symbol,
	pattern,
	name,
	min,
	max,
}) => {
	return (
		<div className="w-full">
			<TextFieldElement
				variant="standard"
				className="w-full"
				InputProps={{
					startAdornment: symbol,
					pattern: pattern,
				}}
				placeholder={placeholder}
				multiline={multiline}
				rows={4}
				label={placeholder}
				focused={focused}
				onChange={onChange}
				type={type}
				required={required}
				name={name}
				min={min}
				max={max}
			/>
		</div>
	);
};

export default InputBox;
