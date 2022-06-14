import React from 'react';
import { StageBtn } from '../../../components';
import { BiAddToQueue } from 'react-icons/bi';
import { MdOutlineLocalPharmacy, MdDeliveryDining } from 'react-icons/md';
import { TbListDetails } from 'react-icons/tb';
import { Stages } from '../../data';

const Process = () => {
	return (
		<div className="flex flex-wrap gap-4 lg:mr-10 justify-center items-center w-full lg:w-1/4 lg:h-full lg:flex-col">
			{Stages.map((stage) => (
				<StageBtn
					key={stage.id}
					link={stage.link}
					title={stage.title}
					subtext={stage.subtext}
					tag={
						stage.id === 1
							? BiAddToQueue
							: stage.id === 2
							? MdOutlineLocalPharmacy
							: stage.id === 3
							? MdDeliveryDining
							: TbListDetails
					}
				/>
			))}
		</div>
	);
};

export default Process;
