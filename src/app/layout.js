import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';

const jakarta_sans = Plus_Jakarta_Sans({
	subsets: ['latin'],
	display: 'swap', // better for performance
});

export const metadata = {
	title: 'Primedev Academy | Learn Frontend Development',
	description:
		'Primedev Academy is a modern tech school that helps you master frontend development with hands-on projects, mentorship, and real-world skills.',
	keywords: [
		'Primedev Academy',
		'Frontend development course',
		'Learn React',
		'JavaScript training',
		'Web development school',
	],
	authors: [{ name: 'Primedev Academy' }],
	openGraph: {
		title: 'Primedev Academy | Learn Frontend Development',
		description:
			'Master frontend development with hands-on training at Primedev Academy. Learn React, JavaScript, and modern web technologies.',
		url: 'https://www.primedevacademy.com',
		siteName: 'Primedev Academy',
		images: [
			{
				url: '/og-image.png',
				width: 1200,
				height: 630,
				alt: 'Primedev Academy Logo',
			},
		],
		type: 'website',
	},
	alternates: {
		canonical: 'https://www.primedevacademy.com',
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<head>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1.0, maximum-scale=5.0'
				/>
			</head>
			<body className={`${jakarta_sans.className} antialiased`}>
				<Navbar />
				<div>{children}</div>
			</body>
		</html>
	);
}
