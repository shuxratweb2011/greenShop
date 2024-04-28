import {  RangeSlider } from "flowbite-react";
export default function Range() {
  return (
		<div className="flex flex-col gap-4 w-[90%] ">
			<RangeSlider max={2000} min={5} step={5} />
			<p className='flex items-center gap-2 text-[15px] leading-[16px] font-normal'>
				<span>Price:</span>
				<span className='text-[#46A358] font-[700]'>$39 - $2000</span>
			</p>
		</div>
	);
}

