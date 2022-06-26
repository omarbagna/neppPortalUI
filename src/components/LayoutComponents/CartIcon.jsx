import React from 'react';
import { BiCartAlt } from 'react-icons/bi';

const CartIcon = ({ onClick, quantity }) => {
	return (
		<div
			onClick={onClick}
			className="relative bg-white text-black transition-all duration-200 ease-in cursor-pointer shadow-md hover:text-accent hover:scale-105 hover:shadow-lg w-10 h-10 sm:w-12 sm:h-12 lg:w-12 lg:h-16 flex flex-col justify-center lg:justify-end items-center lg:pb-3 text-xl sm:text-3xl md:text-4xl rounded-b-lg">
			<BiCartAlt className="cursor-pointer" />
			<div
				className={
					quantity === 0
						? 'hidden'
						: 'absolute top-4 right-1 w-3 h-3 rounded-full bg-accent text-white text-xs flex justify-center items-center'
				}>
				{quantity}
			</div>
		</div>
	);
};

export default CartIcon;
