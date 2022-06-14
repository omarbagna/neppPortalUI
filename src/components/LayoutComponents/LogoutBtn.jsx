import React from 'react';
import { BiLogOutCircle } from 'react-icons/bi';

const LogoutBtn = () => {
	return (
		<div className="bg-bgOne transition-all duration-200 ease-in shadow-md cursor-pointer hover:scale-105 hover:shadow-lg w-10 h-10 sm:w-12 sm:h-12 lg:w-12 lg:h-16 flex flex-col justify-center lg:justify-end items-center lg:pb-3 text-xl sm:text-3xl md:text-4xl text-white rounded-l-lg lg:rounded-tl-none lg:rounded-b-lg">
			<BiLogOutCircle className="cursor-pointer" />
		</div>
	);
};

export default LogoutBtn;
