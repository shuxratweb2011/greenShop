import FooterItemP from "./FooterItemP";
import FooterItemTitle from "./FooterItemTitle";
import paymentImg from "../../../../assets/images/payment.png";
import FacebookIcon from "../../../../assets/icons/FacebookIcon";
import InstagramIcon from "../../../../assets/icons/InstagramIcon";
import TwitterIcon from "../../../../assets/icons/TwitterIcon";
import UnionIcon from "../../../../assets/icons/UnionIcon";
import LinkedinIcon from "../../../../assets/icons/LinkedinIcon";

export default function FooterNavigation() {
	return (
		<div className='p-[1rem] bg-[#FBFBFB]  flex flex-wrap gap-4 justify-between'>
			<div className='flex flex-col gap-[0.4rem]'>
				<FooterItemTitle title={"My Account"} />
				<FooterItemP info={"My Account"} />
				<FooterItemP info={"Our stores"} />
				<FooterItemP info={"Contact Us"} />
				<FooterItemP info={"Career"} />
				<FooterItemP info={"Specials"} />
			</div>
			<div className='flex flex-col gap-[0.4rem]'>
				<FooterItemTitle title={"Help & Guide"} />
				<FooterItemP info={"Help Center"} />
				<FooterItemP info={"How to Buy"} />
				<FooterItemP info={"Shipping & Delivery"} />
				<FooterItemP info={"Product Policy"} />
				<FooterItemP info={"How to Return"} />
			</div>
			<div className='flex flex-col gap-[0.4rem]'>
				<FooterItemTitle title={"Categories"} />
				<FooterItemP info={"House Plants"} />
				<FooterItemP info={"Potter Plants"} />
				<FooterItemP info={"Seeds"} />
				<FooterItemP info={"Small Plants"} />
				<FooterItemP info={"Accessories"} />
			</div>

			<div className='flex flex-col gap-[1rem]'>
				<FooterItemTitle title={"Social Media"} />
				<div className='flex items-center gap-2 min-w-[30px] min-h-[30px]'>
					<a href='#' className=' grid place-content-center p-2 border rounded-[6px] cursor-pointer'>
						<InstagramIcon />
					</a>
					<a href='#' className=' grid place-content-center  min-w-[30px] min-h-[30px] p-2 border rounded-[6px] cursor-pointer'>
						<FacebookIcon />
					</a>

					<a href='#' className=' grid place-content-center  p-2 border rounded-[6px] cursor-pointer min-w-[30px] min-h-[30px]'>
						<TwitterIcon />
					</a>

					<a href='#' className='  grid place-content-center p-2 border rounded-[6px] cursor-pointer min-w-[30px] min-h-[30px]'>
						<LinkedinIcon />
					</a>
					<a href='#' className='  grid place-content-center p-2 border rounded-[6px] cursor-pointer min-w-[30px] min-h-[30px]'>
						<UnionIcon />
					</a>
				</div>
				<FooterItemTitle title={"We accept"} />
				<img src={paymentImg} alt='payment' />
			</div>
		</div>
	);
}
