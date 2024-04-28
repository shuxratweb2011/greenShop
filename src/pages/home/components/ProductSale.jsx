import superSaleImg from "../../../assets/images/super_sale.svg";
import img12 from "../../../assets/images/image12.svg";
function ProductSale() {
	return (
		<div className='flex flex-col items-center justify-start max-w-[310px] w-full bg-[#46A35819]'>
			<img src={superSaleImg} alt='super sale' />
			<p className='text-center text-[23px] leading-[16px] uppercase font-semibold'>UP TO 75% OFF</p>
			<img src={img12} className="max-w-full" alt='img12' />
		</div>
	);
}

export default ProductSale;
