import { Plus_Jakarta_Sans } from 'next/font/google';
import Navbar from './components/header/navbar';
import Footer from './components/footer';
import './globals.css';

const plusJakarta = Plus_Jakarta_Sans({
	subsets: ['latin'],
});

export const metadata = {
	metadataBase: new URL('https://primedeacademy.com'),

	title: {
		default: 'Primede Academy | Online Learning & Skill Development',
		template: '%s | Primede Academy',
	},

	icons: {
		icon: '/favicon.ico',
	},

	description:
		'Primede Academy is an online learning platform focused on skill development, professional growth, and practical education to help students succeed globally.',

	keywords: [
		'Primede Academy',
		'online learning',
		'skill development',
		'professional courses',
		'e-learning platform',
		'career growth',
		'education academy',
	],

	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-snippet': -1,
			'max-image-preview': 'large',
			'max-video-preview': -1,
		},
	},

	openGraph: {
		title: 'Primede Academy | Learn Skills That Matter',
		description:
			'Learn practical, career-focused skills with Primede Academy. Online courses designed to help you grow and succeed.',
		url: 'https://primedeacademy.com',
		siteName: 'Primede Academy',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Primedev Academy Online Learning',
			},
		],
		locale: 'en_US',
		type: 'website',
	},

	twitter: {
		card: 'summary_large_image',
		title: 'Primede Academy | Learn Skills That Matter',
		description:
			'Practical online courses and skill development programs built for career success.',
		images: ['/og-image.jpg'],
	},

	alternates: {
		canonical: 'https://primedeacademy.com',
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={`${plusJakarta.className} antialiased`}>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
