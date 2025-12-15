import Hero from '@/app/components/landing/hero';
import WhyChooseUs from './components/landing/whyChooseus';
import CoursesSection from './components/landing/coursesSection';
import TestimonialsSection from './components/landing/testimonial';
import FAQSection from './components/landing/faq';

export default function Home() {
	return (
		<div className=''>
			<main className=''>
				<Hero />
				<WhyChooseUs />
				<CoursesSection />
				<TestimonialsSection />
				<FAQSection />
			</main>
		</div>
	);
}
