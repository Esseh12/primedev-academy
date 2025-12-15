import Link from 'next/link';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import { avatars } from '@/app/utils/utils';

const Hero = () => {
	return (
		<section className='relative min-h-[90vh] overflow-hidden bg-white'>
			<div className='relative px-4 md:px-18 pt-14 pb-24'>
				<div className='grid lg:grid-cols-2 gap-16 lg:gap-20 items-center'>
					{/* Left Content - Image */}
					<div className='relative animate-fadeInLeft order-2 lg:order-1'>
						<div className='relative w-full aspect-4/5 overflow-hidden'>
							<Image
								src='/hero-image.svg'
								alt='Students learning development and design'
								fill
								className='object-cover'
								priority
							/>
						</div>
					</div>

					{/* Right Content - Text */}
					<div className='space-y-10 animate-fadeInRight'>
						{/* Badge */}
						<div className='inline-flex items-center gap-2 bg-lightPrimary backdrop-blur-sm px-5 py-2.5 rounded-full text-sm font-semibold border border-primary/20 text-primary'>
							<Icon
								icon='lucide:sparkles'
								className='text-base'
							/>
							<span>Transform Your Career in 2025</span>
						</div>

						{/* Heading */}
						<div className='space-y-6'>
							<h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight'>
								Unlock Your
								<span className='block text-primary mt-2'>
									Creative Potential
								</span>
							</h1>
							<p className='text-xl sm:text-2xl text-foreground/70 leading-relaxed max-w-xl font-light'>
								Master design and development with industry experts. Build real
								projects, get hired faster.
							</p>
						</div>

						{/* CTA Buttons */}
						<div className='flex flex-col sm:flex-row gap-4 pt-2'>
							<Link
								href='/apply'
								className='group inline-flex items-center justify-center gap-3 bg-primary text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300'>
								<span>Start Learning Today</span>
								<Icon
									icon='lucide:arrow-right'
									className='text-xl group-hover:translate-x-1 transition-transform'
								/>
							</Link>
							<Link
								href='/courses'
								className='inline-flex items-center justify-center gap-3 bg-white text-foreground px-8 py-4 rounded-xl font-semibold text-lg border-2 border-gray-200 hover:border-primary hover:bg-lightPrimary hover:scale-[1.02] transition-all duration-300'>
								<Icon
									icon='lucide:play-circle'
									className='text-xl'
								/>
								<span>View Courses</span>
							</Link>
						</div>

						{/* Stats Row */}
						<div className='flex flex-wrap gap-x-12 gap-y-6 pt-4 border-t border-gray-200'>
							<div className='space-y-1'>
								<div className='text-4xl sm:text-5xl font-bold text-foreground'>
									10k+
								</div>
								<div className='text-foreground/60 text-sm font-medium'>
									Graduates Worldwide
								</div>
							</div>
							<div className='space-y-1'>
								<div className='text-4xl sm:text-5xl font-bold text-foreground'>
									95%
								</div>
								<div className='text-foreground/60 text-sm font-medium'>
									Job Placement Rate
								</div>
							</div>
							<div className='space-y-1'>
								<div className='text-4xl sm:text-5xl font-bold text-foreground'>
									4.9/5
								</div>
								<div className='text-foreground/60 text-sm font-medium'>
									Student Rating
								</div>
							</div>
						</div>

						{/* Trust Indicators */}
						<div className='flex items-center gap-5 pt-2'>
							<div className='flex -space-x-3'>
								{avatars.map((src, index) => (
									<div
										key={index}
										className='w-11 h-11 rounded-full bg-linear-to-br from-primary/30 to-primary/10 border-3 border-white shadow-md overflow-hidden'>
										<Image
											src={src}
											alt={`Avatar ${index + 1}`}
											height={0}
											width={0}
											className='w-full h-full object-cover'
										/>
									</div>
								))}
							</div>
							<div className='text-sm leading-snug'>
								<div className='font-semibold text-foreground text-base'>
									Join 10,000+ students
								</div>
								<div className='text-foreground/60'>
									Learning and growing with us
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
