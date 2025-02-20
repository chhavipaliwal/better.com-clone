'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Link
} from '@heroui/react';
import { Icon } from '@iconify/react/dist/iconify.js';

const Navbar = ({ session }: { session: any }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname();
  if (pathname.includes('/auth')) return null;

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
            <div className="bg-interactiveForegroundInverseTertiary transition-translate ease-[cubic-bezier(0.42,0,0.58,1)] invisible fixed inset-0 z-10 flex -translate-x-full flex-col overflow-auto overscroll-contain p-6 shadow-md duration-300">
              <div className="flex items-center justify-between">
                <a className="inline-block flex-none px-2" href="/">
                  <svg
                    role="img"
                    className="icon icon-LogoBetter2021"
                    width="85px"
                    height="35px"
                    viewBox="0 0 495 133"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Better</title>
                    <path
                      d="M427.207 129.574H457.274V70.2463C460.072 61.2943 473.189 52.9226 492.108 57.1085V28.0354C476.38 28.0354 462.848 38.3964 457.274 54.9119V30.0247H427.207V129.574ZM378.24 49.7521C387.399 49.7521 391.979 54.7254 391.979 59.5122C391.979 66.4749 386.405 73.4582 355.342 77.0224C355.342 60.6934 365.703 49.7521 378.24 49.7521ZM416.659 120.414V93.9316C406.712 102.303 393.367 106.883 382.613 106.883C371.464 106.883 362.512 100.915 358.119 91.3621C397.532 88.5853 416.845 75.0331 416.845 55.9273C416.845 40.593 401.117 27.6624 379.214 27.6624C350.141 27.6624 326.663 48.9647 326.663 80.0271C326.663 109.287 350.742 130.983 381.017 130.983C393.968 130.962 407.106 127.191 416.659 120.414ZM304.78 98.7184V49.7521H325.275V30.2526L304.78 30.4599V6.56731L247.836 46.7889V11.7478L200.258 47.5763V49.7728H218.183V104.313C218.183 121.637 230.927 130.796 248.251 130.796C255.814 130.796 262.197 129.408 267.957 126.03V105.515C265.16 107.111 261.782 108.313 258.011 108.313C251.649 108.313 247.857 105.122 247.857 99.5473V49.7728H275.127V104.127C275.127 121.637 287.871 130.796 305.381 130.796C313.152 130.796 319.514 129.802 325.689 126.03V105.329C323.099 106.924 319.12 108.313 315.141 108.313C308.759 108.271 304.78 104.894 304.78 98.7184ZM159.664 49.7521C168.823 49.7521 173.402 54.7254 173.402 59.5122C173.402 66.4749 167.828 73.4582 136.766 77.0224C136.766 60.6934 147.106 49.7521 159.664 49.7521ZM198.082 120.414V93.9316C188.136 102.303 174.791 106.883 164.036 106.883C152.888 106.883 143.936 100.915 139.543 91.3621C178.956 88.5853 198.269 75.0331 198.269 55.9273C198.269 40.593 182.541 27.6624 160.638 27.6624C131.564 27.6624 108.086 48.9647 108.086 80.0271C108.086 109.287 132.165 130.983 162.44 130.983C175.392 130.962 188.53 127.191 198.082 120.414ZM53.5459 76.0277C62.8915 76.0277 70.6623 81.8092 70.6623 91.5486C70.6623 100.708 62.8915 106.282 53.5459 106.282H30.8552V76.0277H53.5459ZM51.9502 25.0721C60.9022 25.0721 68.072 30.6464 68.072 39.2046C68.072 48.3638 60.9022 53.938 51.9502 53.938H30.8552V25.0721H51.9502ZM0 1.967V129.574H60.1147C83.1991 129.574 101.331 115.441 101.331 93.9316C101.331 80.1929 92.5655 69.2516 79.8215 64.0711C91.3637 58.8906 99.1345 48.7367 99.1345 36.5936C99.1345 15.685 80.8161 1.94629 57.5245 1.94629H0V1.967Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
                <button className="rounded-base leading-body ease-universal disabled:text-interactiveForegroundMuted disabled:bg-interactiveMuted text-interactiveForegroundTertiary hover:bg-interactiveSecondary focus:bg-interactiveSecondary focus:shadow-accentBorderSecondary active:bg-interactiveSecondary px-base h-2xl inline-block w-auto select-none bg-transparent text-center text-base font-bold outline-none transition duration-300 focus:border-transparent focus:shadow-[0_0_0_4px_inset] disabled:shadow-none">
                  <div className="align-center flex justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-x"
                    >
                      <path d="M18 6 6 18"></path>
                      <path d="m6 6 12 12"></path>
                    </svg>
                  </div>
                </button>
              </div>
              <Dropdown>
                <DropdownTrigger>
                  <Button variant="bordered">Open Menu</Button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Static Actions">
                  <DropdownItem key="new">New file</DropdownItem>
                  <DropdownItem key="copy">Copy link</DropdownItem>
                  <DropdownItem key="edit">Edit file</DropdownItem>
                  <DropdownItem
                    key="delete"
                    className="text-danger"
                    color="danger"
                  >
                    Delete file
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>

              <div className="bg-successBackground flex items-center justify-center rounded-full px-6 py-2">
                <div className="mr-3">
                  <svg
                    width="19"
                    height="18"
                    viewBox="0 0 19 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.5 13.5L18.5 17C18.5 17.55 18.05 18 17.5 18C8.11 18 0.500002 10.39 0.500002 1C0.500002 0.450001 0.950003 0 1.5 0L4.99 0C5.54 0 5.99 0.450001 5.99 1C5.99 2.24 6.19 3.45 6.56 4.57C6.6 4.67 6.61 4.78 6.61 4.88C6.61 5.14 6.51 5.39 6.32 5.59L4.12 7.79C5.57 10.62 7.88 12.94 10.71 14.38L12.91 12.18C13.19 11.9 13.58 11.82 13.93 11.93C15.05 12.3 16.25 12.5 17.5 12.5C18.05 12.5 18.5 12.95 18.5 13.5Z"
                      fill="#292B29"
                    ></path>
                  </svg>
                </div>
                Call us anytime at
                <a
                  className="hover:text-textHighlight ml-1 underline underline-offset-[3px]"
                  href="tel:4155238837"
                >
                  (415) 523 88371
                </a>
              </div>
              <div className="mt-auto flex flex-col gap-4">
                <a
                  className="bg-graphTertiary text-interactiveForegroundInversePrimary hover:text-interactiveForegroundPrimary inline-flex h-16 w-auto items-center justify-center whitespace-nowrap rounded-full px-12 py-5 text-base font-bold leading-normal transition-all duration-200 ease-in-out hover:bg-primary disabled:pointer-events-none disabled:opacity-50"
                  href="/start"
                >
                  <p className="leading-body m-0 flex flex-col items-center p-0 text-left text-base font-bold text-current">
                    <span>Get started</span>
                    <span className="text-xs font-normal">
                      3 min | No credit impact
                    </span>
                  </p>
                </a>
                <a
                  className="border-strokeDivider text-interactiveForegroundInversePrimary hover:shadow-accentBorderSecondary hover:border-accentBorderSecondary hover:text-interactivePrimary inline-flex h-16 w-auto items-center justify-center whitespace-nowrap rounded-full border px-12 py-5 text-base font-normal leading-normal transition-all duration-200 ease-in-out hover:shadow-[0_0_0_4px_inset] disabled:pointer-events-none disabled:opacity-50"
                  href="/account/sign-in"
                >
                  Sign in
                  <span className="ml-xs">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16px"
                      height="16px"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-user"
                    >
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </span>
                </a>
              </div>
            </div>
            <button
              aria-label="close navigation bar"
              className="bg-interactiveForegroundInversePrimary z-1 transition-translate ease-[cubic-bezier(0.42,0,0.58,1)] invisible fixed inset-0 h-screen w-screen opacity-80 duration-300 focus:border"
            ></button>
            <ul className="flex items-center">
              <li className="mr-2">
                <Link
                  className="group-hover:bg-backgroundSecondary group-hover:text-textPrimary text-textInversePrimary hover:text-textInversePrimary font-normal transition-all duration-300 ease-in-out hover:bg-inherit"
                  href="/"
                >
                  <svg
                    role="img"
                    width="65px"
                    height="20px"
                    viewBox="0 0 495 133"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Better</title>
                    <path
                      d="M427.207 129.574H457.274V70.2463C460.072 61.2943 473.189 52.9226 492.108 57.1085V28.0354C476.38 28.0354 462.848 38.3964 457.274 54.9119V30.0247H427.207V129.574ZM378.24 49.7521C387.399 49.7521 391.979 54.7254 391.979 59.5122C391.979 66.4749 386.405 73.4582 355.342 77.0224C355.342 60.6934 365.703 49.7521 378.24 49.7521ZM416.659 120.414V93.9316C406.712 102.303 393.367 106.883 382.613 106.883C371.464 106.883 362.512 100.915 358.119 91.3621C397.532 88.5853 416.845 75.0331 416.845 55.9273C416.845 40.593 401.117 27.6624 379.214 27.6624C350.141 27.6624 326.663 48.9647 326.663 80.0271C326.663 109.287 350.742 130.983 381.017 130.983C393.968 130.962 407.106 127.191 416.659 120.414ZM304.78 98.7184V49.7521H325.275V30.2526L304.78 30.4599V6.56731L247.836 46.7889V11.7478L200.258 47.5763V49.7728H218.183V104.313C218.183 121.637 230.927 130.796 248.251 130.796C255.814 130.796 262.197 129.408 267.957 126.03V105.515C265.16 107.111 261.782 108.313 258.011 108.313C251.649 108.313 247.857 105.122 247.857 99.5473V49.7728H275.127V104.127C275.127 121.637 287.871 130.796 305.381 130.796C313.152 130.796 319.514 129.802 325.689 126.03V105.329C323.099 106.924 319.12 108.313 315.141 108.313C308.759 108.271 304.78 104.894 304.78 98.7184ZM159.664 49.7521C168.823 49.7521 173.402 54.7254 173.402 59.5122C173.402 66.4749 167.828 73.4582 136.766 77.0224C136.766 60.6934 147.106 49.7521 159.664 49.7521ZM198.082 120.414V93.9316C188.136 102.303 174.791 106.883 164.036 106.883C152.888 106.883 143.936 100.915 139.543 91.3621C178.956 88.5853 198.269 75.0331 198.269 55.9273C198.269 40.593 182.541 27.6624 160.638 27.6624C131.564 27.6624 108.086 48.9647 108.086 80.0271C108.086 109.287 132.165 130.983 162.44 130.983C175.392 130.962 188.53 127.191 198.082 120.414ZM53.5459 76.0277C62.8915 76.0277 70.6623 81.8092 70.6623 91.5486C70.6623 100.708 62.8915 106.282 53.5459 106.282H30.8552V76.0277H53.5459ZM51.9502 25.0721C60.9022 25.0721 68.072 30.6464 68.072 39.2046C68.072 48.3638 60.9022 53.938 51.9502 53.938H30.8552V25.0721H51.9502ZM0 1.967V129.574H60.1147C83.1991 129.574 101.331 115.441 101.331 93.9316C101.331 80.1929 92.5655 69.2516 79.8215 64.0711C91.3637 58.8906 99.1345 48.7367 99.1345 36.5936C99.1345 15.685 80.8161 1.94629 57.5245 1.94629H0V1.967Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </Link>
              </li>
              {menuItems.map((item) => (
                <li key={item.key} className="mx-5 hidden xl:block">
                  <Dropdown
                    className="group relative"
                    placement="bottom-start"
                    isOpen
                  >
                    <DropdownTrigger>
                      <Button className="h-12 rounded-full bg-transparent px-1 py-1 text-base font-normal text-primary-foreground transition-all duration-300 ease-in-out hover:bg-background hover:text-foreground group-hover:bg-background group-hover:text-foreground">
                        {item.label}
                      </Button>
                    </DropdownTrigger>
                    <DropdownMenu>
                      {item.items.map((item) => (
                        <DropdownItem
                          key={item.key}
                          href={item.href}
                          className="group px-4 py-2"
                          classNames={{
                            base: 'text-xl'
                          }}
                          endContent={
                            <Icon
                              icon="material-symbols:arrow-right-alt"
                              className="h-4 w-4 group-hover:flex"
                            />
                          }
                        >
                          {item.label}
                        </DropdownItem>
                      ))}
                    </DropdownMenu>
                  </Dropdown>
                </li>
              ))}
            </ul>
          </div>
          <ul className="flex items-center gap-3 lg:gap-6">
            <li className="">
              <div className="group min-[520px]:relative">
                <div className="border-strokeBorder group-hover:bg-backgroundSecondary group-hover:border-backgroundSecondary rounded-full border p-2 transition-all duration-300 ease-in-out md:p-3.5">
                  <svg
                    width="19"
                    height="18"
                    viewBox="0 0 19 18"
                    className="group-hover:[&amp;_path]:fill-interactiveForegroundInversePrimary [&amp;_path]:fill-white h-3 w-3 transition-all ease-in-out md:h-4 md:w-4"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.5 13.5L18.5 17C18.5 17.55 18.05 18 17.5 18C8.11 18 0.500002 10.39 0.500002 1C0.500002 0.450001 0.950003 0 1.5 0L4.99 0C5.54 0 5.99 0.450001 5.99 1C5.99 2.24 6.19 3.45 6.56 4.57C6.6 4.67 6.61 4.78 6.61 4.88C6.61 5.14 6.51 5.39 6.32 5.59L4.12 7.79C5.57 10.62 7.88 12.94 10.71 14.38L12.91 12.18C13.19 11.9 13.58 11.82 13.93 11.93C15.05 12.3 16.25 12.5 17.5 12.5C18.05 12.5 18.5 12.95 18.5 13.5Z"
                      fill="#292B29"
                    ></path>
                  </svg>
                </div>
                <div className="invisible absolute left-1 right-0 pt-2 group-hover:visible min-[520px]:left-auto">
                  <div className="bg-backgroundTertiary rounded-base w-80 px-10 py-7 shadow-md">
                    Call us anytime at
                    <a
                      className="hover:text-textHighlight underline"
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
                className="text-textInversePrimary hover:bg-backgroundSecondary hover:text-textPrimary group-hover:bg-backgroundSecondary group-hover:text-textPrimary inline-flex h-12 w-auto items-center justify-center whitespace-nowrap rounded-full bg-transparent px-4 py-5 text-base font-normal leading-normal transition-all duration-300 ease-in-out disabled:pointer-events-none disabled:opacity-50"
                href="/account/sign-in"
              >
                Sign in
              </a>
            </li>
            <li className="hidden transition-all duration-500 ease-in">
              <a
                className="bg-graphTertiary text-interactiveForegroundInversePrimary hover:text-interactiveForegroundPrimary inline-flex h-8 w-auto items-center justify-center whitespace-nowrap rounded-full px-4 py-3 text-base font-bold leading-normal transition-all duration-200 ease-in-out hover:bg-primary disabled:pointer-events-none disabled:opacity-50 md:h-12 md:px-6"
                href="/start"
              >
                Get started
              </a>
            </li>
            <li>
              <button
                className="group-hover:bg-backgroundSecondary group-hover:text-textPrimary text-textInversePrimary hover:text-textInversePrimary flex items-center font-normal transition-all duration-300 ease-in-out hover:bg-inherit xl:hidden"
                aria-label="open mobile nav bar"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-menu"
                >
                  <line x1="4" x2="20" y1="12" y2="12"></line>
                  <line x1="4" x2="20" y1="6" y2="6"></line>
                  <line x1="4" x2="20" y1="18" y2="18"></line>
                </svg>
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
