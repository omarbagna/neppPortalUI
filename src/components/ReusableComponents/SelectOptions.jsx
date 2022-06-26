import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const SelectOptions = ({
	label,
	labelId,
	options,
	required,
	name,
	value,
	onChange,
}) => {
	return (
		<FormControl fullWidth>
			<InputLabel id={labelId}>{label}</InputLabel>
			<Select
				labelId={labelId}
				id={name}
				label={label}
				value={value}
				onChange={onChange}
				variant="standard"
				required={required}
				className="w-full">
				{options.map((option) => (
					<MenuItem key={option.id} value={option.value}>
						{option.title}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
};

export default SelectOptions;
