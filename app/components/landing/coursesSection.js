'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

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

	const getVisibleCourses = () => {
		const visible = [];
		for (let i = 0; i < 3; i++) {
			visible.push(courses[(currentIndex + i) % courses.length]);
		}
		return visible;
	};

	return (
		<section className='relative bg-white py-24 overflow-hidden'>
			<div className='relative px-4 md:px-14'>
				{/* Header */}
				<div className='mb-16'>
					<div className='inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-sm font-semibold text-primary mb-6'>
						<Icon icon='lucide:book-open' />
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
							<p className='text-xl text-foreground/70 max-w-2xl font-light'>
								Transform your career with our industry-focused programs
							</p>
						</div>

						{/* Nav buttons */}
						<div className='flex items-center gap-3'>
							<button
								onClick={prevSlide}
								className='w-12 h-12 rounded-xl bg-white border-2 border-gray-200 flex items-center justify-center hover:border-primary transition'>
								<Icon
									icon='lucide:arrow-left'
									className='text-xl'
								/>
							</button>

							<button
								onClick={nextSlide}
								className='w-12 h-12 rounded-xl flex items-center justify-center'
								style={{ backgroundColor: '#c1ff72' }}>
								<Icon
									icon='lucide:arrow-right'
									className='text-xl'
								/>
							</button>
						</div>
					</div>
				</div>
				{/* Courses */}
				<div className='grid lg:grid-cols-3 gap-6'>
					{getVisibleCourses().map((course, index) => (
						<div
							key={`${course.id}-${currentIndex}`}
							className='group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition'>
							{/* Image */}
							<div className='relative h-64 w-full'>
								<Image
									src={course.image}
									alt={course.title}
									fill
									className='object-cover'
									priority={index === 0}
								/>

								<div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent' />

								{/* Category */}
								<span className='absolute top-4 left-4 bg-white/95 px-3 py-1 rounded-full text-xs font-semibold'>
									{course.category}
								</span>

								{/* Price */}
								<span className='absolute top-4 right-4 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold'>
									{course.price} / Month
								</span>
							</div>

							{/* Content */}
							<div className='p-6 space-y-4'>
								<h3 className='text-2xl font-bold group-hover:text-primary transition'>
									{course.title}
								</h3>

								<p className='text-foreground/70'>{course.description}</p>

								<div className='flex items-center justify-between text-sm text-foreground/60'>
									<div className='flex items-center gap-2'>
										<Icon icon='ion:time-outline' />
										<span>{course.duration}</span>
									</div>
								</div>

								<Link
									href={`/programs/${course.id}`}
									className='block w-full mt-4 bg-primary/10 text-primary py-3 rounded-xl font-semibold text-center hover:bg-primary hover:text-white transition'>
									Learn More
								</Link>
							</div>
						</div>
					))}
				</div>
				{/* Dots */}
				<div className='flex justify-center gap-2 mt-12'>
					{courses.map((_, index) => (
						<button
							key={index}
							onClick={() => setCurrentIndex(index)}
							className={`h-2 rounded-full transition ${
								index === currentIndex ? 'w-8 bg-primary' : 'w-2 bg-gray-300'
							}`}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default CoursesSection;
