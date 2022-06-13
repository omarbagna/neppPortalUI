import React from 'react';
import { Outlet } from 'react-router-dom';
import Copyright from './Copyright';
import LogoutBtn from './LogoutBtn';
import Cart from './Cart';

const MainContent = () => {
	return (
		<div className="w-screen h-screen mt-14 sm:mt-20 lg:ml-36 lg:mt-0 p-4 sm:p-8 lg:px-10 overflow-y-scroll">
			<div className="fixed z-50 top-0 right-14 flex justify-end items-center gap-5">
				<Cart />
				<LogoutBtn />
			</div>

			<div className="fixed z-[-1] mix-blend-multiply filter blur-3xl animate-move bg-bgOne opacity-50 top-[30%] left-[40%] -translate-x-1/2 w-20 h-20 lg:w-56 lg:h-56 xl:w-64 xl:h-64 rounded-full" />
			<div className="fixed z-[-1] mix-blend-multiply filter blur-3xl animate-move animation-delay-2000 bg-bgTwo opacity-50 top-[40%] left-[50%]  w-20 h-20 lg:w-56 lg:h-56 xl:w-64 xl:h-64 rounded-full" />
			<div className="fixed z-[-1] mix-blend-multiply filter blur-3xl animate-move animation-delay-4000 bg-bgThree opacity-50 top-[45%] left-[30%] w-20 h-20 lg:w-56 lg:h-56 xl:w-64 xl:h-64 rounded-full" />

			<Outlet />

			<div className="fixed z-50 bottom-0 right-14">
				<Copyright />
			</div>
		</div>
	);
};

export default MainContent;
