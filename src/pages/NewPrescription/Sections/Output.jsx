import React from 'react';
import { Outlet } from 'react-router-dom';

const Output = () => {
	return (
		<div className="bg-white rounded-md  w-full h-fit lg:h-full flex justify-center items-center">
			<Outlet />
		</div>
	);
};

export default Output;
