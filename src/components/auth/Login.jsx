import { Link } from "react-router-dom";


function Login() {
  return (
		<div className='w-[80%] mx-auto flex flex-col gap-[1rem]'>
			<p className='text-[13px] leading-[16px] text-[#3D3D3D] font-normal'>Enter your username and password to login.</p>

			<div>
				<input
					className='rounded-[5px] w-full  h-[40px] text-[#A5A5A5] text-[14px] leading-[16px] font-normal border border-[#EAEAEA]'
					type='email'
					placeholder='almamun_uxui@outlook.com'
				/>
      </div>
      
			<div>
				<input
					className='rounded-[5px] w-full  h-[40px] text-[#A5A5A5] text-[14px] leading-[16px] font-normal border border-[#EAEAEA]'
					type='password'
					placeholder='********'
				/>
			</div>
			<div className="flex justify-end">
				<Link to='forgot-password' className='text-[#46A358] text-[14px] leading-[16px] font-[300] hover:underline '>
					Forgot Password?
				</Link>
			</div>
		</div>
	);
}

export default Login
