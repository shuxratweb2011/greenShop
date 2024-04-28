import CarouselComponent from "../../components/carousel";
import Container from "../../components/Container";
import AdditionalProducts from "./components/AdditionalProducts";
import OurBlogs from "./components/OurBlogs";
import Products from "./components/Products";

function HomePage() {
  return (
		<Container>
			<div className="w-full h-full flex flex-col gap-[2rem]">
        <CarouselComponent />
				<Products />
				<AdditionalProducts />
				<OurBlogs/>
			</div>
		</Container>
	);
}

export default HomePage
