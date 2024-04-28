import Container from "../../Container";
import FooterItem from "./components/FooterItem";
import SVG1 from "../../../assets/icons/SVG1.jsx";
import SVG2 from "../../../assets/icons/SVG2.jsx";
import SVG3 from "../../../assets/icons/SVG3.jsx";
import FooterItemTitle from "./components/FooterItemTitle.jsx";
import FooterItemP from "./components/FooterItemP.jsx";
import FooterContact from "./components/FooterContact.jsx";
import FooterNavigation from "./components/FooterNavigation.jsx";

export default function Footer() {
	return (
		<Container>
			<footer className='flex flex-col'>
				<div className='bg-[#FBFBFB] p-6 grid gap-4 md:grid-cols-[repeat(auto-fit,_minmax(204px,_1fr))_354px] '>
					<FooterItem
						title={"Garden Care"}
						Icon={<SVG1 />}
						info={"We are an online plant shop offering a wide range of cheap and trendy plants."}
					/>
					<FooterItem
						title={"Plant Renovation"}
						Icon={<SVG2 />}
						info={"We are an online plant shop offering a wide range of cheap and trendy plants."}
					/>
					<FooterItem
						title={"Watering Graden"}
						Icon={<SVG3 />}
						info={"We are an online plant shop offering a wide range of cheap and trendy plants."}
					/>

					<div className='flex flex-col justify-center gap-6 md:col-span-1 col-span-2'>
						<FooterItemTitle title={"Would you like to join newsletters?"} />

						<div className='flex items-center min-w-[354px]'>
							<input
								className='h-[40px] rounded-[6px] rounded-r-none w-full outline-none shadow-md border-none'
								type='text'
								placeholder='enter your email address...'
							/>
							<button className='flex  items-center gap-2 bg-[#46A358] text-white h-[40px] px-6 rounded-[6px] font-[700] text-[16px] leading-[20px] transition-all hover:bg-[#2e6d3a] rounded-l-none'>
								Join
							</button>
						</div>

						<FooterItemP
							info={
								"We usually post offers and challenges in newsletter. We’re your online houseplant destination. We offer a wide range of houseplants and accessories shipped directly from our (green)house to yours! "
							}
						/>
					</div>
				</div>
				<FooterContact />
				<FooterNavigation />

				<div className='w-full flex items-center justify-center h-[40px] text-center text-[14px] leading-[30px] text-[#3D3D3D] '>
					© 2021 GreenShop. All Rights Reserved.
				</div>
				
			</footer>
		</Container>
	);
}
