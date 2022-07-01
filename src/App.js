import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { FullPageLoader } from './components';
import { useStateContext } from './context/StateContext';
import {
	AddPrescription,
	Delivery,
	Drug,
	Error,
	Hello,
	Home,
	Layout,
	MoreInfo,
	MyOrders,
	OrderSummary,
	Pharmacy,
	Prescription,
	Profile,
} from './pages';

const App = () => {
	const { isLoaded } = useStateContext();
	return (
		<>
			{isLoaded ? (
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Home />} />
						<Route path="add-new" element={<AddPrescription />}>
							<Route index element={<Hello />} />
							<Route path="order-type" element={<Hello />} />
							<Route path="drug" element={<Drug />} />
							<Route path="prescription" element={<Prescription />} />
							<Route path="pharmacy" element={<Pharmacy />} />
							<Route path="delivery-option" element={<Delivery />} />
							<Route path="order-summary" element={<OrderSummary />} />
						</Route>
						<Route path="my-orders" element={<MyOrders />} />
						<Route path="profile" element={<Profile />} />
						<Route path="more-info" element={<MoreInfo />} />
					</Route>
					<Route path="*" element={<Error />} />
				</Routes>
			) : (
				<FullPageLoader />
			)}
		</>
	);
};

export default App;
