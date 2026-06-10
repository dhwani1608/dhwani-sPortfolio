import { Icons } from '@/components/icons';

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
    name: 'Experience',
    hash: '#experience',
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
    image: '/images/talentos.png',
    title: 'TalentOS — Recruiter Intelligence Dashboard',
    description:
      'Built an AI-powered recruiter intelligence platform that transforms unstructured resumes into actionable hiring insights using a multi-agent architecture. Automated resume parsing, work-history summarization, skill taxonomy normalization, and candidate profiling using LiteLLM and spaCy. Implemented semantic candidate-to-job matching with ChromaDB vector search and LLM-driven gap analysis, enabling recruiters to identify top candidates beyond keyword-based filtering. Developed a modern analytics dashboard with Next.js, Tailwind CSS, and Recharts, backed by FastAPI services and Supabase PostgreSQL for scalable talent intelligence workflows.',
    technologies: [
      'Python',
      'FastAPI',
      'LiteLLM',
      'spaCy',
      'ChromaDB',
      'RAG',
      'Next.js',
      'Tailwind CSS',
      'Supabase',
      'PostgreSQL',
      'Docker',
      'AI Agents',
    ],
    links: {
      preview: '',
      github: 'https://github.com/dhwani1608/ResumeAnalyzer',
    },
  },

  {
    image: '/images/emailauto.png',
    title: 'AI Email Automation System',
    description:
      'Developed a backend automation system integrating Gmail API for real-time email ingestion, with LangGraph stateful agentic workflows for multi-class intent classification and dynamic multi-step task orchestration. Implemented a Retrieval-Augmented Generation (RAG) pipeline using ChromaDB as a vector store for context-aware, semantically grounded response generation across high-volume email threads. Deployed scalable REST APIs with FastAPI and LangServe for efficient, production-ready serving of the automation pipeline.',
    technologies: [
      'Python',
      'LangGraph',
      'LangChain',
      'FastAPI',
      'ChromaDB',
      'RAG',
      'Gmail API',
      'LangServe',
    ],
    links: {
      preview: '',
      github: 'https://github.com/dhwani1608/Email_Automation',
    },
  },

  {
    image: '/images/cicd.png',
    title: 'CI/CD Pipeline to Kubernetes with Helm',
    description:
      'Architected an end-to-end CI/CD pipeline using Jenkins multi-stage pipelines to automate build, testing, containerization, and deployment workflows across multiple environments, eliminating manual deployment overhead. Containerized microservices using Docker and orchestrated deployments on Kubernetes with Helm charts, along with shell scripts for automated image publishing, chart packaging, and versioned releases. Integrated health checks and smoke testing stages within the pipeline to ensure deployment reliability and reduce post-release defects, while managing environment-specific configurations using Helm values for staging and production.',
    technologies: [
      'Jenkins',
      'Docker',
      'Kubernetes',
      'Helm',
      'Shell Scripting',
      'DevOps',
    ],
    links: {
      preview: '',
      github: 'https://github.com/dhwani1608/CI-CD-Pipeline', // add repo link
    },
  },

  {
    image: '/images/payzen.jpeg',
    title: 'Full-Stack Fintech Platform',
    description:
      'Built a full-stack fintech platform featuring wallet provisioning, group ledgers, equal-split expense tracking, and real-time settlement suggestions backed by a normalized PostgreSQL relational schema spanning 4+ entity types. Integrated Stripe Checkout API for secure wallet top-ups and peer-to-peer settlement execution, alongside multi-provider authentication (email/password + Google OAuth) with Auth.js and secure session management. Designed a modular TypeScript codebase with Prisma ORM for type-safe relational data access, deployed on Vercel with optimized server-side rendering via Next.js App Router for fast, SEO-friendly page loads.',
    technologies: [
      'Next.js',
      'TypeScript',
      'Prisma',
      'PostgreSQL',
      'Stripe API',
      'Auth.js',
      'Google OAuth',
      'Vercel',
    ],
    links: {
      preview: 'https://pay-zen-two.vercel.app/',
      github: 'https://github.com/HACKED-07/pay-zen',
    },
  },

  {
    image: '/images/resumeAnalyzer.png',
    title: 'AI Resume Analyzer & Job Portal',
    description:
      'Developed a full-stack job portal with AI-based resume analysis to match candidates with relevant job roles. Implemented NLP-based resume scoring to evaluate resumes based on skills, keywords, and job descriptions, along with ML-driven classification and job recommendations. Built secure Django-based authentication with role-based access for recruiters and applicants, and features like job posting, application tracking, and resume parsing to streamline the hiring process.',
    technologies: [
      'Django',
      'Python',
      'NLP',
      'Machine Learning',
      'PostgreSQL',
      'HTML',
      'CSS',
      'JavaScript',
    ],
    links: {
      preview: 'https://web-production-185eb.up.railway.app/',
      github: 'https://github.com/dhwani1608/JobPortal',
    },
  },

  {
    image: '/images/realign.png',
    title: 'Realign AI',
    description:
      'Built an AI-driven construction planning platform that retrieves optimal building layouts from a dataset of 571+ plans using ResNet18 embeddings. Implemented JWT-based RBAC authentication, a FastAPI backend with PostgreSQL, and an interactive Next.js frontend for visualizing and generating layout recommendations.',
    technologies: [
      'Next.js',
      'React',
      'FastAPI',
      'Python',
      'PostgreSQL',
      'PyTorch',
      'ResNet18',
      'VAE',
      'JWT Authentication',
      'Tailwind CSS',
      'Vercel',
    ],
    links: {
      preview: 'https://realigncreatech.vercel.app/',
      github: 'https://github.com/dhwani1608/ReAlign_backend',
    },
  },

  {
    image: '/images/stockPred.png',
    title: 'StockPred',
    description:
      'Developed an end-to-end ML-powered stock prediction platform that generates directional trading signals using historical and live market data. The system leverages feature engineering and an XGBoost-based classification model, exposed via a production-ready FastAPI backend and consumed through a modern web interface.',
    technologies: [
      'Python',
      'XGBoost',
      'FastAPI',
      'PostgreSQL',
      'SQLAlchemy',
      'Next.js',
      'JavaScript',
      'Yahoo Finance API',
      'Render',
      'Vercel',
    ],
    links: {
      preview: 'https://stockpred-frontend-phi.vercel.app/',
      github: 'https://github.com/dhwani1608/stockpred_backend',
    },
  },

  {
    image: '/images/plantSense.png',
    title: 'PlantSense AI',
    description:
      'Built an end-to-end AI-powered plant identification platform that classifies plant species from uploaded images using a deep learning model and provides structured plant care recommendations through a production-ready API.',
    technologies: [
      'PyTorch',
      'EfficientNet-B0',
      'FastAPI',
      'React',
      'Tailwind CSS',
      'Vite',
      'JavaScript',
      'Render',
      'Vercel',
    ],
    links: {
      preview: 'https://plant-sense-frontend.vercel.app/',
      github: 'https://github.com/dhwani1608/plantsense-backend',
    },
  },
  {
    image: '/images/bakeotopia.png',
    title: 'Bakeotopia',
    description:
      'Developed a full-stack web application for a home bakery business and deployed a secure backend using Supabase with authentication and role-based access control.',
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
    image: '/images/paperSimplify.png',
    title: 'PaperSimplify-Understanding Research Papers Made Easy',
    description:
      'PaperSimplify is a lightweight web application that helps students and researchers understand academic papers faster by converting dense research PDFs into clear, section-wise simplified explanations using AI.',
    technologies: [
      'Next.js',
      'Tailwind CSS',
      'TypeScript',
      'OpenAI API',
      'PDF.co API',
      'Vercel',
    ],
    links: {
      preview: 'https://paper-simplify.vercel.app/',
      github: 'https://github.com/dhwani1608/paperSimplify',
    },
  },
  {
    image: '/images/portfolio.png',
    title: 'Personal Portfolio',
    description:
      'A personal portfolio website to showcase my projects, skills, experience, and certificates, built with Next.js and Tailwind CSS, featuring smooth animations with Framer Motion.',
    technologies: [
      'Next.js',
      'TypeScript',
      'Framer-motion',
      'Tailwind',
      'React-hook-form',
      'Resend',
    ],
    links: {
      preview:
        'https://dhwani-s-portfolio-qkht3iw7h-dhwani1608s-projects.vercel.app/',
      github: 'https://github.com/dhwani1608/dhwani-sPortfolio',
    },
  },
  {
    image: '/images/breach.png',
    title: 'Protract: AI-Powered Fraud Prevention System',
    description:
      'Project with which won 1st runner up at Breach25 hackathon. Developed an AI-powered fraud detection system that analyzes user behavior to identify and prevent fraudulent activities in real-time, enhancing security for online transactions. (Website is currently down due to hosting issues.)',
    technologies: [
      'Next.js',
      'Nodejs',
      'FastAPI',
      'OpenCV',
      'DeepFace',
      'Solidity',
      'Thirdweb',
      'MongoDB',
    ],
    links: {
      preview: 'https://protract-breach25.vercel.app/',
      github: 'https://github.com/dhwani1608/Protract-Breach25',
    },
  },
] as const;

export const experiencesData = [
  {
    title: 'Backend Developer Intern',
    company: 'Seventh Ray LegalTech',
    location: 'Remote',
    period: 'Jan 2026 - Apr 2026',
    description: [
      'Developed and deployed a Java Spring Boot backend for an enterprise B2B SaaS Contract Lifecycle Management platform, following SDLC best practices.',
      'Designed a PostgreSQL relational schema across 90+ tables for contracts, parties, templates, approvals, compliance, and audit logs with Flyway migrations.',
      'Built RESTful APIs for 7+ core modules with CRUD coverage, JWT-based stateless authentication, Spring Security RBAC, and workspace-level data isolation.',
      'Deployed on AWS EC2, configured AWS S3 for secure document management, and authored architecture, API, database, and Agile sprint documentation.',
    ],
    technologies: [
      'Java',
      'Spring Boot',
      'Spring Security',
      'PostgreSQL',
      'Flyway',
      'JWT',
      'RBAC',
      'AWS EC2',
      'AWS S3',
      'REST APIs',
    ],
  },
  {
    title: 'AI Engineering Intern',
    company: 'Textify Analytics',
    location: 'Remote',
    period: 'June 2025 - Aug 2025',
    description: [
      'Built and maintained ETL data pipelines on Microsoft Azure Data Factory and Blob Storage for large-scale document and chart datasets.',
      'Supported a multimodal AI search engine processing 1M+ documents monthly with scalable cloud-native ingestion and automation workflows.',
      'Implemented data extraction and retrieval workflows for structured and unstructured sources including PDFs, images, and charts using Python and REST APIs.',
      'Optimized pipeline throughput for downstream AI retrieval across a 3M+ chart dataset powering natural language search.',
    ],
    technologies: [
      'Python',
      'Azure Data Factory',
      'Azure Blob Storage',
      'ETL',
      'REST APIs',
      'Data Pipelines',
      'AI Search',
    ],
  },
] as const;
export const certificatesData = [
  {
    title: 'IBM 4 weeeks Internship',
    issuer: 'Edunet Foundation',
    period: '2022',
    link: 'https://drive.google.com/file/d/17Jwim5ci826UDlJmBkvVX2JbB5Ekabv5/view?usp=drive_link',
    image: '/images/edunet.png',
  },
  {
    title: 'Google Data Analytics Certificate',
    issuer: 'Coursera',
    period: '2023',
    link: 'https://drive.google.com/file/d/1RWKElkn3sCA8KckRDZGkVB04VM3DH4hc/view?usp=drive_link',
    image: '/images/google.png',
  },
  {
    title: 'Artificial Intelligence Fundamentals',
    issuer: 'IBM SkillsBuild',
    period: '2024',
    link: 'https://www.credly.com/go/Zf2y36XA',
    image: '/images/aiFund.png',
  },
  {
    title: 'Google AI Essentials',
    issuer: 'Coursera',
    period: '2024',
    link: 'https://coursera.org/verify/79TV8KY96XUG',
    image: '/images/googleAI.png',
  },
  {
    title: 'Cisco Networking Basics',
    issuer: 'Cisco Networking Academy',
    period: '2024',
    link: 'https://drive.google.com/file/d/1AbZTYwmeJjLpOwWeLzoLxHbDEvHlVRPo/view?usp=sharing',
    image: '/images/cisco.png',
  },
  {
    title: 'Understanding Incubation and Entrepreneurship',
    issuer: 'NPTEL',
    period: '2024',
    link: 'https://drive.google.com/file/d/1BNU6jGp_O5mofofDxkOqKrrhzjg5JD6c/view?usp=sharing',
    image: '/images/nptel.jpg',
  },
] as const;

export const skillsData = [
  { icon: <Icons.html className="size-12" /> },
  { icon: <Icons.tailwind className="size-12" /> },
  { icon: <Icons.javascript className="size-12" /> },
  { icon: <Icons.typescript className="size-12" /> },
  { icon: <Icons.react className="size-12" /> },
  { icon: <Icons.github className="size-12" /> },
  { icon: <Icons.nextjs className="size-12" /> },
  { icon: <Icons.css className="size-12" /> },
] as const;
