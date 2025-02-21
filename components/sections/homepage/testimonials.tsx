'use client';
import { Icon } from '@iconify/react/dist/iconify.js';
import { useState } from 'react';

const testimonialImages = {
  Arian: '/testimonials/still-quote-Arian.webp',
  Amanda: '/testimonials/still-quote-Amanda.webp',
  Paul: '/testimonials/still-quote-Paul.webp'
};

type TestimonialPerson = keyof typeof testimonialImages;

export default function Testimonials() {
  const [selectedPerson, setSelectedPerson] =
    useState<TestimonialPerson>('Arian');

  const handlePersonClick = (person: TestimonialPerson) => {
    setSelectedPerson(person);
  };

  return (
    <>
      <section className="section gap-x-3xl p-base px-lg py-4xl m-auto flex max-w-screen-2xl flex-col justify-between md:flex-row-reverse md:px-10 xl:p-[120px]">
        <div className="flex flex-col justify-center md:max-w-[507px]">
          <h2 className="leading-small m-0 mb-8 w-auto p-0 text-3xl font-bold tracking-tight md:text-3xl md:tracking-tighter lg:text-[88px] lg:leading-[88px]">
            Find out why we&apos;re better.
          </h2>
          <a
            className="mb-4 inline-flex h-16 w-full items-center justify-center whitespace-nowrap rounded-full bg-primary px-12 py-5 text-base font-bold leading-normal text-primary-foreground transition-all duration-200 ease-in-out hover:bg-accent disabled:pointer-events-none disabled:opacity-50 md:w-fit"
            href="/about-us/"
          >
            See all our stories
          </a>
          <div className="flex items-center justify-center md:justify-start">
            <Icon
              icon="material-symbols-light:star-rate"
              className="text-accent"
              width={25}
            />
            <span>Trustpilot</span>
            <span className="mx-2 font-bold">Excellent</span>
            <span>
              <strong>4.4</strong> out of 5
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-8 md:flex-col-reverse">
          <div className="flex gap-x-4 overflow-scroll [&::-webkit-scrollbar]:hidden">
            {Object.keys(testimonialImages).map((person) => (
              <button
                key={person}
                onClick={() => handlePersonClick(person as TestimonialPerson)}
                className={`${
                  selectedPerson === person
                    ? 'border-accent text-accent shadow-[0_0_0_4px_inset] shadow-accent'
                    : ''
                } inline-flex h-12 w-auto items-center justify-center whitespace-nowrap rounded-full border px-6 py-3 text-sm font-medium leading-normal transition-all duration-200 ease-in-out hover:border-accent hover:text-accent hover:shadow-[0_0_0_4px_inset] hover:shadow-accent disabled:pointer-events-none disabled:opacity-50`}
              >
                {person}
              </button>
            ))}
          </div>
          <div className="flex justify-center gap-x-4 overflow-hidden rounded-xl">
            <img
              alt={`${selectedPerson}-testimonial`}
              className="text-transparent"
              rel="preconnect"
              loading="lazy"
              width="341"
              height="606"
              decoding="async"
              data-nimg="1"
              src={testimonialImages[selectedPerson]}
            />
          </div>
        </div>
      </section>
    </>
  );
}
