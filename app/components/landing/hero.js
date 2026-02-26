import Link from 'next/link';
import Image from 'next/image';
import { Icon } from '@iconify/react';

const Hero = () => {
	const features = [
		{
			icon: 'hugeicons:file-01',
			title: 'Basic – Advanced lessons',
			description: 'Step by step learning process.',
		},
		{
			icon: 'lucide:handshake',
			title: 'Mentorship',
			description: 'Real time guidance from Experts.',
		},
		{
			icon: 'ph:users-four-thin',
			title: 'Tech community',
			description: 'Professionals and learning peers.',
		},
	];

	return (
		<section className='bg-white'>
			<div className='relative px-4 md:px-14 pt-14 pb-16'>
				<div className='flex justify-between items-center'>
					{/* Left Content - Text */}
					<div className='space-y-8 animate-fadeInLeft order-1'>
						{/* Badge */}
						<div className='inline-flex items-center gap-2 text-sm text-primary'>
							<Image
								src='/pathway-to-tech.svg'
								alt='pathway to tech'
								width={24}
								height={24}
							/>
							<span>Pathway to your tech journey</span>
						</div>

						{/* Heading */}
						<h1 className='font-bold text-5xl leading-21'>
							Learn Web Development, <br />
							Build Real skills, <br />
							<span className='text-primary'>Get Job-Ready</span>
						</h1>

						{/* Description */}
						<p className='text-[#4D4D4D] text-lg max-w-172.5 leading-7'>
							We help beginners and career switchers learn web development
							step-by-step, with mentorship, real projects, and clear guidance.
						</p>

						{/* CTA Buttons */}
						<div className='flex flex-col sm:flex-row gap-4'>
							<Link
								href='/apply'
								className='inline-flex items-center justify-center gap-2 bg-primary text-white w-75 py-2 rounded-2xl font-semibold text-base transition-colors duration-300'>
								Enroll now
							</Link>
							<Link
								href='/programs'
								className='group inline-flex items-center justify-center gap-2 border border-primary text-primary px-6 py-2 rounded-2xl font-semibold text-base hover:border-primary w-75 hover:text-primary transition-colors duration-300'>
								View programs
								<Icon
									icon='lucide:arrow-right'
									className='text-base group-hover:translate-x-1 transition-transform'
								/>
							</Link>
						</div>
					</div>

					{/* Right Content - Image */}
					<div className='relative animate-fadeInRight order-2'>
						<div className='relative w-full  overflow-hidden'>
							<Image
								src='/hero-image.svg'
								alt='Students learning development and design'
								height={718}
								width={500}
								className='object-cover w-full h-full'
								priority
							/>
						</div>
					</div>
				</div>

				{/* Feature Cards */}
				<div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
					{features.map((feature) => (
						<div
							key={feature.title}
							className='flex  gap-3 h-22.5 bg-[#F2FFE0] rounded-xl p-3 items-center'>
							<Icon
								icon={feature.icon}
								className='text-[#4D4D4D] text-2xl'
							/>
							<div>
								<p className='font-bold'>{feature.title}</p>
								<p className='text-xs text-[#4D4D4D] mt-0.5'>
									{feature.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Hero;
