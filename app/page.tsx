import React from 'react';
import Start from './start/page';
import Banner from '@/components/sections/homepage/banner';
import Testimonials from '@/components/sections/homepage/testimonials';
import Qna from '@/components/sections/homepage/qna';
export default function Home() {
  return (
    <>
      <Banner />
      <Testimonials />
      <Qna />
    </>
  );
}
