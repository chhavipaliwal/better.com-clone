'use client';
import { Icon } from '@iconify/react/dist/iconify.js';
import { useState } from 'react';

const categories = ['Our products', 'Calculators', 'Guides & FAQs'] as const;
type Category = (typeof categories)[number];

export default function Qna() {
  const [selectedCategory, setSelectedCategory] =
    useState<Category>('Our products');

  const handleCategoryClick = (category: Category) => {
    setSelectedCategory(category);
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
                  key={category}
                  onClick={() => handleCategoryClick(category)}
                  className={`${
                    selectedCategory === category
                      ? 'border-accent text-accent shadow-[0_0_0_4px_inset] shadow-accent'
                      : 'border-strokeDivider'
                  } inline-flex h-12 w-auto items-center justify-center whitespace-nowrap rounded-full border px-6 py-3 text-base font-bold leading-normal transition-all duration-200 ease-in-out hover:border-accent hover:text-accent hover:shadow-[0_0_0_4px_inset] hover:shadow-accent disabled:pointer-events-none disabled:opacity-50`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* selected category content */}
          <div className="grid justify-center gap-8 lg:grid-cols-3 lg:gap-6">
            <a
              className="flex w-full flex-col justify-between space-y-6 rounded-medium bg-accent-50/50 p-6 px-10 md:flex-row lg:flex-col"
              href="/content/buying-your-first-home-with-better-mortgage/"
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
              <img
                alt="First Home"
                rel="preconnect"
                loading="lazy"
                width="200"
                height="200"
                decoding="async"
                data-nimg="1"
                className="h-[160px] w-full rounded-medium object-cover md:h-[130px] md:w-[285px] lg:w-full"
                src="https://media.better.com/better-com/homepage/learning-center/first-home.webp"
              />
            </a>
            <a
              className="flex flex-col gap-4 rounded-medium bg-accent-50/50 p-6 px-10 md:flex-row lg:col-span-2"
              href="/b/one-day-mortgage/"
            >
              <div className="flex flex-col gap-6">
                <h4 className="leading-heading text-backgroundInversePrimary m-0 w-auto p-0 text-xl font-bold tracking-normal md:text-2xl md:tracking-normal lg:text-xl">
                  One Day Mortgage<sup>1</sup>
                </h4>
                <p className="text-backgroundInversePrimary hidden flex-1 text-sm md:block md:flex-none">
                  Kick your home loan into hyperdrive. Going from locked rate to
                  Commitment Letter takes weeks for traditional lenders. We do
                  it in a single day. Traditional lenders deliver a Commitment
                  Letter in a few weeks.<sup>1</sup>
                </p>
                <div className="flex items-end justify-between">
                  <div className="rounded-full border border-foreground-200 p-2 text-primary transition-all duration-300 ease-in-out hover:border-primary hover:bg-primary hover:text-primary-foreground">
                    <Icon icon="material-symbols:arrow-right-alt" width={25} />
                  </div>
                </div>
              </div>
              <img
                alt="One day mortgage"
                rel="preconnect"
                loading="lazy"
                width="200"
                height="200"
                decoding="async"
                data-nimg="1"
                className="h-[160px] w-full rounded-medium object-cover md:aspect-square md:h-fit md:w-[285px]"
                src="https://media.better.com/better-com/homepage/learning-center/one-day-mortgage.webp"
              />
            </a>
            <a
              className="flex flex-col gap-4 rounded-medium bg-accent-50/50 p-6 px-10 md:flex-row lg:col-span-2 lg:flex-row-reverse"
              href="/b/heloc/"
            >
              <div className="flex flex-col gap-6">
                <h4 className="leading-heading text-backgroundInversePrimary m-0 w-auto p-0 text-xl font-bold tracking-normal md:text-2xl md:tracking-normal lg:text-xl">
                  Better HELOC
                </h4>
                <p className="text-backgroundInversePrimary hidden flex-1 text-sm md:block md:flex-none">
                  Introducing One Day HELOC™—your express lane to getting cash
                  from your home with our Home Equity Line of Credit<sup>2</sup>
                  . Access up to 90% of your home equity as cash in as little as
                  7 days.<sup>3</sup>
                </p>
                <div className="flex items-end justify-between">
                  <div className="rounded-full border border-foreground-200 p-2 text-primary transition-all duration-300 ease-in-out hover:border-primary hover:bg-primary hover:text-primary-foreground">
                    <Icon icon="material-symbols:arrow-right-alt" width={25} />
                  </div>
                </div>
              </div>
              <img
                alt="Better HELOC"
                rel="preconnect"
                loading="lazy"
                width="200"
                height="200"
                decoding="async"
                data-nimg="1"
                className="h-[160px] w-full rounded-medium object-cover md:aspect-square md:h-fit md:w-[285px]"
                src="https://media.better.com/better-com/homepage/learning-center/better-heloc.webp"
              />
            </a>
            <a
              className="flex w-full flex-col justify-between space-y-6 rounded-medium bg-accent-50/50 p-6 px-10 md:flex-row lg:flex-col"
              href="https://www.bettercover.com"
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
              <img
                alt="Insurance"
                rel="preconnect"
                loading="lazy"
                width="200"
                height="200"
                decoding="async"
                data-nimg="1"
                className="h-[160px] w-full rounded-medium object-cover md:h-[130px] md:w-[285px] lg:w-full"
                src="https://media.better.com/better-com/homepage/learning-center/insurance.webp"
              />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
