import React, { useState } from 'react';
import { FormContainer } from 'react-hook-form-mui';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { SelectOptions, SubmitBtn, Title } from '../../../../components';
import { useStateContext } from '../../../../context/StateContext';
import { deliveryOptions } from '../../../data';

import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
//import { BiCurrentLocation } from 'react-icons/bi';

const containerStyle = {
	width: '100%',
	height: '100%',
};

const center = {
	lat: 5.665313,
	lng: -0.206312,
};

const Delivery = () => {
	const { isLoaded } = useJsApiLoader({
		id: 'google-map-script',
		googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API,
	});

	const {
		selectedPharmacy,
		deliveryOption,
		setDeliveryOption,
		createSummary,
		userLocation,
	} = useStateContext();

	console.log(userLocation);

	const handleChange = (event) => {
		setDeliveryOption(event.target.value);
	};

	const navigate = useNavigate();

	const handleNavigate = () => {
		createSummary();
		navigate(`/add-new/order-summary`);
	};

	const handleSubmit = () => {
		if (deliveryOption === '') {
			return toast.error(`Please choose a delivery option to continue`);
		} else {
			handleNavigate();
		}
	};

	return (
		<div className="w-full h-full flex flex-col gap-10 justify-start items-start p-6 overflow-y-scroll">
			<FormContainer onSuccess={handleSubmit}>
				<Title size="text-3xl sm:tex-4xl" title="Delivery Options" />

				<div className="flex w-full gap-3 justify-start items-center">
					<h3 className="text-lg sm:text-xl">Selected Pharmacy:</h3>
					<p
						className={
							selectedPharmacy === 'None' ? 'text-accent' : 'text-bgTwo'
						}>
						{selectedPharmacy}
					</p>
				</div>

				<div className="w-full">
					<SelectOptions
						label="Choose Delivery Option"
						labelId="delivery-option"
						onChange={handleChange}
						value={deliveryOption}
						required={false}
						name="region"
						options={deliveryOptions}
					/>
				</div>

				{deliveryOption === 'pick-up' ? (
					<div className="w-full flex flex-col justify-center items-start gap-5">
						<Title size="text-xl sm:text-2xl" title={deliveryOption} />
						<p className="w-full font-light text-base sm:text-lg lg:text-xl">
							You'll receive an SMS with instructions on how to collect your
							package at {selectedPharmacy} when order is completed.
						</p>
						<p className="font-light text-accent text-sm text-right w-full">
							Click Next to Continue
						</p>
					</div>
				) : deliveryOption === 'delivery' ? (
					<div className="flex flex-col gap-7">
						<div className="w-full">
							<Title size="text-xl sm:text-2xl" title={deliveryOption} />
						</div>

						<div className="transition-all duration-200 ease-in w-full h-96 rounded-md overflow-hidden shadow-md hover:shadow-lg">
							{isLoaded ? (
								<GoogleMap
									mapContainerStyle={containerStyle}
									center={center}
									zoom={13}>
									{/* Child components, such as markers, info windows, etc. */}
									<></>
								</GoogleMap>
							) : (
								<></>
							)}
						</div>
					</div>
				) : (
					<div className="w-full justify-center items-center">
						<h2>Please choose an option to continue</h2>
					</div>
				)}

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

export default Delivery;
