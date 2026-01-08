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
						<div className='text-center px-8 pt-16 pb-8 border-b border-white/10'>
							<div className='inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm font-semibold text-white mb-6 backdrop-blur'>
								<Icon
									icon='lucide:sparkles'
									className='text-base'
								/>
								<span>Why PrimeDev</span>
							</div>

							<h2 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6'>
								Learn What Actually
								<span className='block text-slate-200 mt-2'>
									Matters in the Real World
								</span>
							</h2>
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
									<div className='w-12 h-12 bg-lightPrimary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 border border-primary'>
										<Icon
											icon={feature.icon}
											className='text-2xl text-primary'
										/>
									</div>

									{/* Content */}
									<h3 className='text-xl font-semibold text-foreground mb-3'>
										{feature.title}
									</h3>
									<p className='text-foreground leading-relaxed'>
										{feature.description}
									</p>
								</div>
							))}
						</div>

						{/* Bottom CTA */}
						<div className='bg-white/5 px-8 py-12 text-center border-t border-white/10 backdrop-blur'>
							<h3 className='text-2xl sm:text-3xl font-bold text-slate-50 mb-4'>
								Start Building With Intention
							</h3>

							<p className='text-slate-300/80 mb-8 max-w-2xl mx-auto'>
								Join our next cohort and become part of a focused, job-oriented
								developer community where growth is intentional and practical.
							</p>

							<div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
								<Link
									href='/demo'
									className='group inline-flex items-center justify-center gap-3 bg-white text-primary px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300'>
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
