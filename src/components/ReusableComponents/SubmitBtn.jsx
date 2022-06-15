import React from 'react';

const SubmitBtn = ({ name, onClick }) => {
	return (
		<button
			type="submit"
			onClick={onClick}
			className="bg-accent text-white cursor-pointer transition-all duration-200 ease-in flex justify-center items-center text-sm lg:text-lg font-normal px-6 py-2 rounded-md shadow-md hover:shadow-lg">
			{name}
		</button>
	);
};

export default SubmitBtn;
