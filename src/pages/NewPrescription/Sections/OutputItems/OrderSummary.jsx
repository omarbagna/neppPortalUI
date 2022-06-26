import React from 'react';
import { FormContainer } from 'react-hook-form-mui';
import { useNavigate } from 'react-router-dom';
import { SubmitBtn, Title } from '../../../../components';
import { useStateContext } from '../../../../context/StateContext';

const OrderSummary = () => {
	const { selectedPharmacy, setShowCart } = useStateContext();

	//console.log('Search Input: ', input);
	const navigate = useNavigate();

	const handleNavigate = () => {
		navigate(`/`);
		setShowCart(true);
	};

	const handleSubmit = () => {
		handleNavigate();
	};

	return (
		<div className="w-full h-full flex flex-col gap-10 justify-start items-start p-6 overflow-y-scroll">
			<FormContainer onSuccess={handleSubmit}>
				<Title size="text-3xl sm:tex-4xl" title="Order Summary" />

				<div className="flex w-full gap-3 justify-start items-center">
					<h3 className="text-lg sm:tex-xl">Selected Pharmacy:</h3>
					<p
						className={
							selectedPharmacy === 'None' ? 'text-accent' : 'text-bgTwo'
						}>
						{selectedPharmacy}
					</p>
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
					<SubmitBtn name="Proceed to Checkout" />
				</div>
			</FormContainer>
		</div>
	);
};

export default OrderSummary;
