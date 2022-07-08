import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FormContainer } from 'react-hook-form-mui';
/*import {
	Combobox,
	ComboboxInput,
	ComboboxPopover,
	ComboboxList,
	ComboboxOption,
	ComboboxOptionText,
} from '@reach/combobox';
import '@reach/combobox/styles.css';*/

//import toast from 'react-hot-toast';

import { useStateContext } from '../../context/StateContext';
import InputBox from '../ReusableComponents/InputBox';
import SubmitBtn from '../ReusableComponents/SubmitBtn';
import Title from '../ReusableComponents/Title';

import {
	GoogleMap,
	useJsApiLoader,
	Marker,
	Autocomplete,
} from '@react-google-maps/api';

/*import usePlacesAutocomplete, {
	getGeocode,
	getLatLng,
} from 'use-places-autocomplete';*/

const containerStyle = {
	width: '100%',
	height: '100%',
};

const center = {
	lat: 5.665313,
	lng: -0.206312,
};

const googleLibraries = ['places'];

const UserProfile = () => {
	const { setShowProfile, user, address, setAddress } = useStateContext();

	const [addressInput, setAddressInput] = useState(null);

	const { isLoaded } = useJsApiLoader({
		id: 'google-map-script',
		googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API,
		libraries: googleLibraries,
	});

	const [map, setMap] = useState(null);
	//const addressRef = useRef();

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

	console.log('Address entered: ', addressInput);

	const onSubmit = (data) => {
		console.log('User data is: ', data);
	};

	const addAddress = (input) => {
		//console.log('Address entered is: ', addressRef.current.value);

		if (address.line1 === 'Not Set') {
			return setAddress({ ...address, line1: input });
		} else if (address.line2 === 'Not Set') {
			return setAddress({ ...address, line2: input });
		} else if (address.line3 === 'Not Set') {
			return setAddress({ ...address, line3: input });
		}
	};

	/*const {
		ready,
		value,
		setValue,
		suggestions: { status, data },
		clearSuggestions,
	} = usePlacesAutocomplete();*/

	//console.log('User Addresses: ', address);

	return (
		<div onClick={() => setShowProfile(false)} className="cart-wrapper">
			<div
				onClick={(e) => {
					e.stopPropagation();
				}}
				className="cart-container flex flex-col gap-6">
				<div className="w-full flex justify-end">
					<SubmitBtn
						name="Close"
						type="dull"
						onClick={() => setShowProfile(false)}
					/>
				</div>

				<Title size="text-xl sm:text-4xl" title="Edit Profile Information" />

				<div className="flex flex-col w-full h-full gap-5 md:gap-8 overflow-y-scroll">
					{isLoaded ? (
						<FormContainer onSuccess={handleSubmit(onSubmit)}>
							<div className="w-full flex items-center justify-start gap-5">
								<InputBox
									rule={{
										...register('firstName'),
									}}
									label="First Name"
									type="text"
									placeholder="First Name"
									name="firstName"
									value={user[0].first_name}
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
									value={user[0].last_name}
									disabled={true}
								/>
							</div>

							<div className="w-full flex items-center justify-start gap-5">
								<InputBox
									label="Email"
									type="text"
									placeholder="Email"
									name="email"
									value={user[0].email}
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
									required={true}
									value={user[0].phone_number}
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
									helperText={
										errors?.ghanaCard ? errors.ghanaCard.message : null
									}
									label="Ghana Card"
									type="text"
									placeholder="Ghana Card Number"
									name="ghanaCard"
									value={user[0].ghana_card}
									required={true}
								/>
							</div>

							{address.line1 !== 'Not Set' && (
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
							{address.line2 !== 'Not Set' && (
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
							{address.line3 !== 'Not Set' && (
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
							{address.line1 === 'Not Set' ||
							address.line2 === 'Not Set' ||
							address.line3 === 'Not Set' ? (
								<div className="w-full flex items-end justify-start gap-5">
									<Autocomplete
										onPlaceChanged={(e) => setAddressInput(e.target.value)}
										className="w-full">
										<InputBox
											label="Address"
											type="text"
											placeholder="Address"
											name="address"
											//ref={addressRef}
											//onBlur={(e) => setAddressInput(e.target.value)}
										/>
									</Autocomplete>
									{/*<Combobox className="w-full">
										<ComboboxInput
											value={value}
											onChange={(e) => setValue(e.target.value)}
											disabled={!ready}
											className="w-full p-2"
											placeholder="Enter Address"
										/>
										<ComboboxPopover>
											<ComboboxList>
												{status === 'OK' &&
													data.map(({ place_id, description }) => (
														<ComboboxOption
															key={place_id}
															value={description}
														/>
													))}
											</ComboboxList>
										</ComboboxPopover>
									</Combobox>*/}
									<span
										//onClick={() => addAddress(addressInput)}
										className="cursor-pointer transition-all duration-200 ease-in py-1 px-2 rounded-md shadow-md bg-bgTwo text-white uppercase hover:shadow-xl">
										add
									</span>
								</div>
							) : null}

							<div className="transition-all duration-200 ease-in w-full h-96 rounded-md overflow-hidden shadow-md hover:shadow-lg">
								<GoogleMap
									mapContainerStyle={containerStyle}
									center={center}
									zoom={13}
									options={{
										zoomControl: false,
										streetViewControl: false,
										mapTypeControl: false,
										fullscreenControl: false,
									}}
									onLoad={(map) => setMap(map)}>
									{/* Child components, such as markers, info windows, etc. */}
									<Marker position={center} />
								</GoogleMap>
							</div>

							<div className="w-full flex justify-end items-center gap-4 mb-20 lg:mb-5">
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
					) : (
						<div>Loading Map</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default UserProfile;
