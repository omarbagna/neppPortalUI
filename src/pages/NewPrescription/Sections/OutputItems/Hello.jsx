import React from 'react';
import { DefaultBtn, Title } from '../../../../components';

const Hello = () => {
	return (
		<div className="flex flex-col py-40 gap-6 lg:gap-8">
			<Title
				size="text-xl md:text-2xl lg:text-3xl"
				title="How would you like to proceed?"
			/>
			<div className="flex flex-col lg:flex-row gap-8 justify-center items-center">
				<DefaultBtn
					link="/add-new/prescription"
					name="Add Prescription"
					type="action"
				/>
				<DefaultBtn link="/add-new/drug" name="Add Drug" type="dull" />
			</div>
		</div>
	);
};

export default Hello;
