// import Image from "next/image";
import React from 'react';

interface TabsProps {
  tabs: string[];
  active: string;
  onChange: (tabName: string) => void;
}

const Tabs: React.FC<TabsProps> = ({ tabs, active, onChange }) => {
  const activeIcon = (
    <img
      src="service_icon_active.svg"
      className="md:block hidden w-[54px] h-[54px]"
      width={54}
      height={54}
      alt="icon"
    />
  );
  const inactiveIcon = (
    <img
      src="service_icon_inactive.svg"
      className="md:block hidden w-[54px] h-[54px]"
      width={54}
      height={54}
      alt="icon"
    />
  );
  return (
    <div className="grid grid-cols-2 mb-[30px] md:rounded-none rounded-3xl bg-white md:drop-shadow-none drop-shadow-[0_0_10px_rgba(56,192,198,0.35)]">
      {tabs.map((tabName) => (
        <button
          key={tabName}
          onClick={() => {
            onChange(tabName);
          }}
          data-active={tabName === active}
        >
          {tabName === active ? (
            <div className="flex justify-center items-center gap-[23px] md:border-b-[3px] md:border-primary  md:pb-[10px] md:text-black text-white xl:text-[1.5rem] lg:text-[1.25rem] md:text-[1.0625rem] text-[0.875rem] md:bg-white bg-primary md:px-[0] px-[20px] md:py-[0] py-[15px] md:rounded-none rounded-3xl">
              {activeIcon}
              {tabName}
            </div>
          ) : (
            <div className="flex justify-center items-center gap-[23px] md:border-b-[3px] md:border-primary/20 xl:text-[1.5rem] lg:text-[1.25rem] md:text-[1.0625rem] text-[0.875rem] md:pb-[10px] md:px-[0] px-[20px] md:py-[0] py-[15px] md:rounded-none rounded-3xl">
              {inactiveIcon}
              {tabName}
            </div>
          )}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
