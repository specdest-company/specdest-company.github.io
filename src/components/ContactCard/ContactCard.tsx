// import Image from "next/image";
import { FC } from 'react';

export interface IUserCard {
  image: string;
  title: string;
  info: string;
}

const ContactCard: FC<IUserCard> = (contact) => (
  <div className="text-center md:w-[342px] p-4 border border-gray-100 rounded-[25px] m-3">
    <img
      className="md:w-[66px] w-[50px] mx-auto"
      src={contact.image}
      alt={'contact avatar'}
      width={120}
      height={120}
    />

    <div className="xl:text-[1.5rem] lg:text-[1.375rem] md:text-[1.25rem] text-[1.125rem] font-bold pt-4">
      {contact.title}
    </div>
    <div className="2xl:text-[1.5rem] xl:text-[1.375rem] lg:text-[1.25rem] md:text-[1.125rem] text-[1rem] text-dark">
      {contact.info}
    </div>
  </div>
);

export default ContactCard;
