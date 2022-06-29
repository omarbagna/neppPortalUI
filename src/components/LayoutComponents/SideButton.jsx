import React from 'react';
import { NavLink } from 'react-router-dom';

const SideButton = ({ link, tag: Icon, title }) => {
	return (
		<NavLink to={link}>
			{({ isActive }) => (
				<span
					className={
						isActive
							? 'relative group transition-all cursor-pointer duration-100 ease-in bg-bgOne text-white rounded-md p-3 shadow-md flex flex-col justify-center items-center h-12 w-12 md:h-16 md:w-16 md:hover:w-24'
							: 'relative group transition-all cursor-pointer duration-100 ease-in rounded-md p-3 flex flex-col justify-center items-center bg-white  hover:text-accent  h-12 w-14 md:h-16 md:w-24'
					}>
					<Icon className="absolute transition-all cursor-pointer duration-200 ease-in text-2xl md:text-4xl opacity-100 md:group-hover:opacity-0" />
					<div className="absolute flex cursor-pointer justify-center items-center">
						<p className="transition-all duration-100 ease-in opacity-0 cursor-pointer hidden md:block md:text-sm text-center font-bold bottom-5 group-hover:opacity-100">
							{title}
						</p>
					</div>
				</span>
			)}
		</NavLink>
	);
};

export default SideButton;
