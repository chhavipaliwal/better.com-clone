import Banner from '@/components/sections/homepage/banner';
import React from 'react';
import Image from 'next/image';
import { Code, navbar } from '@heroui/react';
import Start from './start/page';

export default function Home() {
  return (
    <>
      {/* <Banner/> */}
      <Start />
    </>
  );
}
