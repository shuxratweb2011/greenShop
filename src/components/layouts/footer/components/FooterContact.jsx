import Logo from "../../../../assets/images/Logo";
import LocationIcon from "../../../../assets/icons/LocationIcon";
import MessageIcon from "../../../../assets/icons/MessageIcon";
import CallingIcon from "../../../../assets/icons/CallingIcon";
export default function FooterContact() {
	return (
		<div className='min-h-[88px] md:py-0 py-4 px-4 w-full bg-[#46A3581A] flex justify-start md:gap-[3rem] gap-4 flex-wrap items-center'>
			<Logo />
			<p className='flex items-center gap-2'>
				<LocationIcon />
				<span className='font-normal text-[14px] text-[#3D3D3D] leading-[22px] '>
					70 West Buckingham Ave. <br /> Farmingdale, NY 11735
				</span>
      </p>
      
			<p className='flex items-center gap-2'>
				<MessageIcon />
				<span className='font-normal text-[14px] text-[#3D3D3D] leading-[22px] '>contact@greenshop.com</span>
      </p>
      
			<p className='flex items-center gap-2'>
				<CallingIcon />
        <span className='font-normal text-[14px] text-[#3D3D3D] leading-[22px]'>+88 01911 717 490
        </span>
      </p>
      
		</div>
	);
}

