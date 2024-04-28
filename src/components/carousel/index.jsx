import CarouselItem from "./CarouselItem";
import { Carousel } from "flowbite-react";
import { Flowbite } from "flowbite-react"
import carouselImg from "../../assets/images/item.png";
import carouselImg2 from "../../assets/images/item2.png";

const customTheme = {
	carousel: {
		control: {
			base: "!hidden",
		},
		indicators: {
			active: {
				off: "bg-[#46A3584D] hover:bg-[#46A358]",
				on: "bg-[#46A358]",
			},
			base: "h-3 w-3 rounded-full",
			wrapper: "absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3",
		},
	},
};

export default function CarouselComponent() {
	return (
		<div className='my-[2rem]'>
      <Flowbite theme={{
        theme:customTheme
      }}
      >
				<Carousel spellCheck className='h-[500px]'>
					<CarouselItem img={carouselImg} />
					<CarouselItem img={carouselImg2} />
					<CarouselItem img={carouselImg} />
					<CarouselItem img={carouselImg2} />
				</Carousel>
			</Flowbite>
		</div>
	);
}
