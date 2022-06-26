import React, { useRef, useState } from 'react';
import { FormContainer } from 'react-hook-form-mui';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { SelectOptions, SubmitBtn, Title } from '../../../../components';
import { useStateContext } from '../../../../context/StateContext';
import { deliveryOptions } from '../../../data';

import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import mapInfo from './osm-providers';
import useGeoLocation from '../../../../hooks/useGeoLocation';

const markerIcon = new L.Icon({
	iconUrl: require('../../../../resources/images/marker.png'),
	iconSize: [25, 25],
	iconAnchor: [8, 25],
	popupAnchor: [3, -26],
});

const originIcon = new L.Icon({
	iconUrl: require('../../../../resources/images/origin.png'),
	iconSize: [20, 25],
	iconAnchor: [5, 25],
	popupAnchor: [5, -26],
});

const Delivery = () => {
	const location = useGeoLocation();
	const center = { lat: 5.6653157, lng: -0.2062689 };
	const ZOOM_LEVEL = 10;
	const mapRef = useRef();

	const { selectedPharmacy } = useStateContext();
	const [option, setOption] = useState('');

	const handleChange = (event) => {
		setOption(event.target.value);
	};

	const navigate = useNavigate();

	const handleNavigate = () => {
		navigate(`/add-new/order-summary`);
	};

	const handleSubmit = () => {
		if (option === '') {
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
						value={option}
						required={false}
						name="region"
						options={deliveryOptions}
					/>
				</div>

				{option === 'pick-up' ? (
					<div className="w-full flex flex-col justify-center items-start gap-5">
						<Title size="text-xl sm:text-2xl" title={option} />
						<p className="w-full font-light text-base sm:text-lg lg:text-xl">
							You'll receive an SMS with instructions on how to collect your
							package at {selectedPharmacy} when order is completed.
						</p>
						<p className="font-light text-accent text-sm text-right w-full">
							Click Next to Continue
						</p>
					</div>
				) : option === 'delivery' ? (
					<div className="flex flex-col gap-7">
						<div className="w-full">
							<Title size="text-xl sm:text-2xl" title={option} />
						</div>

						<div className="transition-all duration-200 ease-in w-full h-96 rounded-md overflow-hidden shadow-md hover:shadow-lg">
							<MapContainer
								id="mapId"
								center={center}
								zoom={ZOOM_LEVEL}
								ref={mapRef}
								scrollWheelZoom={true}>
								<TileLayer
									url={mapInfo.maptiler.url}
									atribution={mapInfo.maptiler.attribution}
								/>
								{location.loaded && !location.error && (
									<Marker
										position={[
											location.coordinates.lat,
											location.coordinates.lng,
										]}
										icon={markerIcon}>
										<Popup>
											<em>You are here</em>
										</Popup>
									</Marker>
								)}
								<Marker position={[5.6806688, -0.2017897]} icon={originIcon}>
									<Popup>
										<em>Pharmacy is here</em>
									</Popup>
								</Marker>
							</MapContainer>
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
