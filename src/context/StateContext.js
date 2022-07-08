//import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import useGeoLocation from '../hooks/useGeoLocation';
import { drugs } from '../pages/data';
import { supabase } from '../supabaseClient';

const Context = createContext();

export const StateContext = ({ children }) => {
	const userLocation = useGeoLocation();
	const [isLoaded, setIsLoaded] = useState(false);

	const [showCart, setShowCart] = useState(false);

	// User information Hooks
	const [showProfile, setShowProfile] = useState(false);
	const [user, setUser] = useState(null);
	const [address, setAddress] = useState({
		line1: 'Not Set',
		line2: 'Not Set',
		line3: 'Not Set',
	});

	// Order Placement hooks
	const [qty, setQty] = useState(1);
	const [selectedDrugs, setSelectedDrugs] = useState([]);
	const [value, setValue] = useState(null);
	const [selectedPharmacy, setSelectedPharmacy] = useState('None');
	const [deliveryOption, setDeliveryOption] = useState('');
	const [totalQuantity, setTotalQuantity] = useState(0);
	const [orderSummary, setOrderSummary] = useState(null);
	const [order, setOrder] = useState({});
	const [orders, setOrders] = useState([]);
	const [updateOrder, setUpdateOrder] = useState(false);
	const [totalPrice, setTotalPrice] = useState(0);

	// Order details hook
	const [showPlacedOrder, setShowPlacedOrder] = useState(false);
	const [placedOrder, setPlacedOrder] = useState({});

	/*async function fetchUser() {
		const response = await axios.post(
			'mobile-api/',
			JSON.stringify({
				method: 'REQUEST_SIGNUP',
				api_key: '42353d5c33b45b0a8246b9bf0cd46820e516e3e4',
				user: 'web',
				email: 'ekdedume@gmail.com',
				surname: 'Emmanuel',
				othernames: 'Jimmy',
				mobile_number: '0247159599',
				password: '12345',
				device_id: '01010101',
			}),
			{
				headers: {
					'Access-Control-Allow-Origin': '*',
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
			}
		);

		setUser(response.data.data);

		//console.log();
		setIsLoaded(true);
		//toast.success(`Welcome to your NEPP dashboard ${data[0].first_name}`);
	}*/

	//console.log('the user info is: ', user);

	async function fetchOrders() {
		const { data } = await supabase.from('test_orders').select();
		setOrders(data);

		//console.log('Supabase Orders Data: ', data);

		setUpdateOrder(false);
	}

	console.log('User Orders: ', orders);

	async function fetchUser() {
		const { data } = await supabase.from('test_user').select();
		setUser(data);

		console.log('Supabase User Data: ', data);
		setIsLoaded(true);
		toast.success(`Welcome to your NEPP dashboard ${data[0].first_name}`);
	}

	async function pushOrderData() {
		const { data, error } = await supabase.from('test_orders').insert([order]);

		//console.log(order);
		console.log(data, error);

		toast.success(
			`Order placed successfully, your order number is #${order.order_number} added to list.`
		);

		setOrderSummary(null);
		setOrder({});
		setSelectedDrugs([]);
		setTotalQuantity(0);
		setDeliveryOption('');
		setSelectedPharmacy('None');

		setUpdateOrder(true);
	}

	const manipulateTable = (searchTerm) => {
		let updateTable;

		if (selectedDrugs.length > 0) {
			updateTable = selectedDrugs.find((item) => {
				if (searchTerm === item.title) {
					return true;
				} else {
					return false;
				}
			});
		} else {
			updateTable = false;
		}

		if (!updateTable) {
			let drugFound;

			let foundDrug = drugs.find((item) => {
				if (searchTerm === item.title) {
					drugFound = true;
					return item;
				} else {
					drugFound = false;
					return null;
				}
			});

			let updatedArray;

			if (drugFound) {
				updatedArray = [...selectedDrugs, foundDrug];
			} else if (!drugFound) {
				updatedArray = [...selectedDrugs];
			}

			setTotalQuantity(totalQuantity + 1);
			setTotalPrice(totalPrice + foundDrug.price);
			setSelectedDrugs(updatedArray);

			toast.success(
				`${
					foundDrug.quantity
				} ${foundDrug.title.toLocaleUpperCase()} added to list.`
			);
		} else {
			const updatedDrugs = selectedDrugs.findIndex((selectedDrug) => {
				if (selectedDrug.title === searchTerm) {
					return selectedDrug.id;
				} else {
					return null;
				}
			});

			let newArray = [...selectedDrugs];

			newArray[updatedDrugs].quantity = newArray[updatedDrugs].quantity + 1;

			setTotalQuantity(totalQuantity + 1);
			setTotalPrice(totalPrice + newArray[updatedDrugs].price);
			//setTotalQuantity((prevTotalQuantity) => prevTotalQuantity + 1);

			//console.log('Index of updated Drug is', updatedDrugs);

			setSelectedDrugs(newArray);

			toast.success(
				`${newArray[updatedDrugs].quantity} ${newArray[
					updatedDrugs
				].title.toLocaleUpperCase()} added to list.`
			);
		}

		// our api to fetch the search result
		setValue(null);
	};

	const onSearch = (searchTerm) => {
		if (searchTerm !== null) {
			setValue(searchTerm);
			manipulateTable(searchTerm);
		} else {
			setValue(null);
		}
	};

	const onRemoveFromTable = (drug) => {
		const updatedDrugs = selectedDrugs.findIndex((selectedDrug) => {
			if (selectedDrug.id === drug.id) {
				return selectedDrug.id;
			} else {
				return null;
			}
		});

		let newArray = [...selectedDrugs];

		const updatedDrugsSelected = selectedDrugs.filter(
			(item) => item.id !== drug.id
		);

		setTotalQuantity(totalQuantity - newArray[updatedDrugs].quantity);
		setTotalPrice(totalPrice - newArray[updatedDrugs].price);

		newArray[updatedDrugs].quantity = 1;

		newArray = updatedDrugsSelected;

		//console.log('Index of updated Drug is', updatedDrugs);

		setSelectedDrugs(newArray);

		toast.error(`${drug.title.toLocaleUpperCase()} removed from list.`);
	};

	const inc = (drug) => {
		const updatedDrugs = selectedDrugs.findIndex((selectedDrug) => {
			if (selectedDrug.id === drug.id) {
				return selectedDrug.id;
			} else {
				return null;
			}
		});

		let newArray = [...selectedDrugs];

		newArray[updatedDrugs].quantity = newArray[updatedDrugs].quantity + 1;
		setTotalQuantity(totalQuantity + 1);
		setTotalPrice(totalPrice + selectedDrugs[updatedDrugs].price);

		//console.log('Index of updated Drug is', updatedDrugs);

		setSelectedDrugs(newArray);
		console.log(newArray);

		toast.success(`1 ${drug.title.toLocaleUpperCase()} added.`);
	};

	const dec = (drug) => {
		const updatedDrugs = selectedDrugs.findIndex((selectedDrug) => {
			if (selectedDrug.id === drug.id) {
				return selectedDrug.id;
			} else {
				return null;
			}
		});

		let newArray = [...selectedDrugs];

		if (newArray[updatedDrugs].quantity <= 1) {
			const updatedDrugsSelected = selectedDrugs.filter(
				(item) => item.id !== drug.id
			);

			setTotalQuantity(totalQuantity - 1);
			setTotalPrice(totalPrice - selectedDrugs[updatedDrugs].price);

			newArray = updatedDrugsSelected;
		} else {
			newArray[updatedDrugs].quantity = newArray[updatedDrugs].quantity - 1;
			setTotalQuantity(totalQuantity - 1);
			setTotalPrice(totalPrice - selectedDrugs[updatedDrugs].price);
		}

		//console.log('Index of updated Drug is', updatedDrugs);

		setSelectedDrugs(newArray);

		toast.error(`1 ${drug.title.toLocaleUpperCase()} removed.`);
	};

	const choosePharmacy = (selection) => {
		if (selection.status === 'available') {
			setSelectedPharmacy(selection.title);
		} else if (selection.status === 'unavailable') {
			setSelectedPharmacy('None');
			toast.error(
				`${selection.title} is unavailable at the moment. Choose another!`
			);
		}
	};

	const createSummary = () => {
		setOrderSummary({
			...orderSummary,
			orders: selectedDrugs,
			pharmacy: selectedPharmacy,
			deliveryOption: deliveryOption,
			totalItems: totalQuantity,
			totalPrice: totalPrice,
		});

		setOrder({
			created_at: new Date(),
			delivery_mode: deliveryOption,
			order_placed: selectedDrugs,
			order_number: Math.floor(Math.random() * 900000000) + 100000000,
			order_status: 'pending',
			pharmacy: selectedPharmacy,
			total_items: totalQuantity,
		});
	};

	const viewOrder = (currentOrder) => {
		setPlacedOrder({
			...placedOrder,
			orderNumber: currentOrder.order_number,
			status: currentOrder.order_status,
			orders: currentOrder.order_placed,
			date: currentOrder.created_at,
			pharmacy: currentOrder.pharmacy,
			deliveryOption: currentOrder.delivery_mode,
			totalItems: currentOrder.total_items,
			totalPrice: 'unknown',
		});

		setShowPlacedOrder(true);
	};

	useEffect(() => {
		fetchOrders();
	}, [updateOrder]);

	useEffect(() => {
		fetchUser();
		//fetchApiData();
	}, []);

	// Save selected pharmacy to local storage
	useEffect(() => {
		const data = window.localStorage.getItem('selectedPharmacy');
		if (data !== null) setSelectedPharmacy(JSON.parse(data));
	}, []);

	useEffect(() => {
		window.localStorage.setItem(
			'selectedPharmacy',
			JSON.stringify(selectedPharmacy)
		);
	}, [selectedPharmacy]);

	// Save deliver option to local storage
	useEffect(() => {
		const data = window.localStorage.getItem('deliveryOption');
		if (data !== null) setDeliveryOption(JSON.parse(data));
	}, []);

	useEffect(() => {
		window.localStorage.setItem(
			'deliveryOption',
			JSON.stringify(deliveryOption)
		);
	}, [deliveryOption]);

	// Save total order quantity to local storage
	useEffect(() => {
		const data = window.localStorage.getItem('totalQuantity');
		if (data !== null) setTotalQuantity(JSON.parse(data));
	}, []);

	useEffect(() => {
		window.localStorage.setItem('totalQuantity', JSON.stringify(totalQuantity));
	}, [totalQuantity]);

	// Save selected drugs order to local storage
	useEffect(() => {
		const data = window.localStorage.getItem('selectedDrugs');
		if (data !== null) setSelectedDrugs(JSON.parse(data));
	}, []);

	useEffect(() => {
		window.localStorage.setItem('selectedDrugs', JSON.stringify(selectedDrugs));
	}, [selectedDrugs]);

	// Save order to local storage
	useEffect(() => {
		const data = window.localStorage.getItem('order');
		if (data !== null) setOrder(JSON.parse(data));
	}, []);

	useEffect(() => {
		window.localStorage.setItem('order', JSON.stringify(order));
	}, [order]);

	// Save summary of order to local storage
	useEffect(() => {
		const data = window.localStorage.getItem('orderSummary');
		if (data !== null) setOrderSummary(JSON.parse(data));
	}, []);

	useEffect(() => {
		window.localStorage.setItem('orderSummary', JSON.stringify(orderSummary));
	}, [orderSummary]);

	//console.log('order summary: ', orderSummary);
	//console.log('Placed order: ', placedOrder);

	return (
		<Context.Provider
			value={{
				userLocation,
				user,
				isLoaded,
				onSearch,
				value,
				setValue,
				selectedPharmacy,
				address,
				setAddress,
				choosePharmacy,
				deliveryOption,
				setDeliveryOption,
				selectedDrugs,
				showCart,
				setShowCart,
				showPlacedOrder,
				setShowPlacedOrder,
				showProfile,
				setShowProfile,
				orders,
				setOrders,
				totalPrice,
				totalQuantity,
				qty,
				onRemoveFromTable,
				inc,
				dec,
				createSummary,
				pushOrderData,
				viewOrder,
				orderSummary,
				placedOrder,
			}}>
			{children}
		</Context.Provider>
	);
};

export const useStateContext = () => useContext(Context);
