import { useContext, useEffect, useState } from 'react';
import { hero } from '@/locales/home';
import { LanguageContext } from '@/utils/language';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
  const [isAnimated, setIsAnimated] = useState(false);

  const { language } = useContext(LanguageContext);
  const heroInCurrentLanguage = hero[language];
  useEffect(() => {
    setIsAnimated(true);
  }, []);

  return (
    <div className="container m-auto md:pt-[10%] pt-[50px] px-0 5xl:h-[1700px] 4xl:h-[1400px] 3xl:h-[1250px] 2xl:h-[1150px] xl:h-[1000px] lg:h-[800px] md:h-[650px] sm:h-[500px] h-[500px] flex justify-center items-top">
      <div className="flex justify-center w-[80%]">
        <div className="flex flex-col items-center text-center text-[#000425]">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: isAnimated ? 0.5 : 0, duration: 1 }}
            // className="text-6xl font-bold text-center text-white"
            className="2xl:w-[80%] md:w-[100%] 2xl:text-[4.375rem] xl:text-[3.75rem] lg:text-[3.125] md:text-[2.3rem] sm:text-[1.875rem] text-[1.5rem] md:leading-[84px] leading-7 font-bold mb-[15px]">
            {heroInCurrentLanguage.title}
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: isAnimated ? 0.75 : 0, duration: 1 }}
            // className="text-3xl font-bold text-center text-white">
            className="xl:text-[1.5rem] lg:text-[1.25rem] md:text-[1.0625rem] text-[0.875rem] font-normal text-[#000425]/80 md:mb-[23px] mb-[48px]">
            {heroInCurrentLanguage.sub_title}
          </motion.h2>

          <motion.h3
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: isAnimated ? 1 : 0, duration: 1 }}
            // className="text-2xl font-bold text-center text-white">
            className="md:w-[380px] sm:w-[70%] w-[70%] h-[50px] p-4 bg-primary justify-center items-center  inline-flex">
            <Link to="/contact">
              <div className="text-white md:text-[1rem] text-[0.875rem] font-bold">
                Discover the Possibilities
              </div>
            </Link>
          </motion.h3>
        </div>
      </div>
    </div>
  );
};

export default Hero;
