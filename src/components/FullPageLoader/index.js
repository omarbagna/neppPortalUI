import React from 'react';
import Logo from '../../assets/mainLogo.png';

const FullPageLoader = () => {
	return (
		<div className="flex w-screen h-screen justify-center items-center bg-white/60">
			<img
				src={Logo}
				alt="loading"
				className="object-contain h-32 md:h-40 animate-move"
			/>
		</div>
	);
};

export default FullPageLoader;
