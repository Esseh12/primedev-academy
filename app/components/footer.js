import Link from 'next/link';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import { footerLinks, socialLinks } from '../utils/utils';

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className='relative bg-primary text-white'>
			{/* Main Footer Content */}
			<div className='relative px-4 md:px-14 pt-20 pb-12'>
				<div className='grid lg:grid-cols-6 gap-12 mb-16'>
					{/* Brand Column */}
					<div className='lg:col-span-2 space-y-6'>
						<Link
							href='/'
							className='inline-block'>
							<Image
								src='/primedev-logo.svg'
								alt='PrimeDev logo'
								width={180}
								height={50}
								className='h-10 w-auto brightness-0 invert'
							/>
						</Link>
						<p className='text-white/70 leading-relaxed max-w-sm'>
							Empowering the next generation of tech professionals with
							world-class education and career support.
						</p>
						<div className='flex items-center gap-3'>
							{socialLinks.map((social) => (
								<a
									key={social.name}
									href={social.href}
									target='_blank'
									rel='noopener noreferrer'
									className='w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-all duration-300 group'
									aria-label={social.name}>
									<Icon
										icon={social.icon}
										className='text-xl text-white group-hover:scale-110 transition-transform'
									/>
								</a>
							))}
						</div>
					</div>

					{/* Company Links */}
					<div>
						<h3 className='text-lg font-bold mb-6 text-white'>Company</h3>
						<ul className='space-y-3'>
							{footerLinks.company.map((link) => (
								<li key={link.name}>
									<Link
										href={link.href}
										className='text-white/70 hover:text-white hover:translate-x-1 inline-block transition-all duration-300'>
										{link.name}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Programs Links */}
					<div>
						<h3 className='text-lg font-bold mb-6 text-white'>Programs</h3>
						<ul className='space-y-3'>
							{footerLinks.programs.map((link) => (
								<li key={link.name}>
									<Link
										href={link.href}
										className='text-white/70 hover:text-white hover:translate-x-1 inline-block transition-all duration-300'>
										{link.name}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Support Links */}
					<div>
						<h3 className='text-lg font-bold mb-6 text-white'>Support</h3>
						<ul className='space-y-3'>
							{footerLinks.support.map((link) => (
								<li key={link.name}>
									<Link
										href={link.href}
										className='text-white/70 hover:text-white hover:translate-x-1 inline-block transition-all duration-300'>
										{link.name}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Legal Links */}
					<div>
						<h3 className='text-lg font-bold mb-6 text-white'>Legal</h3>
						<ul className='space-y-3'>
							{footerLinks.legal.map((link) => (
								<li key={link.name}>
									<Link
										href={link.href}
										className='text-white/70 hover:text-white hover:translate-x-1 inline-block transition-all duration-300'>
										{link.name}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>

				{/* Newsletter Section */}
				<div className='bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-white/10'>
					<div className='flex flex-col md:flex-row items-center justify-between gap-6'>
						<div className='flex-1'>
							<h3 className='text-2xl font-bold mb-2 text-white'>
								Stay Updated
							</h3>
							<p className='text-white/70'>
								Subscribe to our newsletter for the latest courses and updates
							</p>
						</div>
						<div className='flex-1 max-w-md w-full'>
							<div className='flex flex-col md:flex-row 5m gap-3'>
								<input
									type='email'
									placeholder='Enter your email'
									className='flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all'
								/>
								<button
									className='px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2'
									style={{ backgroundColor: '#c1ff72' }}>
									<span className='text-foreground'>Subscribe</span>
									<Icon
										icon='lucide:send'
										className='text-lg'
									/>
								</button>
							</div>
						</div>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className='pt-8 border-t border-white/10'>
					<div className='flex flex-col md:flex-row items-center justify-between gap-4'>
						<p className='text-white/60 text-sm'>
							© {currentYear} PrimeDev Bootcamp. All rights reserved.
						</p>
						<div className='flex items-center gap-6 text-sm'>
							<div className='flex items-center gap-2 text-white/60'>
								<Icon
									icon='lucide:map-pin'
									className='text-base'
								/>
								<span>Lagos, Nigeria</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
