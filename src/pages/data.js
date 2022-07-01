export const Widgets = [
	{
		id: 1,
		link: 'add-new',
		title: 'add prescription',
	},
	{
		id: 2,
		link: 'add-new/drug',
		title: 'check prices',
	},
	{
		id: 3,
		link: 'my-orders',
		title: 'my orders',
	},
];

export const Stages = [
	{
		id: 1,
		link: 'order-type',
		title: 'Add Drugs',
		subtext: 'Attach Prescription or Add Drug from list',
	},
	{
		id: 2,
		link: 'pharmacy',
		title: 'Choose Pharmacy',
		subtext: 'Select a Pharmacy to process your order',
	},
	{
		id: 3,
		link: 'delivery-option',
		title: 'Delivery Options',
		subtext: 'Store Pickup or Delivery Services',
	},
	{
		id: 4,
		link: 'order-summary',
		title: 'Order Summary',
		subtext: 'Preview Order',
	},
];
export const ProfileContact = [
	{
		id: 1,
		title: 'Email:',
		subtext: 'jimmy@email.com',
	},
	{
		id: 2,
		title: 'Phone:',
		subtext: '0245123123',
	},
	{
		id: 3,
		title: 'Ghana Card No:',
		subtext: 'GHA-002323450984-9',
	},
	{
		id: 4,
		title: 'Address Line 1:',
		subtext: 'No Data Found',
	},
	{
		id: 5,
		title: 'Address Line 2:',
		subtext: 'No Data Found',
	},
	{
		id: 6,
		title: 'Address Line 3:',
		subtext: 'No Data Found',
	},
];
export const ProfileInsurance = [
	{
		id: 7,
		title: 'NHIS No:',
		subtext: 'Not Available',
	},
	{
		id: 8,
		title: 'Insurance Company:',
		subtext: 'GAB HEALTH INSURANCE LIMITED',
	},
	{
		id: 9,
		title: 'Member No:',
		subtext: 'GGAB000005-0',
	},
];

export const bgImage = [
	{
		link: 'https://images.unsplash.com/photo-1620753018522-148bee0b3217?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
	},
];

export const pharmacies = [
	{
		id: 1,
		title: 'The Trust Pharmacy',
		status: 'available',
		region: 'accra',
	},
	{
		id: 2,
		title: 'Top Herbal Pharmacy',
		status: 'available',
		region: 'central',
	},
	{
		id: 3,
		title: 'We The People Pharmacy',
		status: 'unavailable',
		region: 'ashanti',
	},
];

export const drugs = [
	{
		id: 1,
		sn: '#',
		title: 'paracetamol',
		price: 20,
		quantity: 1,
	},
	{
		id: 2,
		sn: '#',
		title: 'amozaslim',
		price: 50,
		quantity: 1,
	},
	{
		id: 3,
		sn: '#',
		title: 'diabetes medicine',
		price: 120,
		quantity: 1,
	},
];

export const tableData = [
	{
		id: 1,
		status: 'delivered',
		exert: 'Paracetamol, Malaria Drugs ...',
		date: '07/11/2020',
		order: '87349585892118',
	},
	{
		id: 2,
		status: 'pending',
		exert: 'Paracetamol, Malaria Drugs ...',
		date: '07/11/2020',
		order: '58418278790810',
	},
	{
		id: 3,
		status: 'processing',
		exert: 'Paracetamol, Malaria Drugs ...',
		date: '07/10/2020',
		order: '81534454080477',
	},
	{
		id: 4,
		status: 'delivered',
		exert: 'Paracetamol, Malaria Drugs ...',
		date: '07/09/2020',
		order: '20452221703743',
	},
	{
		id: 5,
		status: 'declined',
		exert: 'Paracetamol, Malaria Drugs ...',
		date: '07/07/2020',
		order: '22906126785176',
	},
	{
		id: 6,
		status: 'processing',
		exert: 'Paracetamol, Malaria Drugs ...',
		date: '07/07/2020',
		order: '87574505851064',
	},
];

export const orderFilter = [
	{
		id: 1,
		value: '',
		title: 'ALL ORDERS',
	},
	{
		id: 2,
		value: 'delivered',
		title: 'DELIVERED',
	},
	{
		id: 3,
		value: 'pending',
		title: 'PENDING',
	},
	{
		id: 4,
		value: 'processing',
		title: 'PROCESSING',
	},
	{
		id: 5,
		value: 'declined',
		title: 'DECLINED',
	},
];

export const regionFilter = [
	{
		id: 1,
		value: '',
		title: 'None',
	},
	{
		id: 2,
		value: 'accra',
		title: 'Greater Accra',
	},
	{
		id: 3,
		value: 'ashanti',
		title: 'Ashanti',
	},
	{
		id: 4,
		value: 'central',
		title: 'Central',
	},
];

export const deliveryOptions = [
	{
		id: 1,
		value: 'pick-up',
		title: 'Pick-up',
	},
	{
		id: 2,
		value: 'delivery',
		title: 'Home Delivery',
	},
];
