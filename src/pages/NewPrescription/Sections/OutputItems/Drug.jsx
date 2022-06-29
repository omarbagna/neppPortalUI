import { Autocomplete, TextField } from '@mui/material';
import React from 'react';
import { FormContainer } from 'react-hook-form-mui';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { InputBox, SubmitBtn, Table, Title } from '../../../../components';
import { useStateContext } from '../../../../context/StateContext';
import { drugs } from '../../../data';

const Drug = () => {
	const { totalPrice, value, onSearch, selectedDrugs } = useStateContext();

	const columns = [
		{ field: 'sn', header: 'SN' },
		{ field: 'title', header: 'Item Name' },
		{ field: 'quantity', header: 'Quantity' },
		{ field: 'price', header: 'Price GH¢' },
		{ field: 'action', header: 'Action' },
	];

	const navigate = useNavigate();

	const handleNavigate = () => {
		if (selectedDrugs.length > 0) {
			navigate(`/add-new/pharmacy`);
		} else {
			return toast.error(`Please add a Drug to continue`);
		}
	};

	const handleSubmit = () => {
		handleNavigate();
	};

	return (
		<div className="w-full h-full flex flex-col gap-10 justify-start items-start p-6 overflow-y-scroll">
			<FormContainer onSuccess={handleSubmit}>
				<div className="flex w-full justify-between items-center">
					<div className="w-full">
						<Title size="text-3xl sm:tex-4xl" title="Add drug" />
					</div>

					<div className="flex justify-end gap-1 items-center w-full">
						<Title size="text-base sm:text-lg" title="Total Price: GH¢" />
						<p className="text-2xl">{totalPrice}</p>
					</div>
				</div>

				<div className="w-full">
					<Autocomplete
						value={value}
						onChange={(event, newValue) => {
							onSearch(newValue.toLocaleLowerCase());
						}}
						id="drugs-search"
						options={drugs.map(
							(drug) => drug.title.charAt(0).toUpperCase() + drug.title.slice(1)
						)}
						renderInput={(params) => (
							<TextField
								{...params}
								variant="standard"
								onKeyPress={(event) => {
									if (event.key === 'Enter') {
										event.preventDefault();
									}
								}}
								label="Search For Medicine"
							/>
						)}
					/>
				</div>

				<div className="flex items-center w-full">
					<Table data={selectedDrugs} columns={columns} />
				</div>

				<InputBox
					label="Description"
					multiline={true}
					type="text"
					placeholder="Write a brief description"
					name="desc"
					required={false}
				/>

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

export default Drug;
