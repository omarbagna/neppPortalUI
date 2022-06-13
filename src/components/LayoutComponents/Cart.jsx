import React from 'react';
import { BiCartAlt } from 'react-icons/bi';

const Cart = () => {
	return (
		<div className="bg-white text-black transition-all duration-200 ease-in cursor-pointer shadow-md hover:text-accent hover:scale-105 hover:shadow-lg w-12 h-16 flex flex-col justify-end items-center pb-3 text-3xl rounded-b-lg">
			<BiCartAlt className="cursor-pointer" />
		</div>
	);
};

export default Cart;
