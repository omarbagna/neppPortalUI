import React from 'react';
import { FormContainer } from 'react-hook-form-mui';
import { useNavigate } from 'react-router-dom';
import { SubmitBtn, Title } from '../../../../components';
import { useStateContext } from '../../../../context/StateContext';

const OrderSummary = () => {
	const { orderSummary, pushOrderData } = useStateContext();

	//console.log('Search Input: ', input);
	const navigate = useNavigate();

	const handleNavigate = () => {
		navigate(`/my-orders`);
	};

	const handleSubmit = () => {
		pushOrderData();
		handleNavigate();
	};

	return (
		<div className="w-full h-full flex flex-col gap-10 justify-start items-start p-6 overflow-y-scroll">
			<FormContainer onSuccess={handleSubmit}>
				<Title size="text-3xl sm:text-4xl" title="Order Summary" />

				<div className="flex w-full gap-3 justify-start items-end">
					<h3 className="w-1/3 text-right text-base font-light text-gray">
						Selected Pharmacy:
					</h3>
					<p className="capitalize font-medium text-xl text-bgTwo">
						{orderSummary.pharmacy}
					</p>
				</div>

				<div className="flex w-full gap-3 justify-start items-end">
					<h3 className="w-1/3 text-right text-base font-light text-gray">
						Delivery or Pick-up:
					</h3>
					<p className="capitalize font-medium text-xl">
						{orderSummary.deliveryOption}
					</p>
				</div>

				<div className="flex w-full gap-3 justify-start items-start">
					<h3 className="w-1/3 text-right text-base font-light text-gray">
						Orders:
					</h3>
					<div className="flex flex-col gap-3 w-2/3">
						{orderSummary.orders.map((order, index) => (
							<p key={index} className="capitalize font-medium text-xl">
								{order.quantity}x {order.title}
							</p>
						))}
					</div>
				</div>

				<div className="flex w-full gap-3 justify-start items-end">
					<h3 className="w-1/3 text-right text-base font-light text-gray">
						Total Items:
					</h3>
					<p className="font-medium text-xl">{orderSummary.totalItems}</p>
				</div>

				{/*<div className="flex w-full gap-2 justify-start items-end">
					<h3 className="w-1/3 text-right text-base font-light text-gray">
						Total Price GH¢
					</h3>
					<p className="font-medium text-xl">{orderSummary.totalPrice}</p>
						</div>*/}

				<div className="w-full flex justify-end items-center gap-4">
					<SubmitBtn
						name="Back"
						type="back"
						onClick={(e) => {
							e.preventDefault();
							navigate(-1);
						}}
					/>
					<SubmitBtn name="Place Order" />
				</div>
			</FormContainer>
		</div>
	);
};

export default OrderSummary;
