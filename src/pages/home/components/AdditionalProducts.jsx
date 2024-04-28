import AdditionalProductCard from "./AdditionalProductCard";
import img from '../../../assets/images/img14.png'

export default function AdditionalProducts() {
  return (
		<div className='grid md:grid-cols-2 grid-cols-1 md:gap-6 gap-3 my-8 '>
			<AdditionalProductCard
				title={"Cactuses"}
				desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. "}
				img={img}
				key={"1"}
				id='1'
			/>

			<AdditionalProductCard
				title={"Cactuses"}
				desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. "}
				img={img}
				key={"2"}
				id='2'
			/>
		</div>
	);
}


