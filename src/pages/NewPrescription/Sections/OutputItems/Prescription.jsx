import React from 'react';
import { FormContainer } from 'react-hook-form-mui';
import { useNavigate } from 'react-router-dom';
import { InputBox, SubmitBtn, Title } from '../../../../components';

const Prescription = () => {
	const navigate = useNavigate();

	const handleNavigate = () => {
		navigate(`/add-new/pharmacy`);
	};

	const handleSubmit = () => {
		handleNavigate();
	};

	return (
		<div className="w-full h-full flex flex-col overflow-y-scroll gap-10 justify-start items-start p-6">
			<FormContainer onSuccess={handleSubmit}>
				<Title size="text-3xl sm:tex-4xl" title="upload prescription" />

				<div className="flex flex-col gap-6">
					<p className="text-gray font-light text-lg">
						Valid Prescription Upload Guide
					</p>
					<div className="flex gap-3 justify-start items-center pl-4 w-full">
						<div className="bg-bgOne rounded-full w-2 h-2 shrink-0" />
						<p className="text-gray font-extralight text-sm md:text-base md:w-2/3">
							Avoid blurred images
						</p>
					</div>
					<div className="flex gap-3 justify-start items-center pl-4 w-full">
						<div className="bg-bgOne rounded-full w-2 h-2 shrink-0" />
						<p className="text-gray font-extralight text-sm md:text-base md:w-2/3">
							For privacy reasons, crop out the prescription image excluding
							only your name
						</p>
					</div>
					<div className="flex gap-3 justify-start items-center pl-4 w-full">
						<div className="bg-bgOne rounded-full w-2 h-2 shrink-0" />
						<p className="text-gray font-extralight text-sm md:text-base md:w-2/3">
							Image should only include details of prescribed drugs,
							prescriber's name, signature, and visit date
						</p>
					</div>
				</div>

				<div className="flex justify-between items-center w-full">
					<p>Attached Images</p>
					<SubmitBtn name="Upload" type="upload" />
				</div>

				<div className="flex gap-3 justify-start items-center w-full h-36 border-2 border-gray border-dashed"></div>

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

export default Prescription;
