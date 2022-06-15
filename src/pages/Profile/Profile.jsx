import React from 'react';
import Avatar from '@mui/material/Avatar';

import { bgImage, ProfileContact, ProfileInsurance } from '../data';
import { ProfileCard, Title } from '../../components';

const Profile = () => {
	return (
		<>
			<div className="relative w-full h-44 lg:h-72 lg:pl-36 bg-gray flex flex-col justify-end gap-3 lg:flex-row lg:justify-around items-end overflow-hidden">
				<img
					className="absolute z-0 w-full h-full object-cover bg-center"
					src={bgImage[0].link}
					alt="cover"
				/>
				<div className="w-full h-full md:h-2/3 bg-gradient-to-l from-black z-10 md:bg-gradient-to-t flex flex-col justify-end gap-3 p-4 lg:pb-6 md:px-8 lg:px-10 md:flex-row md:justify-between lg:justify-around items-end">
					<p className="text-white text-xs md:text-sm lg:text-base font-extralight">
						No data found
					</p>
					<p className="text-white text-sm md:text-base font-light">
						Wallet ID: GPW1593439026532
					</p>
				</div>
			</div>
			<div className="relative h-full lg:h-screen w-screen z-20 py-14 flex flex-col gap-10 lg:gap-20 justify-start items-start mt-4 mb-8 sm:mb-20 lg:pl-44 lg:my-0 p-4 sm:p-8 lg:pr-16 ">
				<div className="absolute left-8 -top-12 md:-top-20 lg:-top-16 md:left-1/2 md:-translate-x-1/2 lg:-translate-x-0">
					<div className="flex md:hidden">
						<Avatar
							sx={{ width: 60, height: 60, bgcolor: '#F67160' }}
							alt="Remy Sharp"
							src="https://media-exp2.licdn.com/dms/image/C4D03AQEq-1zU0TvR4A/profile-displayphoto-shrink_100_100/0/1654120070929?e=1660780800&v=beta&t=XN7OgtS1p7zzfvkNXkH3Ew1rdngfcfCy9ChapCUGjGk">
							J
						</Avatar>
					</div>
					<div className="hidden md:flex">
						<Avatar
							sx={{ width: 120, height: 120, bgcolor: '#F67160', fontSize: 45 }}
							alt="Remy Sharp"
							src="https://media-exp2.licdn.com/dms/image/C4D03AQEq-1zU0TvR4A/profile-displayphoto-shrink_100_100/0/1654120070929?e=1660780800&v=beta&t=XN7OgtS1p7zzfvkNXkH3Ew1rdngfcfCy9ChapCUGjGk">
							J
						</Avatar>
					</div>
				</div>
				<div className="w-full flex justify-start -mt-6 md:mt-12 lg:mt-20 md:justify-center items-center">
					<Title size="text-2xl md:text-3xl lg:text-5xl" title="Jimmy Kwame" />
				</div>

				<div className="w-full h-full flex flex-col gap-6 lg:flex-row lg:gap-10 justify-start items-start lg:justify-center">
					<ProfileCard title="Contact & Personal Info" data={ProfileContact} />
					<ProfileCard title="Insurance Info" data={ProfileInsurance} />
				</div>
			</div>
		</>
	);
};

export default Profile;
