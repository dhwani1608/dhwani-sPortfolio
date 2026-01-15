'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import { Icons } from '@/components/icons';
import { SectionHeading } from '@/components/section-heading';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { certificatesData } from '@/lib/data';
import { cn } from '@/lib/utils';

export const Certificates = () => {
  const { ref: sectionRef } = useSectionInView('Certificates');

  return (
    <section
      ref={sectionRef}
      id="certificates"
      className="my-10 scroll-mt-28 px-4 md:mb-20 md:px-0"
    >
      <SectionHeading
        heading="My Certificates"
        content="Professional certificates and courses I have completed."
      />
      <div className="relative max-w-screen-md">
        {certificatesData.map(({ title, description, issuer, link, image }) => (
          <div
            key={title}
            className="not-last:pb-12 relative pl-0 [&:not(:last-child)]:pb-10"
          >
            <div className="bg-muted absolute left-0 top-2.5 h-full w-[2px] group-first:top-6 group-first:h-[calc(100%-24px)]">
              <div className="border-primary bg-background absolute left-[-5px] top-0 size-3 rounded-full border-2" />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12 }}
              viewport={{ once: true }}
              className={cn(
                'flex flex-col gap-3 rounded border p-4 opacity-0 sm:flex-row sm:gap-4 sm:p-3'
              )}
            >
              {image ? (
                <a
                  href={link ?? '#'}
                  target="_blank"
                  rel="noreferrer"
                  className="block h-32 w-full overflow-hidden rounded sm:h-24 sm:w-36 sm:shrink-0"
                >
                  <Image
                    src={image}
                    alt={title}
                    width={320}
                    height={216}
                    className="size-full rounded object-cover"
                  />
                </a>
              ) : null}

              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <div className="flex size-7 shrink-0 items-center justify-center rounded-full border">
                    <Icons.star className="size-4" />
                  </div>
                  <span className="text-sm font-semibold">{title}</span>
                </div>

                <h3 className="mt-1 text-sm font-medium">{issuer}</h3>

                <p className="text-muted-foreground mt-2 text-sm">
                  {description}
                </p>

                {link ? (
                  <a
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary mt-2 inline-block text-sm underline"
                  >
                    View certificate
                  </a>
                ) : null}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};
