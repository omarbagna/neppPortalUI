import React from 'react';
import { BiLogOutCircle } from 'react-icons/bi';

const LogoutBtn = () => {
	return (
		<div className="bg-bgOne transition-all duration-200 ease-in shadow-md cursor-pointer hover:scale-105 hover:shadow-lg w-12 h-16 flex flex-col justify-end items-center pb-3 text-3xl text-white rounded-b-lg">
			<BiLogOutCircle className="cursor-pointer" />
		</div>
	);
};

export default LogoutBtn;
