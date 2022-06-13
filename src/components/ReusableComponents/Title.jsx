import React from 'react';

const Title = ({ size, title }) => {
	return (
		<div className="w-fit flex flex-col justify-start items-start gap-1">
			<h3 className={`${size} font-light capitalize cursor-default`}>
				{title}
			</h3>
			<div className="w-1/2 h-[2px] bg-bgOne" />
		</div>
	);
};

export default Title;
