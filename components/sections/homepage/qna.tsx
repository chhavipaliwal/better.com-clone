'use client';
import { Icon } from '@iconify/react/dist/iconify.js';
import Image from 'next/image';
import React, { useState } from 'react';

const categories = [
  {
    label: 'Our products',
    key: 'our-products'
  },
  {
    label: 'Calculators',
    key: 'calculators'
  },
  {
    label: 'Guides & FAQs',
    key: 'guides-faqs'
  }
] as const;
type Category = (typeof categories)[number];

export default function Qna() {
  const [selectedCategory, setSelectedCategory] =
    useState<Category['key']>('our-products');

  const handleCategoryClick = (category: Category) => {
    setSelectedCategory(category.key);
  };

  const categoryContent: Record<Category['key'], React.ReactNode> = {
    'our-products': <OurProducts />,
    calculators: <Calculators />,
    'guides-faqs': <GuidesFaqs />
  };

  return (
    <>
      <section className="section pb-base w-full lg:pb-12">
        <div className="m-auto flex max-w-screen-2xl flex-col items-center gap-8 px-6 py-20 md:items-start md:px-10 lg:gap-[60px]">
          <div className="justify-left flex w-full max-w-lg flex-wrap gap-12 lg:max-w-none lg:items-end lg:justify-between lg:gap-6">
            <h2 className="m-0 w-full max-w-lg p-0 text-3xl font-semibold tracking-tight md:text-2xl md:tracking-tight lg:text-5xl">
              Got questions?
              <br />
              We've got answers
            </h2>
            <div className="flex gap-3 overflow-x-scroll lg:gap-6 [&::-webkit-scrollbar]:hidden">
              {categories.map((category) => (
                <button
                  key={category.key}
                  onClick={() => handleCategoryClick(category)}
                  className={`${
                    selectedCategory === category.key
                      ? 'border-accent text-accent shadow-[0_0_0_4px_inset] shadow-accent'
                      : 'border-strokeDivider'
                  } inline-flex h-12 w-auto items-center justify-center whitespace-nowrap rounded-full border px-6 py-3 text-base font-bold leading-normal transition-all duration-200 ease-in-out hover:border-accent hover:text-accent hover:shadow-[0_0_0_4px_inset] hover:shadow-accent disabled:pointer-events-none disabled:opacity-50`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {categoryContent[selectedCategory]}
        </div>
      </section>
    </>
  );
}

function OurProducts() {
  return (
    <>
      <div className="grid justify-center gap-8 lg:grid-cols-3 lg:gap-6">
        <a
          className="flex w-full flex-col justify-between space-y-6 rounded-medium bg-accent-50/50 p-6 px-10 md:flex-row lg:flex-col"
          href="#"
        >
          <div className="flex flex-col gap-6">
            <h4 className="text-backgroundInversePrimary m-0 w-auto p-0 text-xl font-bold tracking-normal md:text-2xl md:tracking-normal lg:text-xl">
              Buying your first home with Better
            </h4>
            <div className="flex items-end justify-between">
              <div className="rounded-full border border-foreground-200 p-2 text-primary transition-all duration-300 ease-in-out hover:border-primary hover:bg-primary hover:text-primary-foreground">
                <Icon icon="material-symbols:arrow-right-alt" width={25} />
              </div>
            </div>
          </div>
          <Image
            alt="First Home"
            width={200}
            height={200}
            className="h-[160px] w-full rounded-medium object-cover md:h-[130px] md:w-[285px] lg:w-full"
            src="/assets/homepage/our-products/first-home.webp"
          />
        </a>
        <a
          className="flex flex-col justify-between gap-4 rounded-medium bg-accent-50/50 p-6 px-10 md:flex-row lg:col-span-2"
          href="#"
        >
          <div className="flex flex-col gap-6">
            <h4 className="text-backgroundInversePrimary m-0 w-auto p-0 text-xl font-bold tracking-normal md:text-2xl md:tracking-normal lg:text-xl">
              One Day Mortgage<sup>1</sup>
            </h4>
            <p className="text-backgroundInversePrimary hidden flex-1 text-sm md:block md:flex-none">
              Kick your home loan into hyperdrive. Going from locked rate to
              Commitment Letter takes weeks for traditional lenders. We do it in
              a single day. Traditional lenders deliver a Commitment Letter in a
              few weeks.<sup>1</sup>
            </p>
            <div className="flex items-end justify-between">
              <div className="rounded-full border border-foreground-200 p-2 text-primary transition-all duration-300 ease-in-out hover:border-primary hover:bg-primary hover:text-primary-foreground">
                <Icon icon="material-symbols:arrow-right-alt" width={25} />
              </div>
            </div>
          </div>
          <Image
            alt="One day mortgage"
            width={200}
            height={200}
            className="h-[160px] w-full rounded-medium object-cover md:aspect-square md:h-fit md:w-[285px]"
            src="/assets/homepage/our-products/one-day-mortgage.webp"
          />
        </a>
        <a
          className="flex flex-col justify-between gap-4 rounded-medium bg-accent-50/50 p-6 px-10 md:flex-row lg:col-span-2 lg:flex-row-reverse"
          href="#"
        >
          <div className="flex flex-col gap-6">
            <h4 className="text-backgroundInversePrimary m-0 w-auto p-0 text-xl font-bold tracking-normal md:text-2xl md:tracking-normal lg:text-xl">
              Better HELOC
            </h4>
            <p className="text-backgroundInversePrimary hidden flex-1 text-sm md:block md:flex-none">
              Introducing One Day HELOC™—your express lane to getting cash from
              your home with our Home Equity Line of Credit<sup>2</sup>. Access
              up to 90% of your home equity as cash in as little as 7 days.
              <sup>3</sup>
            </p>
            <div className="flex items-end justify-between">
              <div className="rounded-full border border-foreground-200 p-2 text-primary transition-all duration-300 ease-in-out hover:border-primary hover:bg-primary hover:text-primary-foreground">
                <Icon icon="material-symbols:arrow-right-alt" width={25} />
              </div>
            </div>
          </div>
          <Image
            alt="Better HELOC"
            width={200}
            height={200}
            className="h-[160px] w-full rounded-medium object-cover md:aspect-square md:h-fit md:w-[285px]"
            src="/assets/homepage/our-products/better-heloc.webp"
          />
        </a>
        <a
          className="flex w-full flex-col justify-between space-y-6 rounded-medium bg-accent-50/50 p-6 px-10 md:flex-row lg:flex-col"
          href="#"
        >
          <div className="flex flex-col gap-6">
            <h4 className="text-backgroundInversePrimary m-0 w-auto p-0 text-xl font-bold tracking-normal md:text-2xl md:tracking-normal lg:text-xl">
              Insurance
            </h4>
            <div className="flex items-end justify-between">
              <div className="rounded-full border border-foreground-200 p-2 text-primary transition-all duration-300 ease-in-out hover:border-primary hover:bg-primary hover:text-primary-foreground">
                <Icon icon="material-symbols:arrow-right-alt" width={25} />
              </div>
            </div>
          </div>
          <Image
            alt="Insurance"
            width={200}
            height={200}
            className="h-[160px] w-full rounded-medium object-cover md:h-[130px] md:w-[285px] lg:w-full"
            src="/assets/homepage/our-products/insurance.webp"
          />
        </a>
      </div>
    </>
  );
}

function Calculators() {
  return (
    <>
      <div className="grid justify-center gap-8 lg:grid-cols-3 lg:gap-6">
        <a
          className="flex w-full flex-col justify-between space-y-6 rounded-medium bg-accent-50/50 p-6 px-10 md:flex-row lg:flex-col"
          href="#"
        >
          <div className="flex flex-col gap-6">
            <h4 className="text-backgroundInversePrimary m-0 w-auto p-0 text-xl font-bold tracking-normal md:text-2xl md:tracking-normal lg:text-xl">
              Mortgage calculator
            </h4>
            <div className="flex items-end justify-between">
              <div className="rounded-full border border-foreground-200 p-2 text-primary transition-all duration-300 ease-in-out hover:border-primary hover:bg-primary hover:text-primary-foreground">
                <Icon icon="material-symbols:arrow-right-alt" width={25} />
              </div>
            </div>
          </div>
          <Image
            alt="Mortgage payment calculator illustration"
            width={200}
            height={200}
            className="h-[160px] w-full rounded-medium object-cover md:h-[130px] md:w-[285px] lg:w-full"
            src="/assets/homepage/calculators/mortgage-calculator.webp"
          />
        </a>
        <a
          className="flex flex-col justify-between gap-4 rounded-medium bg-accent-50/50 p-6 px-10 md:flex-row lg:col-span-2"
          href="#"
        >
          <div className="flex flex-col gap-6">
            <h4 className="text-backgroundInversePrimary m-0 w-auto p-0 text-xl font-bold tracking-normal md:text-2xl md:tracking-normal lg:text-xl">
              Affordability calculator
            </h4>
            <p className="text-backgroundInversePrimary hidden flex-1 text-sm md:block md:flex-none">
              Got homeownership dreams? Let's put some numbers behind them. Our
              affordability calculator estimates the maximum home you can
              afford.
            </p>
            <div className="flex items-end justify-between">
              <div className="rounded-full border border-foreground-200 p-2 text-primary transition-all duration-300 ease-in-out hover:border-primary hover:bg-primary hover:text-primary-foreground">
                <Icon icon="material-symbols:arrow-right-alt" width={25} />
              </div>
            </div>
          </div>
          <Image
            alt="Home affordability calculator illustration"
            width={200}
            height={200}
            className="h-[160px] w-full rounded-medium object-cover md:aspect-square md:h-fit md:w-[285px]"
            src="/assets/homepage/calculators/affordability-calculator.webp"
          />
        </a>
        <a
          className="flex flex-col justify-between gap-4 rounded-medium bg-accent-50/50 p-6 px-10 md:flex-row lg:col-span-2 lg:flex-row-reverse"
          href="#"
        >
          <div className="flex flex-col gap-6">
            <h4 className="text-backgroundInversePrimary m-0 w-auto p-0 text-xl font-bold tracking-normal md:text-2xl md:tracking-normal lg:text-xl">
              HELOC calculator
            </h4>
            <p className="text-backgroundInversePrimary hidden flex-1 text-sm md:block md:flex-none">
              Need cash? Quickly see how much equity you can borrow from your
              home and what your monthly payments might be.
            </p>
            <div className="flex items-end justify-between">
              <div className="rounded-full border border-foreground-200 p-2 text-primary transition-all duration-300 ease-in-out hover:border-primary hover:bg-primary hover:text-primary-foreground">
                <Icon icon="material-symbols:arrow-right-alt" width={25} />
              </div>
            </div>
          </div>
          <Image
            alt="HELOC payment calculator illustration"
            width={200}
            height={200}
            className="h-[160px] w-full rounded-medium object-cover md:aspect-square md:h-fit md:w-[285px]"
            src="/assets/homepage/calculators/heloc-calculator.webp"
          />
        </a>
        <a
          className="flex w-full flex-col justify-between space-y-6 rounded-medium bg-accent-50/50 p-6 px-10 md:flex-row lg:flex-col"
          href="#"
        >
          <div className="flex flex-col gap-6">
            <h4 className="text-backgroundInversePrimary m-0 w-auto p-0 text-xl font-bold tracking-normal md:text-2xl md:tracking-normal lg:text-xl">
              Fixed-rate loan comparison calculator
            </h4>
            <div className="flex items-end justify-between">
              <div className="rounded-full border border-foreground-200 p-2 text-primary transition-all duration-300 ease-in-out hover:border-primary hover:bg-primary hover:text-primary-foreground">
                <Icon icon="material-symbols:arrow-right-alt" width={25} />
              </div>
            </div>
          </div>
          <Image
            alt="Fixed-rate loan comparison calculator illustration"
            width={200}
            height={200}
            className="h-[160px] w-full rounded-medium object-cover md:h-[130px] md:w-[285px] lg:w-full"
            src="/assets/homepage/calculators/fixed-rate-calculator.webp"
          />
        </a>
      </div>
    </>
  );
}

function GuidesFaqs() {
  return (
    <>
      <div className="grid justify-center gap-8 lg:grid-cols-3 lg:gap-6">
        <a
          className="flex w-full flex-col justify-between space-y-6 rounded-medium bg-accent-50/50 p-6 px-10 md:flex-row lg:flex-col"
          href="#"
        >
          <div className="flex flex-col gap-6">
            <h4 className="text-backgroundInversePrimary m-0 w-auto p-0 text-xl font-bold tracking-normal md:text-2xl md:tracking-normal lg:text-xl">
              What is a good debt-to-income ratio for a home loan?
            </h4>
            <div className="flex items-end justify-between">
              <div className="rounded-full border border-foreground-200 p-2 text-primary transition-all duration-300 ease-in-out hover:border-primary hover:bg-primary hover:text-primary-foreground">
                <Icon icon="material-symbols:arrow-right-alt" width={25} />
              </div>
            </div>
          </div>
          <Image
            alt="Debt to income ratio guide illustration"
            width={200}
            height={200}
            className="h-[160px] w-full rounded-medium object-cover md:h-[130px] md:w-[285px] lg:w-full"
            src="/assets/homepage/guides-faqs/good-dti.webp"
          />
        </a>
        <a
          className="flex flex-col justify-between gap-4 rounded-medium bg-accent-50/50 p-6 px-10 md:flex-row lg:col-span-2"
          href="#"
        >
          <div className="flex flex-col gap-6">
            <h4 className="text-backgroundInversePrimary m-0 w-auto p-0 text-xl font-bold tracking-normal md:text-2xl md:tracking-normal lg:text-xl">
              Buying a house without realtor
            </h4>
            <p className="text-backgroundInversePrimary hidden flex-1 text-sm md:block md:flex-none">
              Thinking about buying a house without a real estate agent? Read
              this first.
            </p>
            <div className="flex items-end justify-between">
              <div className="rounded-full border border-foreground-200 p-2 text-primary transition-all duration-300 ease-in-out hover:border-primary hover:bg-primary hover:text-primary-foreground">
                <Icon icon="material-symbols:arrow-right-alt" width={25} />
              </div>
            </div>
          </div>
          <Image
            alt="Buying house without realtor guide illustration"
            width={200}
            height={200}
            className="h-[160px] w-full rounded-medium object-cover md:aspect-square md:h-fit md:w-[285px]"
            src="/assets/homepage/guides-faqs/buy-house-without-realtor.webp"
          />
        </a>
        <a
          className="flex flex-col justify-between gap-4 rounded-medium bg-accent-50/50 p-6 px-10 md:flex-row lg:col-span-2 lg:flex-row-reverse"
          href="#"
        >
          <div className="flex flex-col gap-6">
            <h4 className="text-backgroundInversePrimary m-0 w-auto p-0 text-xl font-bold tracking-normal md:text-2xl md:tracking-normal lg:text-xl">
              Timeline for homebuying process
            </h4>
            <p className="text-backgroundInversePrimary hidden flex-1 text-sm md:block md:flex-none">
              Does the process of buying a home seem daunting? Don't stress, we
              broke it down into 8 easy steps.
            </p>
            <div className="flex items-end justify-between">
              <div className="rounded-full border border-foreground-200 p-2 text-primary transition-all duration-300 ease-in-out hover:border-primary hover:bg-primary hover:text-primary-foreground">
                <Icon icon="material-symbols:arrow-right-alt" width={25} />
              </div>
            </div>
          </div>
          <Image
            alt="Home buying timeline guide illustration"
            width={200}
            height={200}
            className="h-[160px] w-full rounded-medium object-cover md:aspect-square md:h-fit md:w-[285px]"
            src="/assets/homepage/guides-faqs/loan-timeline.webp"
          />
        </a>
        <a
          className="flex w-full flex-col justify-between space-y-6 rounded-medium bg-accent-50/50 p-6 px-10 md:flex-row lg:flex-col"
          href="#"
        >
          <div className="flex flex-col gap-6">
            <h4 className="text-backgroundInversePrimary m-0 w-auto p-0 text-xl font-bold tracking-normal md:text-2xl md:tracking-normal lg:text-xl">
              Conventional loan requirements
            </h4>
            <div className="flex items-end justify-between">
              <div className="rounded-full border border-foreground-200 p-2 text-primary transition-all duration-300 ease-in-out hover:border-primary hover:bg-primary hover:text-primary-foreground">
                <Icon icon="material-symbols:arrow-right-alt" width={25} />
              </div>
            </div>
          </div>
          <Image
            alt="Conventional loan requirements guide illustration"
            width={200}
            height={200}
            className="h-[160px] w-full rounded-medium object-cover md:h-[130px] md:w-[285px] lg:w-full"
            src="/assets/homepage/guides-faqs/conventional-loan.webp"
          />
        </a>
      </div>
    </>
  );
}
