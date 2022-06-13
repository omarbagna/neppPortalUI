import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {
	AddPrescription,
	Error,
	Home,
	Layout,
	MoreInfo,
	MyOrders,
	Profile,
} from './pages';

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Home />} />
				<Route path="add-new" element={<AddPrescription />} />
				<Route path="my-orders" element={<MyOrders />} />
				<Route path="profile" element={<Profile />} />
				<Route path="more-info" element={<MoreInfo />} />
			</Route>
			<Route path="*" element={<Error />} />
		</Routes>
	);
};

export default App;
