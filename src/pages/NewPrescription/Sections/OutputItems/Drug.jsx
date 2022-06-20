import { Autocomplete, TextField } from '@mui/material';
import React, { useState } from 'react';
import { FormContainer } from 'react-hook-form-mui';
import { useNavigate } from 'react-router-dom';
import { InputBox, SubmitBtn, Title } from '../../../../components';
import { drugs } from '../../../data';

const Drug = () => {
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
				<Title size="text-3xl sm:tex-4xl" title="find drug" />

				<div className="flex w-full justify-between items-center">
					<p className="text-gray font-light text-lg">Selected Drug</p>
					<div className="w-1/2">
						<Autocomplete
							freeSolo
							id="drugSearch"
							clearOnBlur
							options={drugs.map((option) => option.title)}
							renderInput={(params) => (
								<TextField
									{...params}
									label="Search Drugs"
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
				</div>

				<div className="flex items-center w-full">
					<p>Table Render</p>
				</div>

				<InputBox
					label="Description"
					multiline={true}
					type="text"
					placeholder="Write a brief description"
					name="desc"
					required={true}
				/>

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

export default Drug;
