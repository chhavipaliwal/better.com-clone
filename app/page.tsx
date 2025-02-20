import React from 'react';
import Image from 'next/image';
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
    </>
  );
}
