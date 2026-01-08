'use client';

import { useState } from 'react';
import { Icon } from '@iconify/react';
import { faqs } from '@/app/utils/utils';

const FAQSection = () => {
	const [openId, setOpenId] = useState(null);

	const toggleFAQ = (id) => {
		setOpenId(openId === id ? null : id);
	};

	return (
		<section className='relative bg-linear-to-br from-gray-50 via-white to-gray-50 py-24 overflow-hidden'>
			{/* Background Decoration */}
			<div className='absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl'></div>
			<div
				className='absolute bottom-20 left-0 w-80 h-80 rounded-full blur-3xl'
				style={{ backgroundColor: 'rgba(193, 255, 114, 0.1)' }}></div>

			<div className='relative px-4 md:px-14 max-w-6xl mx-auto'>
				{/* Header */}
				<div className='text-center mb-16'>
					<div className='inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-sm font-semibold text-primary mb-6'>
						<Icon
							icon='lucide:help-circle'
							className='text-base'
						/>
						<span>FAQs</span>
					</div>
					<h2 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4'>
						Frequently Asked
						<span className='block text-primary mt-2'>Questions</span>
					</h2>
					<p className='text-xl text-foreground/70 max-w-3xl mx-auto font-light leading-relaxed'>
						Still you have any questions? Contact our Team via
						<a
							href='mailto:primedevng@gmail.com'
							className='text-primary font-semibold hover:underline'>
							{' '}
							primedevng@gmail.com
						</a>
					</p>
				</div>

				{/* FAQ Accordion */}
				<div className='space-y-4'>
					{faqs.map((faq, index) => (
						<div
							key={faq.id}
							className='group bg-white rounded-2xl border-2 border-gray-100 hover:border-primary/30 transition-all duration-300 overflow-hidden'
							style={{
								animation: `fadeInUp 0.5s ease-out ${index * 0.05}s both`,
							}}>
							<button
								onClick={() => toggleFAQ(faq.id)}
								className='w-full flex items-center justify-between p-6 md:p-8 text-left transition-all duration-300'
								aria-expanded={openId === faq.id}>
								<span className='text-lg md:text-xl font-bold text-foreground pr-8 group-hover:text-primary transition-colors'>
									{faq.question}
								</span>
								<div
									className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
										openId === faq.id ? 'rotate-180' : 'rotate-0'
									}`}
									style={{
										backgroundColor: openId === faq.id ? '#c1ff72' : '#f3f4f6',
									}}>
									<Icon
										icon='lucide:chevron-down'
										className='text-2xl text-foreground'
									/>
								</div>
							</button>

							<div
								className={`transition-all duration-300 ease-in-out ${
									openId === faq.id
										? 'max-h-96 opacity-100'
										: 'max-h-0 opacity-0'
								} overflow-hidden`}>
								<div className='px-6 md:px-8 pb-6 md:pb-8'>
									<div className='pt-4 border-t border-gray-100'>
										<p className='text-foreground/70 leading-relaxed text-base md:text-lg'>
											{faq.answer}
										</p>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* CTA Card */}
				<div className='mt-16 bg-linear-to-br from-primary to-primary/90 rounded-3xl p-8 md:p-12 relative overflow-hidden'>
					{/* Decorative Elements */}
					<div className='absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl'></div>
					<div className='absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl'></div>

					<div className='relative text-center'>
						<h3 className='text-3xl md:text-4xl font-bold text-white mb-4'>
							Still Have Questions?
						</h3>
						<p className='text-white/90 text-lg mb-8 max-w-2xl mx-auto'>
							Can&apos;t find the answer you&apos;re looking for? Our team is
							here to help you with any questions about our programs.
						</p>
						<div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
							<a
								href='mailto:primedevng@gmail.com'
								className='group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300'
								style={{ backgroundColor: '#c1ff72' }}>
								<Icon
									icon='lucide:message-circle'
									className='text-xl'
								/>
								<span className='text-foreground'>Contact Support</span>
								{/* <Icon
									icon='lucide:arrow-right'
									className='text-xl group-hover:translate-x-1 transition-transform'
								/> */}
							</a>
							{/* <button className='inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold text-lg border-2 border-white/30 hover:bg-white/20 transition-all duration-300'>
									<Icon
										icon='lucide:phone'
										className='text-xl'
									/>
									<span>Schedule a Call</span>
								</button> */}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FAQSection;
