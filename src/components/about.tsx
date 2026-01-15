'use client';

import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';

import { SectionHeading } from '@/components/section-heading';
import { Skills } from '@/components/skills';
import { useSectionInView } from '@/hooks/use-section-in-view';

export const About = () => {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      id="about"
      className="my-10 flex w-full scroll-mt-28 flex-col items-center md:mb-20"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading heading="About Me" />
      <div className="-mt-5 max-w-2xl text-center leading-7">
        <p className="mb-4">
          I&apos;m{' '}
          <span className="font-semibold text-yellow-400">Dhwani Vyas</span>,
          I&apos;m a{' '}
          <span className="font-semibold text-yellow-400">Full-Stack</span> and{' '}
          <span className="font-semibold text-yellow-400">AI/ML</span>{' '}
          developer. I&apos;ts been above 3 years since I wrote my first
          &quot;Hello World&quot;. It&apos;s fun to be a programmer because
          it&apos;s not the same all the time. I{' '}
          <span className="font-semibold text-yellow-400">love learning</span>{' '}
          and{' '}
          <span className="font-semibold text-yellow-400">getting adapted</span>{' '}
          to new tech stack and for me{' '}
          <span className="font-semibold text-yellow-400">problem solving</span>{' '}
          is something I was born to do. Other than that in my free time u will
          find me reading books(my fav one being &quot;Shoe dog&quot; by Phil
          Knight, really a great book), cooking(trying and building some new
          flavour) and walking in nature(solus with music and trees around is
          just as perfect as it sounds). And yes, I am proud and love my choice
          of being a
          <span className="font-semibold text-yellow-400">
            {
              useTypewriter({
                words: [' programmer.', ' coder.', ' solver.'],
                loop: true,
                typeSpeed: 70,
                deleteSpeed: 50,
                delaySpeed: 1200,
              })[0]
            }
            <Cursor cursorStyle="|" />
          </span>
        </p>
        <p>
          I&apos;m open to Job opportunities where I can contribute, learn and
          grow. If you have a good opportunity that matches my skills and
          experience then don&apos;t hesitate to contact me.
        </p>
      </div>
      <Skills />
    </motion.section>
  );
};
