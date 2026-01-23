'use client';

import { motion } from 'framer-motion';

import { ProjectCarousel } from '@/components/project-carousel';
import { SectionHeading } from '@/components/section-heading';
import { useSectionInView } from '@/hooks/use-section-in-view';

export const Projects = () => {
  const { ref } = useSectionInView('Projects');

  return (
    <section
      ref={ref}
      id="projects"
      className="my-10 scroll-mt-28 px-4 md:mb-20 md:px-0"
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.175,
        }}
        viewport={{
          once: true,
        }}
      >
        <SectionHeading
          heading="My Projects"
          content="Projects I/We worked on."
        />
      </motion.div>
      <ProjectCarousel />
    </section>
  );
};
