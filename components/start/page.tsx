import Link from 'next/link';
// import { PhoneIcon } from '@heroicons/react/outline';
export default function Start() {
    return (
        <div className="min-h-screen bg-[#f9f8f6] flex flex-col items-center p-6">
          {/* Header */}
          <div className="w-full flex justify-between items-center max-w-4xl py-4">
            <div>
                <p className="text-primary font-bold text-lg">Better</p>
            <p className="text-gray-600">Mortgage</p>
            </div>
            <div className="flex items-center gap-2 font-semibold text-lg">
              {/* <PhoneIcon className="w-4 h-4 text-green-600" /> */}
              <span>Need help? Call (415) 523 8837</span>
            </div>
          </div>
    
          {/* Content */}
          <div className=" p-8 w-full max-w-2xl flex flex-col items-center mt-10">
              <a className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center border">👩</a>
            <h2 className="text-5xl font-semibold mt-4">Hi, I'm Betsy!</h2>
            <p className="text-5xl font-semibold mt-2">What can I help you with?</p>
                        {/* Options */}
            <div className="w-full mt-6 space-y-4">
              {[
                { text: 'Buying a home', icon: '🏡' },
                { text: 'Refinance my mortgage', icon: '🏠' },
                { text: 'Get cash from my home', icon: '💰' },
              ].map((item, index) => (
                <button
                  key={index}
                  className="flex items-center gap-4 border border-gray-300 rounded-lg p-4 w-full text-left hover:border-primary hover:border-4 transition"
                >
                  <span className="text-green-600 text-xl">{item.icon}</span>
                  <span className="text-gray-800 font-medium">{item.text}</span>
                </button>
              ))}
            </div>
          </div>
    
          <div className="mt-10 flex gap-8 text-center text-gray-700 text-sm">
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