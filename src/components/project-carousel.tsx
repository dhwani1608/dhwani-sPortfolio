'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import WheelGesturesPlugin from 'embla-carousel-wheel-gestures';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import { Project } from '@/components/project';
import { projectsData } from '@/lib/data';

export const ProjectCarousel = () => {
  const autoplayRef = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true, stopOnMouseEnter: true })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: 'start',
      loop: true,
      dragFree: true,
      containScroll: 'trimSnaps',
    },
    [
      WheelGesturesPlugin({
        forceWheelAxis: 'x', // horizontal scroll
      }),
      autoplayRef.current,
    ]
  );
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  return (
    <div className="relative w-full">
      {/* Navigation Buttons */}
      <div className="mb-4 flex justify-end gap-2">
        <button
          onClick={scrollPrev}
          disabled={!canScrollPrev}
          className="border-border bg-background hover:bg-accent rounded-full border p-2 transition-all duration-200 hover:scale-110 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100"
          aria-label="Previous projects"
        >
          <ChevronLeft className="size-5" />
        </button>
        <button
          onClick={scrollNext}
          disabled={!canScrollNext}
          className="border-border bg-background hover:bg-accent rounded-full border p-2 transition-all duration-200 hover:scale-110 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100"
          aria-label="Next projects"
        >
          <ChevronRight className="size-5" />
        </button>
      </div>

      {/* Carousel */}
      <div
        ref={emblaRef}
        className="cursor-grab select-none overflow-hidden active:cursor-grabbing"
      >
        <div className="flex gap-4 md:gap-6">
          {projectsData.map((project, index) => (
            <div
              key={project.title}
              className="min-w-0 shrink-0 grow-0 basis-full sm:basis-1/2 lg:basis-[calc(33.333%-1rem)]"
            >
              <Project project={project} index={index} />
            </div>
          ))}
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="mt-6 flex justify-center gap-2">
        {projectsData.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === selectedIndex
                ? 'w-8 bg-pink-600'
                : 'w-2 bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-500'
            }`}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
