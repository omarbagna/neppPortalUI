import React from 'react';
import Tooltip from '@mui/material/Tooltip';

const Table = ({ data = null, columns, filter }) => {
	return (
		<div className="min-w-[600px] w-full rounded-lg overflow-hidden">
			<table className="w-full bg-white text-left border-collapse">
				<thead>
					<tr>
						{columns.map((head, index) => (
							<td key={index} className="px-3 py-5 bg-accent text-white">
								{head.header.toUpperCase()}
							</td>
						))}
					</tr>
				</thead>
				<tbody>
					{data && filter === '' ? (
						data.map((row, index) => (
							<Tooltip key={index} title={row.exert} arrow>
								<tr
									key={index}
									className="group transition-all duration-200 ease-in cursor-pointer border-b-2 last:border-b-0 bg-white text-black font-light hover:bg-gray/70 hover:text-white">
									{columns.map((col, index) => (
										<td
											key={index}
											className={
												col.field === 'status' ? 'text-xs uppercase p-3' : 'p-3'
											}>
											<span
												className={
													row[col.field] === 'delivered'
														? 'bg-bgTwo/50 text-gray group-hover:bg-bgTwo group-hover:text-white rounded-full p-2'
														: row[col.field] === 'pending'
														? 'bg-bgThree/50 text-gray group-hover:bg-bgThree group-hover:text-white rounded-full p-2'
														: row[col.field] === 'declined'
														? 'bg-bgOne/50 text-gray group-hover:bg-bgOne group-hover:text-white rounded-full p-2'
														: row[col.field] === 'processing'
														? 'bg-bgFour/50 text-gray group-hover:bg-bgFour group-hover:text-white rounded-full p-2'
														: ''
												}>
												{row[col.field]}
											</span>
										</td>
									))}
								</tr>
							</Tooltip>
						))
					) : data && filter !== '' ? (
						data
							.filter((data) => data.status === filter)
							.map((row, index) => (
								<Tooltip key={index} title={row.exert} arrow>
									<tr
										key={index}
										className="group transition-all duration-200 ease-in cursor-pointer border-b-2 last:border-b-0 bg-white text-black font-light hover:bg-gray/70 hover:text-white">
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
															? 'bg-bgTwo/50 text-gray group-hover:bg-bgTwo group-hover:text-white rounded-full p-2'
															: row[col.field] === 'pending'
															? 'bg-bgThree/50 text-gray group-hover:bg-bgThree group-hover:text-white rounded-full p-2'
															: row[col.field] === 'declined'
															? 'bg-bgOne/50 text-gray group-hover:bg-bgOne group-hover:text-white rounded-full p-2'
															: row[col.field] === 'processing'
															? 'bg-bgFour/50 text-gray group-hover:bg-bgFour group-hover:text-white rounded-full p-2'
															: ''
													}>
													{row[col.field]}
												</span>
											</td>
										))}
									</tr>
								</Tooltip>
							))
					) : (
						<p className="w-full flex justify-center items-center py-10">
							Nothing to show here
						</p>
					)}
				</tbody>
			</table>
		</div>
	);
};

export default Table;
