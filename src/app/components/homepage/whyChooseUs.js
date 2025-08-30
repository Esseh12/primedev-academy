import Link from 'next/link';

const WhyChooseUs = () => {
	return (
		<>
			<section
				id=''
				className='bg-white max-w-7xl mx-auto'>
				<div className='flex justify-between w-full'>
					<div className='flex flex-col gap-2.5'>
						<p className='text-primary font-medium '>why choose us</p>
						<h1 className='text-5xl font-bold max-w-sm leading-[130%]'>
							What We Do Differently
						</h1>
					</div>
					<div className='max-w-lg flex flex-col gap-6'>
						<p className='leading-8'>
							At{' '}
							<span className='font-semibold hover:text-primary transition-colors'>
								Prime Dev Academy
							</span>
							, we believe learning should be practical, engaging, and
							future-focused. Our programs combine
							<strong className='hover:text-primary transition-colors'>
								{' '}
								hands-on projects
							</strong>
							,{' '}
							<strong className='hover:text-primary transition-colors'>
								expert mentorship
							</strong>
							, and a supportive community to help you master in-demand tech
							skills. Instead of memorizing theory, you’ll build real solutions
							that prepare you for the opportunities of tomorrow.
						</p>
						<Link
							href='#'
							className='bg-primary text-white px-8 py-2.5 flex items-center justify-center rounded-full 
             hover:bg-transparent hover:border hover:border-primary hover:text-primary 
             transition-all duration-300 ease-in-out font-medium max-w-max'>
							Register Now
						</Link>
					</div>
				</div>
			</section>
		</>
	);
};

export default WhyChooseUs;
