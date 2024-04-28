import PropTypes from "prop-types";
import Range from "./Range";
import { Button } from "flowbite-react";
export default function ProductFilter() {
	return (
		<div className='w-[310px] bg-[#FBFBFB] text-[#3D3D3D] p-2 flex flex-col gap-8 '>
			<div className='flex flex-col gap-4'>
				<FilterSectionTitle title='Categories' />
				<ul className='flex flex-col'>
					<ListItem label={"House plants"} count={10} />
					<ListItem label={"Potter plants"} count={5} />
					<ListItem label={"House plants"} count={10} />
					<ListItem label={"Potter plants"} count={5} />
					<ListItem label={"House plants"} count={10} />
					<ListItem label={"Potter plants"} count={5} />
					<ListItem label={"House plants"} count={10} />
					<ListItem label={"Potter plants"} count={5} />
					<ListItem label={"House plants"} count={10} />
				</ul>
			</div>

			<div className='flex flex-col gap-4 items-start'>
				<FilterSectionTitle title='Price Range' />
				<Range />
				<Button size="lg" className='bg-[#46A358] text-[16px] leading-[20px] text-white font-semibold hover:bg-[green]'>
					Filter
				</Button>
			</div>

			<div className='flex flex-col gap-4'>
				<FilterSectionTitle title='Size' />
				<ul className='flex flex-col'>
					<ListItem label={"Small"} count={15} />
					<ListItem label={"Medium"} count={10} />
					<ListItem label={"Large"} count={11} />
				</ul>
			</div>
		</div>
	);
}

function FilterSectionTitle({ title }) {
	return <h1 className='text-[18px] leading-[16px] font-[700]'>{title}</h1>;
}
FilterSectionTitle.propTypes = {
	title: PropTypes.string,
};

function ListItem({ label, count = 0 }) {
	return (
		<li className='flex items-center cursor-pointer justify-between text-[15px] text-[#3D3D3D] hover:text-[#46A358] font-normal hover:font-semibold leading-[40px]'>
			<span>{label}</span>
			<span>({count})</span>
		</li>
	);
}

ListItem.propTypes = {
	label: PropTypes.string,
	count: PropTypes.number,
};
