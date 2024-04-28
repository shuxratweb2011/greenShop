import { Link } from "react-router-dom";
import Logo from "../../../assets/images/Logo";
import Container from "../../Container";
import SearchIcon from "../../../assets/icons/SearchIcon";
import CartIcon from "../../../assets/icons/CartIcon";
import LogoutIcon from "../../../assets/icons/LogoutIcon";
import { Modal } from "flowbite-react";
import { useState } from "react";
import Login from "../../auth/Login";
import Register from "../../auth/Register";

function Navbar() {
	const [openModal, setOpenModal] = useState(false);
	const [authType, setAuthType] = useState("login");
	return (
		<Container>
			<nav className='flex  items-center  justify-between text-black h-[53px] border-b-[0.3px] border-b-[#46A35880]'>
				<Link to='/'>
					<Logo />
				</Link>
				<ul className='md:flex hidden items-center gap-8 h-full links'>
					<li>
						<a href='#'>Home</a>
					</li>
					<li>
						<a href='#'>Shop</a>
					</li>
					<li>
						<a href='#'>Plant Care</a>
					</li>
					<li>
						<a href='#'>Blogs</a>
					</li>
				</ul>

				<div className='flex items-center gap-8'>
					<button>
						<SearchIcon />
					</button>
					<button className='relative'>
						<CartIcon />
						<span className='px-1 absolute h-[16px] top-[-10px] rounded-full bg-[#46A358] text-[10px] font-[500] text-white'>
							600
						</span>
					</button>
					<button
						onClick={() => setOpenModal(true)}
						className='flex items-center gap-2 bg-[#46A358] text-white h-[35px] px-4 rounded-[6px] font-[600] text-[16px] leading-[20px] transition-all hover:bg-[#2e6d3a]'
					>
						<LogoutIcon />
						Login
					</button>
				</div>
			</nav>
			<Modal  show={openModal} size={'xl'} popup onClose={() => setOpenModal(false)}>
				<Modal.Header />
				<Modal.Body>
					<div className='flex items-center gap-4 justify-center py-[2rem]'>
						<button
							onClick={() => setAuthType("login")}
							className={`
							text-[20px] leading-[16px] font-[500] 
							${authType === "login" ? "!text-[#46A358]" : "!text-[#3D3D3D]"}
							`}
						>
							Login
						</button>

						<div className='w-[1px] h-[16px] bg-[#3D3D3D]'></div>

						<button
							onClick={() => setAuthType("register")}
							className={`
							text-[20px] leading-[16px] font-[500]
							${authType === "register" ? "!text-[#46A358]" : "!text-[#3D3D3D]"}
							`}
						>
							Register
						</button>
					</div>

					<div>
						{authType === "login" && <Login />}
						{authType === "register" && <Register />}
					</div>
				</Modal.Body>
			</Modal>
		</Container>
	);
}

export default Navbar;
