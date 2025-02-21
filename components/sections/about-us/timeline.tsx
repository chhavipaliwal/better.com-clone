'use client';

export default function Timeline() {
  const timelineData = [
    {
      year: '2014',
      text: 'After Vishal Garg&apos;s first attempt to purchase his own dream home, he quickly realized that the homebuying process is unnecessarily broken. This inspired him to found a technology-first company led by engineers and data experts with the mission of digitizing and automating home finance to make it cheaper, easier, and faster for all.'
    },
    {
      year: '2015',
      text: 'Better Mortgage funds its first mortgage loan entirely online (without a single phone call!).'
    },
    {
      year: '2016',
      text: 'Better Mortgage becomes a Fannie Mae approved seller + servicer and establishes relationships with top mortgage investors'
    },
    {
      year: '2017',
      text: 'Better expands into the real estate market with Better Real Estate.'
    },
    {
      year: '2018',
      text: 'Better Mortgage partners with Ally Bank to build Ally powered by Better.'
    },
    {
      year: '2019',
      text: 'Better Mortgage launches its pilot partnership with American Express to deliver a seamless homebuying experience to AMEX customers.'
    },
    {
      year: '2021   ',
      text: "Better acquires Trussle — The UK's most innovative online mortgage broker."
    },
    {
      year: '2022',
      text: 'Better Mortgage becomes the first fintech to fund $100B home loans entirely online.'
    },
    {
      year: '2023',
      text: 'Better Mortgage launches One Day Mortgage¹: The first offering to customers to go from application to full mortgage Commitment Letter within 24 hours vs. typical industry process of 30+ days.'
    },
    {
      text: 'Better Mortgage is named one of the top 100 most innovative companies in the world by Fast Company.'
    },
    {
      text: 'Better Mortgage launches One Day Verified Approval Letter.'
    },
    {
      year: 'today',
      text: 'You become part of the story by joining tens of thousands of happy Better Mortgage borrowers.'
    }
  ];

  return (
    <div className="flex min-h-screen flex-col items-center bg-[#fdfbf7] py-16">
      <h2 className="mb-8 text-3xl font-semibold text-foreground-700">
        Company timeline
      </h2>
      <div className="relative w-full max-w-2xl">
        {/* Vertical Line */}
        <div className="absolute left-1/2 h-full w-[3px] -translate-x-1/2 transform bg-gray-300"></div>

        {timelineData.map((event, index) => (
          <div
            key={index}
            className={`mb-8 flex w-full items-center ${
              index % 2 === 0 ? 'justify-start' : 'justify-end'
            }`}
          >
            <div className="relative w-1/2">
              {/* Year Label */}
              <span
                className={`absolute -top-2 ${
                  index % 2 === 0
                    ? 'right-0 translate-x-1/2'
                    : 'left-0 -translate-x-1/2'
                } transform rounded-full bg-green-700 px-8 py-2 text-sm font-semibold text-white`}
              >
                <h3 className="m-0 w-auto p-0 text-lg font-bold tracking-normal text-white md:text-xl">
                  {event.year}
                </h3>
              </span>
              {/* Event Description */}
              <div
                className={`ml-8 mt-16 rounded-lg bg-[#DFE0DC] p-10 text-[#565D5A] shadow-md ${
                  index % 2 === 0 ? 'mr-8' : 'ml-8'
                }`}
              >
                {event.text}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
