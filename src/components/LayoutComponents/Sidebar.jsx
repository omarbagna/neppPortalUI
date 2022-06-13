import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/mainLogo.png';
import SideButton from './SideButton';

import {
	BiHome,
	BiAddToQueue,
	BiCartAlt,
	BiUser,
	BiInfoCircle,
} from 'react-icons/bi';
import { SideButtons } from '../data';

const Sidebar = () => {
	return (
		<div className="fixed z-50 top-0 left-0 bg-white w-screen h-14 sm:h-20 lg:h-screen lg:w-36 shadow-md sm:p-5 flex lg:flex-col justify-center lg:justify-start items-center gap-5 sm:gap-8 lg:gap-16">
			<Link to="/">
				<img
					src={Logo}
					alt="nepp logo"
					className="object-contain transition-all duration-300 ease-in h-8 sm:h-10 lg:h-20 cursor-pointer hover:scale-105"
				/>
			</Link>
			{SideButtons.map((button) => (
				<SideButton
					key={button.id}
					link={button.link}
					tag={
						button.id === 1
							? BiHome
							: button.id === 2
							? BiAddToQueue
							: button.id === 3
							? BiCartAlt
							: button.id === 4
							? BiUser
							: BiInfoCircle
					}
					title={button.title}
				/>
			))}
		</div>
	);
};

export default Sidebar;
