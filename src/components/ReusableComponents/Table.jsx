import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import { BiTrash } from 'react-icons/bi';
import { useStateContext } from '../../context/StateContext';
import { BsCheckCircleFill } from 'react-icons/bs';
import { CgUnavailable } from 'react-icons/cg';

const Table = ({
	data = null,
	columns,
	orderFilter = null,
	pharmacyFilter = null,
	orders = null,
}) => {
	const { onRemoveFromTable, choosePharmacy, viewOrder } = useStateContext();

	return (
		<div className="min-w-[500px] w-full rounded-t-lg overflow-hidden">
			<table className="w-full bg-white text-left border-collapse">
				<thead>
					<tr>
						{columns.map((head, index) => (
							<td
								key={index}
								className="px-3 py-5 bg-accent text-white text-sm md:text-base">
								{head.header.toUpperCase()}
							</td>
						))}
					</tr>
				</thead>
				<tbody>
					{orders && data && orderFilter === '' ? (
						data.map((row, index) => (
							<Tooltip
								key={index}
								title={`${row.order_placed[0]?.title}, ${row.order_placed[1]?.title}`}
								arrow>
								<tr
									onClick={() => {
										viewOrder(row);
									}}
									key={index}
									className="group transition-all duration-200 ease-in cursor-pointer border-b-2  bg-white text-black font-light hover:bg-gray/70 hover:text-white">
									{columns.map((col, index) => (
										<td
											key={index}
											className={
												col.field === 'status' ? 'text-xs uppercase p-3' : 'p-3'
											}>
											{col.field !== 'action' ? (
												<span
													className={
														row[col.field] === 'delivered'
															? 'bg-bgTwo/50 text-gray group-hover:bg-bgTwo group-hover:text-white rounded-full p-2 uppercase'
															: row[col.field] === 'pending'
															? 'bg-bgThree/50 text-gray group-hover:bg-bgThree group-hover:text-white rounded-full p-2 uppercase'
															: row[col.field] === 'declined'
															? 'bg-bgOne/50 text-gray group-hover:bg-bgOne group-hover:text-white rounded-full p-2 uppercase'
															: row[col.field] === 'processing'
															? 'bg-bgFour/50 text-gray group-hover:bg-bgFour group-hover:text-white rounded-full p-2 uppercase'
															: ''
													}>
													{row[col.field]}
												</span>
											) : (
												<span>{row[col.field]}</span>
											)}
										</td>
									))}
								</tr>
							</Tooltip>
						))
					) : orders && data && orderFilter !== '' ? (
						data
							.filter((data) => data.order_status === orderFilter)
							.map((row, index) => (
								<Tooltip
									key={index}
									title={`${row.order_placed[0]?.title}, ${row.order_placed[1]?.title}`}
									arrow>
									<tr
										onClick={() => {
											viewOrder(row);
										}}
										key={index}
										className="group transition-all duration-200 ease-in cursor-pointer border-b-2  bg-white text-black font-light hover:bg-gray/70 hover:text-white">
										{columns.map((col, index) => (
											<td
												key={index}
												className={
													col.field === 'status'
														? 'text-xs uppercase p-3'
														: 'p-3'
												}>
												<span
													className={
														row[col.field] === 'delivered'
															? 'bg-bgTwo/50 text-gray group-hover:bg-bgTwo group-hover:text-white rounded-full p-2 uppercase'
															: row[col.field] === 'pending'
															? 'bg-bgThree/50 text-gray group-hover:bg-bgThree group-hover:text-white rounded-full p-2 uppercase'
															: row[col.field] === 'declined'
															? 'bg-bgOne/50 text-gray group-hover:bg-bgOne group-hover:text-white rounded-full p-2 uppercase'
															: row[col.field] === 'processing'
															? 'bg-bgFour/50 text-gray group-hover:bg-bgFour group-hover:text-white rounded-full p-2 uppercase'
															: ''
													}>
													{row[col.field]}
												</span>
											</td>
										))}
									</tr>
								</Tooltip>
							))
					) : data && pharmacyFilter !== '' ? (
						data
							.filter(
								(data) =>
									data.region === pharmacyFilter?.choice ||
									data.title.toLowerCase().includes(pharmacyFilter?.query)
							)
							.map((row, index) => (
								<tr
									key={index}
									onClick={() => choosePharmacy(row)}
									className="group transition-all duration-200 ease-in cursor-default border-b-2  bg-white text-black font-light hover:bg-gray/70 hover:text-white">
									{columns.map((col, index) => (
										<td
											key={index}
											className={
												col.field === 'status' ? 'text-xs uppercase p-3' : 'p-3'
											}>
											{col.field === 'action' ? (
												<span
													onClick={() => {
														onRemoveFromTable(row);
													}}
													className="rounded-lg p-1 transition-all duration-150 ease-in text-accent hover:bg-bgOne group-hover:text-white flex justify-center items-center cursor-pointer gap-1">
													Remove <BiTrash className="text-lg" />
												</span>
											) : col.field === 'status' ? (
												<span
													className={
														row[col.field] === 'available'
															? 'text-bgTwo flex justify-start items-center cursor-pointer gap-3'
															: row[col.field] === 'unavailable'
															? 'text-accent flex justify-start items-center cursor-pointer gap-3'
															: ''
													}>
													{row[col.field] === 'available' ? (
														<>
															<BsCheckCircleFill />
															{row[col.field]}
														</>
													) : (
														<>
															<CgUnavailable />
															{row[col.field]}
														</>
													)}
												</span>
											) : (
												<span className="capitalize">{row[col.field]}</span>
											)}
										</td>
									))}
								</tr>
							))
					) : data ? (
						data.map((row, index) => (
							<tr
								key={index}
								className="group transition-all duration-200 ease-in cursor-default border-b-2  bg-white text-black font-light hover:bg-gray/70 hover:text-white">
								{columns.map((col, index) => (
									<td
										key={index}
										className={
											col.field === 'status' ? 'text-xs uppercase p-3' : 'p-3'
										}>
										{col.field === 'action' ? (
											<span
												onClick={() => {
													onRemoveFromTable(row);
												}}
												className="rounded-lg p-1 transition-all duration-150 ease-in text-accent hover:bg-bgOne group-hover:text-white flex justify-center items-center cursor-pointer gap-1">
												Remove <BiTrash className="text-lg" />
											</span>
										) : col.field === 'status' ? (
											<span
												className={
													row[col.field] === 'available'
														? 'text-bgTwo flex justify-start items-center cursor-pointer gap-3'
														: row[col.field] === 'unavailable'
														? 'text-accent flex justify-start items-center cursor-pointer gap-3'
														: ''
												}>
												{row[col.field] === 'available' ? (
													<>
														<BsCheckCircleFill />
														{row[col.field]}
													</>
												) : (
													<>
														<CgUnavailable />
														{row[col.field]}
													</>
												)}
											</span>
										) : (
											<span className="capitalize">{row[col.field]}</span>
										)}
									</td>
								))}
							</tr>
						))
					) : (
						<tr>
							<td className="w-full flex justify-center items-center py-10">
								Nothing to show here
							</td>
						</tr>
					)}
				</tbody>
			</table>
		</div>
	);
};

export default Table;
