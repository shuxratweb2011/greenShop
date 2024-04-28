import { Link } from "react-router-dom";
import ArrowRight from "../../../assets/icons/ArrowRight";
import PropTypes from "prop-types";

export default function AdditionalProductCard({ img, title, desc, id, key }) {
	return (
		<div className='flex justify-between items-center w-full min-h-[250px] bg-[#FBFBFB] p-6 ' key={key}>
			<img className='max-w-[250px] w-full h-full object-cover' src={img} alt={title} />
			<div className='flex flex-col gap-4 items-end'>
				<h1 className='text-end font-semibold text-[28px]'>{title}</h1>
				<p className='text-end text-[15px] leading-[16px] text-[#727272] '>{desc}</p>
				<Link
					className='flex h-[40px] rounded-[6px] px-[1rem] items-center justify-center  gap-1 bg-[#46A358] text-white text-[14px] leading-[16px] font-[500] hover:bg-[green] '
					to={id}
				>
					Find More
					<ArrowRight />
				</Link>
			</div>
		</div>
	);
}
AdditionalProductCard.propTypes = {
	img: PropTypes.any,
	title: PropTypes.string,
	desc: PropTypes.string,
	id: PropTypes.number,
	key: PropTypes.string,
};
