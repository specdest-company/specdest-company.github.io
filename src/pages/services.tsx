import TabService from '@/components/Tabs/service';
import HeroTitle from '@/components/HeroTitle';
import { service_hero_data } from '@/locales/service';
import { useContext } from 'react';
import { LanguageContext } from '@/utils/language';

const data = service_hero_data;

const ServicesPage = () => {
  const { language } = useContext(LanguageContext);
  const dataInCurrentLang = data[language];
  return (
    <div className="container m-auto">
      <div className="lg:mb-[170px] md:mb-[80px] mb-[40px]">
        <HeroTitle
          sub_title={dataInCurrentLang.sub_title}
          title={dataInCurrentLang.title}
          desc={dataInCurrentLang.description}
        />
      </div>

      <TabService />
    </div>
  );
};

export default ServicesPage;
