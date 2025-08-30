import Link from 'next/link';
import {
	QuestionMarkCircleIcon,
	CurrencyDollarIcon,
	UserCircleIcon,
	InformationCircleIcon,
} from '@heroicons/react/24/outline';

const Navbar = () => {
	return (
		<>
			<header className='w-full flex items-center justify-between gap-4  border-b border-gray-300 py-5 px-8 shadow-lg z-50 fixed bg-white h-20'>
				<h2 className='text-3xl'>Logo</h2>

				<ul className='flex items-center justify-between gap-4'>
					<li className='flex items-center gap-2 group'>
						<UserCircleIcon className='h-6 w-6 group-hover:text-primary' />
						<Link
							href='#'
							className='group-hover:text-primary'>
							About Us
						</Link>
					</li>
					<li className='flex items-center gap-2 group'>
						<QuestionMarkCircleIcon className='h-6 w-6 group-hover:text-primary' />
						<Link
							href='#'
							className='group-hover:text-primary'>
							Help Center
						</Link>
					</li>
					<li className='flex items-center gap-2 group'>
						<InformationCircleIcon className='h-6 w-6 group-hover:text-primary' />
						<Link
							href='#'
							className='group-hover:text-primary'>
							Courses
						</Link>
					</li>
					<li className='flex items-center gap-2 group'>
						<CurrencyDollarIcon className='h-6 w-6 group-hover:text-primary' />
						<Link
							href='#'
							className='group-hover:text-primary'>
							Pricing
						</Link>
					</li>

					<Link
						href='#'
						className='bg-primary text-white px-6 py-3 rounded-full w-max flex items-center justify-center'>
						Register Now
					</Link>
				</ul>
			</header>
		</>
	);
};
export default Navbar;
