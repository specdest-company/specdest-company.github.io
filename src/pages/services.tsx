import TabService from '@/components/Tabs/service';
import HeroTitle from '@/components/HeroTitle';
import { service_hero_data } from '@/locales/service';

const data = service_hero_data;

const ServicesPage = () => {
  return (
    <div className="container m-auto">
      <div className="lg:mb-[170px] md:mb-[80px] mb-[40px]">
        <HeroTitle
          sub_title={data.sub_title}
          title={data.title}
          desc={data.description}
        />
      </div>

      <TabService />
    </div>
  );
};

export default ServicesPage;
