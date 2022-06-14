import React from 'react';
import { DefaultBtn, Title } from '../../../../components';

const Hello = () => {
	return (
		<div className="flex flex-col gap-6 lg:gap-8">
			<Title
				size="text-xl md:text-2xl lg:text-3xl"
				title="How would you like to proceed?"
			/>
			<div className="flex flex-col lg:flex-row gap-8 justify-center items-center">
				<DefaultBtn link="prescription" name="Add Prescription" type="action" />
				<DefaultBtn link="drug" name="Add Drug" type="dull" />
			</div>
		</div>
	);
};

export default Hello;
