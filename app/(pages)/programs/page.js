'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { courses } from '@/app/utils/utils';

const Programs = () => {
	const [selectedCategory, setSelectedCategory] = useState('All');
	const [selectedLevel, setSelectedLevel] = useState('All');

	const categories = [
		'All',
		...new Set(courses.map((course) => course.category)),
	];
	const levels = ['All', ...new Set(courses.map((course) => course.level))];

	const filteredCourses = courses.filter((course) => {
		const matchesCategory =
			selectedCategory === 'All' || course.category === selectedCategory;
		const matchesLevel =
			selectedLevel === 'All' || course.level === selectedLevel;
		return matchesCategory && matchesLevel;
	});

	return (
		<div className='min-h-screen'>
			{/* Hero Section */}
			<section className='bg-linear-to-br from-primary/10 via-white to-primary/5 py-20'>
				<div className='px-4 md:px-14'>
					<div className='inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-sm font-semibold text-primary mb-6'>
						<Icon icon='lucide:book-open' />
						<span>All Programs</span>
					</div>

					<h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6'>
						Our Programmes
					</h1>
					<p className='text-xl text-foreground/70 max-w-3xl font-light mb-6 md:mb-14'>
						Discover our comprehensive range of industry-focused programs
						designed to transform your career and unlock your potential.
					</p>
				</div>
			</section>

			{/* Filters and Courses */}
			<section className='py-16'>
				<div className='px-4 md:px-14'>
					<div className='flex flex-col lg:flex-row gap-8'>
						{/* Sidebar Filters */}
						<aside className='lg:w-64 shrink-0'>
							<div className='bg-white rounded-2xl p-6 shadow-sm sticky top-24'>
								<h3 className='text-lg font-bold mb-6 flex items-center gap-2'>
									<Icon icon='lucide:filter' />
									Filter by
								</h3>

								{/* Category Filter */}
								<div className='mb-8'>
									<h4 className='text-sm font-semibold text-foreground/70 mb-3 uppercase tracking-wide'>
										Category
									</h4>
									<div className='space-y-2'>
										{categories.map((category) => (
											<label
												key={category}
												className='flex items-center gap-3 cursor-pointer group'>
												<input
													type='radio'
													name='category'
													checked={selectedCategory === category}
													onChange={() => setSelectedCategory(category)}
													className='w-4 h-4 text-primary accent-primary cursor-pointer'
												/>
												<span className='text-foreground group-hover:text-primary transition'>
													{category}
												</span>
											</label>
										))}
									</div>
								</div>

								{/* Level Filter */}
								<div className='mb-8'>
									<h4 className='text-sm font-semibold text-foreground/70 mb-3 uppercase tracking-wide'>
										Level
									</h4>
									<div className='space-y-2'>
										{levels.map((level) => (
											<label
												key={level}
												className='flex items-center gap-3 cursor-pointer group'>
												<input
													type='radio'
													name='level'
													checked={selectedLevel === level}
													onChange={() => setSelectedLevel(level)}
													className='w-4 h-4 text-primary accent-primary cursor-pointer'
												/>
												<span className='text-foreground group-hover:text-primary transition'>
													{level}
												</span>
											</label>
										))}
									</div>
								</div>

								{/* Reset Button */}
								{(selectedCategory !== 'All' || selectedLevel !== 'All') && (
									<button
										onClick={() => {
											setSelectedCategory('All');
											setSelectedLevel('All');
										}}
										className='w-full mt-6 py-2 text-sm text-primary hover:text-white border-2 border-primary hover:bg-primary rounded-lg transition font-semibold'>
										Reset Filters
									</button>
								)}
							</div>
						</aside>

						{/* Courses Grid */}
						<div className='flex-1'>
							<div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
								{filteredCourses.map((course) => (
									<div
										key={course.id}
										className='group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition'>
										{/* Image */}
										<div className='relative h-64 w-full'>
											<Image
												src={course.image}
												alt={course.title}
												fill
												className='object-cover'
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

											{/* Duration */}
											<div className='absolute bottom-4 left-4 flex items-center gap-2 text-white text-sm'>
												<Icon icon='lucide:clock' />
												<span>{course.duration}</span>
											</div>
										</div>

										{/* Content */}
										<div className='p-6 space-y-4'>
											<h3 className='text-2xl font-bold group-hover:text-primary transition'>
												{course.title}
											</h3>

											<p className='text-foreground/70'>{course.description}</p>

											{/* <div className='flex items-center justify-between text-sm text-foreground/60'>
												<div className='flex items-center gap-2'>
													<Icon icon='lucide:users' />
													<span>{course.students} students</span>
												</div>

												<span className='font-semibold text-foreground'>
													{course.price}
												</span>
											</div> */}

											<Link href={`/programs/${course.id}`}>
												<button className='w-full mt-4 bg-primary/10 text-primary py-3 rounded-xl font-semibold hover:bg-primary hover:text-white transition'>
													Learn More
												</button>
											</Link>
										</div>
									</div>
								))}
							</div>

							{/* No Results */}
							{filteredCourses.length === 0 && (
								<div className='text-center py-16'>
									<Icon
										icon='lucide:search-x'
										className='text-6xl text-foreground/20 mx-auto mb-4'
									/>
									<h3 className='text-2xl font-bold text-foreground mb-2'>
										No programs found
									</h3>
									<p className='text-foreground/70 mb-6'>
										Try adjusting your filters to see more results
									</p>
									<button
										onClick={() => {
											setSelectedCategory('All');
											setSelectedLevel('All');
										}}
										className='px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition'>
										Reset Filters
									</button>
								</div>
							)}
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Programs;
