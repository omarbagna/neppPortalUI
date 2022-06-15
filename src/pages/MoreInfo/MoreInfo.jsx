import React from 'react';

import { FormContainer } from 'react-hook-form-mui';

import { HiOutlineCursorClick } from 'react-icons/hi';
import { InputBox, SubmitBtn, Title } from '../../components';

const MoreInfo = () => {
	return (
		<div className="py-14 w-full h-full flex flex-col lg:flex-row gap-6 lg:gap-16 justify-center items-center mt-4 mb-14 sm:mb-20 lg:pl-44 lg:my-0 p-4 sm:p-8 lg:pr-16 ">
			<div className=" bg-white flex flex-col gap-6 rounded-md p-4 lg:p-6 w-full h-fit justify-start items-start">
				<Title size="text-xl lg:text-3xl" title="More Info" />
				<p className="text-gray opacity-80 font-extralight text-sm md:text-base lg:text-lg">
					NEPP is a technological platform commissioned by the Pharmacy Council
					of Ghana to facilitate safe and secure access to medications and
					pharmaceutical services in Ghana whilst protecting the consumers
					confidentiality.
				</p>
				<div className="flex w-full justify-end items-center mt-6 ">
					<a
						className="transition-all duration-200 ease-in cursor-pointer flex gap-2 text-gray justify-center items-center text-xs md:text-sm lg:text-base font-light hover:text-accent hover:scale-105"
						href="https://gnepplatformsite.netlify.app/"
						target="_blank"
						rel="noopener noreferrer">
						<HiOutlineCursorClick className="text-xl lg:text-2xl text-accent" />
						Visit our website
					</a>
				</div>
			</div>
			<div className="bg-white flex flex-col gap-6 rounded-md p-4 lg:p-6 w-full h-full lg:h-fit justify-start items-start">
				<Title size="text-xl lg:text-3xl" title="Contact Us" />

				<FormContainer>
					<InputBox
						label="Subject"
						type="text"
						placeholder="Subject"
						name="subject"
						required={true}
					/>

					<InputBox
						label="Message"
						multiline={true}
						type="text"
						placeholder="Message"
						name="message"
						required={false}
					/>

					<SubmitBtn name="Send" onClick="" />
				</FormContainer>
			</div>
		</div>
	);
};

export default MoreInfo;
