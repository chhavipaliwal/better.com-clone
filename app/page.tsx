import React from 'react';
import Image from 'next/image';
<<<<<<< HEAD
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
=======
import { Code, navbar } from "@heroui/react";
import Navbar from '@/components/sections/Navbar';
import Banner from '@/components/sections/banner';
import Start from '@/components/start/page';
export default function Home() {
  return (
    <>
      {/* <Navbar/> */}
      {/* <Banner/> */}
      <Start/>
>>>>>>> a26921d (Refactor UI and styling with new color palette and start page component)
    </>
  );
}
