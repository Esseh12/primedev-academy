'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { courses } from '@/app/utils/utils';
import { notFound } from 'next/navigation';

export default function ProgramDetails() {
	const params = useParams();
	const course = courses.find((c) => c.id === Number(params.id));

	if (!course) {
		notFound();
	}

	return (
		<div className='min-h-screen bg-white'>
			{/* Hero Section */}
			<section className='relative bg-gradient-to-br from-primary/10 via-white to-primary/5 py-20'>
				<div className='px-4 md:px-14'>
					{/* Breadcrumb */}
					<div className='flex items-center gap-2 text-sm text-foreground/60 mb-6'>
						<Link
							href='/'
							className='hover:text-primary transition'>
							Home
						</Link>
						<Icon
							icon='lucide:chevron-right'
							className='text-xs'
						/>
						<Link
							href='/programs'
							className='hover:text-primary transition'>
							Programs
						</Link>
						<Icon
							icon='lucide:chevron-right'
							className='text-xs'
						/>
						<span className='text-foreground'>{course.title}</span>
					</div>

					<div className='grid lg:grid-cols-3 gap-12'>
						{/* Left Content */}
						<div className='lg:col-span-2'>
							<div className='inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-sm font-semibold text-primary mb-6'>
								<Icon icon='lucide:book-open' />
								<span>{course.category}</span>
							</div>

							<h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6'>
								{course.title}
							</h1>

							<p className='text-xl text-foreground/70 mb-8'>
								{course.longDescription}
							</p>

							{/* Quick Stats */}
							<div className='flex flex-wrap gap-6 mb-8'>
								<div className='flex items-center gap-2'>
									<Icon
										icon='lucide:clock'
										className='text-2xl text-primary'
									/>
									<div>
										<div className='text-sm text-foreground/60'>Duration</div>
										<div className='font-semibold'>{course.duration}</div>
									</div>
								</div>

								<div className='flex items-center gap-2'>
									<Icon
										icon='lucide:bar-chart'
										className='text-2xl text-primary'
									/>
									<div>
										<div className='text-sm text-foreground/60'>Level</div>
										<div className='font-semibold'>{course.level}</div>
									</div>
								</div>

								<div className='flex items-center gap-2'>
									<Icon
										icon='lucide:users'
										className='text-2xl text-primary'
									/>
									{/* <div>
										<div className='text-sm text-foreground/60'>Students</div>
										<div className='font-semibold'>{course.students}</div>
									</div> */}
								</div>
							</div>
						</div>

						{/* Right Sidebar - Enrollment Card */}
						<div className='lg:col-span-1'>
							<div className='bg-white rounded-2xl shadow-xl p-6 sticky top-24'>
								<div className='relative h-48 w-full rounded-xl overflow-hidden mb-6'>
									<Image
										src={course.image}
										alt={course.title}
										fill
										className='object-cover'
									/>
								</div>

								<div className='text-center mb-6'>
									<div className='text-4xl font-bold text-primary mb-2'>
										{course.price}
									</div>
									<p className='text-foreground/60'>One-time payment</p>
								</div>

								<button className='w-full bg-primary text-white py-4 rounded-xl font-semibold hover:bg-primary/90 transition mb-4'>
									Enroll Now
								</button>

								<button className='w-full bg-primary/10 text-primary py-4 rounded-xl font-semibold hover:bg-primary/20 transition'>
									Download Curriculum
								</button>

								<div className='mt-6 pt-6 border-t space-y-3'>
									<div className='flex items-center gap-3 text-sm'>
										<Icon
											icon='lucide:check-circle'
											className='text-primary'
										/>
										<span>Lifetime access</span>
									</div>
									<div className='flex items-center gap-3 text-sm'>
										<Icon
											icon='lucide:check-circle'
											className='text-primary'
										/>
										<span>Certificate of completion</span>
									</div>
									<div className='flex items-center gap-3 text-sm'>
										<Icon
											icon='lucide:check-circle'
											className='text-primary'
										/>
										<span>Career support</span>
									</div>
									<div className='flex items-center gap-3 text-sm'>
										<Icon
											icon='lucide:check-circle'
											className='text-primary'
										/>
										<span>Community access</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Main Content */}
			<section className='py-16'>
				<div className='px-4 md:px-14'>
					<div className='grid lg:grid-cols-3 gap-12'>
						{/* Left Content */}
						<div className='lg:col-span-2 space-y-12'>
							{/* What You'll Learn */}
							<div>
								<h2 className='text-3xl font-bold text-foreground mb-6'>
									What You&apos;ll Learn
								</h2>
								<div className='grid sm:grid-cols-2 gap-4'>
									{course.outcomes?.map((outcome, index) => (
										<div
											key={index}
											className='flex items-start gap-3'>
											<Icon
												icon='lucide:check-circle'
												className='text-primary text-xl mt-1 flex-shrink-0'
											/>
											<span className='text-foreground/80'>{outcome}</span>
										</div>
									))}
								</div>
							</div>

							{/* Curriculum */}
							<div>
								<h2 className='text-3xl font-bold text-foreground mb-6'>
									Course Curriculum
								</h2>
								<div className='space-y-4'>
									{course.curriculum?.map((module, index) => (
										<div
											key={index}
											className='bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition'>
											<div className='flex items-start justify-between mb-3'>
												<div>
													<div className='text-sm text-primary font-semibold mb-1'>
														{module.week}
													</div>
													<h3 className='text-xl font-bold text-foreground'>
														{module.title}
													</h3>
												</div>
												<Icon
													icon='lucide:chevron-down'
													className='text-2xl text-foreground/40'
												/>
											</div>
											<ul className='space-y-2'>
												{module.topics.map((topic, topicIndex) => (
													<li
														key={topicIndex}
														className='flex items-center gap-2 text-foreground/70'>
														<Icon
															icon='lucide:circle'
															className='text-xs text-primary'
														/>
														<span>{topic}</span>
													</li>
												))}
											</ul>
										</div>
									))}
								</div>
							</div>

							{/* Prerequisites */}
							<div>
								<h2 className='text-3xl font-bold text-foreground mb-6'>
									Prerequisites
								</h2>
								<div className='bg-blue-50 border-l-4 border-blue-500 rounded-xl p-6'>
									<ul className='space-y-2'>
										{course.prerequisites?.map((prereq, index) => (
											<li
												key={index}
												className='flex items-start gap-3'>
												<Icon
													icon='lucide:info'
													className='text-blue-500 text-xl mt-0.5 flex-shrink-0'
												/>
												<span className='text-foreground/80'>{prereq}</span>
											</li>
										))}
									</ul>
								</div>
							</div>
						</div>

						{/* Right Sidebar */}
						<div className='lg:col-span-1'>
							{/* Instructor */}
							<div className='bg-white rounded-2xl shadow-lg p-6 mb-6'>
								<h3 className='text-xl font-bold text-foreground mb-4'>
									Your Instructor
								</h3>
								<div className='relative h-48 w-full rounded-xl overflow-hidden mb-4'>
									<Image
										src={course.instructor?.image || '/default-instructor.jpg'}
										alt={course.instructor?.name || 'Instructor'}
										fill
										className='object-cover'
									/>
								</div>
								<h4 className='text-lg font-bold text-foreground mb-1'>
									{course.instructor?.name}
								</h4>
								<p className='text-primary font-semibold mb-2'>
									{course.instructor?.role}
								</p>
								<p className='text-foreground/70 text-sm'>
									{course.instructor?.bio}
								</p>
							</div>

							{/* Share */}
							<div className='bg-white rounded-2xl shadow-lg p-6'>
								<h3 className='text-xl font-bold text-foreground mb-4'>
									Share This Program
								</h3>
								<div className='flex gap-3'>
									<button className='flex-1 p-3 border-2 border-gray-200 rounded-xl hover:border-primary transition'>
										<Icon
											icon='lucide:facebook'
											className='text-2xl mx-auto'
										/>
									</button>
									<button className='flex-1 p-3 border-2 border-gray-200 rounded-xl hover:border-primary transition'>
										<Icon
											icon='lucide:twitter'
											className='text-2xl mx-auto'
										/>
									</button>
									<button className='flex-1 p-3 border-2 border-gray-200 rounded-xl hover:border-primary transition'>
										<Icon
											icon='lucide:linkedin'
											className='text-2xl mx-auto'
										/>
									</button>
									<button className='flex-1 p-3 border-2 border-gray-200 rounded-xl hover:border-primary transition'>
										<Icon
											icon='lucide:link'
											className='text-2xl mx-auto'
										/>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Related Programs */}
			<section className='py-16 bg-gray-50'>
				<div className='px-4 md:px-14'>
					<h2 className='text-3xl font-bold text-foreground mb-8'>
						Related Programs
					</h2>
					<div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
						{courses
							.filter(
								(c) => c.id !== course.id && c.category === course.category
							)
							.slice(0, 3)
							.map((relatedCourse) => (
								<Link
									key={relatedCourse.id}
									href={`/programs/${relatedCourse.id}`}>
									<div className='group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition'>
										<div className='relative h-48 w-full'>
											<Image
												src={relatedCourse.image}
												alt={relatedCourse.title}
												fill
												className='object-cover'
											/>
											<div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent' />
											<span className='absolute top-4 left-4 bg-white/95 px-3 py-1 rounded-full text-xs font-semibold'>
												{relatedCourse.category}
											</span>
										</div>
										<div className='p-6'>
											<h3 className='text-xl font-bold group-hover:text-primary transition mb-2'>
												{relatedCourse.title}
											</h3>
											<p className='text-foreground/70 text-sm mb-4 line-clamp-2'>
												{relatedCourse.description}
											</p>
											<div className='flex items-center justify-between'>
												<span className='text-sm text-foreground/60'>
													{relatedCourse.duration}
												</span>
												<span className='font-bold text-primary'>
													{relatedCourse.price}
												</span>
											</div>
										</div>
									</div>
								</Link>
							))}
					</div>
				</div>
			</section>
		</div>
	);
}
