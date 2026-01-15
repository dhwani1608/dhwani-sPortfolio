'use client';

import { motion } from 'framer-motion';

import { Project } from '@/components/project';
import { SectionHeading } from '@/components/section-heading';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { projectsData } from '@/lib/data';

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
      <div className="flex flex-col gap-7 md:flex-row">
        {/* Mobile Slider */}
        <div className="block md:hidden">
          <div className="scrollbar-hide flex gap-4 overflow-x-auto pb-4">
            {projectsData.map((project, index) => (
              <div key={project.title} className="w-72 shrink-0 sm:w-80">
                <Project project={project} index={index} />
              </div>
            ))}
          </div>
        </div>
        {/* Desktop Grid */}
        <div className="hidden md:flex md:flex-row md:gap-7">
          {projectsData.map((project, index) => (
            <Project key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
