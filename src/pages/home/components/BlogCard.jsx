import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export default function BlogCard({date, title, desc, id,img}) {
  return (
		<div className='flex flex-col gap-1'>
			<img className='w-full' src={img} alt={title} />
			<div className='flex flex-col gap-1 p-2 bg-[#FBFBFB]'>
				<p className='text-[14px] leading-[16px] text-[#46A358] font-[500]'>{date}</p>
				<h1 className='text-[20px] leading-[26px] text-[#3D3D3D] font-[700]'>{title}</h1>
				<p className='text-[14px] leading-[22px] text-[#727272] font-[400]'>{desc}</p>
				<Link className='text-[14px] leading-[16px] text-[#3D3D3D] font-[500]' to={id}>
					Read More
				</Link>
			</div>
		</div>
	);
}

BlogCard.propTypes = {
	img: PropTypes.any,
	title: PropTypes.string,
	desc: PropTypes.string,
	id: PropTypes.number,
  key: PropTypes.string,
  date: PropTypes.string
};