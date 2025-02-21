export default function MoreInfo() {
  return (
    <>
      <section className="gap-x-lg [&>p]:text-textSecondary [&>h2]:mb-xl [&>h3]:my-lg [&>p]:my-sm m-auto max-w-screen-2xl justify-between px-6 py-16 md:flex-row md:px-14">
        <hr className="my-12 border-t border-divider" />
        <h2 className="leading-heading m-0 w-auto p-0 text-xl font-bold tracking-normal md:text-2xl md:tracking-tight">
          How does a mortgage calculator help me?
        </h2>
        <p className="leading-body text-textPrimary m-0 p-0 text-left text-base font-normal">
          When deciding how much house you can afford, one of the most important
          pieces to determine is whether a home will fit into your monthly
          budget. A mortgage calculator helps you understand the monthly cost of
          a home. And ours will allow you to enter different down payments and
          interest rates to help determine what is affordable for you.
        </p>
        <hr className="my-12 border-t border-divider" />
        <h2 className="leading-heading m-0 w-auto p-0 text-xl font-bold tracking-normal md:text-2xl md:tracking-tight">
          How much monthly mortgage payment can I afford?
        </h2>
        <p className="leading-body text-textPrimary m-0 p-0 text-left text-base font-normal">
          Lenders determine how much you can afford on a monthly housing payment
          by calculating your{' '}
          <a
            className="font-normal text-accent underline focus:outline-1 focus:outline-offset-[theme(spacing.2xs)]"
            href="#"
          >
            debt-to-income ratio (DTI)
          </a>
          . The maximum DTI you can have in order to qualify for most mortgage
          loans is often between 45-50%, with your anticipated housing costs
          included.
        </p>
        <p className="leading-body text-textPrimary m-0 p-0 text-left text-base font-normal">
          Your DTI is the balance between your income and your debt. It helps
          lenders understand how safe or risky it is for them to approve your
          loan. A DTI ratio represents how much of your gross monthly income is
          spoken for by creditors, and how much of it is left over to you as
          disposable income. It&apos;s most commonly written as a percentage.
          For example, if you pay half your monthly income in debt payments, you
          would have a DTI of 50%.
        </p>
        <div className="flex flex-col items-center">
          <div>
            <p className="leading-body text-textPrimary my-sm m-0 p-0 text-left text-base font-normal">
              Formula for calculating your debt-to-income (DTI) ratio:
            </p>
            <img
              alt="Mortgage calculator | Debt to income ratio (DTI) formula"
              loading="lazy"
              width="780"
              height="153"
              src="/assets/mortgage-calculator/dti-formula.jpg"
            />
            <p className="leading-body text-textPrimary my-sm m-0 p-0 text-left text-base font-normal">
              Here&apos;s an example of what calculating your DTI might look
              like:
            </p>
            <img
              alt="Mortgage calculator | Debt to income ratio (DTI) formula example"
              loading="lazy"
              width="780"
              height="525"
              src="/assets/mortgage-calculator/dti-example.jpg"
            />
          </div>
        </div>
        <hr className="my-12 border-t border-divider" />
        <h2 className="leading-heading m-0 w-auto p-0 text-xl font-bold tracking-normal md:text-2xl md:tracking-tight">
          How do I calculate my debt-to-income ratio (DTI)?
        </h2>
        <p className="leading-body text-textPrimary m-0 p-0 text-left text-base font-normal">
          Your monthly mortgage payment includes loan principal and interest,
          property taxes, homeowners insurance, and mortgage insurance (PMI), if
          applicable. While not typically included in your mortgage payment,
          homeowners also pay monthly utilities and sometimes pay homeowners
          association (HOA) fees, so it&apos;s a good idea to factor these into
          your monthly budget. This mortgage calculator factors in all these
          typical monthly costs so you can really crunch the numbers.
        </p>
        <h3 className="text-textPrimary leading-heading m-0 w-auto p-0 text-lg font-bold tracking-normal md:text-xl">
          Formula for calculating monthly mortgage payments
        </h3>
        <p className="leading-body text-textPrimary m-0 p-0 text-left text-base font-normal">
          The easiest way to calculate your mortgage payment is to use a
          calculator, but for the curious or mathematically inclined,
          here&apos;s the formula for calculating principal and interest
          yourself:
        </p>
        <div className="flex flex-col items-center">
          <div>
            <img
              alt="Mortgage calculator | Monthly mortgage payment formula"
              loading="lazy"
              width="780"
              height="126"
              src="/assets/mortgage-calculator/monthly-mortgage-payments-formula.jpg"
            />
            <div>
              <p className="leading-body text-textPrimary my-sm m-0 p-0 text-left text-base font-normal">
                Where:
              </p>
              <ul className="ml-xl list-disc">
                <li>
                  <p className="leading-body text-textPrimary my-sm m-0 p-0 text-left text-base font-normal">
                    <b>M</b> is monthly mortgage payments
                  </p>
                </li>
                <li>
                  <p className="leading-body text-textPrimary my-sm m-0 p-0 text-left text-base font-normal">
                    <b>P</b> is the principal loan amount (the amount you
                    borrow)
                  </p>
                </li>
                <li>
                  <p className="leading-body text-textPrimary my-sm m-0 p-0 text-left text-base font-normal">
                    <b>r</b> is the monthly interest rate
                    <br />
                    (annual interest rate divided by 12 and expressed as a
                    decimal)
                    <br />
                    <small>
                      For example:
                      <br />
                      if the annual interest rate is <b>5%</b>,
                      <br />
                      the monthly rate would be <b>0.05/12</b> = .00417, or{' '}
                      <b>.417%</b>
                    </small>
                  </p>
                </li>
                <li>
                  <p className="leading-body text-textPrimary my-sm m-0 p-0 text-left text-base font-normal">
                    <b>n</b> is the total number of payments in months
                    <br />
                    <small>
                      For example:
                      <br />
                      for a 30-year loan, n = 30X12 = <b>360</b> months
                    </small>
                  </p>
                </li>
              </ul>
              <p className="leading-body text-textPrimary my-sm m-0 p-0 text-left text-base font-normal">
                Here&apos;s a simple example:
              </p>
              <img
                alt="Mortgage calculator | Monthly mortgage payment formula example"
                loading="lazy"
                width="780"
                height="221"
                src="/assets/mortgage-calculator/monthly-mortgage-payments-example.jpg"
              />
            </div>
          </div>
        </div>
        <p className="leading-body text-textPrimary m-0 p-0 text-left text-base font-normal">
          This formula assumes a fixed-rate mortgage, where the interest rate
          remains constant throughout the loan term. And remember, you&apos;ll
          still need to add on taxes, insurance, utilities, and HOA fees if
          applicable.
        </p>
      </section>
    </>
  );
}
