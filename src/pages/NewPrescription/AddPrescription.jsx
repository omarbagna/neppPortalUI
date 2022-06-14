import React from 'react';
import Output from './Sections/Output';
import Process from './Sections/Process';

const AddPrescription = () => {
	return (
		<div className="py-14 flex flex-col lg:flex-row w-full h-full gap-8 lg:gap-5 justify-start items-start">
			<Process />
			<Output />
		</div>
	);
};

export default AddPrescription;
