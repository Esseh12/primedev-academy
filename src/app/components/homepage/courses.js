import Image from 'next/image';
import { courses } from '@/app/utils/utils';

const Courses = () => {
	return (
		<section className='my-24 mx-10'>
			<div className='text-center mb-10'>
				<p className='text-purple-600 font-medium'>Courses Offered</p>
				<h2 className='text-2xl md:text-3xl font-bold mt-2'>
					Choose your path and start learning today
				</h2>
			</div>

			<div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto'>
				{courses.map((course) => (
					<div
						key={course.id}
						className='bg-purple-100 rounded-2xl shadow-lg p-6 flex flex-col '>
						<div className='w-full h-48 relative mb-7'>
							<Image
								src={course.icon}
								alt={course.title}
								fill
								className='object-contain w-auto h-auto'
							/>
						</div>

						<h3 className='text-lg font-semibold mt-2'>{course.title}</h3>
						<p className='text-gray-600 mt-2'>{course.description}</p>

						<p className='font-bold text-lg mt-4'>{course.price}</p>

						<button className='mt-6 bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition'>
							Enroll in {course.title.split(' ')[0]}
						</button>
					</div>
				))}
			</div>
		</section>
	);
};

export default Courses;
