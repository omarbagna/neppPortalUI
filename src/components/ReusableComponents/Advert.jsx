import React from 'react';
import Title from './Title';

const Advert = () => {
	return (
		<div className="bg-white transition-all duration-300 ease-in cursor-pointer flex justify-start items-center gap-8 w-52 h-20 md:w-64 md:h-24 overflow-hidden rounded-md shadow-md hover:shadow-xl">
			<img
				className="object-contain h-20 md:h-24 cursor-pointer"
				src="https://julitetpharmacy.com/wp-content/uploads/2020/11/abidec-syr.jpg"
				alt="abidec syrup"
			/>
			<div className="flex flex-col gap-2">
				<Title size="text-sm md:text-base" title="Abidec Syrup" />
				<p className="uppercase text-gray opacity-50 text-xs font-extralight cursor-pointer">
					healthker
				</p>
			</div>
		</div>
	);
};

export default Advert;
