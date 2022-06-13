import React from 'react';
import { MainContent, Sidebar } from '../../components';

const Layout = () => {
	return (
		<div className="flex">
			<Sidebar />
			<MainContent />
		</div>
	);
};

export default Layout;
