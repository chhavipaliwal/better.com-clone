import Logo from '@/components/icons/logo';
import { Icon } from '@iconify/react/dist/iconify.js';
import Link from 'next/link';

export default function Start() {
  return (
    <div className="mx-auto flex min-h-screen max-w-7xl flex-col items-center bg-background">
      <nav className="sticky top-0 z-50 w-full bg-background px-6">
        <div className="flex w-full items-center justify-between py-4">
          <Link href="/" className="flex flex-col gap-0 leading-[0.5]">
            <Logo className="w-14 text-accent" />
            <p className="font-light text-default-800">Mortgage</p>
          </Link>
          <div className="flex items-center gap-2 text-lg font-semibold">
            <Icon
              icon="ic:baseline-phone"
              className="h-8 w-8 rounded-full bg-[#CDE9D3] p-1 text-accent"
            />

            <span className="hidden text-base font-medium text-foreground-800 sm:block">
              Need help? Call (415) 523 8837
            </span>
          </div>
        </div>
        <div className="mt-4 flex w-full flex-col items-center">
          <div className="relative w-full">
            <div className="border-2 border-default-400"></div>
            <a className="absolute left-1/2 top-0 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border bg-default-400">
              <img src="image.png" alt="image" className="rounded-full" />
            </a>
          </div>
        </div>
      </nav>
      <div className="flex w-full max-w-2xl flex-col px-6">
        <div className="mt-12 flex flex-col items-center">
          <h2 className="mt-4 text-2xl font-semibold md:text-5xl">
            Hi, I'm Betsy!
          </h2>
          <p className="mt-2 text-center text-2xl font-semibold md:text-5xl">
            What can I help you with?
          </p>
          {/* Options */}
          <div className="mt-6 w-full space-y-5">
            {[
              { text: 'Buying a home', icon: 'solar:home-outline' },
              {
                text: 'Refinance my mortgage',
                icon: 'tabler:home-dollar'
              },
              {
                text: 'Get cash from my home',
                icon: 'solar:chat-round-money-broken'
              }
            ].map((item, index) => (
              <button
                key={index}
                className="group mt-4 flex w-full items-center gap-4 rounded-lg border border-gray-400 p-4 pl-8 text-center text-lg font-bold hover:text-accent hover:shadow-[0_0_0_4px_inset] hover:shadow-accent"
              >
                <Icon
                  icon={item.icon}
                  className="h-8 w-8 text-xl text-accent"
                />
                <span className="font-medium text-gray-800 group-hover:text-accent">
                  {item.text}
                </span>
              </button>
            ))}
          </div>
        </div>
        <div className="mt-16 flex justify-center gap-8 text-center text-sm text-gray-600">
          <div className="flex flex-col items-center justify-center gap-4">
            <span className="text-2xl font-medium text-foreground md:text-3xl">
              $100B
            </span>
            <p>home loans funded entirely online</p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <span className="text-2xl font-medium text-foreground md:text-3xl">
              400K
            </span>
            <p>Customers who chose a Better Mortgage</p>
          </div>
        </div>
        <div className="mx-auto mb-32 mt-16 flex w-full max-w-xl flex-col items-center rounded-lg bg-[#F0F7F1] p-4 text-center font-normal text-gray-500 shadow-sm">
          <h3 className="mb-4">After a few questions, you'll unlock:</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <Icon
                icon="hugeicons:percent-circle"
                stroke="3"
                className="h-5 w-5 text-accent"
              />
              <span>Custom mortgage rates</span>
            </li>
            <li className="flex items-center gap-2">
              <Icon
                icon="mage:dollar"
                stroke="3"
                className="h-5 w-5 text-accent"
              />
              <span>Exclusive offers</span>
            </li>
            <li className="flex items-center gap-2">
              <Icon
                icon="entypo:mobile"
                stroke="3"
                className="h-5 w-5 text-accent"
              />
              <span>A personalized dashboard</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
