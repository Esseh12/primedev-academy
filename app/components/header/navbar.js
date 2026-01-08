'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Banner from '../banner';
import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { navItems } from '@/app/utils/utils';

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const pathname = usePathname();

	// Close mobile menu when route changes
	useEffect(() => {
		setIsOpen(false);
	}, [pathname]);

	return (
		<>
			<Banner />

			<div className='px-4 md:px-8  sticky top-0 z-50 bg-white shadow-md'>
				<div className='flex justify-between items-center h-20'>
					{/* Logo */}
					<Link
						href='/'
						className='transition-transform hover:scale-105 duration-300'>
						<Image
							src='/primedev-logo.svg'
							alt='primedev logo'
							width={250}
							height={50}
							className='h-10 lg:h-12'
							priority
						/>
					</Link>

					{/* Desktop Navigation */}
					<ul className='hidden md:flex items-center gap-1'>
						{navItems.map((item) => (
							<li key={item.name}>
								<Link
									href={item.href}
									className={`
											flex items-center gap-2 px-4 py-2 rounded-lg
											transition-all duration-300 group
											${
												pathname === item.href
													? 'text-primary scale-105'
													: 'text-gray-700 hover:text-primary'
											}
										`}>
									<Icon
										icon={item.icon}
										className={`text-xl transition-transform duration-300 
												${pathname === item.href ? '' : 'group-hover:scale-110 group-hover:rotate-12'}
											`}
									/>
									<span className='font-medium'>{item.name}</span>
								</Link>
							</li>
						))}
					</ul>

					{/* Mobile Menu Button */}
					<button
						onClick={() => setIsOpen(!isOpen)}
						className='md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300'
						aria-label='Toggle menu'>
						<Icon
							icon={isOpen ? 'lucide:x' : 'solar:hamburger-menu-outline'}
							className='text-3xl text-gray-700 transition-transform duration-300'
						/>
					</button>
				</div>

				{/* Mobile Navigation */}
				<div
					className={`
							md:hidden overflow-hidden transition-all duration-500 ease-in-out
							${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
						`}>
					<ul className='py-4 space-y-2'>
						{navItems.map((item, index) => (
							<li
								key={item.name}
								style={{
									animation: isOpen
										? `slideIn 0.3s ease-out ${index * 0.1}s both`
										: 'none',
								}}>
								<Link
									href={item.href}
									onClick={() => setIsOpen(false)}
									className={`
											flex items-center gap-3 px-4 py-3 rounded-lg
											transition-all duration-300
											${
												pathname === item.href
													? 'text-primary hover:bg-gray-100 hover:translate-x-2'
													: 'text-gray-700 hover:bg-gray-100 hover:translate-x-2'
											}
										`}>
									<Icon
										icon={item.icon}
										className='text-2xl'
									/>
									<span className='font-medium text-lg'>{item.name}</span>
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</>
	);
};

export default Navbar;
