"use client";

import { TbPlaylist } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";

const Library = () => {
	const onClick = () => {
		// handle uploading songs
	};
	return (
		<div className='flex flex-col'>
			<div className='flex items-center justify-between px-5 pt-4'>
				<div className='inline-flex items-center gap-x-2'>
					<TbPlaylist className='text-neutral-400' size={26} />
					<p className='text-neutral-400 font-medium text-md'>Your library</p>
				</div>
				<AiOutlinePlus
					onClick={onClick}
					size={20}
					className='text-neutral-400 cursor-pointer hover:text-white transition'
				/>
			</div>
			<div className='flex flex-col gap-y-2 mt-4 px-3'>List of songs</div>
		</div>
	);
};

export default Library;
