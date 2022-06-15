import React from 'react';
import { BiCartAlt } from 'react-icons/bi';

const Cart = () => {
	return (
		<div className="bg-white text-black transition-all duration-200 ease-in cursor-pointer shadow-md hover:text-accent hover:scale-105 hover:shadow-lg w-10 h-10 sm:w-12 sm:h-12 lg:w-12 lg:h-16 flex flex-col justify-center lg:justify-end items-center lg:pb-3 text-xl sm:text-3xl md:text-4xl rounded-b-lg">
			<BiCartAlt className="cursor-pointer" />
		</div>
	);
};

export default Cart;
