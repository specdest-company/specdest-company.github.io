// import Image from "next/image";
import { useContext, useEffect, useRef } from 'react';
import { offers } from '@/locales/home';
import { LanguageContext } from '@/utils/language';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

const Offers = () => {
  const container = useRef(null);
  const title = useRef(null);
  const items = useRef(null);

  const { language } = useContext(LanguageContext);
  const offersInCurrentLanguage = offers[language];
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.matchMedia({
      // desktop
      '(min-width: 768px)': function () {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: title.current,
            start: '35% 75%',
            end: 'bottom 40%',
            scrub: true,
            markers: false,
          },
        });

        tl.from(title.current, { y: 100, opacity: 0 });
        tl.from(items.current, { y: 100, opacity: 0 });
      },

      // mobile
      '(max-width: 767px)': function () {
        // do nothing
      },

      // all
      all: function () {
        // do nothing
      },
    });
  }, []);

  return (
    <div ref={container}>
      <div className="container m-auto text-center flex justify-center mt-[-50px] mb-[44px]">
        <h2
          ref={title}
          className="2xl:w-[60%] xl:w-[50%] lg:w-[55%] md:w-[60%] w-[80%] xl:text-[2rem] lg:text-[1.625rem] md:text-[1.25rem] text-[1.125rem] font-[700] mb-2 md:leading-[43.20px] leading-snug">
          Tell us what you imagine and we will make them into
          <span className="text-primary"> REALITY</span>
        </h2>
      </div>

      <div
        ref={items}
        className="herman container m-auto md:mb-[150px] mb-[100px]">
        <div className="grid lg:grid-cols-3 md:gap-20 gap-16 text-center 2xl:px-[100px] px-0 ">
          {offersInCurrentLanguage.map((data, idx) => {
            return (
              <div key={idx} className="flex flex-col items-center">
                <img
                  src={data.img_url}
                  className="mb-[10px] xl:w-[106px] lg:w-[90px] md:w-[80px] w-[65px]"
                  width={106}
                  height={106}
                  alt="logo"
                />
                <h2 className="xl:text-[1.5rem] lg:text-[1.375rem] md:text-[1.25rem] text-[1.125rem] font-bold mb-[10px]">
                  {data.title}
                </h2>
                <p className="md:text-[1.125rem] text-[1rem] lg:w-full md:w-8/12 w-10/12 text-[#000425]/70 leading-snug">
                  {data.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Offers;
