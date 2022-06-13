import React from 'react';
import { Link } from 'react-router-dom';
import { BiHomeSmile } from 'react-icons/bi';

const Error = () => {
	return (
		<div className="relative w-screen h-screen flex justify-center items-center">
			<div className="absolute z-[-1] mix-blend-multiply filter blur-3xl animate-move bg-bgOne opacity-50 top-[30%] left-[40%] -translate-x-1/2 w-20 h-20 lg:w-56 lg:h-56 xl:w-64 xl:h-64 rounded-full" />
			<div className="absolute z-[-1] mix-blend-multiply filter blur-3xl animate-move animation-delay-2000 bg-bgTwo opacity-50 top-[40%] left-[50%]  w-20 h-20 lg:w-56 lg:h-56 xl:w-64 xl:h-64 rounded-full" />
			<div className="absolute z-[-1] mix-blend-multiply filter blur-3xl animate-move animation-delay-4000 bg-bgThree opacity-50 top-[45%] left-[30%] w-20 h-20 lg:w-56 lg:h-56 xl:w-64 xl:h-64 rounded-full" />

			<div className="rounded-md shadow-lg bg-white bg-opacity-40 flex flex-col justify-center items-center gap-9 p-6 md:p-10">
				<h1 className="text-gray-800 text-2xl md:text-4xl lg:text-6xl font-black">
					Opps! Seems you're lost
				</h1>
				<p className="text-gray-600 text-base md:text-xl lg:text-2xl font-extralight">
					Lets get you back home.
				</p>
				<Link
					to="/"
					className="text-lg md:text-2xl lg:text-3xl lg:hover:opacity-100 font-light text-accent opacity-70 flex items-center gap-1">
					<BiHomeSmile />
					Home
				</Link>
			</div>
		</div>
	);
};

export default Error;
