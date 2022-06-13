import React from 'react';
import { Link } from 'react-router-dom';

const Widget = ({ link, title, tag: Icon }) => {
	return (
		<Link
			to={link}
			className="relative cursor-pointer overflow-hidden transition-all duration-200 ease-in flex flex-col justify-end items-start p-4 bg-white text-gray rounded-md shadow-md hover:shadow-lg hover:bg-bgOne hover:text-white w-64 h-60">
			<Icon className="absolute cursor-pointer -right-5 -top-5 text-[10rem] opacity-70" />
			<p className="capitalize cursor-pointer text-2xl w-1/2">{title}</p>
		</Link>
	);
};

export default Widget;
