'use client';
import React, { useState, useRef, useEffect } from 'react';
// import Link from "next/link";
import NavItem from './NavItem';
// import Image from "next/image";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/all";

const MENU_LIST = [
  { text: 'About us', href: '/about' },
  { text: 'Our services', href: '/services' },
];
const Navbar = () => {
  const [navActive, setNavActive] = useState(false);
  const [activeIdx, setActiveIdx] = useState(-1);

  const navbar = useRef(null);

  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);
  //   ScrollTrigger.matchMedia({
  //     // desktop
  //     "(min-width: 768px)": function () {
  //       const tl = gsap.timeline();
  //       tl.from(navbar.current, { opacity: 0, y: -50, duration: 0.8 });
  //     },

  //     // mobile
  //     "(max-width: 767px)": function () {},

  //     // all
  //     all: function () {},
  //   });
  // }, []);

  return (
    <header ref={navbar} className="h-[80px] bg-primary">
      <div className="container m-auto">
        <nav className="nav md:px-0 px-[20px]">
          <a href={'/'}>
            <img
              className="md:w-[43px] w-[63px]"
              src="/logo_specdest_wire.svg"
              width={63}
              height={63}
              alt="logo"
            />
          </a>
          <div
            onClick={() => {
              setNavActive(!navActive);
            }}
            className={`nav__menu-bar`}
          >
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div
            className={`${
              navActive ? 'active' : ''
            } nav__menu-list md:text-white text-black`}
          >
            <div
              onClick={() => {
                setNavActive(!navActive);
              }}
              className="border-b-[1px] border-primary/30 pb-[21px] md:hidden block"
            >
              <a href={'/'}>
                <img
                  src="/left_arrow.svg"
                  className="ml-[15px]"
                  width={34}
                  height={34}
                  alt="logo"
                />
              </a>
            </div>
            {MENU_LIST.map((menu, idx) => (
              <div
                onClick={() => {
                  setActiveIdx(idx);
                  setNavActive(false);
                }}
                key={menu.text}
              >
                <NavItem active={activeIdx === idx} {...menu} />
                <div className="my_hr md:hidden block" />
              </div>
            ))}
            <div>
              <div className="ml-[30px] md:px-[20px] px-[0] sm:py-[8px] bg-white">
                <button
                  onClick={() => {
                    setNavActive(false);
                  }}
                  className=" nav__item text-primary "
                >
                  <a href={'./contact'}>Contact us</a>
                </button>
              </div>
              <div className="my_hr md:hidden block" />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
