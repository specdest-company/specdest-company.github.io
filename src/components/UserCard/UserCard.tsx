// import Image from "next/image";
import { FC } from 'react';

export interface IUserCard {
  name: string;
  position: string;
  image: string;
}

const UserCard: FC<IUserCard> = (member) => (
  <div className="text-center p-4">
    <img
      className="rounded-full md:w-[112px] w-[75px] mx-auto"
      src={member.image}
      alt={'avatar'}
      width={120}
      height={120}
    />

    <div className="2xl:text-[2rem] xl:text-[1.75rem] lg:text-[1.5rem] md:text-[1.25rem] text-[1.125rem] font-bold pt-4">
      {member.name}
    </div>
    <div className="2xl:text-[1.1875rem] xl:text-[1.15rem] lg:text-[1.125rem] md:text-[1rem] text-[0.875rem] text-grey">
      {member.position}
    </div>
  </div>
);

export default UserCard;
