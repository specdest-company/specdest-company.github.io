'use client';

import React, { useEffect, useRef } from 'react';
// import Link from "next/link";
import { hero } from '@/locales/home';
// import { gsap } from 'gsap'
// import { ScrollTrigger } from 'gsap/all'

const Hero = () => {
  const container = useRef(null);
  const title = useRef(null);
  const sub_title = useRef(null);
  const button = useRef(null);

  //   useEffect(() => {
  //     gsap.registerPlugin(ScrollTrigger);
  //     ScrollTrigger.matchMedia({
  //       // desktop
  //       "(min-width: 768px)": function () {
  //         gsap.defaults({ duration: 0.3 });
  //         const tl = gsap.timeline();
  //         tl.from(container.current, { opacity: 0 })
  //           .from(title.current, { x: -100, opacity: 0 })
  //           .from(sub_title.current, { x: 100, opacity: 0 })
  //           .from(button.current, { opacity: 0 });
  //       },

  //       // mobile
  //       "(max-width: 767px)": function () {},

  //       // all
  //       all: function () {},
  //     });
  //   }, []);

  return (
    <div
      ref={container}
      className="container m-auto md:pt-[10%] pt-[50px] px-0 5xl:h-[1700px] 4xl:h-[1400px] 3xl:h-[1250px] 2xl:h-[1150px] xl:h-[1000px] lg:h-[800px] md:h-[650px] sm:h-[500px] h-[500px] flex justify-center items-top"
    >
      <div className="flex justify-center w-[80%]">
        <div className="flex flex-col items-center text-center text-[#000425]">
          <h1
            ref={title}
            className="2xl:w-[80%] md:w-[100%] 2xl:text-[4.375rem] xl:text-[3.75rem] lg:text-[3.125] md:text-[2.3rem] sm:text-[1.875rem] text-[1.5rem] md:leading-[84px] leading-7 font-bold mb-[15px]"
          >
            {hero.title}
          </h1>
          <p
            ref={sub_title}
            className="xl:text-[1.5rem] lg:text-[1.25rem] md:text-[1.0625rem] text-[0.875rem] font-normal text-[#000425]/80 md:mb-[23px] mb-[48px]"
          >
            {hero.sub_title}
          </p>
          <a
            ref={button}
            href="/contact"
            className="md:w-[380px] sm:w-[70%] w-[70%] h-[50px] p-4 bg-primary justify-center items-center  inline-flex"
          >
            <div className="text-white md:text-[1rem] text-[0.875rem] font-bold">
              Discover the Possibilities
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
