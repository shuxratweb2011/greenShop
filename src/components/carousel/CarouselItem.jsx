import {PropTypes} from 'prop-types'
export default function CarouselItem({img}) {
  return (
		<div className='flex items-center gap-4 w-full h-full bg-gradient-to-r from-[#F5F5F580] to-[#F5F5F580] p-10'>
			<div className='flex flex-col items-start h-full max-w-[557px] '>
				<p className='text-[14px] uppercase leading-[16px] mb-[10px] fot-[500] tracking-[10%] text-[#3D3D3D]'>
					Welcome to GreenShop
				</p>
				<h1 className='text-[70px] font-[900] text-[#3D3D3D] leading-[70px]'>
					Let’s Make a Better <span className='text-[#46A358]'>Planet</span>
				</h1>
				<p className=' mt-4 mb-8 font-normal text-[14px] leading-[24px] text-[#727272]'>
					We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban
					Jungle. Order your favorite plants!
				</p>
				<button className='px-6 bg-[#46A358] h-[40px] rounded-[6px] text-[16px] leading-[20px] font-bold text-white hover:bg-[green] transition-all'>
					SHOP NOW
				</button>
			</div>

			<img className='w-full object-cover' src={img} alt='carousel-img' />
		</div>
	);
}

CarouselItem.propTypes = {
  img: PropTypes.node,
}


