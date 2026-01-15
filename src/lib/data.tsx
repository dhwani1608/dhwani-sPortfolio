import Link from 'next/link';

import { buttonVariants } from '@/components/button';
import { Icons } from '@/components/icons';
import { cn } from '@/lib/utils';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Certificates',
    hash: '#certificates',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const projectsData = [
  {
    image: '/images/bakeotopia.png',
    title: 'Bakeotopia - Home of Quality Baking',
    description:
      'Developed a full-stack e-commerce web application for a home bakery business and deployed a secure backend using Supabase with authentication and role-based access control',
    technologies: [
      'React',
      'Tailwind CSS',
      'Supabase',
      'Vite',
      'Typescript',
      'shadcn-ui',
      'Vercel',
    ],
    links: {
      preview: 'https://bakeotopia-homeofqualitybaking.vercel.app/',
      github: 'https://github.com/dhwani1608/bakeotopia-a_bakery_app',
    },
  },
  {
    image: '/images/portfolio.png',
    title: 'Personal Portfolio',
    description:
      'SocialHub is a next-generation social media app developed using Next.js and Nest.js.',
    technologies: ['Next.js', 'TypeScript', ' Nest.js', 'Tailwind', 'Prisma'],
    links: {
      preview: 'https://socialhub-ms.vercel.app/',
      github: 'https://github.com/Skolaczk/SocialHub',
      githubApi: 'https://api.github.com/repos/Skolaczk/SocialHub',
    },
  },
] as const;

export const experiencesData = [
  {
    title: 'Web developer intern',
    company: 'WEB-BOX, Tarnobrzeg PL',
    description:
      'During this internship, I focused on two key areas: creating Wordpress plugins and managing website content, plugins, and settings.',
    period: '2023',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Wordpress'],
  },
  {
    title: 'Frontend developer & UI designer',
    company: 'Freelancing, remote',
    description:
      'As a freelancer, I specialized in graphic design using Figma and website development using Next.js with Sanity CMS. I undertook projects independently, from design conceptualization to final implementation, ensuring client satisfaction.',
    period: '2023 - 2024',
    technologies: ['Next.js', 'TypeScript', 'Sanity CMS', 'Tailwind'],
  },
  {
    title: 'Frontend developer intern',
    company: 'Chop-chop, remote',
    description:
      'During my internship at Chop-Chop, I collaborated with an experienced IT team, focusing on tasks in Next.js. This experience provided valuable insights into teamwork and advanced my proficiency in Next.js.',
    period: '2024',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind'],
  },
  {
    title: 'Frontend developer & UI designer',
    company: 'GeoScan, remote',
    description: (
      <>
        At GeoScan, I collaborate with frontend, backend, and GIS specialists to
        build{' '}
        <Link
          className={cn(
            buttonVariants({ variant: 'link' }),
            'm-0 h-fit p-0 text-base'
          )}
          href="https://geoscan-app.com"
          target="_blank"
        >
          geoscan-app.com
        </Link>{' '}
        — a platform for generating real estate reports. I’m responsible for
        developing and maintaining the frontend, as well as designing UI/UX to
        ensure a clear and intuitive user experience.
      </>
    ),
    period: '2024 - present',
    technologies: ['Next.js', 'TypeScript', 'Tailwind', 'Supabase', 'Leaflet'],
  },
] as const;

export const certificatesData = [
  {
    title: 'IBM 4 weeeks Internship',
    issuer: 'Edunet Foundation',
    description:
      'Comprehensive course covering React fundamentals, hooks, and component-driven development.',
    period: '2022',
    link: 'https://drive.google.com/file/d/17Jwim5ci826UDlJmBkvVX2JbB5Ekabv5/view?usp=drive_link',
    image: '/images/edunet.png',
  },
  {
    title: 'Google Data Analytics Certificate',
    issuer: 'Coursera',
    description:
      'Built responsive UIs and utility-first workflows using Tailwind CSS.',
    period: '2023',
    link: 'https://drive.google.com/file/d/1RWKElkn3sCA8KckRDZGkVB04VM3DH4hc/view?usp=drive_link',
    image: '/images/google.png',
  },
  {
    title: 'Artificial Intelligence Fundamentals',
    issuer: 'IBM SkillsBuild',
    description:
      'Deep dive into TypeScript for large-scale applications and better developer ergonomics.',
    period: '2024',
    link: 'https://www.credly.com/go/Zf2y36XA',
    image: '/images/aiFund.png',
  },
  {
    title: 'Google AI Essentials',
    issuer: 'Coursera',
    description:
      'Deep dive into TypeScript for large-scale applications and better developer ergonomics.',
    period: '2024',
    link: 'https://coursera.org/verify/79TV8KY96XUG',
    image: '/images/googleAI.png',
  },
  {
    title: 'Cisco Networking Basics',
    issuer: 'Cisco Networking Academy',
    description:
      'Deep dive into TypeScript for large-scale applications and better developer ergonomics.',
    period: '2024',
    link: 'https://drive.google.com/file/d/1AbZTYwmeJjLpOwWeLzoLxHbDEvHlVRPo/view?usp=sharing',
    image: '/images/cisco.png',
  },
  {
    title: 'Understanding Incubation and Entrepreneurship',
    issuer: 'NPTEL',
    description:
      'Deep dive into TypeScript for large-scale applications and better developer ergonomics.',
    period: '2024',
    link: 'https://drive.google.com/file/d/1BNU6jGp_O5mofofDxkOqKrrhzjg5JD6c/view?usp=sharing',
    image: '/images/nptel.jpg',
  },
] as const;

export const skillsData = [
  { icon: <Icons.html className="size-12" /> },
  { icon: <Icons.css className="size-12" /> },
  { icon: <Icons.tailwind className="size-12" /> },
  { icon: <Icons.javascript className="size-12" /> },
  { icon: <Icons.typescript className="size-12" /> },
  { icon: <Icons.react className="size-12" /> },
  { icon: <Icons.redux className="size-12" /> },
  { icon: <Icons.nextjs className="size-12" /> },
  { icon: <Icons.docker className="size-12" /> },
  { icon: <Icons.docker className="size-12" /> },
] as const;
