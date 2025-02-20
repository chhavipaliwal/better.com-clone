import { Icon } from '@iconify/react/dist/iconify.js';
import Link from 'next/link';
// import { PhoneIcon } from '@heroicons/react/outline';
export default function Start() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-[#f9f8f6] p-6">
      {/* Header */}
      <div className="flex w-full max-w-4xl items-center justify-between py-4">
        <div>
          <p className="text-lg font-bold text-accent">Better</p>
          <p className="text-gray-600">Mortgage</p>
        </div>
        <div className="flex items-center gap-2 text-lg font-semibold">
          <Icon
            icon="solar:phone-outline"
            className="rounded-full bg-[#CDE9D3] text-accent"
          />
          <span>Need help? Call (415) 523 8837</span>
        </div>
      </div>

      {/* Content */}
      <div className="mt-10 flex w-full max-w-2xl flex-col items-center p-8">
        <div className="border-gray absolute inset-x-0 border-4"></div>
        <a className="relative flex h-12 w-12 items-center justify-center rounded-full border bg-gray-200">
          <img src="image.png" alt="image" className="rounded-full" />
        </a>

        <h2 className="mt-4 text-5xl font-semibold">Hi, I'm Betsy!</h2>
        <p className="mt-2 text-5xl font-semibold">What can I help you with?</p>
        {/* Options */}
        <div className="mt-6 w-full space-y-4">
          {[
            { text: 'Buying a home', icon: 'solar:home-broken' },
            { text: 'Refinance my mortgage', icon: 'solar:home-outline' },
            {
              text: 'Get cash from my home',
              icon: 'solar:chat-round-money-broken'
            }
          ].map((item, index) => (
            <button
              key={index}
              className="mt-4 flex w-full items-center gap-4 rounded-lg border border-gray-400 p-4 text-left hover:border-4 hover:border-accent"
            >
              {/* <span className="text-xl text-green-600">{item.icon}</span> */}
              <Icon icon={item.icon} className="text-xl text-accent" />
              <span className="font-medium text-gray-800">{item.text}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-10 flex gap-8 text-center text-sm text-gray-700">
        <div>
          <span className="text-2xl font-bold text-black">$100B</span>
          <p>home loans funded entirely online</p>
        </div>
        <div>
          <span className="text-2xl font-bold text-black">400K</span>
          <p>Customers who chose a Better Mortgage</p>
        </div>
      </div>
    </div>
  );
}
