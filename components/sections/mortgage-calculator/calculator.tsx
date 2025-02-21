'use client';
import Input from '@/components/ui/input';
import Select from '@/components/ui/select';
import { Slider } from '@heroui/react';
import { useFormik } from 'formik';

export default function Calculator() {
  const formik = useFormik({
    initialValues: {
      homePrice: 300000,
      monthlyPayment: 2146,
      downPayment: 60000,
      downPaymentRatio: 20,
      interestRate: 6.5,
      loanLength: 30,
      zipCode: ''
    },
    onSubmit: (values) => {
      console.log(values);
    }
  });

  return (
    <>
      <div className="bg-accent-50/50 py-16">
        <div className="m-auto max-w-screen-2xl justify-between px-6 md:px-14">
          <div className="gap-x-lg flex flex-col justify-between">
            <div className="flex-1">
              <h1 className="m-0 w-auto p-0 text-2xl font-bold tracking-tight md:text-3xl md:tracking-tighter lg:text-5xl">
                Mortgage calculator
              </h1>
              <p className="m-0 my-8 p-0 pb-8 text-left text-base font-normal text-foreground-400 lg:max-w-3xl">
                Our mortgage calculator includes key factors like homeowners
                association fees, property taxes, and private mortgage insurance
                (PMI). Get the whole picture and calculate your total monthly
                payment.
              </p>
              <div className="mb-lg gap-base flex w-full items-start">
                <div className="grow">
                  <div className="w-full max-w-[300px]">
                    <label
                      className="m-0 mb-4 block p-0 text-left text-sm font-bold md:text-base"
                      htmlFor="homePrice"
                    >
                      Home price
                    </label>
                    <div className="relative z-0 w-full text-lg md:text-[40px]">
                      <Input
                        className="pt-3"
                        name="homePrice"
                        type="tel"
                        value={formik.values.homePrice}
                        onChange={formik.handleChange}
                        startContent="$"
                      />
                    </div>
                  </div>
                </div>
                <div className="grow">
                  <div className="w-full max-w-[300px]">
                    <p className="m-0 mb-6 block p-0 text-left text-sm font-bold md:text-base">
                      Monthly payment
                    </p>
                    <p
                      className="m-0 flex items-baseline overflow-hidden p-0 text-left text-xl font-bold md:my-0 lg:text-5xl"
                      data-qa="monthly-payment"
                    >
                      ${formik.values.monthlyPayment.toLocaleString()}/mo
                    </p>
                  </div>
                </div>
                <div className="hidden self-end md:block">
                  <a
                    className="inline-flex w-auto min-w-[220px] select-none items-center justify-center rounded-medium bg-accent px-10 py-5 text-center text-base font-bold text-accent-foreground outline-none transition duration-300 hover:bg-accent-600"
                    href="#"
                  >
                    Get pre-approved
                  </a>
                </div>
              </div>
              <div className="mx-lg mb-lg relative mb-8 mt-8 px-8">
                <Slider
                  aria-label="home price"
                  defaultValue={formik.values.homePrice}
                  maxValue={3000000}
                  minValue={50000}
                  step={1000}
                  size="sm"
                  name="homePrice"
                  onChange={(value) => {
                    if (typeof value === 'number') {
                      formik.setFieldValue('homePrice', value);
                    }
                  }}
                  value={formik.values.homePrice}
                  classNames={{
                    track: 'bg-[#C8C9C6]',
                    thumb: 'bg-transparent after:bg-foreground'
                  }}
                />
              </div>
              <div className="grid grid-cols-2 gap-20">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Input
                      label="ZIP code"
                      name="zipCode"
                      value={formik.values.zipCode}
                      onChange={formik.handleChange}
                      type="tel"
                      maxLength={5}
                    />
                  </div>
                  <div className="grid grid-cols-4 gap-0">
                    <div className="col-span-3">
                      <Input
                        label="Down payment"
                        name="downPayment"
                        value={formik.values.downPayment.toString()}
                        onChange={formik.handleChange}
                        type="tel"
                        startContent="$"
                        className="rounded-r-none"
                      />
                    </div>
                    <div>
                      <Input
                        name="downPaymentRatio"
                        value={formik.values.downPaymentRatio.toString()}
                        onChange={formik.handleChange}
                        type="tel"
                        endContent="%"
                        className="rounded-l-none border-l-0"
                      />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Input
                      label="Interest rate"
                      name="interestRate"
                      value={formik.values.interestRate.toString()}
                      onChange={formik.handleChange}
                      type="tel"
                      endContent="%"
                    />
                  </div>
                  <div>
                    <Select
                      label="Length of loan"
                      name="loanLength"
                      value={formik.values.loanLength.toString()}
                      onChange={formik.handleChange}
                      options={[
                        { value: '30', label: '30 years' },
                        { value: '20', label: '20 years' },
                        { value: '15', label: '15 years' }
                      ]}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="block md:hidden">
              <div>
                <a
                  className="inline-flex w-auto min-w-[220px] select-none items-center justify-center rounded-sm text-center text-base font-bold outline-none transition duration-300 focus:shadow-[0_0_0_4px_inset] disabled:shadow-none"
                  href="#"
                >
                  Get pre-approved
                </a>
              </div>
              <button className="rounded-base ease-universal disabled:text-interactiveForegroundMuted disabled:bg-interactiveMuted text-interactiveForegroundTertiary border-strokeBorder hover:text-interactivePrimary hover:shadow-accentBorderSecondary focus:shadow-accentBorderSecondary active:text-interactivePrimary px-xl h-3xl mt-lg flex w-full select-none items-center justify-center border border-solid bg-transparent text-center text-base font-bold outline-none transition duration-300 hover:border-transparent hover:shadow-[0_0_0_4px_inset] focus:border-transparent focus:shadow-[0_0_0_4px_inset] disabled:shadow-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-plus"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>
                Add details
              </button>
              <div
                className="p-base bg-backgroundPrimary px-lg invisible fixed left-0 top-[70px] z-[10000] w-full opacity-0 shadow-lg"
                data-qa="mobile-header"
              >
                <div className="gap-xl grid grid-cols-2">
                  <div>
                    <p className="text-textSecondary mb-xs m-0 p-0 text-left text-sm font-bold">
                      Home price
                    </p>
                    <p
                      className="rounded-base bg-interactiveForegroundSecondary py-xs text-textInversePrimary m-0 p-0 text-center text-base font-bold"
                      data-qa="mobile-header-home-price"
                    >
                      ${formik.values.homePrice.toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-textSecondary mb-xs m-0 p-0 text-left text-sm font-bold">
                      Monthly payment
                    </p>
                    <p
                      className="text-textSecondary pt-xs m-0 p-0 text-left text-base font-bold"
                      data-qa="mobile-header-monthly-payment"
                    >
                      ${formik.values.monthlyPayment.toLocaleString()}/mo
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
