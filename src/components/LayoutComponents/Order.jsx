import React from 'react';

//import toast from 'react-hot-toast';

import { useStateContext } from '../../context/StateContext';
import SubmitBtn from '../ReusableComponents/SubmitBtn';
import Title from '../ReusableComponents/Title';

const Order = () => {
	const { orderSummary, setShowOrder } = useStateContext();

	return (
		<div onClick={() => setShowOrder(false)} className="cart-wrapper">
			<div
				onClick={(e) => {
					e.stopPropagation();
				}}
				className="cart-container flex flex-col gap-6">
				<SubmitBtn
					name="Close"
					type="dull"
					onClick={() => setShowOrder(false)}
				/>

				<Title
					size="text-xl sm:text-4xl"
					title={`Order Number: #${orderSummary.orderNumber}`}
				/>

				<div className="flex flex-col w-full h-full gap-5 md:gap-8">
					<div className="h-full flex flex-col justify-around lg:justify-between">
						<div className="flex w-full gap-3 justify-start items-end">
							<h3 className="w-1/3 text-right text-sm md:text-base font-light text-gray">
								Order Status:
							</h3>
							<p
								className={
									orderSummary.status === 'delivered'
										? ' text-bgTwo capitalize font-medium text-lg sm:text-xl'
										: orderSummary.status === 'pending'
										? 'text-bgThree capitalize font-medium text-lg sm:text-xl'
										: orderSummary.status === 'declined'
										? 'text-bgOne capitalize font-medium text-lg sm:text-xl'
										: orderSummary.status === 'processing' &&
										  'text-bgFour capitalize font-medium text-lg sm:text-xl'
								}>
								{orderSummary.status}
							</p>
						</div>

						<div className="flex w-full gap-3 justify-start items-end">
							<h3 className="w-1/3 text-right text-sm md:text-base font-light text-gray">
								Order Date:
							</h3>
							<p className="capitalize font-medium text-lg sm:text-xl">
								{orderSummary.date.substring(0, orderSummary.date.length - 9)}
							</p>
						</div>

						<div className="flex w-full gap-3 justify-start items-end">
							<h3 className="w-1/3 text-right text-sm md:text-base font-light text-gray">
								Selected Pharmacy:
							</h3>
							<p className="capitalize font-medium text-lg sm:text-xl border-b-2 border-b-bgTwo">
								{orderSummary.pharmacy}
							</p>
						</div>

						<div className="flex w-full gap-3 justify-start items-end">
							<h3 className="w-1/3 text-right text-sm md:text-base font-light text-gray">
								Delivery or Pick-up:
							</h3>
							<p className="capitalize font-medium text-lg sm:text-xl">
								{orderSummary.deliveryOption}
							</p>
						</div>

						<div className="flex w-full gap-3 justify-start items-end">
							<h3 className="w-1/3 text-right text-sm md:text-base font-light text-gray">
								Delivery Amount:
							</h3>
							<p className="capitalize font-medium text-lg sm:text-xl">
								DELIVERY PRICE
							</p>
						</div>

						<div className="flex w-full gap-3 justify-start items-start">
							<h3 className="w-1/3 text-right text-sm md:text-base font-light text-gray">
								Orders:
							</h3>
							<div className="flex flex-col gap-3 w-2/3 h-28 overflow-y-scroll">
								{orderSummary.orders.map((order, index) => (
									<p
										key={index}
										className="capitalize font-medium text-lg sm:text-xl">
										{order.quantity}x {order.title}
									</p>
								))}
							</div>
						</div>

						<div className="flex w-full gap-3 justify-start items-end">
							<h3 className="w-1/3 text-right text-sm md:text-base font-light text-gray">
								Total Items:
							</h3>
							<p className="font-medium text-lg sm:text-xl">
								{orderSummary.totalItems}
							</p>
						</div>

						<div className="flex w-full gap-2 justify-start items-end">
							<h3 className="w-1/3 text-right text-sm md:text-base font-light text-gray">
								Total Price GH¢
							</h3>
							<p className="font-medium text-lg sm:text-xl">
								{orderSummary.totalPrice}
							</p>
						</div>
					</div>
					{orderSummary.status === 'pending' && (
						<div className="flex gap-8 w-full items-end pb-10 lg:pb-2 justify-around md:justify-end">
							<SubmitBtn name="CHANGE PHARMACY" type="dull" />
							<SubmitBtn name="MAKE PAYMENT" />
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Order;
