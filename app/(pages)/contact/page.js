'use client';

import Image from 'next/image';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import { contactInfo } from '@/app/utils/utils';

const Contact = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	});

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Handle form submission logic here
		console.log('Form submitted:', formData);
		alert('Message sent successfully!');
	};

	return (
		<div className='min-h-screen bg-white'>
			{/* Hero Section with Image */}
			<section className='relative bg-linear-to-br from-primary/10 via-white to-primary/5 py-20 overflow-hidden'>
				<div className='px-4 md:px-14'>
					<div className='grid lg:grid-cols-2 gap-12 items-center'>
						{/* Content */}
						<div>
							<div className='inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-sm font-semibold text-primary mb-6'>
								<Icon icon='lucide:message-circle' />
								<span>Get In Touch</span>
							</div>

							<h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6'>
								Let&apos;s Start a
								<span className='block text-primary mt-2'>Conversation</span>
							</h1>
							<p className='text-xl text-foreground/70 max-w-2xl font-light'>
								Have questions about our programs? Want to learn more about how
								we can help you achieve your tech career goals? We&apos;re here
								to help.
							</p>
						</div>

						{/* Image */}
						<div className='relative h-96 lg:h-125 rounded-3xl overflow-hidden shadow-2xl'>
							<Image
								src='/contact-hero.jpg'
								alt='Contact Us'
								fill
								className='object-cover'
							/>
							<div className='absolute inset-0 bg-linear-to-t from-black/30 to-transparent' />
						</div>
					</div>
				</div>
			</section>

			{/* Contact Info Cards */}
			<section className='py-24 bg-white'>
				<div className='px-4 md:px-14'>
					{/* Contact Form Section */}
					<div className='grid lg:grid-cols-2 gap-12 items-start'>
						{/* Additional Info */}
						<div className='space-y-8'>
							<div>
								<div className='inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-sm font-semibold text-primary mb-6'>
									<Icon icon='lucide:help-circle' />
									<span>Why Contact Us?</span>
								</div>

								<h2 className='text-3xl sm:text-4xl font-bold text-foreground mb-6'>
									We&apos;re Here to Help
								</h2>

								<div className='space-y-6'>
									<div className='flex gap-4'>
										<div className='w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0'>
											<Icon
												icon='lucide:graduation-cap'
												className='text-2xl text-primary'
											/>
										</div>
										<div>
											<h3 className='text-xl font-bold text-foreground mb-2'>
												Program Inquiries
											</h3>
											<p className='text-foreground/70'>
												Learn more about our courses, curriculum, and enrollment
												process.
											</p>
										</div>
									</div>

									<div className='flex gap-4'>
										<div className='w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0'>
											<Icon
												icon='lucide:users'
												className='text-2xl text-primary'
											/>
										</div>
										<div>
											<h3 className='text-xl font-bold text-foreground mb-2'>
												Partnership Opportunities
											</h3>
											<p className='text-foreground/70'>
												Interested in collaborating? Let&apos;s explore how we
												can work together.
											</p>
										</div>
									</div>

									<div className='flex gap-4'>
										<div className='w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0'>
											<Icon
												icon='lucide:headphones'
												className='text-2xl text-primary'
											/>
										</div>
										<div>
											<h3 className='text-xl font-bold text-foreground mb-2'>
												Technical Support
											</h3>
											<p className='text-foreground/70'>
												Need help with your account or experiencing technical
												issues?
											</p>
										</div>
									</div>

									<div className='flex gap-4'>
										<div className='w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0'>
											<Icon
												icon='lucide:briefcase'
												className='text-2xl text-primary'
											/>
										</div>
										<div>
											<h3 className='text-xl font-bold text-foreground mb-2'>
												Career Services
											</h3>
											<p className='text-foreground/70'>
												Questions about our job placement support and career
												guidance?
											</p>
										</div>
									</div>
								</div>
							</div>

							{/* Social Links */}
							<div className='bg-primary/5 rounded-2xl p-8'>
								<h3 className='text-xl font-bold text-foreground mb-4'>
									Connect With Us
								</h3>
								<p className='text-foreground/70 mb-6'>
									Follow us on social media for updates, tips, and community
									highlights.
								</p>
								<div className='flex gap-4'>
									<a
										href='#'
										className='w-12 h-12 rounded-xl bg-white hover:bg-primary hover:text-white transition flex items-center justify-center'>
										<Icon
											icon='lucide:twitter'
											className='text-xl'
										/>
									</a>
									<a
										href='#'
										className='w-12 h-12 rounded-xl bg-white hover:bg-primary hover:text-white transition flex items-center justify-center'>
										<Icon
											icon='lucide:linkedin'
											className='text-xl'
										/>
									</a>
									<a
										href='#'
										className='w-12 h-12 rounded-xl bg-white hover:bg-primary hover:text-white transition flex items-center justify-center'>
										<Icon
											icon='lucide:facebook'
											className='text-xl'
										/>
									</a>
									<a
										href='#'
										className='w-12 h-12 rounded-xl bg-white hover:bg-primary hover:text-white transition flex items-center justify-center'>
										<Icon
											icon='lucide:instagram'
											className='text-xl'
										/>
									</a>
								</div>
							</div>
						</div>

						{/* Form */}
						<div className='bg-gray-50 rounded-3xl p-8 md:p-12'>
							<div className='inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-sm font-semibold text-primary mb-6'>
								<Icon icon='lucide:send' />
								<span>Send Message</span>
							</div>

							<h2 className='text-3xl sm:text-4xl font-bold text-foreground mb-4'>
								Drop Us a Message
							</h2>
							<p className='text-foreground/70 mb-8'>
								Fill out the form below and we&apos;ll get back to you within 24
								hours.
							</p>

							<div className='space-y-6'>
								<div>
									<label className='block text-sm font-semibold text-foreground mb-2'>
										Full Name
									</label>
									<input
										type='text'
										name='name'
										value={formData.name}
										onChange={handleChange}
										className='w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition'
										placeholder='John Doe'
										required
									/>
								</div>

								<div>
									<label className='block text-sm font-semibold text-foreground mb-2'>
										Email Address
									</label>
									<input
										type='email'
										name='email'
										value={formData.email}
										onChange={handleChange}
										className='w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition'
										placeholder='john@example.com'
										required
									/>
								</div>

								<div>
									<label className='block text-sm font-semibold text-foreground mb-2'>
										Subject
									</label>
									<input
										type='text'
										name='subject'
										value={formData.subject}
										onChange={handleChange}
										className='w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition'
										placeholder='How can we help?'
										required
									/>
								</div>

								<div>
									<label className='block text-sm font-semibold text-foreground mb-2'>
										Message
									</label>
									<textarea
										name='message'
										value={formData.message}
										onChange={handleChange}
										rows='5'
										className='w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition resize-none'
										placeholder='Tell us more about your inquiry...'
										required
									/>
								</div>

								<button
									type='button'
									onClick={handleSubmit}
									className='w-full bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary/90 transition flex items-center justify-center gap-2 text-lg'>
									<span>Send Message</span>
									<Icon
										icon='lucide:arrow-right'
										className='text-xl'
									/>
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Contact;
