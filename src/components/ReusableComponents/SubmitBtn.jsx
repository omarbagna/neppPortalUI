import React from 'react';

const SubmitBtn = ({ name, onClick, type }) => {
	return (
		<button
			type="submit"
			onClick={onClick}
			className={
				type
					? 'bg-gray text-white cursor-pointer transition-all duration-200 ease-in flex justify-center items-center text-sm lg:text-lg font-normal px-4 py-2 rounded-md shadow-md hover:bg-black hover:shadow-lg'
					: 'bg-accent text-white cursor-pointer transition-all duration-200 ease-in flex justify-center items-center text-sm lg:text-lg font-normal px-4 py-2 rounded-md shadow-md hover:shadow-lg'
			}>
			{name}
		</button>
	);
};

export default SubmitBtn;
