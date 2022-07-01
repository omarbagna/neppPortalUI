import React from 'react';
import Spinner from '../../resources/images/spinner.gif';

const FullPageLoader = () => {
	return (
		<div className="flex w-screen h-screen justify-center items-center bg-accent/60">
			<img src={Spinner} alt="loading" />
		</div>
	);
};

export default FullPageLoader;
