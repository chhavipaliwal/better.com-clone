import React from 'react';
import Image from 'next/image';
import { Code } from '@heroui/react';
export default function Home() {
  return (
    <>
      <div className="flex h-screen flex-col items-center justify-center space-y-10">
        <Image
          width={512}
          height={512}
          src="/logo.png"
          alt="Platforms on Vercel"
          className="w-48"
        />
      </div>
    </>
  );
}
