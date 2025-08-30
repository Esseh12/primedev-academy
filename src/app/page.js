import Hero from './components/homepage/Hero';
import { AdditionalInfo } from './components/homepage/AdditionalInfo';
import WhyChooseUs from './components/homepage/whyChooseUs';

export default function Home() {
	return (
		<>
			<div className='overflow-hidden max-w-screen'>
				<Hero />
				<div className='relative min-h-56'>
					<AdditionalInfo />
				</div>
				<WhyChooseUs />
			</div>
		</>
	);
}
