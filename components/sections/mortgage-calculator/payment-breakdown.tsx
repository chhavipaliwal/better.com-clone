'use client';
import Input from '@/components/ui/input';
import { useState } from 'react';

type BreakDownPills = 'principal' | 'taxes' | 'insurance' | 'hoa' | 'utilities';

export default function PaymentBreakdown() {
  const [hoveredPill, setHoveredPill] = useState<BreakDownPills | null>(null);

  const pillDescription: Record<
    BreakDownPills,
    { title: string; description: string }
  > = {
    principal: {
      title: 'Principal & Interest',
      description:
        'This is the amount you pay to the lender for the use of the money you borrowed.'
    },
    taxes: {
      title: 'Property Taxes',
      description:
        'These are taxes paid to the local government, not your mortgage lender. This estimate uses the national average for property taxes, which is 1.06%.'
    },
    insurance: {
      title: 'Homeowners Insurance',
      description:
        'This is the amount you pay to the lender for the use of the money you borrowed.'
    },
    hoa: {
      title: 'HOA Fees',
      description:
        'This is the amount you pay to the lender for the use of the money you borrowed.'
    },
    utilities: {
      title: 'Utilities',
      description:
        'This is the amount you pay to the lender for the use of the money you borrowed.'
    }
  };

  return (
    <section className="pt-4xl">
      <div className="m-auto max-w-screen-2xl justify-between px-6 md:px-14">
        <div className="grid md:grid-cols-2">
          <div>
            <h4 className="m-0 w-auto p-0 text-base font-bold tracking-normal md:text-lg">
              Monthly payment breakdown
            </h4>
            <p
              className="m-0 overflow-hidden p-0 text-left text-3xl font-bold"
              data-testid="summary"
            >
              $2,071/mo
            </p>
            <div className="mt-2xl">
              <svg
                height="100"
                id="svgelem"
                width="100%"
                xmlns="http://www.w3.org/2000/svg"
                className="[&>g>rect]:transition-colors [&>g>rect]:duration-300"
              >
                <g className="[&>rect:has(~rect:hover)]:fill-[#E8EAE6] [&>rect:hover+rect]:fill-[#E8EAE6] [&>rect:hover~rect]:fill-[#E8EAE6]">
                  <rect
                    data-testid="principalPill"
                    height="80"
                    rx="40"
                    ry="40"
                    className="fill-accent duration-300 ease-in-out hover:fill-accent"
                    width="370.44133268952197"
                    x="0"
                    y="0"
                    onMouseEnter={() => setHoveredPill('principal')}
                    onMouseLeave={() => setHoveredPill(null)}
                  ></rect>
                  <rect
                    data-testid="taxesPill"
                    height="80"
                    rx="32.37856108160309"
                    ry="32.37856108160309"
                    className="fill-infoSecondary hover:fill-infoSecondary duration-300 ease-in-out"
                    width="64.75712216320618"
                    x="370.44133268952197"
                    y="0"
                    onMouseEnter={() => setHoveredPill('taxes')}
                    onMouseLeave={() => setHoveredPill(null)}
                  ></rect>
                  <rect
                    data-testid="insurancePill"
                    height="80"
                    rx="16.8266537904394"
                    ry="16.8266537904394"
                    className="fill-graph2Tertiary hover:fill-graph2Tertiary duration-300 ease-in-out"
                    width="33.6533075808788"
                    x="435.19845485272816"
                    y="0"
                    onMouseEnter={() => setHoveredPill('insurance')}
                    onMouseLeave={() => setHoveredPill(null)}
                  ></rect>
                  <rect
                    data-testid="hoaPill"
                    height="80"
                    rx="16.8266537904394"
                    ry="16.8266537904394"
                    className="fill-graph4Tertiary hover:fill-graph4Tertiary duration-300 ease-in-out"
                    width="33.6533075808788"
                    x="468.85176243360695"
                    y="0"
                    onMouseEnter={() => setHoveredPill('hoa')}
                    onMouseLeave={() => setHoveredPill(null)}
                  ></rect>
                  <rect
                    data-testid="utilitiesPill"
                    height="80"
                    rx="12.747464992757122"
                    ry="12.747464992757122"
                    className="fill-graph3Tertiary hover:fill-graph3Tertiary duration-300 ease-in-out"
                    width="25.494929985514243"
                    x="502.50507001448574"
                    y="0"
                    onMouseEnter={() => setHoveredPill('utilities')}
                    onMouseLeave={() => setHoveredPill(null)}
                  ></rect>
                </g>
                0
              </svg>
              {hoveredPill && (
                <div className="p-lg mt-2xl rounded-base opacity-100 shadow-[0_0_12px_rgba(41,43,41,0.12)] duration-300 ease-in-out md:block">
                  <h4 className="mb-lg m-0 w-auto p-0 text-base font-bold tracking-normal md:text-lg">
                    {pillDescription[hoveredPill].title}
                  </h4>
                  <p
                    className="m-0 p-0 text-left text-base font-normal"
                    data-testid="description"
                  >
                    {pillDescription[hoveredPill].description}
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="space-y-lg">
            <div className="h-3xl mb-base flex justify-between">
              <div className="flex w-1/2 items-center">
                <div className="h-base mr-xs w-[5px] rounded-sm bg-accent"></div>
                <p className="m-0 p-0 text-left text-base font-normal">
                  Principal &amp; interest
                </p>
              </div>
              <p
                className="m-0 flex w-1/2 items-center p-0 pt-0 text-left text-base font-bold sm:w-[160px]"
                data-testid="principal-&amp;-interest"
              >
                $1,453
              </p>
            </div>
            <div className="h-3xl mb-base flex justify-between">
              <div className="flex w-1/2 items-center">
                <div className="h-base mr-xs bg-infoSecondary w-[5px] rounded-sm"></div>
                <label
                  className="m-0 p-0 text-left text-base font-normal"
                  htmlFor="input-taxes"
                  id="taxes-label"
                >
                  Property taxes
                </label>
              </div>
              <div className="relative z-0 w-1/2 items-center pt-0 text-left sm:w-[160px]">
                <Input
                  id="input-taxes"
                  name="taxes"
                  type="number"
                  value="254"
                  startContent="$"
                  className="py-4 text-right"
                  aria-describedby="taxes-help-text"
                  aria-errormessage="taxes-help-text"
                />
                <div
                  className="pt-xs text-interactiveForegroundMuted pl-auto pr-sm m-0 flex flex-row-reverse p-0 text-left text-xs font-normal"
                  id="taxes-help-text"
                ></div>
              </div>
            </div>
            <div className="h-3xl mb-base flex justify-between">
              <div className="flex w-1/2 items-center">
                <div className="h-base mr-xs bg-graph2Tertiary w-[5px] rounded-sm"></div>
                <label
                  className="m-0 p-0 text-left text-base font-normal"
                  htmlFor="input-insurance"
                  id="insurance-label"
                >
                  Homeowners insurance
                </label>
              </div>
              <div className="relative z-0 w-1/2 items-center pt-0 text-left sm:w-[160px]">
                <Input
                  id="input-insurance"
                  name="insurance"
                  type="number"
                  value="132"
                  startContent="$"
                  className="py-4 text-right"
                  aria-describedby="insurance-help-text"
                  aria-errormessage="insurance-help-text"
                />
                <div
                  className="pt-xs text-interactiveForegroundMuted pl-auto pr-sm m-0 flex flex-row-reverse p-0 text-left text-xs font-normal"
                  id="insurance-help-text"
                ></div>
              </div>
            </div>
            <div className="h-3xl mb-base flex justify-between">
              <div className="flex w-1/2 items-center">
                <div className="h-base mr-xs bg-graph4Tertiary w-[5px] rounded-sm"></div>
                <label
                  className="m-0 p-0 text-left text-base font-normal"
                  htmlFor="input-hoa"
                  id="hoa-label"
                >
                  HOA fees
                </label>
              </div>
              <div className="relative z-0 w-1/2 items-center pt-0 text-left sm:w-[160px]">
                <Input
                  id="input-hoa"
                  name="hoa"
                  type="number"
                  value="132"
                  startContent="$"
                  className="py-4 text-right"
                  aria-describedby="hoa-help-text"
                  aria-errormessage="hoa-help-text"
                />
                <div
                  className="pt-xs text-interactiveForegroundMuted pl-auto pr-sm m-0 flex flex-row-reverse p-0 text-left text-xs font-normal"
                  id="hoa-help-text"
                ></div>
              </div>
            </div>
            <div className="mb-lg" data-orientation="vertical">
              <div data-state="closed" data-orientation="vertical" className="">
                <h3
                  data-orientation="vertical"
                  data-state="closed"
                  className="flex"
                >
                  <button
                    type="button"
                    aria-controls="radix-:Rlkr6:"
                    aria-expanded="false"
                    data-state="closed"
                    data-orientation="vertical"
                    id="radix-:R5kr6:"
                    className="flex flex-1 items-center justify-between py-4 font-bold transition-all [&[data-state=open]>svg]:rotate-180"
                    data-radix-collection-item=""
                  >
                    <div
                      className="mb-0 flex h-auto w-full justify-between"
                      data-testid="open-utilities"
                    >
                      <div className="flex w-auto items-center">
                        <div className="h-base mr-xs bg-graph3Tertiary w-[5px] rounded-sm"></div>
                        <p
                          className="m-0 p-0 text-left text-base font-normal"
                          id="utilities-label"
                        >
                          Utilities
                        </p>
                      </div>
                      <span className="m-0 w-[144px] p-0 text-left text-base font-bold">
                        ${'100'}
                      </span>
                    </div>
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
                      className="lucide lucide-chevron-down h-4 w-4 shrink-0 transition-transform duration-200"
                    >
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </button>
                </h3>
                <div
                  data-state="closed"
                  id="radix-:Rlkr6:"
                  hidden
                  role="region"
                  aria-labelledby="radix-:R5kr6:"
                  data-orientation="vertical"
                  className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm transition-all"
                ></div>
              </div>
            </div>
            <button
              className="rounded-base leading-body bg-interactiveSecondary px-xl mb-xs inline-block w-auto select-none py-5 text-center text-base font-bold outline-none transition duration-300 focus:shadow-[0_0_0_4px_inset] focus:shadow-accent disabled:shadow-none"
              data-testid="copyLink"
            >
              Copy estimate link
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
