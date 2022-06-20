import React, { useRef } from 'react';

import {
	AiOutlineMinus,
	AiOutlinePlus,
	AiOutlineShopping,
	AiOutlineLeft,
} from 'react-icons/ai';

import { TiDeleteOutline } from 'react-icons/ti';
//import toast from 'react-hot-toast';

import { useStateContext } from '../../context/StateContext';

const Cart = () => {
	const cartRef = useRef();
	const {
		totalPrice,

		cartItems,
		setShowCart,
		toggleCartItemQuantity,
		onRemove,
	} = useStateContext();

	return (
		<div className="cart-wrapper" ref={cartRef}>
			<div className="cart-container">
				<button
					type="button"
					className="cart-heading"
					onClick={() => setShowCart(false)}>
					<AiOutlineLeft />
					<span className="heading">My Cart</span>
				</button>

				{cartItems.length < 1 && (
					<div className="empty-cart flex flex-col items-center justify-center">
						<AiOutlineShopping size={150} className="text-accent" />
						<h3>Your shopping cart is empty</h3>
						<button
							type="button"
							onClick={() => setShowCart(false)}
							className="btn">
							go back
						</button>
					</div>
				)}

				<div className="product-container">
					{cartItems.length >= 1 &&
						cartItems.map((item) => (
							<div className="product" key={item._id}>
								<img src="" alt="" className="cart-product-image" />
								<div className="item-desc">
									<div className="flex top">
										<h5>{item.name}</h5>
										<h4>GH¢{item.price}</h4>
									</div>
									<div className="flex">
										<div className="bg-black">
											<p className="flex justify-center gap-3 items-center">
												<span
													className="bg-bgTwo"
													onClick={() =>
														toggleCartItemQuantity(item._id, 'dec')
													}>
													<AiOutlineMinus />
												</span>
												<span className="bg-bgThree" onClick="">
													{item.quantity}
												</span>
												<span
													className=" bg-bgOne"
													onClick={() =>
														toggleCartItemQuantity(item._id, 'inc')
													}>
													<AiOutlinePlus />
												</span>
											</p>
										</div>
										<button
											type="button"
											className="remove-item"
											onClick={() => onRemove(item)}>
											<TiDeleteOutline />
										</button>
									</div>
								</div>
							</div>
						))}
				</div>
				{cartItems.length >= 1 && (
					<div className="cart-bottom">
						<div className="total">
							<h3>Subtotal:</h3>
							<h3>GH¢{totalPrice}</h3>
						</div>
						<div className="btn-container">
							<button type="button" className="btn" onClick="">
								Pay Now
							</button>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Cart;
