import PropTypes from "prop-types";
import CartIcon from "../../../../assets/icons/CartIcon";
import SearchIcon from "../../../../assets/icons/SearchIcon";
import HeartIcon from "../../../../assets/icons/HeartIcon";
export default function ProductCard({ img, title, price, id }) {
	return (
		<div className='group hover:bg-slate-200/20 relative cursor-pointer py-4 flex flex-col justify-start gap-6 hover:before:block before:hidden before:content-[""] before:w-full before:absolute before:h-[3px] before:bg-[#46A358] before:top-[10px]' key={id}>
			<img className='max-h-[250px] w-full object-cover' src={img} alt={title} />
			<div className='flex flex-col gap-1'>
				<p className='font-normal text-[1rem] leading-[1rem] text-[#3D3D3D] '>{title}</p>
				<p className='font-semibold text-[1.2rem] leading-[1rem] text-[#46A358] '>{price}</p>
			</div>

			<div className='group-hover:flex hidden transition-all duration-300 absolute bottom-2 left-0 w-full items-center justify-center gap-2'>
				<button className='hover:translate-y-1 transition-all'>
					<CartIcon />
				</button>
				<button className='hover:translate-y-1 transition-all'>
					<HeartIcon />
				</button>
				<button className='hover:translate-y-1 transition-all'>
					<SearchIcon />
				</button>
      </div>
      
		</div>
	);
}

ProductCard.propTypes = {
	title: PropTypes.string,
	img: PropTypes.string,
	price: PropTypes.string,
	id: PropTypes.number,
};
