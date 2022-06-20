import { Autocomplete, TextField } from '@mui/material';
import React, { useState } from 'react';
import { FormContainer } from 'react-hook-form-mui';
import { useNavigate } from 'react-router-dom';
import { SelectOptions, SubmitBtn, Title } from '../../../../components';
import { pharmacies } from '../../../data';

const Pharmacy = () => {
	const [input, setInput] = useState('');

	console.log('Search Input: ', input);
	const navigate = useNavigate();

	const handleNavigate = () => {
		navigate(`/add-new/pharmacy`);
	};

	const handleSubmit = () => {
		handleNavigate();
	};

	return (
		<div className="w-full h-full flex flex-col gap-10 justify-start items-start p-6">
			<FormContainer onSuccess={handleSubmit}>
				<Title size="text-3xl sm:tex-4xl" title="choose pharmacy" />

				<div className="flex w-full gap-48 justify-between items-center">
					<div className="w-full">
						<Autocomplete
							freeSolo
							id="drugSearch"
							clearOnBlur
							options={pharmacies.map((option) => option.title)}
							renderInput={(params) => (
								<TextField
									{...params}
									label="Find Pharmacy"
									variant="standard"
									onChange={(e) => setInput(e.target.value)}
									InputProps={{
										...params.InputProps,
										type: 'search',
									}}
								/>
							)}
						/>
					</div>
					<div className="w-full">
						<SelectOptions
							label="Filter By Region"
							required={false}
							name="region"
							options={[
								{
									id: 'accra',
									title: 'Greater Accra',
								},
								{
									id: 'ashanti',
									title: 'Ashanti',
								},
								{
									id: 'central',
									title: 'Central',
								},
							]}
						/>
					</div>
				</div>

				<div className="flex items-center w-full">
					<p>Table Render</p>
				</div>

				<div className="w-full flex justify-end items-center gap-4">
					<SubmitBtn
						name="Back"
						type="back"
						onClick={() => navigate('/add-new')}
					/>
					<SubmitBtn name="Next" />
				</div>
			</FormContainer>
		</div>
	);
};

export default Pharmacy;
