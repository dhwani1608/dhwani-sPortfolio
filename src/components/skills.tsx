'use client';

import { motion } from 'framer-motion';

import { skillsData } from '@/lib/data';

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export const Skills = () => {
  return (
    <div className="mt-10 w-full overflow-x-auto px-4 sm:px-0 md:mt-14">
      <div className="flex w-max gap-3 sm:grid sm:w-full sm:grid-cols-4 sm:justify-center md:grid-cols-6 lg:grid-cols-8 lg:justify-between">
        {skillsData.map(({ icon }, index) => (
          <motion.div
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
            className="shrink-0 sm:shrink"
          >
            <div className="scale-75 sm:scale-100">{icon}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
