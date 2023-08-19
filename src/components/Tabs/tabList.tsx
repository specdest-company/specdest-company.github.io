// import Image from "next/image";
// import Link from "next/link";
import React from 'react';

const TabList = ({ title, description, imgUrl }: any) => {
  return (
    <div className="md:my-[88px] my-[20px]">
      <h1 className="xl:text-[3rem] lg:text-[2.25rem] md:text-[1.75rem] text-[1.25rem] font-bold">
        {title}
      </h1>
      <h4 className="xl:text-[1.25rem] lg:text-[1.125rem] md:text-[1rem] text-[0.875rem] font-bold text-primary lg:mb-[30px] md:mb-[24px] mb-[12px]">
        {description}
      </h4>
      <div className="relative">
        <img
          src={imgUrl}
          className="w-[100%] lg:h-[300px] md:h-[250px] h-[185px] object-cover"
          width={1000}
          height={1000}
          alt="icon"
        />
        <button className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white lg:w-[90px] lg:active:w-[86px] lg:active:h-[86px] w-[55px] lg:h-[90px] h-[55px] bg-primary/90 hover:bg-primary ease-in duration-100 rounded-full flex justify-center items-center md:text-[16px] text-[12px] active:w-[52px] active:h-[52px]">
          View
        </button>
      </div>
    </div>
  );
};

export default TabList;
