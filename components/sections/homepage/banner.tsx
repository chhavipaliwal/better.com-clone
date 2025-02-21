import { Icon } from '@iconify/react/dist/iconify.js';
import Image from 'next/image';

export default function Banner() {
  const rating = 4;

  return (
    <>
      <section className="section bg-primary">
        <div className="m-auto max-w-screen-2xl overflow-hidden px-6 md:px-10 lg:px-14">
          <h1 className="leading-small top-32 z-[1] m-0 w-auto p-0 pt-12 text-center text-[50px] font-bold tracking-tight text-secondary md:relative md:top-[72px] md:p-0 md:text-4xl md:tracking-tighter lg:top-32 lg:text-[118px] lg:leading-[115px]">
            Mortgages
            <br />
            made simple
          </h1>
          <div className="relative flex flex-col items-center justify-center md:flex-row">
            <div className="w-80 md:w-auto">
              <a
                className="inline-flex h-16 w-full items-center justify-center whitespace-nowrap rounded-full bg-secondary px-12 py-5 text-base font-bold leading-normal transition-all duration-200 ease-in-out hover:bg-primary hover:text-primary-foreground disabled:pointer-events-none disabled:opacity-50 md:mt-0 md:w-fit"
                href="/start"
              >
                Start my approval
              </a>
              <div className="mt-3 flex items-center justify-center gap-1 text-sm text-primary-foreground">
                <Icon
                  icon="material-symbols-light:alarm-outline-rounded"
                  className="text-primary-foreground"
                  width={20}
                />
                <span className="mr-1">3 min</span>
                <span>| No credit impact</span>
              </div>
            </div>
            <div className="mt-5 md:mb-[-36px] md:mt-0">
              <Image
                alt="Better Mortgage"
                rel="preload"
                width="510"
                height="810"
                decoding="async"
                data-nimg="1"
                className="text-transparent"
                src="https://media.better.com/better-com/homepage/hero-variant-c.webp"
              />
            </div>
            <div className="rounded-base bg-backgroundInversePrimary md:mt-lg absolute bottom-8 px-3 py-2.5 md:relative md:bg-transparent">
              <div className="flex items-center gap-2">
                <Icon icon="devicon:google" width="25" />
                <div className="flex items-center">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Icon
                      key={index}
                      icon="material-symbols-light:kid-star"
                      className={`${index < rating ? 'text-yellow-400' : 'text-primary-foreground'}`}
                      width={25}
                    />
                  ))}
                </div>
              </div>
              <div className="mt-1 text-xs text-primary-foreground">
                4.6 Stars | Google reviews
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
