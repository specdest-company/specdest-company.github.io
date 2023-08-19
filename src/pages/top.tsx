import Hero from '@/components/home/hero';
import Offers from '@/components/home/offers';
import Service from '@/components/home/service';

export default function Home() {
  return (
    <main>
      <div className='bg-[url("/background_gradient.svg")] sm:bg-top bg-no-repeat bg-contain md:mt-[30px] mt-[50px] bg-[center_top_150px]'>
        <Hero />
        <Offers />
        <Service />
      </div>
    </main>
  );
}
