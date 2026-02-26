'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { courses } from '@/app/utils/utils';

const CoursesSection = () => {
	const [activeTab, setActiveTab] = useState('full');

	const filteredCourses = courses.filter((c) =>
		activeTab === 'full' ? c.type === 'full' : c.type === 'nano',
	);

	return (
		<section className='bg-[#F3F0F9] py-20'>
			<div className='px-4 md:px-14'>
				{/* Header */}
				<div className='flex flex-col items-center text-center mb-10'>
					<h2 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-6'>
						Our programs
					</h2>

					{/* Filter Tabs */}
					<div className='flex items-center gap-2 bg-white px-2 rounded-full py-2'>
						<button
							onClick={() => setActiveTab('full')}
							className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors duration-200 cursor-pointer ${
								activeTab === 'full' ? 'bg-primary text-white' : ''
							}`}>
							Full programs
						</button>
						<button
							onClick={() => setActiveTab('nano')}
							className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors duration-200 cursor-pointer ${
								activeTab === 'nano' ? 'bg-primary text-white' : ''
							}`}>
							Nano degrees
						</button>
					</div>
				</div>

				{/* Course Cards */}
				<div className='flex  flex-col md:flex-row items-stretch justify-center gap-6'>
					{filteredCourses.map((course) => (
						<div
							key={course.id}
							className='bg-white h-auto border max-w-100 border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300'>
							{/* Image */}
							<div className='relative h-52 w-full'>
								<Image
									src={course.image}
									alt={course.title}
									fill
									className='object-cover'
								/>
								{/* Price Badge */}
								<span className='absolute top-3 right-3 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full'>
									₦{course.price} / Month
								</span>
							</div>

							{/* Content */}
							<div className='p-5 space-y-3'>
								<h3 className='text-lg font-bold text-gray-900'>
									{course.title}
								</h3>

								{/* Duration */}
								<div className='flex items-center gap-1.5 text-sm text-gray-500'>
									<Icon
										icon='ion:time-outline'
										className='text-base'
									/>
									<span>{course.duration}</span>
								</div>

								{/* Description */}
								<p className='text-sm text-gray-500 leading-relaxed line-clamp-3'>
									{course.description}
								</p>

								{/* CTA */}
								<Link
									href={`/programs/${course.id}`}
									className='block w-full mt-2 border border-primary text-primary py-2.5 rounded-xl font-semibold text-sm text-center hover:bg-primary hover:text-white transition-colors duration-200 bg-[#673AB714]'>
									Enroll now
								</Link>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default CoursesSection;
