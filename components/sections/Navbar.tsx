'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import { Link } from '@heroui/react';
import { Icon } from '@iconify/react/dist/iconify.js';
import Logo from '../icons/logo';
import { AnimatePresence, motion } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname();

  const DISABLED_ROUTES = ['/start', '/auth'];

  if (DISABLED_ROUTES.includes(pathname)) return null;

  const menuItems = [
    {
      key: 'buy',
      label: 'Buy',
      items: [
        {
          key: 'apply-now',
          label: 'Apply Now',
          href: '/apply-now'
        },
        {
          key: 'purchase-rates',
          label: 'Purchase Rates',
          href: '/purchase-rates'
        },
        {
          key: 'affordability-calculator',
          label: 'Affordability Calculator',
          href: '/affordability-calculator'
        },
        {
          key: 'mortgage-calculator',
          label: 'Mortgage Calculator',
          href: '/mortgage-calculator'
        },
        {
          key: 'rent-vs-buy-calculator',
          label: 'Rent vs Buy Calculator',
          href: '/rent-vs-buy-calculator'
        },
        {
          key: 'find-an-agent',
          label: 'Find an Agent',
          href: '/find-an-agent'
        },
        {
          key: 'va-loans',
          label: 'VA Loans',
          href: '/va-loans'
        },
        {
          key: 'learning-center',
          label: 'Learning Center',
          href: '/learning-center'
        }
      ]
    },
    {
      key: 'refinance',
      label: 'Refinance',
      items: [
        {
          key: 'refinance-rates',
          label: 'Refinance Rates',
          href: '/refinance-rates'
        },
        {
          key: 'apply-now',
          label: 'Apply Now',
          href: '/apply-now'
        },
        {
          key: 'cash-out-refinance-calculator',
          label: 'Cash-out Refinance Calculator',
          href: '/cash-out-refinance-calculator'
        },
        {
          key: 'learning-center',
          label: 'Learning Center',
          href: '/learning-center'
        }
      ]
    },
    {
      key: 'heloc',
      label: 'HELOC',
      items: [
        {
          key: 'apply-now',
          label: 'Apply Now',
          href: '/apply-now'
        },
        {
          key: 'calculate-your-cash',
          label: 'Calculate your Cash',
          href: '/calculate-your-cash'
        },
        {
          key: 'heloc-vs-cash-out',
          label: 'HELOC vs. Cash-out Refinance',
          href: '/heloc-vs-cash-out'
        },
        {
          key: 'learning-center',
          label: 'Learning Center',
          href: '/learning-center'
        }
      ]
    }
  ];

  return (
    <>
      <header className="sticky top-0 z-20 bg-primary text-primary-foreground transition-all duration-300 ease-in-out">
        <nav className="m-auto flex max-w-screen-2xl justify-between p-5 md:px-10 md:py-5 xl:p-5">
          <div className="flex flex-row">
            <ul className="flex items-center">
              <li className="mr-2">
                <Link
                  className="group-hover:bg-backgroundSecondary group-hover:text-textPrimary font-normal text-primary-foreground transition-all duration-300 ease-in-out hover:bg-inherit hover:text-primary-foreground"
                  href="/"
                >
                  <Logo />
                </Link>
              </li>
              {menuItems.map((item) => (
                <li className="mx-5 hidden xl:block" key={item.key}>
                  <div className="group relative">
                    <span className="">
                      <button className="h-12 rounded-full px-4 py-1 font-normal text-primary-foreground transition-all duration-300 ease-in-out hover:bg-background hover:text-foreground group-hover:bg-background group-hover:text-foreground">
                        {item.label}
                      </button>
                    </span>
                    <div className="invisible absolute left-0 right-0 pt-2 group-hover:visible">
                      <div className="z-10 w-[22rem] rounded-small bg-background p-3 text-foreground shadow-md">
                        {item.items.map((item) => (
                          <div key={item.key}>
                            <a
                              href={item.href}
                              className="group/sub-menu flex items-center justify-between px-5 py-3 hover:rounded-small hover:bg-default-200 focus:bg-default-200"
                            >
                              {item.label}
                              <Icon
                                icon="material-symbols:arrow-right-alt"
                                className="h-6 w-6 text-transparent group-hover/sub-menu:text-foreground"
                              />
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <ul className="flex items-center gap-3 lg:gap-6">
            <li className="">
              <div className="group min-[520px]:relative">
                <div className="rounded-full border p-2 transition-all duration-300 ease-in-out hover:text-foreground group-hover:border-background group-hover:bg-background group-hover:text-foreground md:p-3.5">
                  <Icon icon="material-symbols:call" />
                </div>
                <div className="invisible absolute left-1 right-0 pt-2 group-hover:visible min-[520px]:left-auto">
                  <div className="w-fit whitespace-nowrap rounded-small bg-background px-10 py-7 text-foreground shadow-md">
                    Call us anytime at{' '}
                    <a
                      className="underline hover:text-accent"
                      href="tel:4155238837"
                    >
                      415-523-8837
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li className="hidden md:block">
              <a
                className="inline-flex h-12 w-auto items-center justify-center whitespace-nowrap rounded-full bg-transparent px-4 py-5 text-base font-normal leading-normal text-primary-foreground transition-all duration-300 ease-in-out hover:bg-background hover:text-foreground disabled:pointer-events-none disabled:opacity-50 group-hover:bg-background group-hover:text-foreground"
                href="/account/sign-in"
              >
                Sign in
              </a>
            </li>
            <li>
              <button
                className="flex items-center font-normal text-primary-foreground transition-all duration-300 ease-in-out hover:bg-inherit hover:text-primary-foreground xl:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Icon icon="material-symbols:menu-rounded" width={25} />
              </button>
            </li>
          </ul>
        </nav>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="fixed inset-0 z-10 flex flex-col overflow-auto overscroll-contain bg-background p-6 text-foreground shadow-md"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-interactiveForegroundInverseTertiary transition-translate ease-[cubic-bezier(0.42,0,0.58,1)] fixed inset-0 z-10 flex flex-col overflow-auto overscroll-contain p-6 shadow-md duration-300">
                <div className="flex items-center justify-between">
                  <a className="inline-block flex-none px-2" href="/">
                    <Logo />
                  </a>
                  <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="flex items-center font-normal text-foreground transition-all duration-300 ease-in-out"
                  >
                    <div className="align-center flex justify-center">
                      <Icon icon="material-symbols:close" width={35} />
                    </div>
                  </button>
                </div>
                {menuItems.map((item) => (
                  <details key={item.key} className="group flex-none">
                    <summary className="[&amp;::-webkit-details-marker]:hidden flex h-14 cursor-pointer select-none items-center justify-between px-2">
                      {item.label}
                      <Icon
                        icon="material-symbols:arrow-drop-down"
                        width={25}
                      />
                    </summary>
                    <ul className="m-0 list-none">
                      {item.items.map((item) => (
                        <li key={item.key}>
                          <a
                            className="hover:rounded-base hover:bg-accentBackground focus:bg-accentBackground flex items-center whitespace-nowrap px-7 py-4"
                            href={item.href}
                          >
                            {item.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </details>
                ))}

                <div className="flex items-center justify-center rounded-full bg-accent-50 px-6 py-2">
                  <div className="mr-3">
                    <Icon icon="material-symbols:call" width={19} height={18} />
                  </div>
                  Call us anytime at
                  <a
                    className="ml-1 underline underline-offset-[3px]"
                    href="tel:4155238837"
                  >
                    (415) 523 88371
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Navbar;
