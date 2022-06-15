import React from 'react';
import { BiAddToQueue, BiCartAlt } from 'react-icons/bi';
import { IoPricetagsOutline } from 'react-icons/io5';

import { Advert, Title, Widget } from '../../components';
import { Widgets } from '../data';

const Home = () => {
	return (
		<div className="py-14 flex flex-col gap-20 justify-start items-start mt-4 mb-14 sm:mb-20 lg:pl-44 lg:my-0 p-4 sm:p-8 lg:pr-16 ">
			<div className="flex flex-col gap-3 justify-start items-start">
				<p className="text-base sm:text-xl md:text-2xl lg:text-3xl font-extralight">
					Welcome,
				</p>
				<Title size="text-4xl md:text-6xl lg:text-9xl" title="Jimmy" />
			</div>

			<div className="flex flex-wrap gap-10 lg:gap-20">
				{Widgets.map((widget) => (
					<Widget
						key={widget.id}
						title={widget.title}
						link={widget.link}
						tag={
							widget.id === 1
								? BiAddToQueue
								: widget.id === 2
								? IoPricetagsOutline
								: BiCartAlt
						}
					/>
				))}
			</div>

			<div className="flex flex-col justify-start items-start gap-8">
				<Title size="text-lg sm:text-xl md:text-3xl" title="advertisement" />
				<div className="flex gap-14">
					<Advert />
				</div>
			</div>
		</div>
	);
};

export default Home;
