import React, { useState } from 'react';
import { SelectOptions, Table, Title } from '../../components';
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
			<div className="w-full flex flex-col gap-4 items-center justify-center ">
				<Title size="text-xl" title="Filter Orders" />
				<div className="w-full sm:w-1/2">
					<SelectOptions
						label="Filter By"
						labelId="order-filter"
						onChange={(e) => {
							const selection = e.target.value;
							setChoice(selection);
						}}
						value={choice}
						required={false}
						name="order"
						options={orderFilter}
					/>
				</div>
			</div>
			<div className="w-full block lg:hidden">
				<Table
					data={tableData}
					columns={columnsMobile}
					orderFilter={choice}
					orders="yes"
				/>
			</div>
			<div className="w-full hidden lg:block">
				<Table
					data={tableData}
					columns={columnsDesktop}
					filter={choice}
					orders="yes"
				/>
			</div>
		</div>
	);
}
