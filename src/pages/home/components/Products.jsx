import Container from "../../../components/Container";
import ProductCard from "./product-card";
import ProductFilter from "./ProductFilter";
import ProductSale from "./ProductSale";
import { Pagination } from "flowbite-react";
import { useState } from "react";
import products from "./data.json";
import ProductTabs from "./ProductTabs";

function Products() {
	const [currentPage, setCurrentPage] = useState(1);
	const onPageChange = page => setCurrentPage(page);

	return (
		<Container>
			<div className='w-full h-full flex md:gap-6 sm:gap-4 gap-2'>
				<div>
					<ProductFilter />
					<ProductSale />
				</div>

				<div className='flex flex-col  w-full items-end'>
					<ProductTabs/>
					<div className='w-full grid md:gap-4 gap-2 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1'>
						{products.map(product => {
							return (
								<ProductCard
									key={product.id}
									id={product.id}
									title={product.short_title}
									img={product.cover_img}
									price={product.price}
								/>
							);
						})}

						<ProductCard />
					</div>
					<div className='flex overflow-x-auto sm:justify-center'>
						<Pagination
							currentPage={currentPage}
							totalPages={10}
							onPageChange={onPageChange}
							nextLabel=''
							previousLabel=''
							showIcons
						/>
					</div>
				</div>
			</div>
		</Container>
	);
}

export default Products;
