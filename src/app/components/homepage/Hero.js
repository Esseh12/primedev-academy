import Link from 'next/link';
import Image from 'next/image';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const Hero = () => {
	return (
		<>
			<section className='bg-primary/17 flex items-center'>
				<div className='flex items-center justify-between gap-12 max-w-[1380px] mx-auto mt-26'>
					<div className='flex flex-col gap-8'>
						<h1 className='text-[50px] tracking-[-2px] font-bold max-w-2xl leading-[130%]'>
							The Practical Way to Learn Software Development
						</h1>
						<p className='max-w-lg text-lg'>
							Start from scratch, build real projects, and become a confident,
							job ready developer.
						</p>
						<div className='flex items-center gap-5'>
							<Link
								href='#'
								className='bg-primary text-white px-8 py-2.5 flex items-center justify-center rounded-full 
             hover:bg-transparent hover:border hover:border-primary hover:text-primary 
             transition-all duration-300 ease-in-out font-medium'>
								Register Now
							</Link>

							<Link
								href='/courses'
								className='border border-primary text-primary py-2.5 px-6 flex items-center justify-between 
             rounded-full gap-2.5 group 
             hover:bg-primary hover:text-white transition-colors duration-300 ease-in-out font-medium'>
								See Curriculum
								<ArrowRightIcon className='h-4.5 w-4.5 text-primary transition-transform duration-300 ease-in-out group-hover:translate-x-1 group-hover:text-white' />
							</Link>
						</div>
					</div>

					<div>
						<Image
							src='/girl-smiling-hero.svg'
							alt='girl smilling'
							width='100'
							height={100}
							className='w-auto h-auto'
						/>
					</div>
				</div>
			</section>
		</>
	);
};
export default Hero;
