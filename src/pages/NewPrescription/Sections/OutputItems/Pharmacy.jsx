import { TextField } from '@mui/material';
import React, { useState } from 'react';
import { FormContainer } from 'react-hook-form-mui';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { SelectOptions, SubmitBtn, Table, Title } from '../../../../components';
import { useStateContext } from '../../../../context/StateContext';
import { pharmacies, regionFilter } from '../../../data';

const Pharmacy = () => {
	const { selectedPharmacy } = useStateContext();
	const [pharmacyFilter, setPharmacyFilter] = useState({
		query: '',
		choice: '',
	});

	const handleChange = (event) => {
		setPharmacyFilter({ ...pharmacyFilter, choice: event.target.value });
	};

	const handleQuery = (event) => {
		setPharmacyFilter({ ...pharmacyFilter, query: event.target.value });
	};

	//console.log('Search Input: ', input);
	const navigate = useNavigate();

	const handleNavigate = () => {
		navigate(`/add-new/delivery-option`);
	};

	const handleSubmit = () => {
		if (selectedPharmacy === 'None') {
			return toast.error(`Please choose a Pharmacy to continue`);
		} else {
			handleNavigate();
		}
	};

	const columns = [
		{ field: 'title', header: 'Pharmacy Name' },
		{ field: 'status', header: 'Status' },
	];

	return (
		<div className="w-full h-full flex flex-col gap-10 justify-start items-start p-6 overflow-y-scroll">
			<FormContainer onSuccess={handleSubmit}>
				<Title size="text-3xl sm:tex-4xl" title="choose pharmacy" />

				<div className="flex w-full gap-3 justify-start items-center">
					<h3 className="text-lg sm:tex-xl">Selected Pharmacy:</h3>
					<p
						className={
							selectedPharmacy === 'None' ? 'text-accent' : 'text-bgTwo'
						}>
						{selectedPharmacy}
					</p>
				</div>

				<div className="flex w-full gap-10 justify-between items-center">
					<div className="w-full">
						<TextField
							className="w-full"
							variant="standard"
							onChange={handleQuery}
							onKeyPress={(event) => {
								if (event.key === 'Enter') {
									event.preventDefault();
								}
							}}
							label="Search Pharmacy"
						/>
					</div>
					<div className="w-full">
						<SelectOptions
							label="Filter By Region"
							labelId="region-filter"
							onChange={handleChange}
							value={pharmacyFilter.choice}
							required={false}
							name="region"
							options={regionFilter}
						/>
					</div>
				</div>

				<div className="flex items-center w-full">
					<Table
						data={pharmacies}
						columns={columns}
						pharmacyFilter={pharmacyFilter}
						pharmacy="yes"
					/>
				</div>

				<div className="w-full flex justify-end items-center gap-4">
					<SubmitBtn
						name="Back"
						type="back"
						onClick={(e) => {
							e.preventDefault();
							navigate(-1);
						}}
					/>
					<SubmitBtn name="Next" />
				</div>
			</FormContainer>
		</div>
	);
};

export default Pharmacy;
