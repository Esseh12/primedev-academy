'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import TestimonialsSection from '@/app/components/landing/testimonial';
import FAQSection from '@/app/components/landing/faq';
import { stats, values } from '@/app/utils/utils';

const About = () => {
	return (
		<div className='min-h-screen bg-white'>
			{/* Hero Section */}
			<section className='relative bg-linear-to-br from-primary/10 via-white to-primary/5 py-20 overflow-hidden'>
				<div className='px-4 md:px-14'>
					<div className='inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-sm font-semibold text-primary mb-6'>
						<Icon icon='lucide:info' />
						<span>About Us</span>
					</div>

					<h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6'>
						Empowering Future
						<span className='block text-primary mt-2'>Tech Leaders</span>
					</h1>
					<p className='text-xl text-foreground/70 max-w-3xl font-light'>
						We&apos;re on a mission to bridge the gap between education and
						industry, creating opportunities for aspiring tech professionals
						across Africa.
					</p>
				</div>
			</section>

			{/* Story Section with Image */}
			<section className='py-24 '>
				<div className='px-4 md:px-14'>
					<div className='grid lg:grid-cols-2 gap-12 items-center'>
						{/* Image */}
						<div className='relative h-125 rounded-3xl overflow-hidden shadow-2xl order-2 lg:order-1'>
							<Image
								src='/about-image.avif'
								alt='Our Story'
								fill
								className='object-cover'
							/>
							<div className='absolute inset-0 bg-linear-to-t from-black/30 to-transparent' />
						</div>

						{/* Content */}
						<div className='order-1 lg:order-2'>
							<div className='inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-sm font-semibold text-primary mb-6'>
								<Icon icon='lucide:book-open' />
								<span>Our Story</span>
							</div>

							<h2 className='text-4xl sm:text-5xl font-bold text-foreground mb-6'>
								Building Dreams Through Education
							</h2>

							<div className='space-y-4 text-lg text-foreground/70'>
								<p>
									Founded with a vision to democratize tech education, we
									started our journey to address the growing skills gap in the
									technology industry. What began as a small initiative has
									grown into a thriving community of learners and industry
									professionals.
								</p>

								<p>
									Our programs are designed by industry experts and tailored to
									meet real-world demands. We believe in hands-on learning,
									mentorship, and creating pathways to meaningful careers in
									technology.
								</p>

								<p>
									Today, we&apos;re proud to have trained thousands of students
									who are now making significant contributions to the tech
									ecosystem across Africa and beyond.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Values Section */}
			<section className='py-24 bg-white'>
				<div className='px-4 md:px-14'>
					<div className='text-center mb-16'>
						<div className='inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-sm font-semibold text-primary mb-6'>
							<Icon icon='lucide:compass' />
							<span>Our Values</span>
						</div>

						<h2 className='text-4xl sm:text-5xl font-bold text-foreground mb-4'>
							What Drives Us Forward
						</h2>
						<p className='text-xl text-foreground/70 max-w-2xl mx-auto'>
							Our core values guide everything we do and shape the learning
							experience we create.
						</p>
					</div>

					<div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6'>
						{values.map((value, index) => (
							<div
								key={index}
								className='bg-gray-50 rounded-2xl p-8 hover:shadow-lg hover:bg-white transition group'>
								<div className='w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition'>
									<Icon
										icon={value.icon}
										className='text-3xl text-primary group-hover:text-white transition'
									/>
								</div>
								<h3 className='text-2xl font-bold text-foreground mb-3'>
									{value.title}
								</h3>
								<p className='text-foreground/70'>{value.description}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Testimonials */}
			<TestimonialsSection />

			{/* FAQ */}
			<FAQSection />

			{/* CTA Section */}
			<section className='py-24 bg-primary relative overflow-hidden'>
				<div className='absolute inset-0 bg-[url("/pattern.svg")] opacity-10' />

				<div className='px-4 md:px-14 relative z-10'>
					<div className='max-w-4xl mx-auto text-center'>
						<h2 className='text-4xl sm:text-5xl font-bold text-white mb-6'>
							Ready To Start Your Journey?
						</h2>
						<p className='text-xl text-white/90 mb-8'>
							Join thousands of students who have transformed their careers
							through our programs.
						</p>
						<div className='flex flex-col sm:flex-row gap-4 justify-center'>
							<Link
								href='/programs'
								className='px-8 py-4 bg-white text-primary rounded-xl font-semibold hover:bg-gray-100 transition text-lg'>
								View Programs
							</Link>
							<Link
								href='/contact'
								className='px-8 py-4 bg-white/10 text-white border-2 border-white rounded-xl font-semibold hover:bg-white/20 transition text-lg'>
								Contact Us
							</Link>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default About;
