import React from 'react';
import { FiEdit } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';
import { BsPhone } from 'react-icons/bs';
import { BiHomeSmile, BiIdCard } from 'react-icons/bi';
import { IoBusiness } from 'react-icons/io5';
import { MdOutlineRememberMe, MdOutlineHealthAndSafety } from 'react-icons/md';

import ProfileBtn from './ProfileBtn';
import SubmitBtn from './SubmitBtn';
import Title from './Title';
import { useStateContext } from '../../context/StateContext';

const ProfileCard = ({ title, data, editable = false }) => {
	const { setShowProfile, user, address } = useStateContext();

	console.log(user);

	return (
		<div className="bg-white shadow-lg rounded-md p-4 flex flex-col gap-5 justify-start w-full h-fit md:h-2/3 lg:h-full">
			<div className="w-full flex justify-between items-center">
				<Title size="text-lg lg:text-2xl" title={title} />
				{editable && (
					<SubmitBtn name={<FiEdit />} onClick={() => setShowProfile(true)} />
				)}
			</div>
			<div className="w-full h-full flex justify-center items-center">
				<div className="w-full flex gap-10 flex-wrap justify-start md:justify-start items-center">
					{data.map((item) => (
						<ProfileBtn
							key={item.id}
							tag={
								item.id === 1
									? HiOutlineMail
									: item.id === 2
									? BsPhone
									: item.id === 3
									? BiIdCard
									: item.id === 4
									? BiHomeSmile
									: item.id === 5
									? BiHomeSmile
									: item.id === 6
									? BiHomeSmile
									: item.id === 7
									? MdOutlineHealthAndSafety
									: item.id === 8
									? IoBusiness
									: item.id === 9 && MdOutlineRememberMe
							}
							title={item.title}
							subtext={
								item.id === 1
									? user[0]?.email
									: item.id === 2
									? user[0]?.phone_number
									: item.id === 3
									? user[0]?.ghana_card
									: item.id === 4
									? user[0].addresses[0].address_line1.name
									: item.id === 5
									? user[0].addresses[1].address_line2.name
									: item.id === 6
									? user[0].addresses[2].address_line3.name
									: item.subtext
							}
							email={item.id === 1 && true}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default ProfileCard;
