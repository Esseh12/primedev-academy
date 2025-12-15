import { Icon } from '@iconify/react';
import { features } from '@/app/utils/utils';
import Link from 'next/link';

const WhyChooseUs = () => {
	return (
		<section className='relative -mt-32 pb-24'>
			<div className='relative'>
				{/* Main Card Container */}
				<div className='relative bg-primary rounded-t-[50px] border border-white/10 overflow-hidden'>
					{/* Noise Background Layer */}
					<div
						className='absolute inset-0 z-0 opacity-20 pointer-events-none'
						style={{
							backgroundImage: "url('/bg-noise.svg')",
							backgroundRepeat: 'repeat',
							backgroundSize: 'auto',
						}}
					/>

					{/* Content Wrapper */}
					<div className='relative z-10'>
						{/* Header */}
						<div className='text-center px-8 pt-16 pb-12 border-b border-white/10'>
							<div className='inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm font-semibold text-white mb-6 backdrop-blur'>
								<Icon
									icon='lucide:sparkles'
									className='text-base'
								/>
								<span>Why Choose PrimeDev</span>
							</div>

							<h2 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6'>
								Everything You Need to
								<span className='block text-slate-200 mt-2'>
									Launch Your Career
								</span>
							</h2>

							<p className='text-xl text-white max-w-3xl mx-auto font-light leading-relaxed'>
								Join thousands of graduates who transformed their careers with
								our comprehensive bootcamp program
							</p>
						</div>

						{/* Features Grid */}
						<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 p-12'>
							{features.map((feature, index) => (
								<div
									key={index}
									className='group relative p-8 rounded-2xl bg-white transition-all duration-300 hover:shadow-xl cursor-pointer backdrop-blur'
									style={{
										animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
									}}>
									{/* Icon */}
									<div className='w-14 h-14 bg-lightPrimary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300 border border-primary'>
										<Icon
											icon={feature.icon}
											className='text-3xl text-primary transition-colors duration-300'
										/>
									</div>

									{/* Content */}
									<h3 className='text-xl font-semibold text-foreground mb-3'>
										{feature.title}
									</h3>
									<p className='text-foreground leading-relaxed'>
										{feature.description}
									</p>

									{/* Hover Arrow */}
									<div className='absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
										<Icon
											icon='lucide:arrow-right'
											className='text-xl text-foreground'
										/>
									</div>
								</div>
							))}
						</div>

						{/* Bottom CTA */}
						<div className='bg-white/5 px-8 py-12 text-center border-t border-white/10 backdrop-blur'>
							<h3 className='text-2xl sm:text-3xl font-bold text-slate-50 mb-4'>
								Ready to Start Your Journey?
							</h3>
							<p className='text-slate-300/80 mb-8 max-w-2xl mx-auto'>
								Join our next cohort and get access to exclusive bonuses worth
								$2,000
							</p>

							<div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
								<Link
									href='/apply'
									className='group inline-flex items-center justify-center gap-3 bg-white text-primary px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300'>
									<span>Apply Now</span>
									<Icon
										icon='lucide:arrow-right'
										className='text-xl group-hover:translate-x-1 transition-transform'
									/>
								</Link>

								<Link
									href='/demo'
									className='inline-flex items-center justify-center gap-3 bg-transparent text-slate-200 px-8 py-4 rounded-xl font-semibold text-lg border border-white/20 hover:bg-white/10 transition-all duration-300'>
									<Icon
										icon='lucide:calendar'
										className='text-xl'
									/>
									<span>Book a Call</span>
								</Link>
							</div>
						</div>
					</div>
					{/* End Content Wrapper */}
				</div>
			</div>
		</section>
	);
};

export default WhyChooseUs;
