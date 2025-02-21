import Link from 'next/link';
import Logo from '../icons/logo';
export default function Footer() {
  return (
    <>
      <div className="">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 grid grid-cols-4">
            <div className="flex max-w-lg flex-col gap-4">
              <div>
                <h2 className="mb-4">
                  <Logo className="text-accent" />
                </h2>
                <p className="text-gray-600">
                  Better is a family of companies serving all your homeownership
                  needs.
                </p>
              </div>
              <div>
                <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold">
                  <Logo className="text-accent" />
                  <span className="font-normal text-[#A4A8A4]">Mortgage</span>
                </h2>
                <p className="text-gray-600">
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
                <p className="text-gray-600">
                  Connect with a local Better Real Estate Partner Agent to find
                  out all the ways you can save.
                </p>
              </div>
              <div>
                <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold">
                  <Logo className="text-accent" />
                  <span className="font-normal text-[#A4A8A4]">Cover</span>
                </h2>
                <p className="text-gray-600">
                  Shop, bundle, and save on insurance coverage for home, auto,
                  life, and more.
                </p>
              </div>
              <div>
                <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold">
                  <Logo className="text-accent" />
                  <span className="font-normal text-[#A4A8A4]">Inspect</span>
                </h2>
                <p className="text-gray-600">
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
                <p className="text-gray-600">
                  Get transparent rates when you shop for title insurance all in
                  one convenient place.
                </p>
              </div>
            </div>
            <div className="flex max-w-sm flex-col gap-4">
              <h3 className="mb-4 text-lg font-semibold">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-500">
                    Home affordability calculator
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-500">
                    Mortgage calculator
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-500">
                    Free mortgage calculator
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-500">
                    Mortgage calculator with taxes
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-500">
                    Mortgage calculator with PMI
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-500">
                    Rent vs buy calculator
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-500">
                    HELOC payment calculator
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-500">
                    HELOC vs cash-out refinance calculator
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-500">
                    Buy a home
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-500">
                    Sell a home
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-500">
                    Get home inspection
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-500">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-500">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-500">
                    Media
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-500">
                    Partner With Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-500">
                    Learning center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-500">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-500">
                    Investor Relations
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <div>
                <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="mailto:hello@better.com"
                      className="text-gray-600 hover:text-blue-500"
                    >
                      hello@better.com
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="tel:415-523-8837"
                      className="text-gray-600 hover:text-blue-500"
                    >
                      415-523-8837
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-blue-500"
                    >
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-blue-500"
                    >
                      Glossary
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="text-center text-gray-600">
                <h3 className="mb-4 text-lg font-semibold">Legal</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="hover:text-blue-500">
                      NMLS Consumer Access
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-blue-500">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-blue-500">
                      Terms of Use
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-blue-500">
                      Disclosures & Licensing
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-blue-500">
                      Affiliated Business
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-blue-500">
                      Browser Disclaimer
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
