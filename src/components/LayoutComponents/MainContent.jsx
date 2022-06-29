import React from 'react';
import { Outlet } from 'react-router-dom';
import Copyright from './Copyright';
import LogoutBtn from './LogoutBtn';
import CartIcon from './CartIcon';
import Cart from './Cart';

import { useStateContext } from '../../context/StateContext.js';
import Order from './Order';

const MainContent = () => {
	const { showOrder, showCart, setShowCart, totalQuantity } = useStateContext();

	return (
		<div className="w-screen h-full mb-20 lg:mb-0 lg:h-screen flex flex-col justify-start overflow-y-scroll">
			<div className="fixed z-50 top-0 right-4 lg:top-0 lg:right-14 flex  lg:flex-row justify-end items-center gap-5">
				{/*<CartIcon onClick={() => setShowCart(true)} quantity={totalQuantity} />*/}
				<LogoutBtn />
			</div>

			<div className="fixed z-[-1] mix-blend-multiply filter blur-3xl animate-move bg-bgOne opacity-50 top-[30%] left-[40%] -translate-x-1/2 w-20 h-20 lg:w-56 lg:h-56 xl:w-64 xl:h-64 rounded-full" />
			<div className="fixed z-[-1] mix-blend-multiply filter blur-3xl animate-move animation-delay-2000 bg-bgTwo opacity-50 top-[40%] left-[50%]  w-20 h-20 lg:w-56 lg:h-56 xl:w-64 xl:h-64 rounded-full" />
			<div className="fixed z-[-1] mix-blend-multiply filter blur-3xl animate-move animation-delay-4000 bg-bgThree opacity-50 top-[45%] left-[30%] w-20 h-20 lg:w-56 lg:h-56 xl:w-64 xl:h-64 rounded-full" />

			<Outlet />

			<div className="fixed z-50 top-0 left-4 lg:hidden lg:bottom-0 lg:right-14">
				<Copyright />
			</div>
			<div className="fixed z-50 hidden lg:flex lg:bottom-0 lg:right-14">
				<Copyright />
			</div>

			{showCart && <Cart />}
			{showOrder && <Order />}
		</div>
	);
};

export default MainContent;
