import React from 'react';

import { FormContainer } from 'react-hook-form-mui';

import { HiOutlineCursorClick } from 'react-icons/hi';
import { InputBox, SubmitBtn, Title } from '../../components';

const MoreInfo = () => {
	return (
		<div className="py-14 w-full h-full flex flex-col lg:flex-row gap-8 lg:gap-16 justify-center items-center">
			<div className=" bg-white flex flex-col gap-6 rounded-md p-4 lg:p-6 w-full h-fit justify-start items-start">
				<Title size="text-xl lg:text-3xl" title="More Info" />
				<p className="text-gray opacity-80 font-extralight text-sm md:text-base lg:text-lg">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet
					scelerisque feugiat maecenas iaculis lectus venenatis turpis. Suscipit
					ut volutpat tincidunt nec nulla eget aliquam. At ornare auctor risus,
					massa, nunc, orci netus nulla. Sit integer mauris bibendum risus mi,
					mattis feugiat nunc adipiscing. Commodo rhoncus, est odio nisi
					suspendisse quis ultricies ac. Tristique sit eleifend phasellus eget
					arcu venenatis scelerisque nulla. Sed eu, leo a id at.
				</p>
				<div className="flex w-full justify-end items-center mt-6 ">
					<a
						className="transition-all duration-200 ease-in cursor-pointer flex gap-2 text-gray justify-center items-center text-xs md:text-sm lg:text-base font-light hover:text-accent hover:scale-105"
						href="https://google.com/"
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
