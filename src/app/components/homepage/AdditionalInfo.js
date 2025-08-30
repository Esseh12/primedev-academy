import {
	AcademicCapIcon,
	UserGroupIcon,
	BookOpenIcon,
} from '@heroicons/react/24/outline';

export const AdditionalInfo = () => {
	return (
		<div className='absolute -top-28 z-20 w-full'>
			<div className='flex items-center justify-between max-w-5xl mx-auto gap-12'>
				{/* Card 1 */}
				<div
					className='bg-white shadow-2xl w-72 h-64 rounded-xl border border-primary 
								hover:shadow-xl hover:border-transparent transition-all duration-300 ease-in-out
								flex flex-col items-center justify-between p-6 group cursor-pointer'>
					<AcademicCapIcon className='h-12 w-12 text-primary group-hover:scale-110 group-hover:text-primary/80 transition-all duration-300 ease-in-out' />

					<h1 className='text-xl font-semibold text-gray-800'>
						Expert Instructors
					</h1>

					<p className='text-gray-500 text-sm text-center'>
						Learn from experienced mentors who guide you every step of the way.
					</p>
				</div>

				{/* Card 2 */}
				<div
					className='bg-white shadow-2xl w-72 h-64 rounded-xl border border-primary 
								hover:shadow-xl hover:border-transparent transition-all duration-300 ease-in-out
								flex flex-col items-center justify-between p-6 group cursor-pointer'>
					<UserGroupIcon className='h-12 w-12 text-primary group-hover:scale-110 group-hover:text-primary/80 transition-all duration-300 ease-in-out' />

					<h1 className='text-xl font-semibold text-gray-800'>
						Community Support
					</h1>

					<p className='text-gray-500 text-sm text-center'>
						Be part of a strong learning community that grows together.
					</p>
				</div>

				{/* Card 3 */}
				<div
					className='bg-white shadow-2xl w-72 h-64 rounded-xl border border-primary 
								hover:shadow-xl hover:border-transparent transition-all duration-300 ease-in-out
								flex flex-col items-center justify-between p-6 group cursor-pointer'>
					<BookOpenIcon className='h-12 w-12 text-primary group-hover:scale-110 group-hover:text-primary/80 transition-all duration-300 ease-in-out' />

					<h1 className='text-xl font-semibold text-gray-800'>
						Practical Learning
					</h1>

					<p className='text-gray-500 text-sm text-center'>
						Hands-on projects that prepare you for real-world challenges.
					</p>
				</div>
			</div>
		</div>
	);
};
