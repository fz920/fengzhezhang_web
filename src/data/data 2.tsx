import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  Award,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  Publication,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Fengzhe Zhang - Machine Learning Researcher',
  description: "Personal website of Fengzhe Zhang, Machine Learning Researcher specializing in Probabilistic Generative Models",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Fengzhe Zhang.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Cambridge-based <strong className="text-stone-100">Machine Learning Researcher</strong> specializing in
        <strong className="text-stone-100"> Probabilistic Generative Models</strong>. I develop deep generative models
        such as diffusion models and normalizing flows to accelerate molecular generation and improve sampling accuracy.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I hold an <strong className="text-stone-100">MPhil in Machine Learning</strong> from the University of Cambridge
        and a <strong className="text-stone-100">BSc in Mathematics</strong> from Imperial College London, where I
        graduated with First Class Honours in the top 4% of my class.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I am a passionate researcher in machine learning with a focus on probabilistic generative models. My work centers on developing novel algorithms for sampling from complex probability distributions, with particular applications in molecular generation and computational chemistry. I have experience with diffusion models, consistency models, normalizing flows, and Variational Autoencoders.`,
  aboutItems: [
    {label: 'Location', text: 'Cambridge, UK', Icon: MapIcon},
    {label: 'Email', text: 'fz287@cam.ac.uk', Icon: CalendarIcon},
    {label: 'Phone', text: '+44 (0)7421 727 978', Icon: FlagIcon},
    {label: 'Research Focus', text: 'Probabilistic Generative Models', Icon: SparklesIcon},
    {label: 'Education', text: 'University of Cambridge', Icon: AcademicCapIcon},
    {label: 'Current Role', text: 'Research Assistant', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Machine Learning & AI',
    skills: [
      {
        name: 'Diffusion Models',
        level: 9,
      },
      {
        name: 'Variational Autoencoders',
        level: 8,
      },
      {
        name: 'Normalizing Flows',
        level: 8,
      },
      {
        name: 'Deep Learning',
        level: 9,
      },
    ],
  },
  {
    name: 'Programming Languages',
    skills: [
      {
        name: 'Python',
        level: 9,
      },
      {
        name: 'Julia',
        level: 7,
      },
      {
        name: 'MATLAB',
        level: 6,
      },
      {
        name: 'R',
        level: 5,
      },
    ],
  },
  {
    name: 'ML Frameworks & Tools',
    skills: [
      {
        name: 'PyTorch',
        level: 9,
      },
      {
        name: 'TensorFlow',
        level: 7,
      },
      {
        name: 'JAX',
        level: 6,
      },
      {
        name: 'NumPy/SciPy',
        level: 9,
      },
    ],
  },
  {
    name: 'Mathematical Areas',
    skills: [
      {
        name: 'Probability Theory',
        level: 9,
      },
      {
        name: 'Statistical Analysis',
        level: 8,
      },
      {
        name: 'Numerical Methods',
        level: 8,
      },
      {
        name: 'Optimization',
        level: 7,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'October 2023 - September 2024',
    location: 'University of Cambridge',
    title: 'MPhil Machine Learning and Machine Intelligence',
    content: <p>Achieved a score of 79.87% (Distinction), ranking in the top 10%. Specialized in probabilistic generative models, with dissertation on "Sampling of Molecular Energy Functions via Consistency Models" supervised by Prof. José Miguel Hernández-Lobato.</p>,
  },
  {
    date: 'October 2020 - June 2023',
    location: 'Imperial College London',
    title: 'BSc Mathematics',
    content: <p>Achieved a score of 88.41% (First Class Honours), ranking in the top 4% (10th out of 251 students). Strong foundation in mathematical analysis, probability theory, and computational methods.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'October 2024 - October 2025 (expected)',
    location: 'University of Cambridge',
    title: 'Research Assistant',
    content: (
      <p>
        Developing and applying deep generative models—such as diffusion models and normalizing flows—to accelerate molecular generation and improve sampling accuracy. Supervised by Prof. José Miguel Hernández-Lobato.
      </p>
    ),
  },
  {
    date: 'April 2024 - August 2024',
    location: 'University of Cambridge',
    title: 'MPhil Dissertation',
    content: (
      <p>
        Created a Consistency-Model + importance-sampling framework that yields unbiased samples from molecular energy functions and is approximately 4× faster than DDPM baselines. Dissertation awarded Distinction under supervision of Prof. José Miguel Hernández-Lobato.
      </p>
    ),
  },
  {
    date: 'July 2023 - October 2023',
    location: 'Imperial College London',
    title: 'Undergraduate Research Assistant',
    content: (
      <p>
        Proposed and experimented with a novel algorithm to directly regulate KL divergence during VAE training, eliminating β-VAE hyper-parameter sweeps and generalizing to multiple VAE architectures. Supervised by Dr. Yingzhen Li.
      </p>
    ),
  },
  {
    date: 'May 2022 - June 2022',
    location: 'Imperial College London',
    title: 'Undergraduate Group Project',
    content: (
      <p>
        Developed a deflation-based method to uncover multiple solutions of nonlinear ODE/PDE systems from a single initial guess. Project won the Winton Prize for best Mathematics group project, supervised by Dr. Sheehan Olver.
      </p>
    ),
  },
];

/**
 * Teaching experience section
 */
export const teaching: TimelineItem[] = [
  {
    date: 'October 2022 - April 2023',
    location: 'Imperial College London',
    title: 'Peer Tutor and Teaching Assistant',
    content: (
      <p>
        Led group tutorials for first-year students, covering Probability, Analysis, and Calculus, with a focus on advanced mathematical problem-solving to enhance academic understanding and performance. Provided support for second-year students in the Numerical Analysis module, offering guidance in Julia programming and fostering a deeper understanding of computational methods.
      </p>
    ),
  },
];

/**
 * Publications section
 */
export const publications: Publication[] = [
  {
    title: 'Efficient and Unbiased Sampling from Boltzmann Distributions via Variance-Tuned Diffusion Models',
    authors: 'Fengzhe Zhang, Laurence I. Midgley, and José Miguel Hernández-Lobato',
    venue: 'Submitted to NeurIPS',
    year: '2025',
  },
  {
    title: 'Sampling of Molecular Energy Functions via Consistency Models',
    authors: 'Fengzhe Zhang',
    venue: 'MPhil Dissertation, University of Cambridge',
    year: '2024',
  },
];

/**
 * Awards and Scholarships section
 */
export const awards: Award[] = [
  {
    title: 'Dean\'s List',
    description: 'Recognized among the top 10% of students',
    year: '2021, 2022, 2023',
  },
  {
    title: 'Undergraduate Research Bursary',
    description: 'Awarded by the Mathematics Department',
    year: '2022',
  },
  {
    title: 'The Winton Prize',
    description: 'Outstanding undergraduate 2nd-year group project prize in Mathematics',
    year: '2022',
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'I am always interested in discussing machine learning research, potential collaborations, or new opportunities in probabilistic generative models.',
  items: [
    {
      type: ContactType.Email,
      text: 'fz287@cam.ac.uk',
      href: 'mailto:fz287@cam.ac.uk',
    },
    {
      type: ContactType.Location,
      text: 'Cambridge, UK',
      href: 'https://www.google.com/maps/place/Cambridge,+UK',
    },
    {
      type: ContactType.Github,
      text: 'fz920',
      href: 'https://github.com/fz920',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/fz920'},
];
