import { service_data } from '@/locales/home';
import { LanguageContext } from '@/utils/language';
import { useContext, useRef } from 'react';
import { FadeInWhenVisible } from './FadeInWhenVisible';

const Service = () => {
  const container = useRef(null);
  const items2 = useRef(null);
  const items3 = useRef(null);

  const { language } = useContext(LanguageContext);

  const service = service_data[language];

  return (
    <div
      ref={container}
      className="container m-auto flex justify-center mb-[230px] overflow-hidden">
      <div className="flex flex-col items-center mb-40px lg:mb-100px">
        <div className="2xl:mb-[250px] xl:mb-[200px] lg:mb-[150px] md:mb-[125px] mb-[95px]">
          <div className="w-full flex flex-row-reverse justify-between items-center">
            <FadeInWhenVisible
              initialStyle={{ y: 100, opacity: 0 }}
              transition={{ delay: 0.3, duration: 0.3 }}
              className="flex items-center lg:justify-end md:justify-center">
              <img
                alt="service"
                src="/home_square_solutions.svg"
                className="md:block hidden 2xl:mr-[50px] 2xl:w-[400px] xl:w-[350px] lg:w-[300px] md:w-[250px] w-[175px]"
                width={400}
                height={400}
              />
            </FadeInWhenVisible>
            <FadeInWhenVisible
              initialStyle={{ y: 10 }}
              transition={{ delay: 0.6, duration: 0.1 }}
              className="w-full md:w-7/12">
              <h4 className="mt-3 2xl:text-[2.375rem] xl:text-[2rem] lg:text-[1.75rem] md:text-[1.5rem] text-[1.25rem] font-[700] lg:leading-[43.20px]">
                {service.title_1}
              </h4>
              <h2 className="2xl:text-[2rem] xl:text-[1.75rem] lg:text-[1.5rem] md:text-[1.25rem] text-[1rem] font-[700] text-primary mb-[21px] lg:leading-[43.20px]">
                {service.sub_title_1}
              </h2>
              <div className="flex items-center">
                <p className="2xl:text-[1.5rem] xl:text-[1.375rem] lg:text-[1.25rem] md:text-[1.125rem] text-[1rem] lg:mt-3 font-TTCommons">
                  {service.text_1}
                </p>
                <img
                  alt="service"
                  src="/home_square_solutions.svg"
                  className="md:hidden block 2xl:w-[400px] xl:w-[350px] lg:w-[300px] md:w-[250px] sm:w-[200px] w-[175px]"
                  width={400}
                  height={400}
                />
              </div>
              <p className="2xl:text-[1.5rem] xl:text-[1.375rem] lg:text-[1.25rem] md:text-[1.125rem] text-[1rem] font-TTCommons">
                {service.sub_text_1}
              </p>
            </FadeInWhenVisible>
          </div>
        </div>

        <div
          ref={items2}
          className="2xl:mb-[250px] xl:mb-[200px] lg:mb-[150px] md:mb-[125px] mb-[95px]">
          <div className="w-full flex flex-row justify-between items-center">
            <FadeInWhenVisible
              initialStyle={{ x: -300 }}
              className="flex items-center lg:justify-end md:justify-center">
              <img
                alt="service"
                src="/home_square_services.svg"
                className="md:block hidden 2xl:w-[400px] xl:w-[350px] lg:w-[300px] md:w-[250px] w-[175px]"
                width={10}
                height={10}
              />
            </FadeInWhenVisible>
            <FadeInWhenVisible
              initialStyle={{ x: 300 }}
              className="w-full md:w-7/12">
              <h4 className="mt-3 2xl:text-[2.375rem] xl:text-[2rem] lg:text-[1.75rem] md:text-[1.5rem] text-[1.25rem] font-[700] lg:leading-[43.20px]">
                {service.title_2}
              </h4>
              <h2 className="2xl:text-[2rem] xl:text-[1.75rem] lg:text-[1.5rem] md:text-[1.25rem] text-[1rem] font-[700] text-primary mb-[21px] lg:leading-[43.20px]">
                {service.sub_title_2}
              </h2>
              <div className="flex items-center">
                <img
                  alt="service"
                  src="/home_square_services.svg"
                  className="md:hidden block 2xl:w-[400px] xl:w-[350px] lg:w-[300px] md:w-[250px] w-[175px]"
                  width={400}
                  height={400}
                />
                <p className="2xl:text-[1.5rem] xl:text-[1.375rem] lg:text-[1.25rem] md:text-[1.125rem] text-[1rem] lg:mt-3 font-TTCommons">
                  {service.text_1}
                </p>
              </div>
              <p className="2xl:text-[1.5rem] xl:text-[1.375rem] lg:text-[1.25rem] md:text-[1.125rem] text-[1rem] font-TTCommons">
                {service.sub_text_2}
              </p>
            </FadeInWhenVisible>
          </div>
        </div>

        <div ref={items3}>
          <div className="w-full flex flex-row-reverse justify-between items-center">
            <FadeInWhenVisible
              initialStyle={{ x: 300 }}
              className="flex items-center lg:justify-end md:justify-center">
              <img
                alt="service"
                src="/home_square_automation.svg"
                className="md:block hidden 2xl:mr-[50px] mr-0 2xl:w-[400px] xl:w-[350px] lg:w-[300px] md:w-[250px] w-[175px]"
                width={400}
                height={400}
              />
            </FadeInWhenVisible>
            <FadeInWhenVisible
              initialStyle={{ x: -300 }}
              className="w-full md:w-7/12">
              <h4 className="mt-3 2xl:text-[2.375rem] xl:text-[2rem] lg:text-[1.75rem] md:text-[1.5rem] text-[1.25rem] font-[700] lg:leading-[43.20px]">
                {service.title_3}
              </h4>
              <h2 className="2xl:text-[2rem] xl:text-[1.75rem] lg:text-[1.5rem] md:text-[1.25rem] text-[1rem] font-[700] text-primary mb-[21px] lg:leading-[43.20px]">
                {service.sub_title_3}
              </h2>
              <div className="flex items-center">
                <p className="2xl:text-[1.5rem] xl:text-[1.375rem] lg:text-[1.25rem] md:text-[1.125rem] text-[1rem] lg:mt-3 font-TTCommons">
                  {service.text_3}
                </p>
                <img
                  alt="service"
                  src="/home_square_automation.svg"
                  className="md:hidden block 2xl:w-[400px] xl:w-[350px] lg:w-[300px] md:w-[200px] w-[175px]"
                  width={400}
                  height={400}
                />
              </div>
              <p className="2xl:text-[1.5rem] xl:text-[1.375rem] lg:text-[1.25rem] md:text-[1.125rem] text-[1rem] font-TTCommons">
                {service.sub_text_3}
              </p>
            </FadeInWhenVisible>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
