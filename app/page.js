import Image from 'next/image';
import Hero from '@/app/components/landing/hero';
import WhyChooseUs from './components/landing/whyChooseus';
import CoursesSection from './components/landing/coursesSection';

export default function Home() {
	return (
		<div className=''>
			<main className=''>
				<Hero />
				<WhyChooseUs />
				<CoursesSection />
			</main>
		</div>
	);
}
