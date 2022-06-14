import React from 'react';
import { Link } from 'react-router-dom';

const DefaultBtn = ({ link, name, type }) => {
	return (
		<Link
			to={link}
			className={
				type === 'dull'
					? 'bg-dull text-black cursor-pointer transition-all duration-200 ease-in flex justify-center items-center text-sm lg:text-lg font-normal px-6 py-2 rounded-md shadow-md hover:shadow-lg'
					: type === 'action' &&
					  'bg-accent text-white cursor-pointer transition-all duration-200 ease-in flex justify-center items-center text-sm lg:text-lg font-normal px-6 py-2 rounded-md shadow-md hover:shadow-lg'
			}>
			{name}
		</Link>
	);
};

export default DefaultBtn;
