export const bannerContent = [
	{
		text: 'BCS EXAM CLASSES START DECEMBER 15TH',
		link: '#',
		linkText: 'ENROLL NOW',
		icon: 'mdi:school-outline',
	},
	{
		text: 'NEW WEB DEVELOPMENT COURSE AVAILABLE NOW',
		link: '#',
		linkText: 'JOIN THE COURSE',
		icon: 'mdi:code-braces',
	},
];

export const navItems = [
	{ name: 'Home', href: '/', icon: 'lucide:home' },
	{ name: 'Programs', href: '/programs', icon: 'lucide:book-open' },
	{ name: 'About', href: '/about-us', icon: 'lucide:info' },
	{ name: 'FAQ', href: '/faq', icon: 'lucide:help-circle' },
	{ name: 'Contact', href: '/contact', icon: 'lucide:mail' },
];

export const avatars = [
	'/avatar1.jpg',
	'/avatar2.jpg',
	'/avatar3.jpg',
	'/avatar4.jpg',
	'/avatar5.jpg',
];

export const features = [
	{
		icon: 'lucide:rocket',
		title: 'Career-Focused Curriculum',
		description:
			'Learn job-ready skills from industry experts with real-world projects and portfolio building.',
	},
	{
		icon: 'lucide:users-round',
		title: 'Expert Mentorship',
		description:
			'Get personalized guidance from experienced developers and designers throughout your journey.',
	},
	{
		icon: 'lucide:briefcase',
		title: 'Job Placement Support',
		description:
			'Access our career services, resume reviews, and exclusive hiring partner network.',
	},
	{
		icon: 'lucide:clock',
		title: 'Flexible Learning',
		description:
			'Study at your own pace with lifetime access to course materials and updates.',
	},
	{
		icon: 'lucide:code-2',
		title: 'Hands-On Projects',
		description:
			'Build 10+ real-world projects to showcase your skills to potential employers.',
	},
	{
		icon: 'lucide:award',
		title: 'Industry Certification',
		description:
			'Earn recognized certificates that validate your expertise and boost your credibility.',
	},
];

export const courses = [
	{
		id: 1,
		title: 'Frontend Engineering',
		description:
			'Learn HTML, CSS, JavaScript, and modern frontend practices to build responsive and user-friendly web interfaces.',
		image: '/frontend.jpg',
		duration: '12 Months',
		level: 'Beginner to Intermediate',
		students: '1,200',
		price: '₦20,000',
		category: 'Development',
		// Additional details for the details page
		longDescription:
			'Master the art of frontend development with our comprehensive program. Learn to build stunning, responsive web applications using HTML5, CSS3, JavaScript, and modern frameworks. This course covers everything from basic web fundamentals to advanced frontend architecture.',
		outcomes: [
			'Build responsive websites from scratch',
			'Master modern JavaScript (ES6+)',
			'Create interactive user interfaces',
			'Implement best practices and accessibility standards',
			'Work with CSS frameworks and preprocessors',
			'Deploy production-ready applications',
		],
		curriculum: [
			{
				week: 'Week 1-3',
				title: 'HTML & CSS Fundamentals',
				topics: [
					'HTML5 semantic elements',
					'CSS Grid & Flexbox',
					'Responsive design principles',
					'CSS animations',
				],
			},
			{
				week: 'Week 4-7',
				title: 'JavaScript Essentials',
				topics: [
					'ES6+ features',
					'DOM manipulation',
					'Async programming',
					'API integration',
				],
			},
			{
				week: 'Week 8-10',
				title: 'Modern Frontend Tools',
				topics: [
					'Git & GitHub',
					'NPM & build tools',
					'CSS frameworks',
					'Testing basics',
				],
			},
			{
				week: 'Week 11-12',
				title: 'Capstone Project',
				topics: [
					'Real-world project',
					'Code review',
					'Deployment',
					'Portfolio building',
				],
			},
		],
		prerequisites: [
			'Basic computer skills',
			'No prior coding experience required',
		],
		instructor: {
			name: 'Sarah Johnson',
			role: 'Senior Frontend Engineer',
			bio: '8+ years at Google and Meta',
			image: '/instructor-1.jpg',
		},
	},
	{
		id: 2,
		title: 'Backend Engineering (Python or JavaScript)',
		description:
			'Build powerful server-side applications using Python or JavaScript, APIs, databases, and authentication systems.',
		image: '/backend.jpg',
		duration: '12 Months',
		level: 'Beginner to Intermediate',
		students: '980',
		price: '₦20,000',
		category: 'Development',
		longDescription:
			'Dive deep into backend development and learn to build scalable, secure server-side applications. Choose between Python or JavaScript and master databases, APIs, authentication, and deployment.',
		outcomes: [
			'Build RESTful APIs from scratch',
			'Design and implement databases',
			'Implement user authentication & authorization',
			'Deploy scalable backend applications',
			'Work with cloud services',
			'Follow security best practices',
		],
		curriculum: [
			{
				week: 'Week 1-3',
				title: 'Backend Fundamentals',
				topics: [
					'Server-side programming',
					'HTTP & REST',
					'Node.js/Python basics',
					'Version control',
				],
			},
			{
				week: 'Week 4-7',
				title: 'Databases & APIs',
				topics: [
					'SQL & NoSQL databases',
					'API design',
					'CRUD operations',
					'Data modeling',
				],
			},
			{
				week: 'Week 8-10',
				title: 'Authentication & Security',
				topics: ['JWT & sessions', 'Password hashing', 'OAuth', 'API security'],
			},
			{
				week: 'Week 11-12',
				title: 'Deployment & DevOps',
				topics: [
					'Cloud deployment',
					'CI/CD basics',
					'Monitoring',
					'Final project',
				],
			},
		],
		prerequisites: ['Basic programming knowledge helpful but not required'],
		instructor: {
			name: 'Michael Chen',
			role: 'Lead Backend Engineer',
			bio: '10+ years at Amazon and Shopify',
			image: '/instructor-2.jpg',
		},
	},
	{
		id: 3,
		title: 'React.js',
		description:
			'Master React.js by building dynamic, scalable, and high-performance user interfaces with real-world projects.',
		image: '/react.jpg',
		duration: '1 Month',
		level: 'Intermediate',
		students: '1,450',
		price: '₦20,000',
		category: 'Frontend',
		longDescription:
			'Become a React expert and build modern, performant web applications. Learn hooks, state management, routing, and best practices used by industry leaders.',
		outcomes: [
			'Build complex React applications',
			'Master React Hooks and state management',
			'Implement routing and navigation',
			'Optimize performance',
			'Work with Context API and Redux',
			'Test React components',
		],
		curriculum: [
			{
				week: 'Week 1-2',
				title: 'React Fundamentals',
				topics: [
					'Components & Props',
					'State & Events',
					'Lists & Keys',
					'Forms',
				],
			},
			{
				week: 'Week 3-4',
				title: 'Advanced Hooks',
				topics: [
					'useState & useEffect',
					'Custom hooks',
					'useContext',
					'useReducer',
				],
			},
			{
				week: 'Week 5-6',
				title: 'State Management & Routing',
				topics: [
					'React Router',
					'Redux basics',
					'Context API',
					'API integration',
				],
			},
			{
				week: 'Week 7-8',
				title: 'Advanced Patterns',
				topics: [
					'Performance optimization',
					'Testing',
					'Best practices',
					'Final project',
				],
			},
		],
		prerequisites: ['HTML, CSS, and JavaScript knowledge required'],
		instructor: {
			name: 'Emily Rodriguez',
			role: 'React Specialist',
			bio: 'Former React team member at Meta',
			image: '/instructor-3.jpg',
		},
	},
	{
		id: 4,
		title: 'Next.js',
		description:
			'Learn Next.js for server-side rendering, routing, and building fast, SEO-friendly production applications.',
		image: '/next.jpg',
		duration: '1 Month',
		level: 'Intermediate',
		students: '870',
		price: '₦20,000',
		category: 'Frontend',
		longDescription:
			'Master Next.js and build production-ready, SEO-optimized web applications. Learn server-side rendering, static generation, API routes, and deployment strategies.',
		outcomes: [
			'Build full-stack Next.js applications',
			'Implement SSR and SSG',
			'Create API routes',
			'Optimize for SEO and performance',
			'Deploy to Vercel and other platforms',
			'Work with Next.js 14+ features',
		],
		curriculum: [
			{
				week: 'Week 1-2',
				title: 'Next.js Fundamentals',
				topics: [
					'Pages & Routing',
					'App Router',
					'Data fetching',
					'Images & Fonts',
				],
			},
			{
				week: 'Week 3-4',
				title: 'Rendering Strategies',
				topics: ['SSR vs SSG', 'ISR', 'Client-side rendering', 'Streaming'],
			},
			{
				week: 'Week 5-6',
				title: 'API Routes & Database',
				topics: [
					'API development',
					'Database integration',
					'Authentication',
					'Middleware',
				],
			},
			{
				week: 'Week 7-8',
				title: 'Production & Deployment',
				topics: [
					'Performance optimization',
					'SEO best practices',
					'Deployment',
					'Final project',
				],
			},
		],
		prerequisites: ['React.js knowledge required', 'JavaScript proficiency'],
		instructor: {
			name: 'David Kim',
			role: 'Full-Stack Developer',
			bio: 'Next.js expert with 6+ years experience',
			image: '/instructor-4.jpg',
		},
	},
];

export const testimonials = [
	{
		id: 1,
		name: 'Adewale Johnson',
		role: 'Frontend Developer',
		company: 'Beta Learner',
		image: '/avatar2.jpg',
		rating: 5,
		text: 'The way PrimeDev breaks down complex concepts is refreshing. The curriculum is well-structured, beginner-friendly, and very practical. Even before launch, I can tell this is going to help a lot of people get started in tech.',
	},
	{
		id: 2,
		name: 'Chioma Okafor',
		role: 'Product Designer',
		company: 'Curriculum Reviewer',
		image: '/avatar1.jpg',
		rating: 5,
		text: 'What stood out to me is the focus on real-world thinking, not just tutorials. The learning flow makes sense, and the projects feel like things you would actually build on a real job.',
	},
	{
		id: 3,
		name: 'Ibrahim Musa',
		role: 'Aspiring Software Engineer',
		company: 'Early Access Student',
		image: '/avatar4.jpg',
		rating: 5,
		text: 'PrimeDev feels intentional. The explanations are clear, the roadmap is realistic, and it doesn’t overwhelm beginners. I wish something like this existed when I first tried to learn tech.',
	},
];

export const faqs = [
	{
		id: 1,
		question: 'Do I need any prior coding experience?',
		answer:
			'No. Our programs are designed for absolute beginners as well as learners with some experience. We start from the basics and gradually build up to more advanced concepts.',
	},
	{
		id: 2,
		question: 'What programs does PrimeDev Academy offer?',
		answer:
			'We offer Frontend Development, Backend Development, and Tech Nano Degrees such as React.js, Next.js, and Node.js.',
	},
	{
		id: 3,
		question: 'Is PrimeDev Academy online or physical?',
		answer:
			'PrimeDev Academy is fully online, so you can learn from anywhere in the world.',
	},
	{
		id: 4,
		question: 'How are the classes structured?',
		answer:
			'Learning is hands-on and project-based. You’ll work on real projects, assignments, and practical exercises to reinforce what you learn.',
	},
	{
		id: 5,
		question: 'How much time do I need to commit?',
		answer:
			'You’ll need to dedicate consistent weekly time to learning and practice. Commitment matters more than speed.',
	},
	{
		id: 6,
		question: 'Will I build real projects?',
		answer:
			'Yes. Every program includes real-world projects that you can add to your portfolio.',
	},
	{
		id: 7,
		question: 'Do you provide certificates?',
		answer:
			'Yes. Students who complete their program receive a certificate of completion.',
	},
	{
		id: 8,
		question: 'Will PrimeDev help me get a job?',
		answer:
			'We help you build job-ready skills and a strong portfolio. Students also get access to a job opportunities group. While we don’t promise jobs, we prepare you to apply confidently.',
	},
	{
		id: 9,
		question: 'What tools or equipment do I need?',
		answer:
			'You’ll need a laptop, a stable internet connection, and a willingness to learn and practice.',
	},
	{
		id: 10,
		question: 'Can I combine this with work or school?',
		answer:
			'Yes. Many of our students are working professionals or students. The program is flexible, but discipline is important.',
	},
	{
		id: 11,
		question: 'How do I apply?',
		answer:
			'Simply complete the application form and wait to be contacted with the next steps.',
	},
	// {
	// 	id: 12,
	// 	question: 'Is there a payment plan?',
	// 	answer:
	// 		'Yes, flexible payment options are available. Details will be shared after application.',
	// },
];

export const footerLinks = {
	company: [
		{ name: 'About Us', href: '/about' },
		{ name: 'Our Story', href: '/story' },
		{ name: 'Careers', href: '/careers' },
		{ name: 'Blog', href: '/blog' },
	],
	programs: [
		{ name: 'Web Development', href: '/courses/web' },
		{ name: 'UI/UX Design', href: '/courses/design' },
		{ name: 'Mobile Development', href: '/courses/mobile' },
		{ name: 'Data Science', href: '/courses/data' },
	],
	support: [
		{ name: 'Help Center', href: '/help' },
		{ name: 'Contact Us', href: '/contact' },
		{ name: 'FAQs', href: '/faq' },
		{ name: 'Student Portal', href: '/portal' },
	],
	legal: [
		{ name: 'Privacy Policy', href: '/privacy' },
		{ name: 'Terms of Service', href: '/terms' },
		{ name: 'Refund Policy', href: '/refund' },
		{ name: 'Cookie Policy', href: '/cookies' },
	],
};

export const socialLinks = [
	{ name: 'Twitter', icon: 'lucide:twitter', href: 'https://twitter.com' },
	{ name: 'LinkedIn', icon: 'lucide:linkedin', href: 'https://linkedin.com' },
	{
		name: 'Instagram',
		icon: 'lucide:instagram',
		href: 'https://instagram.com',
	},
	{ name: 'Facebook', icon: 'lucide:facebook', href: 'https://facebook.com' },
	{ name: 'YouTube', icon: 'lucide:youtube', href: 'https://youtube.com' },
];

export const stats = [
	{ value: '5,000+', label: 'Students Trained' },
	{ value: '50+', label: 'Expert Instructors' },
	{ value: '20+', label: 'Industry Partners' },
	{ value: '95%', label: 'Success Rate' },
];

export const values = [
	{
		icon: 'lucide:target',
		title: 'Excellence',
		description:
			'We are committed to delivering world-class education that meets global industry standards.',
	},
	{
		icon: 'lucide:users',
		title: 'Community',
		description:
			'Building a supportive learning environment where everyone grows together.',
	},
	{
		icon: 'lucide:lightbulb',
		title: 'Innovation',
		description:
			'Staying ahead with cutting-edge curriculum and teaching methodologies.',
	},
	{
		icon: 'lucide:heart',
		title: 'Impact',
		description:
			'Transforming lives through accessible, practical, and career-focused education.',
	},
];

export const contactInfo = [
	{
		icon: 'lucide:mail',
		title: 'Email Us',
		detail: 'hello@techacademy.com',
		link: 'mailto:hello@techacademy.com',
	},
	{
		icon: 'lucide:phone',
		title: 'Call Us',
		detail: '+254 700 000 000',
		link: 'tel:+254700000000',
	},
	{
		icon: 'lucide:map-pin',
		title: 'Visit Us',
		detail: 'Nairobi, Kenya',
		link: '#',
	},
	{
		icon: 'lucide:clock',
		title: 'Working Hours',
		detail: 'Mon - Fri: 9AM - 6PM',
		link: '#',
	},
];
