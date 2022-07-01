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
	const [showOrder, setShowOrder] = useState(false);
	const [showProfile, setShowProfile] = useState(false);
	const [totalPrice, setTotalPrice] = useState(0);
	const [totalQuantity, setTotalQuantity] = useState(0);
	const [qty, setQty] = useState(1);
	const [value, setValue] = useState(null);
	const [selectedPharmacy, setSelectedPharmacy] = useState('None');
	const [selectedDrugs, setSelectedDrugs] = useState([]);
	const [updateOrder, setUpdateOrder] = useState(false);
	const [order, setOrder] = useState({});
	const [orders, setOrders] = useState([]);
	const [user, setUser] = useState([]);
	const [deliveryOption, setDeliveryOption] = useState('');

	const [orderSummary, setOrderSummary] = useState({
		order: [],
		pharmacy: '',
		deliveryOption: '',
		totalItems: '',
		totalPrice: '',
	});

	async function fetchOrders() {
		const { data } = await supabase.from('test_orders').select();
		setOrders(data);

		console.log('SupabaseData: ', data);
		setUpdateOrder(false);
	}

	async function fetchUser() {
		const { data } = await supabase.from('test_user').select();
		setUser(data);

		console.log('SupabaseUserData: ', data);
		setIsLoaded(true);
		toast.success(`Welcome to your NEPP dashboard ${data[0].first_name}`);
	}

	async function pushOrderData() {
		const { data, error } = await supabase.from('test_orders').insert([order]);

		console.log(order);
		console.log(data, error);

		toast.success(
			`Order placed successfully, your order number is #${order.order_number} added to list.`
		);

		setUpdateOrder(true);
	}

	useEffect(() => {
		fetchOrders();
	}, [updateOrder]);

	useEffect(() => {
		fetchUser();
	}, []);

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

		toast.error(`1 ${drug.title.toLocaleUpperCase()} removed from list.`);
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
		setOrderSummary({
			...orderSummary,
			orderNumber: currentOrder.order_number,
			status: currentOrder.order_status,
			orders: currentOrder.order_placed,
			date: currentOrder.created_at,
			pharmacy: currentOrder.pharmacy,
			deliveryOption: currentOrder.delivery_mode,
			totalItems: currentOrder.total_items,
			totalPrice: 'unknown',
		});

		setShowOrder(true);
	};

	//console.log(orderSummary);

	const incQty = () => {
		setQty((prevQty) => prevQty + 1);
	};

	const decQty = () => {
		setQty((prevQty) => {
			if (prevQty - 1 < 1) return 1;

			return prevQty - 1;
		});
	};

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
				choosePharmacy,
				deliveryOption,
				setDeliveryOption,
				selectedDrugs,
				showCart,
				setShowCart,
				showOrder,
				setShowOrder,
				showProfile,
				setShowProfile,
				orders,
				setOrders,
				totalPrice,
				totalQuantity,
				qty,
				incQty,
				decQty,
				onRemoveFromTable,
				createSummary,
				pushOrderData,
				viewOrder,
				orderSummary,
			}}>
			{children}
		</Context.Provider>
	);
};

export const useStateContext = () => useContext(Context);
