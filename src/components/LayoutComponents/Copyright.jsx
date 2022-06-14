import React from 'react';
import { BiCopyright } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import Logo from '../../assets/mainLogo.png';

const Copyright = () => {
	return (
		<div className="bg-white transition-all duration-200 ease-in cursor-pointer shadow-2xl w-24 md:w-32 h-12 md:h-16 lg:w-fit lg:h-10 flex gap-1 justify-center lg:justify-end items-center py-2 px-3 rounded-b-lg lg:rounded-b-none lg:rounded-t-lg text-gray hover:text-accent">
			<Link to="/" className="flex lg:hidden">
				<img
					src={Logo}
					alt="nepp logo"
					className="object-contain transition-all duration-300 ease-in h-10 md:h-14 cursor-pointer hover:scale-105"
				/>
			</Link>

			<a
				href="https://gnepplatformsite.netlify.app/"
				target="_blank"
				rel="noopener noreferrer"
				className="cursor-pointer gap-1 justify-end items-center text-gray hover:text-accent opacity-50 hidden lg:flex">
				<BiCopyright className="cursor-pointer text-4xl md:text-xs" />
				<p className="cursor-pointer text-xs">RX Health Info Systems 2022</p>
			</a>
		</div>
	);
};

export default Copyright;
