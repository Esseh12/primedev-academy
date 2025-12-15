import Link from 'next/link';
import { Icon } from '@iconify/react';
import { bannerContent } from '@/app/utils/utils';

const Banner = () => {
	return (
		<div className='bg-primary text-white overflow-hidden relative'>
			<div className='flex items-center gap-6 py-3 animate-marquee whitespace-nowrap'>
				{[...bannerContent, ...bannerContent].map((item, index) => (
					<div
						key={index}
						className='flex items-center gap-4'>
						<Icon
							icon={item.icon}
							className='text-sm sm:text-lg md:text-xl'
						/>
						<span>
							{item.text} —
							<Link
								href={item.link}
								className='text-sm md:text-base underline ml-2 font-semibold'>
								{item.linkText}
							</Link>
						</span>
					</div>
				))}
			</div>
		</div>
	);
};

export default Banner;
