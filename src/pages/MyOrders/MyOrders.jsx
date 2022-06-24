import React, { useState } from 'react';
import { Table, Title } from '../../components';
import { orderFilter, tableData } from '../data';

export default function MyOrders() {
	const [choice, setChoice] = useState('');

	const columnsDesktop = [
		{ field: 'order', header: 'Order #' },
		{ field: 'status', header: 'Status' },
		{ field: 'date', header: 'Date' },
	];
	const columnsMobile = [
		{ field: 'exert', header: 'Order' },
		{ field: 'status', header: 'Status' },
		{ field: 'date', header: 'Date' },
	];

	return (
		<div className="py-14 flex flex-col gap-10 justify-start items-start mt-4 mb-14 sm:mb-20 sm:mt-16 lg:pl-44 lg:my-0 p-4 sm:p-8 lg:pr-16 lg:pt-28">
			<div className="w-full flex gap-4 items-center justify-center ">
				<Title size="text-xl" title="Filter By:" />

				<select
					onChange={(e) => {
						const selection = e.target.value;
						setChoice(selection);
					}}
					className="transition-all duration-300 w-2/3 lg:w-2/5 p-1 lg:p-2 text-md lg:text-xl bg-primary rounded-sm border-b-2 border-action hover:border-accent focus:border-accent hover:shadow-lg">
					{orderFilter.map(({ status, value }, index) => (
						<option key={index} value={status}>
							{value}
						</option>
					))}
				</select>
			</div>
			<div className="w-full block lg:hidden">
				<Table data={tableData} columns={columnsMobile} filter={choice} />
			</div>
			<div className="w-full hidden lg:block">
				<Table data={tableData} columns={columnsDesktop} filter={choice} />
			</div>
		</div>
	);
}
