import BlogCard from "./BlogCard";

export default function OurBlogs() {
	return (
		<div className='flex flex-col gap-3 my-[2rem]'>
			<h1 className='text-[30px] text-[#3D3D3D] font-semibold text-center'>Our Blog Posts</h1>
			<p className='text-center text-[14px] text-[#727272] font-normal '>
				We are an online plant shop offering a wide range of cheap and trendy plants.{" "}
			</p>
			<div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4'>
				<BlogCard
					title={"Lorem ipsum dolo"}
					desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
					img={
						"https://images.unsplash.com/photo-1714170109707-44a3c752a83f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8"
					}
					key={"1"}
					id='1'
					date={"September 12 | I Read in 6 minutes"}
        />
      
				<BlogCard
					title={"Lorem ipsum dolo"}
					desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
					img={
						"https://images.unsplash.com/photo-1714170109707-44a3c752a83f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8"
					}
					key={"1"}
					id='1'
					date={"September 12 | I Read in 6 minutes"}
				/>
				<BlogCard
					title={"Lorem ipsum dolo"}
					desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
					img={
						"https://images.unsplash.com/photo-1714170109707-44a3c752a83f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8"
					}
					key={"1"}
					id='1'
					date={"September 12 | I Read in 6 minutes"}
				/>
				<BlogCard
					title={"Lorem ipsum dolo"}
					desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
					img={
						"https://images.unsplash.com/photo-1714170109707-44a3c752a83f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8"
					}
					key={"1"}
					id='1'
					date={"September 12 | I Read in 6 minutes"}
				/>
			</div>
		</div>
	);
}
