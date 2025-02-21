import Link from 'next/link';
import Logo from '../icons/logo';
import { Icon } from '@iconify/react';
export default function Footer() {
  return (
    <>
      <div className="mx-auto max-w-6xl px-4 md:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <h1 className="">
            <Logo className="text-accent" width="85px" height="25px" />
          </h1>
          <div className="mb-12 mt-8 flex flex-col gap-y-8 md:flex-row md:gap-16">
            <div className="flex flex-shrink flex-grow basis-1/3 flex-col gap-4">
              <div>
                <p className="black text-sm">
                  Better is a family of companies serving all your homeownership
                  needs.
                </p>
              </div>
              <div>
                <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold">
                  <Logo className="text-accent" />
                  <span className="font-normal text-[#A4A8A4]">Mortgage</span>
                </h2>
                <p className="black text-sm">
                  We can't wait to say "Welcome home." Apply 100% online, with
                  expert customer support.
                </p>
              </div>
              <div>
                <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold">
                  <Logo className="text-accent" />
                  <span className="font-normal text-[#A4A8A4]">
                    Real Estate
                  </span>
                </h2>
                <p className="black text-sm">
                  Connect with a local Better Real Estate Partner Agent to find
                  out all the ways you can save.
                </p>
              </div>
              <div>
                <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold">
                  <Logo className="text-accent" />
                  <span className="font-normal text-[#A4A8A4]">Cover</span>
                </h2>
                <p className="black text-sm">
                  Shop, bundle, and save on insurance coverage for home, auto,
                  life, and more.
                </p>
              </div>
              <div>
                <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold">
                  <Logo className="text-accent" />
                  <span className="font-normal text-[#A4A8A4]">Inspect</span>
                </h2>
                <p className="black text-sm">
                  Get free repair estimates, 24-hour turnarounds on reports, and
                  rest easy with our 100-day inspection guarantee.
                </p>
              </div>
              <div>
                <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold">
                  <Logo className="text-accent" />
                  <span className="font-normal text-[#A4A8A4]">
                    Settlement Services
                  </span>
                </h2>
                <p className="black text-sm">
                  Get transparent rates when you shop for title insurance all in
                  one convenient place.
                </p>
              </div>
            </div>
            <div className="flex flex-shrink flex-grow basis-1/6 flex-col gap-4">
              <h3 className="mb-4 text-lg font-semibold">Resources</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="#" className="black hover:underline">
                    Home affordability calculator
                  </Link>
                </li>
                <li>
                  <Link
                    href="/mortgage-calculator"
                    className="black hover:underline"
                  >
                    Mortgage calculator
                  </Link>
                </li>
                <li>
                  <Link href="#" className="black hover:underline">
                    Free mortgage calculator
                  </Link>
                </li>
                <li>
                  <Link href="#" className="black hover:underline">
                    Mortgage calculator with taxes
                  </Link>
                </li>
                <li>
                  <Link href="#" className="black hover:underline">
                    Mortgage calculator with PMI
                  </Link>
                </li>
                <li>
                  <Link href="#" className="black hover:underline">
                    Rent vs buy calculator
                  </Link>
                </li>
                <li>
                  <Link href="#" className="black hover:underline">
                    HELOC payment calculator
                  </Link>
                </li>
                <li>
                  <Link href="#" className="black hover:underline">
                    HELOC vs cash-out refinance calculator
                  </Link>
                </li>
                <li>
                  <Link href="#" className="black hover:underline">
                    Buy a home
                  </Link>
                </li>
                <li>
                  <Link href="#" className="black hover:underline">
                    Sell a home
                  </Link>
                </li>
                <li>
                  <Link href="#" className="black hover:underline">
                    Get home inspection
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-shrink flex-grow basis-1/6 flex-col gap-4">
              <h3 className="mb-4 text-lg font-semibold">Company</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/about" className="black hover:underline">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/start" className="black hover:underline">
                    Start
                  </Link>
                </li>
                <li>
                  <Link href="#" className="black hover:underline">
                    Media
                  </Link>
                </li>
                <li>
                  <Link href="#" className="black hover:underline">
                    Partner With Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="black hover:underline">
                    Learning center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="black hover:underline">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link href="#" className="black hover:underline">
                    Investor Relations
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-shrink flex-grow basis-1/6 flex-col gap-4">
              <div className="flex flex-col gap-4">
                <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
                <ul className="space-y-4">
                  <li>
                    <Link
                      href="mailto:hello@better.com"
                      className="black hover:underline"
                    >
                      hello@better.com
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="tel:415-523-8837"
                      className="black hover:underline"
                    >
                      415-523-8837
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="black hover:underline">
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="black hover:underline">
                      Glossary
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="">
                <h3 className="mb-4 text-lg font-semibold">Legal</h3>
                <ul className="space-y-4">
                  <li>
                    <Link href="#" className="hover:underline">
                      NMLS Consumer Access
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:underline">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:underline">
                      Terms of Use
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:underline">
                      Disclosures & Licensing
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:underline">
                      Affiliated Business
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:underline">
                      Browser Disclaimer
                    </Link>
                  </li>
                  <li>
                    <div className="flex gap-2 text-gray-500">
                      <Icon icon="ri:home-3-line" width="32" height="32" />
                      <Icon icon="ri:home-3-line" width="32" height="32" />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-32 flex gap-4">
          <Icon icon="iconoir:facebook" width="24" height="24" />
          <Icon icon="lucide:instagram" width="24" height="24" />
          <Icon icon="lucide:linkedin" width="24" height="24" />
        </div>
        <div className="mt-12 flex flex-col gap-5">
          <p className="text-xs">
            1 Better Mortgage&apos;s One Day Mortgage™ promotion offers
            qualified customers who provide certain required financial
            information/documentation to Better Mortgage within 4 hours of
            locking a rate on a mortgage loan the opportunity to receive an
            underwriting determination from Better Mortgage within 24 hours of
            their rate lock. The underwriting determination is subject to
            customary terms, including fraud and anti-money laundering checks,
            that take place pre-closing and which may trigger additional
            required documentation from the customer. Better Mortgage does not
            guarantee that initial underwriting approval will result in a final
            underwriting approval. See One Day Mortgage™ Terms and Conditions.
          </p>
          <p className="text-xs">
            2Better Mortgage&apos;s One Day HELOC™ promotion offers qualified
            customers who provide certain required financial
            information/documentation to Better Mortgage within 4 hours of
            locking a rate on a HELOC loan the opportunity to receive an
            underwriting determination from Better Mortgage within 24 hours of
            their rate lock. The underwriting determination is subject to
            customary terms, including fraud and anti-money laundering checks,
            that take place pre-closing and which may trigger additional
            required documentation from the customer. Better Mortgage does not
            guarantee that initial underwriting approval will result in final
            underwriting approval. See One Day Heloc™ Terms and Conditions.
          </p>
          <p className="text-xs">
            3Assumes borrowers are eligible for the Automated Valuation Model
            (AVM) to calculate their home value, their loan amount is less than
            $400,000, all required documents are uploaded to their Better
            Mortgage online account within 24 hours of application, closing is
            scheduled for the earliest available date and time, and a notary is
            readily available. Funding timelines may vary and may be longer if
            an appraisal is required to calculate a borrower&apos;s home value.
          </p>
          <hr className="my-4 mb-8 mt-8 border-t border-gray-400" />
          <p className="text-xs">
            © 2025 Better Home & Finance Holding Company and/or its affiliates.
            Better is a family of companies. Better Mortgage Corporation
            provides home loans; Better Real Estate, LLC and Better Real Estate
            California Inc License # 02164055 provides real estate services;
            Better Cover, LLC sells insurance products; and Better Settlement
            Services provides title insurance services; and Better Inspect, LLC
            provides home inspection services. All rights reserved.
          </p>
          <p className="text-xs">
            Home lending products offered by Better Mortgage Corporation. Better
            Mortgage Corporation is a direct lender. NMLS #330511. 1 World Trade
            Center, 80th Floor, New York, NY 10007. Loans made or arranged
            pursuant to a California Finance Lenders Law License. Not available
            in all states. Equal Housing Lender. NMLS Consumer Access
          </p>
          <p className="text-xs">
            Better Real Estate, LLC dba BRE, Better Home Services, BRE Services,
            LLC and Better Real Estate, and operating in the State of California
            through its wholly owned subsidiary Better Real Estate California
            Inc., is a licensed real estate brokerage and maintains its
            corporate headquarters at 325-41 Chestnut Street, Suite 826,
            Philadelphia, PA 19106. Here is a full listing of Better Real
            Estate, LLC&apos;s license numbers. Better Real Estate, LLC provides
            access to real estate brokerage services via its nationwide network
            of partner brokerages and real estate agents (“Better Real Estate
            Partner Agents”). Equal Housing Opportunity. All rights reserved.
          </p>
          <p className="text-xs underline">
            New York State Housing and Anti-Discrimination Notice
          </p>
          <p className="text-xs underline">
            New York Standard Operating Procedures
          </p>
          <p className="text-xs underline">
            Texas Real Estate Commission: Information About Brokerage Services |
            Consumer Protection Notice
          </p>
          <p className="text-xs">
            Better Settlement Services, LLC. 325-41 Chestnut Street, Suite 803,
            Philadelphia, PA 19106.
          </p>
          <p className="text-xs">
            Homeowners insurance policies are offered through Better Cover, LLC,
            a Pennsylvania Resident Producer Agency. License #881593. 325-41
            Chestnut Street, Suite 807, Philadelphia, PA 19106.
          </p>
          <p className="text-xs">
            Insurance quotes and policies are offered through Better Cover, LLC.
            A Pennsylvania Resident Producer Agency. License #881593. Here is a
            full listing of Better Cover, LLC&apos;s license numbers.
          </p>
          <p className="text-xs">
            Better Inspect, LLC maintains its corporate headquarters at 325-41
            Chestnut Street, Suite 846, Philadelphia, PA 19106.
          </p>
          <p className="text-xs">
            Better Mortgage Corporation, Better Real Estate, LLC, Better
            Settlement Services, LLC, Better Cover, LLC, Better Connect, and
            Better Inspect, LLC are separate operating subsidiaries of Better
            Home & Finance Holding Company. Each company is a separate legal
            entity operated and managed through its own management and
            governance structure as required by its state of incorporation, and
            applicable and legal and regulatory requirements. Products not
            available in all states.
          </p>
          <p className="mb-4 text-xs">
            Any unauthorized use of any proprietary or intellectual property is
            strictly prohibited. All trademarks, service marks, trade names,
            logos, icons, and domain names are proprietary to Better Home &
            Finance Holding Company. Better Home & Finance Holding Company
            trademarks are federally registered with the U. S. Patent and
            Trademark Office. Better Cover is a registered trademark with the
            U.S. Patent and Trademark Office and is owned by Better Cover, LLC.
          </p>
        </div>
      </div>
    </>
  );
}
