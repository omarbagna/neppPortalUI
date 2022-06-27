import React, { createContext, useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { drugs } from '../pages/data';

const Context = createContext();

export const StateContext = ({ children }) => {
	const [showCart, setShowCart] = useState(false);
	const [cartItems, setCartItems] = useState([]);
	const [totalPrice, setTotalPrice] = useState(0);
	const [totalQuantity, setTotalQuantity] = useState(0);
	const [qty, setQty] = useState(1);
	const [value, setValue] = useState(null);
	const [selectedPharmacy, setSelectedPharmacy] = useState('None');
	const [selectedDrugs, setSelectedDrugs] = useState([]);
	const [deliveryOption, setDeliveryOption] = useState('');

	const [orderSummary, setOrderSummary] = useState({
		orders: [],
		pharmacy: '',
		deliveryOption: '',
		totalItems: '',
		totalPrice: '',
	});

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
	};

	let foundProduct;
	let index;

	const onAdd = (product, quantity) => {
		const checkProductInCart = cartItems.find((item) => item.id === product.id);

		setTotalPrice(
			(prevTotalPrice) => prevTotalPrice + product.price * quantity
		);
		setTotalQuantity((prevTotalQuantity) => prevTotalQuantity + quantity);

		if (checkProductInCart) {
			const updatedCartItems = cartItems.map((cartProduct) => {
				if (cartProduct._id === product._id)
					return {
						...cartProduct,
						quantity: cartProduct.quantity + quantity,
					};
				return null;
			});

			setCartItems(updatedCartItems);
		} else {
			product.quantity = quantity;

			setCartItems([...cartItems, { ...product }]);
		}

		toast.success(`${qty} ${product.name} added to cart.`);
	};

	const onRemove = (product) => {
		foundProduct = cartItems.find((item) => item._id === product._id);
		const updatedCartItems = cartItems.filter(
			(item) => item._id !== product._id
		);

		setTotalPrice(
			(prevTotalPrice) =>
				prevTotalPrice - foundProduct.price * foundProduct.quantity
		);
		setTotalQuantity(
			(prevTotalQuantity) => prevTotalQuantity - foundProduct.quantity
		);
		setCartItems(updatedCartItems);

		toast.error(`${qty} ${product.name} removed from cart.`);
	};

	const toggleCartItemQuantity = (id, value) => {
		foundProduct = cartItems.find((item) => item._id === id);
		index = cartItems.findIndex((product) => product._id === id);

		console.log(index);

		const updatedCartItems = cartItems.filter((item) => item._id !== id);

		if (value === 'inc') {
			let newCartItems = [
				...updatedCartItems,
				{ ...foundProduct, quantity: foundProduct.quantity + 1 },
			];
			setCartItems(newCartItems);
			setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price);
			setTotalQuantity((prevTotalQuantity) => prevTotalQuantity + 1);
		} else if (value === 'dec') {
			if (foundProduct.quantity > 1) {
				let newCartItems = [
					...updatedCartItems,
					{ ...foundProduct, quantity: foundProduct.quantity - 1 },
				];
				setCartItems(newCartItems);
				setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price);
				setTotalQuantity((prevTotalQuantity) => prevTotalQuantity - 1);
			}
		}
	};

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
				cartItems,
				totalPrice,
				totalQuantity,
				qty,
				incQty,
				decQty,
				onAdd,
				toggleCartItemQuantity,
				onRemove,
				onRemoveFromTable,
				createSummary,
				orderSummary,
			}}>
			{children}
		</Context.Provider>
	);
};

export const useStateContext = () => useContext(Context);
