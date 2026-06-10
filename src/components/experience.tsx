'use client';

import { motion } from 'framer-motion';

import { SectionHeading } from '@/components/section-heading';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { experiencesData } from '@/lib/data';

export const Experience = () => {
  const { ref } = useSectionInView('Experience', 0.35);

  return (
    <section
      ref={ref}
      id="experience"
      className="my-10 w-full max-w-screen-md scroll-mt-28 px-4 md:mb-20 md:px-0"
    >
      <SectionHeading
        heading="My Experience"
        content="Internships where I built production backends, AI pipelines, and cloud workflows."
      />

      <div className="relative">
        {experiencesData.map(
          ({ title, company, location, period, description, technologies }) => (
            <motion.article
              key={`${company}-${title}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12 }}
              viewport={{ once: true }}
              className="relative pl-7 [&:not(:last-child)]:pb-10"
            >
              <div className="bg-muted absolute left-0 top-2.5 h-full w-[2px]">
                <div className="border-primary bg-background absolute left-[-5px] top-0 size-3 rounded-full border-2" />
              </div>

              <div className="rounded-lg border p-5 shadow-sm">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="font-heading text-lg font-semibold">
                      {title}
                    </h3>
                    <p className="text-muted-foreground mt-1 text-sm">
                      {company} • {location}
                    </p>
                  </div>
                  <span className="text-muted-foreground shrink-0 text-sm font-medium">
                    {period}
                  </span>
                </div>

                <ul className="text-muted-foreground mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed">
                  {description.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {technologies.map((technology) => (
                    <span
                      key={technology}
                      className="bg-secondary text-secondary-foreground rounded-full px-3 py-1 text-xs"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          )
        )}
      </div>
    </section>
  );
};
