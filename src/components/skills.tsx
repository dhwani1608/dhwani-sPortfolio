'use client';

import { motion } from 'framer-motion';

import { skillsData } from '@/lib/data';

export const Skills = () => {
  return (
    <div className="mt-10 w-full overflow-x-auto px-4 sm:px-0 md:mt-14">
      <div className="flex w-max gap-3 sm:grid sm:w-full sm:grid-cols-4 sm:justify-center md:grid-cols-6 lg:grid-cols-8 lg:justify-between">
        {skillsData.map(({ icon }, index) => (
          <motion.div
            key={index}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
            className="shrink-0 sm:shrink"
          >
            <div className="text-foreground scale-75 sm:scale-100">{icon}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
