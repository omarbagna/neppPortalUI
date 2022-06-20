import React from 'react';

const ProfileBtn = ({ tag: Icon, title, subtext }) => {
	return (
		<div
			className={
				'group transition-all duration-200 ease-in cursor-pointer flex justify-start items-center gap-4 w-54 lg:w-60 py-2 px-4 rounded-md hover:shadow-md hover:bg-white'
			}>
			<Icon className="text-5xl opacity-80 text-accent hidden sm:block" />
			<div className="flex flex-col gap-1">
				<h3
					className={'text-sm lg:text-base capitalize group-hover:text-accent'}>
					{title}
				</h3>
				<p className="capitalize text-[10px] lg:text-xs w-28 lg:w-32 text-gray opacity-50">
					{subtext}
				</p>
			</div>
		</div>
	);
};

export default ProfileBtn;
