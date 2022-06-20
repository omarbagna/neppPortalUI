import React from 'react';
import Output from './Sections/Output';
import Process from './Sections/Process';

const AddPrescription = () => {
	return (
		<div className="py-14 flex flex-col lg:flex-row w-full h-screen gap-8 lg:gap-5 justify-start items-center mt-4 mb-48 sm:mb-48 sm:mt-16 lg:pl-44 lg:py-16 lg:my-0 p-4 sm:p-8 lg:pr-16 ">
			<Process />
			<Output />
		</div>
	);
};

export default AddPrescription;
