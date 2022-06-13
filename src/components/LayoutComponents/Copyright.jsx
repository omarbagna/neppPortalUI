import React from 'react';
import { BiCopyright } from 'react-icons/bi';

const Copyright = () => {
	return (
		<a
			href="https://gnepplatformsite.netlify.app/"
			target="_blank"
			rel="noopener noreferrer"
			className="bg-white transition-all duration-200 ease-in cursor-pointer shadow-2xl w-fit h-10 flex gap-1 justify-end items-center py-2 px-3 rounded-t-lg text-gray hover:text-accent opacity-50 text-xs">
			<BiCopyright className="cursor-pointer" />
			<p className="cursor-pointer">RX Health Info Systems 2022</p>
		</a>
	);
};

export default Copyright;
