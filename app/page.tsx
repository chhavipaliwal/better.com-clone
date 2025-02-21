import React from 'react';
import Banner from '@/components/sections/homepage/banner';
import Testimonials from '@/components/sections/homepage/testimonials';
import Qna from '@/components/sections/homepage/qna';
import Start from './start/page';
export default function Home() {
  return (
    <>
      <Banner />
      <Start />

      <Testimonials />
      <Qna />
    </>
  );
}
