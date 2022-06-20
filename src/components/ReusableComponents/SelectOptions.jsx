import { SelectElement } from 'react-hook-form-mui';

const SelectOptions = ({ label, options, required, name }) => {
	return (
		<SelectElement
			label={label}
			name={name}
			variant="standard"
			required={required}
			className="w-full"
			options={options}
		/>
	);
};

export default SelectOptions;
