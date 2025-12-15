'use client';
import { useState } from 'react';
import { Icon } from '@iconify/react';
import { testimonials } from '@/app/utils/utils';
import Image from 'next/image';

const TestimonialsSection = () => {
	const [activeIndex, setActiveIndex] = useState(0);

	return (
		<section className='relative bg-white py-24 overflow-hidden'>
			<div className='relative px-4 md:px-14'>
				{/* Header */}
				<div className='text-center mb-16'>
					<div className='inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-sm font-semibold text-primary mb-6'>
						<Icon
							icon='lucide:star'
							className='text-base'
						/>
						<span>Success Stories</span>
					</div>
					<h2 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4'>
						Hear From Our
						<span className='block text-primary mt-2'>Alumni</span>
					</h2>
					<p className='text-xl text-foreground/70 max-w-3xl mx-auto font-light leading-relaxed'>
						Join thousands of graduates who transformed their careers and are
						now working at top tech companies
					</p>
				</div>

				{/* Testimonials Grid */}
				<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>
					{testimonials.map((testimonial, index) => (
						<div
							key={testimonial.id}
							className='group relative bg-linear-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100 hover:border-primary/30 hover:shadow-xl transition-all duration-500 cursor-pointer'
							style={{
								animation: `fadeInUp 0.6s ease-out ${index * 0.15}s both`,
							}}
							onClick={() => setActiveIndex(index)}>
							{/* Quote Icon */}
							<div className='absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity'>
								<Icon
									icon='lucide:quote'
									className='text-6xl text-primary'
								/>
							</div>

							{/* Rating */}
							<div className='flex gap-1 mb-4'>
								{[...Array(testimonial.rating)].map((_, i) => (
									<Icon
										key={i}
										icon='lucide:star'
										className='text-xl text-yellow-400 fill-yellow-400'
									/>
								))}
							</div>

							{/* Testimonial Text */}
							<p className='text-foreground/80 leading-relaxed mb-6 relative z-10'>
								&apos;{testimonial.text}&apos;
							</p>

							{/* Author Info */}
							<div className='flex items-center gap-4 pt-4 border-t border-gray-200'>
								<div className='relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-primary/20'>
									<Image
										src={testimonial.image}
										alt={testimonial.name}
										fill
										sizes='56px'
										className='object-cover'
									/>
								</div>
								<div>
									<h4 className='font-bold text-foreground group-hover:text-primary transition-colors'>
										{testimonial.name}
									</h4>
									<p className='text-sm text-foreground/60'>
										{testimonial.role} at {testimonial.company}
									</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default TestimonialsSection;
