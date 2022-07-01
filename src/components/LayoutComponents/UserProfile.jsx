import { TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FormContainer, TextFieldElement } from 'react-hook-form-mui';

//import toast from 'react-hot-toast';

import { useStateContext } from '../../context/StateContext';
import InputBox from '../ReusableComponents/InputBox';
import SubmitBtn from '../ReusableComponents/SubmitBtn';
import Title from '../ReusableComponents/Title';

import GoogleMapReact from 'google-map-react';

const UserProfile = () => {
	const { setShowProfile } = useStateContext();

	const [addressInput, setAddressInput] = useState('');
	const [address, setAddress] = useState({ line1: '', line2: '', line3: '' });

	const center = { lat: 59.95, lng: 30.33 };
	const zoom = 11;

	const formContext = useForm({
		mode: 'onBlur',
	});

	const {
		watch,
		register,
		handleSubmit,
		formState: { errors },
	} = formContext;

	/*const updatedDetails = watch({
		firstName: 'firstName',
		lastName: 'lastName',
		email: 'email',
		phoneNumber: 'phoneNumber',
	});*/

	//console.log('Address entered: ', addressInput);

	const onSubmit = (data) => {
		console.log('User data is: ', data);
	};

	const addAddress = (input) => {
		if (address.line1 === '') {
			return setAddress({ ...address, line1: input });
		} else if (address.line2 === '') {
			return setAddress({ ...address, line2: input });
		} else if (address.line3 === '') {
			return setAddress({ ...address, line3: input });
		}
	};

	console.log('User Addresses: ', address);

	return (
		<div onClick={() => setShowProfile(false)} className="cart-wrapper">
			<div
				onClick={(e) => {
					e.stopPropagation();
				}}
				className="cart-container flex flex-col gap-6 mb-20 lg:mb-5">
				<div className="w-full flex justify-end">
					<SubmitBtn
						name="Close"
						type="dull"
						onClick={() => setShowProfile(false)}
					/>
				</div>

				<Title size="text-xl sm:text-4xl" title="Edit Profile Information" />

				<div className="flex flex-col w-full h-full gap-5 md:gap-8 overflow-y-scroll">
					<FormContainer
						formContext={formContext}
						onSuccess={handleSubmit(onSubmit)}>
						<div className="w-full flex items-center justify-start gap-5">
							<InputBox
								rule={{
									...register('firstName'),
								}}
								label="First Name"
								type="text"
								placeholder="First Name"
								name="firstName"
								value="Bagna"
								disabled={true}
							/>
							<InputBox
								rule={{
									...register('lastName'),
								}}
								label="Last Name"
								type="text"
								placeholder="Last Name"
								name="lastName"
								value="Omar"
								disabled={true}
							/>
						</div>

						<div className="w-full flex items-center justify-start gap-5">
							<InputBox
								label="Email"
								type="text"
								placeholder="Email"
								name="email"
								value="bagna@email.com"
								disabled={true}
							/>

							<InputBox
								rule={{
									...register('phoneNumber', {
										pattern: {
											value: /^[0][0-9]{9}$/i,
											message: 'Please Enter a valid Phone Number', // JS only: <p>error message</p> TS only support string
										},
										required: 'Please Enter a Phone Number',
									}),
								}}
								error={!!errors?.phoneNumber}
								helperText={
									errors?.phoneNumber ? errors.phoneNumber.message : null
								}
								label="Phone Number"
								type="text"
								placeholder="Phone Number"
								name="phoneNumber"
								required
								variant="standard"
								className="w-full"
							/>
						</div>

						<div className="w-full flex items-center justify-start gap-5">
							<InputBox
								rule={{
									...register('ghanaCard', {
										pattern: {
											value: /^(GHA)-?\d{9}-?\d{1}$/gi,
											message:
												'Please enter a valid Card Number (GHA-123456789-9)', // JS only: <p>error message</p> TS only support string
										},
										required: 'Please enter Ghana Card Number',
									}),
								}}
								error={!!errors?.ghanaCard}
								helperText={errors?.ghanaCard ? errors.ghanaCard.message : null}
								label="Ghana Card"
								type="text"
								placeholder="Ghana Card Number"
								name="ghanaCard"
								value="card-12331234124"
								required={true}
							/>
						</div>

						{address.line1 !== '' && (
							<div className="w-full flex items-end justify-start gap-5">
								<InputBox
									label="Address Line 1"
									type="text"
									placeholder="Address Line 1"
									name="address1"
									value={address.line1}
									//value="bagna@email.com"
								/>
								<span className="cursor-pointer transition-all duration-200 ease-in py-1 px-2 rounded-md shadow-md bg-accent text-white uppercase hover:shadow-xl">
									delete
								</span>
							</div>
						)}
						{address.line2 !== '' && (
							<div className="w-full flex items-end justify-start gap-5">
								<InputBox
									label="Address Line 2"
									type="text"
									placeholder="Address Line 2"
									name="address2"
									value={address.line2}
									//value="bagna@email.com"
								/>
								<span className="cursor-pointer transition-all duration-200 ease-in py-1 px-2 rounded-md shadow-md bg-accent text-white uppercase hover:shadow-xl">
									delete
								</span>
							</div>
						)}
						{address.line3 !== '' && (
							<div className="w-full flex items-end justify-start gap-5">
								<InputBox
									label="Address Line 3"
									type="text"
									placeholder="Address Line 3"
									name="address3"
									value={address.line3}
									//value="bagna@email.com"
								/>
								<span className="cursor-pointer transition-all duration-200 ease-in py-1 px-2 rounded-md shadow-md bg-accent text-white uppercase hover:shadow-xl">
									delete
								</span>
							</div>
						)}
						{address.line1 === '' ||
						address.line2 === '' ||
						address.line3 === '' ? (
							<div className="w-full flex items-end justify-start gap-5">
								<InputBox
									label="Address"
									type="text"
									placeholder="Address"
									name="address"
									onChange={(e) => setAddressInput(e.target.value)}
									//value="bagna@email.com"
								/>
								<span
									onClick={() => addAddress(addressInput)}
									className="cursor-pointer transition-all duration-200 ease-in py-1 px-2 rounded-md shadow-md bg-bgTwo text-white uppercase hover:shadow-xl">
									add
								</span>
							</div>
						) : null}

						<div className="transition-all duration-200 ease-in w-full h-96 rounded-md overflow-hidden shadow-md hover:shadow-lg">
							<GoogleMapReact
								bootstrapURLKeys={{ key: process.env.GOOGLE_MAP_PUBLIC_API }}
								defaultCenter={center}
								defaultZoom={zoom}></GoogleMapReact>
						</div>

						<div className="w-full flex justify-end items-center gap-4">
							<SubmitBtn
								name="Back"
								type="back"
								onClick={(e) => {
									e.preventDefault();
									setShowProfile(false);
								}}
							/>
							<SubmitBtn name="Submit" />
						</div>
					</FormContainer>
				</div>
			</div>
		</div>
	);
};

export default UserProfile;
