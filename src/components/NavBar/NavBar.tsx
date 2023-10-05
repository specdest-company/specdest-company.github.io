import { useState, useRef, useEffect, useContext } from 'react';
import NavItem from './NavItem';
import { LanguageContext } from '@/utils/language';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const useChangeLanguage = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  const handleChangeLanguage = () => {
    const newLanguage = language === 'en' ? 'ja' : 'en';
    setLanguage(newLanguage);
  };

  return {
    language,
    handleChangeLanguage,
  };
};

const MENU_LIST = [{ text: 'About us', href: '/about' }];

const Navbar = () => {
  const [navActive, setNavActive] = useState(false);
  const [activeIdx, setActiveIdx] = useState(-1);

  const navbar = useRef(null);

  const { language, handleChangeLanguage } = useChangeLanguage();

  useEffect(() => {
    // ScrollTrigger is not needed with Framer Motion
  }, []);

  return (
    <motion.div
      ref={navbar}
      className="h-[80px] bg-primary"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}>
      <div className="container m-auto">
        <nav className="nav md:px-0 px-[20px]">
          <Link to={'/'}>
            <img
              className="md:w-[43px] w-[63px]"
              src="/logo_specdest_wire.svg"
              width={63}
              height={63}
              alt="logo"
            />
          </Link>
          <div
            onClick={() => {
              setNavActive(!navActive);
            }}
            className={`nav__menu-bar`}>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <motion.div
            className={`${
              navActive ? 'active' : ''
            } nav__menu-list md:text-white text-black`}
            animate={{
              height: navActive ? '100%' : 0,
            }}
            transition={{ duration: 0.5 }}>
            <div
              onClick={() => {
                setNavActive(!navActive);
              }}
              className="border-b-[1px] border-primary/30 pb-[21px] md:hidden block">
              <Link to={'/'}>
                <img
                  src="/left_arrow.svg"
                  className="ml-[15px]"
                  width={34}
                  height={34}
                  alt="logo"
                />
              </Link>
            </div>
            {MENU_LIST.map((menu, idx) => (
              <div
                onClick={() => {
                  setActiveIdx(idx);
                  setNavActive(false);
                }}
                key={menu.text}>
                <NavItem active={activeIdx === idx} {...menu} />
                <div className="my_hr md:hidden block" />
              </div>
            ))}
            <div>
              <div className="ml-[30px] md:px-[20px] px-[0] sm:py-[8px] bg-white">
                <motion.button
                  onClick={() => {
                    setNavActive(false);
                  }}
                  className=" nav__item text-primary ">
                  <Link to={'./contact'}>Contact us</Link>
                </motion.button>
              </div>
              <div className="my_hr md:hidden block" />
            </div>
            <div className="md:m-[0] m-[15px] px-[0] sm:py-[8px] ">
              <div className="flex flex-row items-center right-1 ">
                <button
                  className="nav__item p-2 flex flex-row items-center text-sm font-medium "
                  onClick={handleChangeLanguage}>
                  {/* <span className="text-md">En</span> */}
                  {/* <p className={`mx-[10px] `}>{currentLanguage}</p> */}
                  {language == 'en' ? (
                    <img
                      src="https://img.icons8.com/?size=512&id=t3NE3BsOAQwq&format=png"
                      className="w-5 h-5"
                    />
                  ) : (
                    <img
                      src="https://img.icons8.com/?size=512&id=McQbrq9qaQye&format=png"
                      className="w-5 h-5"
                    />
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        </nav>
      </div>
    </motion.div>
  );
};
export default Navbar;
