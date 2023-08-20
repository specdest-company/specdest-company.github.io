// import Image from "next/image";
// import Link from "next/link";
import { FormEvent } from 'react';

const Footer = () => {
  const handleSubmit = async (event: FormEvent) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();

    // Cast the event target to an html form
    const form = event.target as HTMLFormElement;

    // Get data from the form.
    const data = {};

    const ovjValue = form.emailme.value as string;
    const pair = { email: ovjValue };
    Object.assign(data, pair);

    // Console data
    console.log('Form data: ', data);
  };

  return (
    <div className="bg-primary flex md:py-[80px]">
      <div className="container m-auto">
        <div className=" text-white md:p-0 px-[16px] py-[32px]">
          <div className="grid grid-cols-12 mb-[54px]">
            <div className="md:col-span-5 col-span-12 mb-[42px]">
              <div className="mb-[25px]">
                <a href={'/'}>
                  <img
                    className="md:w-[75px] w-[64px]"
                    src="/logo_specdest_filled.svg"
                    width={75}
                    height={75}
                    alt="logo"
                  />
                </a>
              </div>

              <p className="md:mb-[25px] mb-2 font-[600]">
                Get the lastes Updates
              </p>

              <div>
                <form onSubmit={handleSubmit} className="flex items-center">
                  <label className="relative w-[80%]">
                    <input
                      className="px-[16px] rounded-[10px] w-full h-[40px] bg-footer-input placeholder-white text-[14px] font-normal"
                      type="email"
                      name="emailme"
                      id="emailme"
                      placeholder="Your Email"
                    />
                    <button
                      type="submit"
                      className="absolute right-0 top-0 bottom-0 rounded-r-[10px] bg-white text-primary px-[16px] text-[14px] font-semibold">
                      Email Me!
                    </button>
                  </label>
                </form>
              </div>
            </div>

            <div className="lg:text-start md:col-span-2 col-span-6 md:ml-7">
              <p className="text-[18px] font-bold md:mb-[24px] mb-[12px]">
                Specdest
              </p>
              <div className="lg:text-start gap-[12px]">
                <a href={'/about'}>
                  <p className="mb-[12px]">About us</p>
                </a>
                <a href={'/contact'}>
                  <p className="mb-[12px]">Contact Us</p>
                </a>
              </div>
            </div>
            <div className="lg:text-start md:col-span-4 md:col-end-13 col-span-6 md:ml-7">
              <p className="text-[18px] font-bold md:mb-[24px] mb-[12px]">
                Our Services
              </p>
              <div className="lg:text-start">
                <a href={'/services'}>
                  <p className="mb-[12px]">Web development</p>
                </a>
                <a href={'/services'}>
                  <p className="mb-[12px]">Mobile app development</p>
                </a>
              </div>
            </div>
          </div>

          <div className="flex justify-between gap-10">
            <p className="md:text-[20px] text-[14px] md:w-full w-[180px] text-white/60">
              Copyright © 2022 Spedcest . All Rights Reseved.
            </p>
            <div className="flex gap-[14px]">
              <img
                className="md:w-[24px] w-[20px]"
                src="/social_linkedin.svg"
                width={25}
                height={25}
                alt="social"
              />
              <img
                className="md:w-[24px] w-[20px]"
                src="/social_messenger.svg"
                width={25}
                height={25}
                alt="social"
              />
              <img
                className="md:w-[24px] w-[20px]"
                src="/social_twitter.svg"
                width={25}
                height={25}
                alt="social"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
