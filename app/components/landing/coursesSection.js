'use client';
import { useState } from 'react';
import { Icon } from '@iconify/react';
import { courses } from '@/app/utils/utils';

const CoursesSection = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const nextSlide = () => {
		setCurrentIndex((prev) => (prev + 1) % courses.length);
	};

	const prevSlide = () => {
		setCurrentIndex((prev) => (prev - 1 + courses.length) % courses.length);
	};

	// Calculate which courses to show (current + next 2)
	const getVisibleCourses = () => {
		const visible = [];
		for (let i = 0; i < 3; i++) {
			visible.push(courses[(currentIndex + i) % courses.length]);
		}
		return visible;
	};

	return (
		<section className='relative py-24 overflow-hidden'>
			<div className='relative px-4 md:px-14'>
				{/* Header */}
				<div className='mb-16'>
					<div className='inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-sm font-semibold text-primary mb-6'>
						<Icon
							icon='lucide:book-open'
							className='text-base'
						/>
						<span>Our Programs</span>
					</div>
					<div className='flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6'>
						<div>
							<h2 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4'>
								Explore Our
								<span className='block text-primary mt-2'>
									Featured Courses
								</span>
							</h2>
							<p className='text-xl text-foreground/70 max-w-2xl font-light leading-relaxed'>
								Transform your career with our comprehensive bootcamp programs
								designed by industry experts
							</p>
						</div>

						{/* Navigation Buttons */}
						<div className='flex items-center gap-3'>
							<button
								onClick={prevSlide}
								className='w-12 h-12 rounded-xl bg-white border-2 border-gray-200 flex items-center justify-center hover:border-primary hover:bg-primary/5 transition-all duration-300 group'
								aria-label='Previous course'>
								<Icon
									icon='lucide:arrow-left'
									className='text-2xl text-foreground group-hover:text-primary transition-colors'
								/>
							</button>
							<button
								onClick={nextSlide}
								className='w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group'
								style={{ backgroundColor: '#c1ff72' }}
								aria-label='Next course'>
								<Icon
									icon='lucide:arrow-right'
									className='text-2xl text-foreground group-hover:scale-110 transition-transform'
								/>
							</button>
						</div>
					</div>
				</div>

				{/* Courses Carousel */}
				<div className='relative'>
					<div className='grid lg:grid-cols-3 gap-6'>
						{getVisibleCourses().map((course, index) => (
							<div
								key={`${course.id}-${currentIndex}`}
								className='group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer'
								style={{
									animation: `slideIn 0.5s ease-out ${index * 0.1}s both`,
								}}>
								{/* Image */}
								<div className='relative h-64 overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5'>
									<div className='absolute inset-0 flex items-center justify-center'>
										<Icon
											icon={
												course.category === 'Development'
													? 'lucide:code-2'
													: course.category === 'Design'
													? 'lucide:palette'
													: 'lucide:brain'
											}
											className='text-9xl text-primary/20'
										/>
									</div>
									<div className='absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/70 transition-all duration-500'></div>

									{/* Category Badge */}
									<div className='absolute top-4 left-4'>
										<span className='inline-block bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-foreground'>
											{course.category}
										</span>
									</div>

									{/* Duration Badge */}
									<div className='absolute bottom-4 left-4 flex items-center gap-2 text-white'>
										<Icon
											icon='lucide:clock'
											className='text-lg'
										/>
										<span className='text-sm font-medium'>
											{course.duration}
										</span>
									</div>
								</div>

								{/* Content */}
								<div className='p-6 space-y-4'>
									<h3 className='text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300'>
										{course.title}
									</h3>
									<p className='text-foreground/70 leading-relaxed'>
										{course.description}
									</p>

									{/* Stats */}
									<div className='flex items-center gap-6 pt-2 text-sm text-foreground/60'>
										<div className='flex items-center gap-2'>
											<Icon
												icon='lucide:users'
												className='text-lg'
											/>
											<span>{course.students} students</span>
										</div>
										<div className='flex items-center gap-2'>
											<Icon
												icon='lucide:signal'
												className='text-lg'
											/>
											<span>{course.level}</span>
										</div>
									</div>

									{/* CTA Button */}
									<button className='w-full mt-4 flex items-center justify-center gap-2 bg-primary/5 text-primary px-6 py-3 rounded-xl font-semibold hover:bg-primary hover:text-white transition-all duration-300 group/btn'>
										<span>Learn More</span>
										<Icon
											icon='lucide:arrow-right'
											className='text-lg group-hover/btn:translate-x-1 transition-transform'
										/>
									</button>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Progress Dots */}
				<div className='flex items-center justify-center gap-2 mt-12'>
					{courses.map((_, index) => (
						<button
							key={index}
							onClick={() => setCurrentIndex(index)}
							className={`h-2 rounded-full transition-all duration-300 ${
								index === currentIndex
									? 'w-8 bg-primary'
									: 'w-2 bg-gray-300 hover:bg-gray-400'
							}`}
							aria-label={`Go to course ${index + 1}`}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default CoursesSection;
