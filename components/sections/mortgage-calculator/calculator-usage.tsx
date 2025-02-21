import { Icon } from '@iconify/react/dist/iconify.js';

export default function CalculatorUsage() {
  return (
    <div className="mx-auto mb-12 mt-16 max-w-7xl px-4 md:px-0">
      <div className="">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">
            How to use this mortgage calculator?
          </h2>
          <p className="text-gray-500">
            Play around with different home prices, locations,{' '}
            <span className="text-accent underline">down payments</span>,
            interest rates, and mortgage lengths to see how they impact your
            monthly mortgage payments.
          </p>
          <p className="text-gray-500">
            Increasing your down payment and decreasing your interest rate and
            mortgage term length will make your monthly payment go down. Taxes,
            insurance, and HOA fees will vary by location. If you enter a down
            payment amount that&apos;s less than 20% of the home price,
            <span className="text-accent underline">
              {' '}
              private mortgage insurance (PMI)
            </span>
            , costs will be added to your monthly mortgage payment. As the costs
            of utilities can vary from county to county, we’ve included a
            utilities estimate that you can break down by service. If you’re
            thinking about buying a condo or into a community with a Homeowners
            Association (HOA), you can add HOA fees.
          </p>
          <p className="text-gray-500">
            The only amounts we haven’t included are the money you’ll need to
            save for annual home maintenance/repairs or the costs of home
            improvements. To see how much home you can afford including these
            costs, take a look at the{' '}
            <span className="text-accent underline">
              Better home affordability calculator.
            </span>
          </p>
          <p className="text-gray-500">
            Fun fact:{' '}
            <span className="text-accent underline">Property tax rates</span>{' '}
            are extremely localized, so two homes of roughly the same size and
            quality on either side of a municipal border could have very
            different tax rates. Buying in an area with a lower property tax
            rate may make it easier for you to afford a higher-priced home.
          </p>
        </div>
        <div className="mt-6 space-y-4">
          <h2 className="text-2xl font-semibold">
            Do you know your property tax rate?
          </h2>
          <p className="text-gray-500">
            While exact property tax rates vary by county, it can be helpful to
            look at taxes on the state level to get an idea for taxes in your
            state. Here&apos;s a helpful chart from
            <span className="text-accent underline">Forbes</span> breaking down
            the Census Bureau&apos;s 2021 American Community Survey 5-year
            estimate:
          </p>
          <div className="my-3xl">
            <div className="pointer group relative h-full w-full overflow-scroll">
              <table className="clip-inset-round min-w-full table-auto border border-accent-100">
                <thead className="">
                  <tr>
                    <th className="border bg-primary px-2 py-3 text-center text-primary-foreground md:px-4">
                      <p className="leading-body text-textInversePrimary m-0 p-0 text-center text-sm font-bold">
                        State
                      </p>
                    </th>
                    <th className="border bg-primary px-2 py-3 text-center text-primary-foreground md:px-4">
                      <p className="leading-body text-textInversePrimary m-0 p-0 text-center text-sm font-bold">
                        Median Effective Property Tax Rate
                      </p>
                    </th>
                    <th className="border bg-primary px-2 py-3 text-center text-primary-foreground md:px-4">
                      <p className="leading-body text-textInversePrimary m-0 p-0 text-center text-sm font-bold">
                        Mean Effective Property Tax Rate
                      </p>
                    </th>
                    <th className="border bg-primary px-2 py-3 text-center text-primary-foreground md:px-4">
                      <p className="leading-body text-textInversePrimary m-0 p-0 text-center text-sm font-bold">
                        Median Home Value
                      </p>
                    </th>
                    <th className="border bg-primary px-2 py-3 text-center text-primary-foreground md:px-4">
                      <p className="leading-body text-textInversePrimary m-0 p-0 text-center text-sm font-bold">
                        Median Property Taxes Paid
                      </p>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="even:bg-successBackground">
                    <td className="border border-accent-100 px-2 py-3 text-center md:px-4">
                      <p className="leading-body text-textSecondary m-0 p-0 text-center text-sm font-normal">
                        AL
                      </p>
                    </td>
                    <td className="border border-accent-100 px-2 py-3 text-center md:px-4">
                      <p className="leading-body text-textSecondary m-0 p-0 text-center text-sm font-normal">
                        0.41%
                      </p>
                    </td>
                    <td className="border border-accent-100 px-2 py-3 text-center md:px-4">
                      <p className="leading-body text-textSecondary m-0 p-0 text-center text-sm font-normal">
                        0.40%
                      </p>
                    </td>
                    <td className="border border-accent-100 px-2 py-3 text-center md:px-4">
                      <p className="leading-body text-textSecondary m-0 p-0 text-center text-sm font-normal">
                        $157,100
                      </p>
                    </td>
                    <td className="border border-accent-100 px-2 py-3 text-center md:px-4">
                      <p className="leading-body text-textSecondary m-0 p-0 text-center text-sm font-normal">
                        $646
                      </p>
                    </td>
                  </tr>
                  <tr className="even:bg-successBackground">
                    <td className="border border-accent-100 px-2 py-3 text-center md:px-4">
                      <p className="leading-body text-textSecondary m-0 p-0 text-center text-sm font-normal">
                        AK
                      </p>
                    </td>
                    <td className="border border-accent-100 px-2 py-3 text-center md:px-4">
                      <p className="leading-body text-textSecondary m-0 p-0 text-center text-sm font-normal">
                        1.23%
                      </p>
                    </td>
                    <td className="border border-accent-100 px-2 py-3 text-center md:px-4">
                      <p className="leading-body text-textSecondary m-0 p-0 text-center text-sm font-normal">
                        1.04%
                      </p>
                    </td>
                    <td className="border border-accent-100 px-2 py-3 text-center md:px-4">
                      <p className="leading-body text-textSecondary m-0 p-0 text-center text-sm font-normal">
                        $282,800
                      </p>
                    </td>
                    <td className="border border-accent-100 px-2 py-3 text-center md:px-4">
                      <p className="leading-body text-textSecondary m-0 p-0 text-center text-sm font-normal">
                        $3,464
                      </p>
                    </td>
                  </tr>
                  <tr className="even:bg-successBackground">
                    <td className="border border-accent-100 px-2 py-3 text-center md:px-4">
                      <p className="leading-body text-textSecondary m-0 p-0 text-center text-sm font-normal">
                        AZ
                      </p>
                    </td>
                    <td className="border border-accent-100 px-2 py-3 text-center md:px-4">
                      <p className="leading-body text-textSecondary m-0 p-0 text-center text-sm font-normal">
                        0.62%
                      </p>
                    </td>
                    <td className="border border-accent-100 px-2 py-3 text-center md:px-4">
                      <p className="leading-body text-textSecondary m-0 p-0 text-center text-sm font-normal">
                        0.63%
                      </p>
                    </td>
                    <td className="border border-accent-100 px-2 py-3 text-center md:px-4">
                      <p className="leading-body text-textSecondary m-0 p-0 text-center text-sm font-normal">
                        $265,600
                      </p>
                    </td>
                    <td className="border border-accent-100 px-2 py-3 text-center md:px-4">
                      <p className="leading-body text-textSecondary m-0 p-0 text-center text-sm font-normal">
                        $1,648
                      </p>
                    </td>
                  </tr>
                  <tr className="even:bg-successBackground">
                    <td className="border border-accent-100 px-2 py-3 text-center md:px-4">
                      <p className="leading-body text-textSecondary m-0 p-0 text-center text-sm font-normal">
                        AR
                      </p>
                    </td>
                    <td className="border border-accent-100 px-2 py-3 text-center md:px-4">
                      <p className="leading-body text-textSecondary m-0 p-0 text-center text-sm font-normal">
                        0.62%
                      </p>
                    </td>
                    <td className="border border-accent-100 px-2 py-3 text-center md:px-4">
                      <p className="leading-body text-textSecondary m-0 p-0 text-center text-sm font-normal">
                        0.64%
                      </p>
                    </td>
                    <td className="border border-accent-100 px-2 py-3 text-center md:px-4">
                      <p className="leading-body text-textSecondary m-0 p-0 text-center text-sm font-normal">
                        $142,100
                      </p>
                    </td>
                    <td className="border border-accent-100 px-2 py-3 text-center md:px-4">
                      <p className="leading-body text-textSecondary m-0 p-0 text-center text-sm font-normal">
                        $878
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <hr className="my-12 border-t border-divider" />
        <div className="mt-6 space-y-4">
          <h2 className="text-textPrimary leading-heading m-0 w-auto p-0 text-xl font-bold tracking-normal md:text-2xl md:tracking-tight">
            How is Better&apos;s mortgage calculator different?
          </h2>
          <h3 className="text-textPrimary leading-heading m-0 w-auto p-0 text-lg font-bold tracking-normal md:text-xl">
            This mortgage calculator shows your payments with taxes and
            insurance
          </h3>
          <p className="text-gray-500">
            The property taxes you contribute are used to finance the services
            provided by your local government to the community. These services
            encompass schools, libraries, roads, parks, water treatment, police,
            and fire departments. Even after your mortgage has been fully paid,
            you will still need to pay property taxes. If you neglect your
            property taxes, you run the risk of losing your home to your local
            tax authority.
          </p>
          <p className="text-gray-500">
            Your lender will usually require you to have homeowners insurance
            while you're settling your mortgage. This is a common practice among
            lenders because they understand that nobody wants to continue paying
            a mortgage on a home that's been damaged or destroyed.
          </p>
          <p className="text-gray-500">
            Here's an interesting fact: Once you fully own your home, the choice
            to maintain homeowners insurance is entirely up to you. However, to
            ensure your home is protected against damages caused by fires,
            lightning strikes, and natural disasters that are common in your
            area, it is highly recommended to keep it. Therefore, always factor
            in these costs when using a Mortgage Calculator.
          </p>
          <h2 className="text-2xl font-semibold">
            This mortgage calculator shows your mortgage costs with PMI
          </h2>
          <p className="text-gray-500">
            PMI, an abbreviation for private mortgage insurance, aids potential
            homeowners in qualifying for a mortgage without the necessity of a
            20% down payment. By opting for a lower down payment and choosing a
            mortgage with PMI, you can purchase a home sooner, begin accruing
            equity, and keep cash available for future needs. This can all be
            calculated using this Mortgage Calculator.
          </p>
          <p className="text-gray-500">
            Choosing a mortgage with PMI is a popular option:{' '}
            <span className="text-accent underline">
              71% of first-time homebuyers
            </span>
            had a down payment of less than 20% in July 2021.
            <span className="text-accent underline">
              In 2020, the median down payment for first-time homebuyers was
              just 7%, and it hasn&apos;t risen above 10% since 1989.
            </span>
          </p>
          <p className="text-gray-500">
            PMI is automatically removed from conventional mortgages once your
            home equity reaches 22%. Alternatively, you can request the removal
            of PMI once you've accumulated at least 20% home equity.
          </p>
          <h2 className="text-2xl font-semibold">
            This mortgage calculator includes HOA fees
          </h2>
          <p className="text-gray-500">
            Homeowners association (“HOA”) fees are typically charged directly
            by a homeowners association, but as HOA fees come part and parcel
            with condos, townhomes, and planned housing developments,
            they&apos;re an essential factor to consider when calculating your
            mortgage costs.
          </p>
          <p className="text-gray-500">
            Homes that share structural elements, such as roofs and walls, or
            community amenities like landscaping, pools, or BBQ areas, often
            require homeowners to pay HOA fees for the maintenance of these
            shared features. It's important to factor in these costs during your
            budget planning stage, especially considering that HOA fees
            typically increase annually. HOAs may also charge additional fees
            known as &apos;special assessments&apos; to cover unexpected
            expenses from time to time.
          </p>
        </div>
        <hr className="my-12 border-t border-divider" />
        <div className="space-y-6">
          <h1 className="text-2xl font-semibold">
            How to reduce your monthly mortgage payments?
          </h1>
          <p className="text-gray-500">
            This mortgage calculator shows your payments with taxes and
            insurance
          </p>
          <h2 className="text-2xl font-semibold">
            Extend the length of your mortgage
          </h2>
          <p className="text-gray-500">
            The more time you have to pay off the mortgage, the less each
            monthly mortgage payment will be. (In lender-speak, &apos;extending
            the length of your mortgage&apos; is known as &apos;increasing your
            loan term&apos;.) This is why people often choose a 30-year fixed
            rate mortgage over one with a 15- or 20-year term.
          </p>
          <h2>Increase your down payment</h2>
          <p className="text-gray-500">
            The smaller the amount of your mortgage, the smaller your monthly
            mortgage payments will be. If you&apos;re able to put at least 20%
            of the home price towards your down payment, you&apos;ll be able to
            avoid PMI (private mortgage insurance). Even if you can&apos;t
            afford a complete 20% down payment, boosting your down payment will
            help you get PMI removed sooner. In fact, boosting your down payment
            by 5% can lower your monthly PMI fees.
          </p>
          <h2 className="text-2xl font-semibold">Get a lower interest rate</h2>
          <p className="text-gray-500">
            Increasing your down payment can be one way to help you qualify for
            a lower interest rate. The amount of your down payment compared to
            the total amount of the loan is called your{' '}
            <span className="text-accent underline">
              loan-to-value ratio (LTV).
            </span>
          </p>
          <p className="text-gray-500">
            Depending on your loan amount, a lower LTV may increase the
            likelihood of you being offered a low interest rate. If you intend
            on keeping your home for a while, you could consider buying
            <span className="text-accent underline">points</span>
            to reduce your interest rate. Buying points essentially means you
            agree to pay more upfront costs in exchange for a lower monthly
            payment.
          </p>
          <p className="text-gray-500">
            If you think you may sell or refinance the home in the first 5-10
            years of the mortgage, you could consider an
            <span className="text-accent underline">
              adjustable-rate mortgage (ARM)
            </span>
            . An ARM offers a lower fixed interest rate for a set introductory
            period—typically 5, 7, or 10 years. Once the set introductory period
            ends, the interest rate adjusts (interest rate may increase after
            consummation). The introductory interest rate for ARMs is typically
            lower than the interest rate for a conventional fixed-rate mortgage
            which could make it a great way to save on interest if you know you
            won&apos;t keep the mortgage for long.
          </p>
          <p className="text-gray-500">
            If you&apos;re not planning on buying a home for a while, improving
            your credit score is a tried and true way of increasing your chances
            of qualifying for a lower interest rate. By reducing your
            <span className="text-accent underline">
              debt-to-income ratio (DTI)
            </span>
            , lenders will see that you comfortably afford your mortgage and may
            be more willing to offer a lower interest rate.
          </p>
        </div>
        <hr className="my-12 border-t border-divider" />
        <div className="space-y-6">
          <h1 className="text-2xl font-semibold">
            How much home can I afford?
          </h1>
          <p className="text-gray-500">
            Once again, the easiest way to do this is with a calculator! To know
            if a home is in your budget, try out our{' '}
            <span className="text-accent underline">
              home affordability calculator
            </span>
            {''}. This calculator will take a few inputs from you, like income
            and savings, and let you know the maximum amount of home you can
            afford.
          </p>
        </div>
        <hr className="my-12 border-t border-divider" />
        <div className="space-y-6">
          <h1 className="text-2xl font-semibold">
            Next steps to buying a house
          </h1>
          <p className="text-gray-500">
            There are{' '}
            <span className="text-accent underline">
              8 steps to buying a house
            </span>{' '}
            and by using this calculator you&apos;ve completed step 2
            (calculating your home affordability) and maybe even step 1 (getting
            your finances in order).
          </p>
          <p className="text-gray-500">
            The next step is getting pre-approved. A mortgage pre-approval with
            Better Mortgage takes as little as 3-minutes and doesn&apos;t impact
            your credit score. It&apos;s a free, no-commitment way to see how
            much home you can buy, the mortgages you qualify for, and the range
            of interest rates you&apos;ll be offered.
          </p>
          <p className="text-gray-500">
            If you&apos;re ready to buy a home now, our{' '}
            <span className="text-accent underline">
              definitive home buying checklist
            </span>
            can walk you through everything you need to know to get the home you
            want. With your Better Mortgage pre-approval letter in hand,
            you&apos;ll be able to show sellers and real estate agents that you
            mean business—giving you an edge over homebuyers that don&apos;t
            have this kind of proof that they&apos;re financially ready to
            purchase. And by working with an agent from Better Real Estate and
            funding with Better Mortgage, you&apos;ll save $2,000 on closing
            costs, and save up to $8,200 on average over the life of your loan.
          </p>
        </div>
        <hr className="my-12 border-t border-divider" />
        <div className="space-y-10">
          <h1 className="text-2xl font-semibold">More resources</h1>
          <div>
            <div className="grid grid-cols-3 gap-12">
              <div className="flex flex-col gap-6 rounded-lg border border-gray-300 px-14 py-4">
                <Icon
                  icon="charm:notes-tick"
                  className="text-accent"
                  width="24"
                  height="24"
                />
                <p className="text-xl">
                  Get pre-approved to see how much you can borrow
                </p>
                <p className="flex items-center gap-2 text-sm font-semibold text-accent">
                  Get Started{' '}
                  <Icon className="text-accent" icon="line-md:arrow-right" />
                </p>
                <p className="text-xs text-gray-500">
                  Won&apos;t impact your credit
                </p>
              </div>
              <div className="flex flex-col gap-6 rounded-lg border border-gray-300 px-14 py-4">
                <Icon
                  icon="meteor-icons:arrow-trend-down"
                  className="text-accent"
                  width="24"
                  height="24"
                />
                <p className="text-xl">See today&apos;s rates in your area</p>
                <p className="flex items-center gap-2 text-sm font-semibold text-accent">
                  See Rates{' '}
                  <Icon className="text-accent" icon="line-md:arrow-right" />
                </p>
              </div>
              <div className="flex flex-col gap-6 rounded-lg border border-gray-300 px-14 py-4">
                <Icon
                  icon="solar:calculator-linear"
                  className="text-accent"
                  width="24"
                  height="24"
                />
                <p className="text-xl">Find out your max homebuying budget</p>
                <p className="flex items-center gap-2 text-sm font-semibold text-accent hover:underline">
                  Try our mortgage calculator{' '}
                  <Icon className="text-accent" icon="line-md:arrow-right" />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16">
          <p className="text-xs text-gray-500">
            *See{' '}
            <span className="text-accent underline">
              Better Real Estate discount terms and conditions
            </span>
            .
          </p>
          <p className="text-xs text-gray-500">
            *The average lifetime savings estimate is based on a comparison of
            the Freddie Mac Primary Mortgage Market Survey&apos;s (PMMS) 30-year
            fixed-rate mortgage product with Better Mortgage&apos;s own offered
            rate for a comparable mortgage product between Jan &apos;20 - Dec
            &apos;20. PMMS is based on conventional, conforming fully-amortizing
            home purchase loans for borrowers with a loan-to-value of 80 percent
            and with excellent credit. Better Mortgage&apos;s offered rate is
            based on pricing output for a 30-year fixed-rate mortgage product
            with a 30-day lock period for a single-family, owner-occupied
            residential property and a borrower with excellent (760 FICO) credit
            and a loan-to-value ratio of 80 percent. Individual savings could
            vary based on current market rates, property type, loan amount,
            loan-to-value, credit score, debt-to-income ratio and other
            variables.
          </p>
        </div>
      </div>
    </div>
  );
}
