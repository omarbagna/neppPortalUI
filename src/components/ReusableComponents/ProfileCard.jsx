import React from 'react';
import { FiEdit } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';
import { BsPhone } from 'react-icons/bs';
import { BiHomeSmile, BiCurrentLocation } from 'react-icons/bi';
import { IoBusiness } from 'react-icons/io5';
import { MdOutlineRememberMe } from 'react-icons/md';

import StageBtn from './StageBtn';
import SubmitBtn from './SubmitBtn';
import Title from './Title';

const ProfileCard = ({ title, data }) => {
	return (
		<div className="bg-white shadow-lg rounded-md p-4 flex flex-col gap-5 justify-start w-full h-fit md:h-2/3">
			<div className="w-full flex justify-between items-center">
				<Title size="text-lg lg:text-2xl" title={title} />
				<SubmitBtn name={<FiEdit />} />
			</div>
			<div className="w-full h-full flex justify-center items-center">
				<div className="w-full flex gap-10 flex-wrap justify-start md:justify-center items-center">
					{data.map((item) => (
						<StageBtn
							key={item.id}
							tag={
								item.id === 1
									? HiOutlineMail
									: item.id === 2
									? BsPhone
									: item.id === 3
									? BiCurrentLocation
									: item.id === 4
									? BiHomeSmile
									: item.id === 5
									? IoBusiness
									: item.id === 6 && MdOutlineRememberMe
							}
							link="#"
							title={item.title}
							subtext={item.subtext}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default ProfileCard;
