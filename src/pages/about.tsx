import Article from '@/components/Article/Article';
import HeroTitle from '@/components/HeroTitle';
import UserCard from '@/components/UserCard/UserCard';
import { article_about, team_data, about_hero_data } from '@/locales/about';
import { LanguageContext } from '@/utils/language';
import { useContext } from 'react';

const data = about_hero_data;

export default function AboutUsPage() {
  const { language } = useContext(LanguageContext);
  const dataInCurrentLanguage = data[language];
  const teamDataInCurrentLanguage = team_data[language];
  const articleAboutInCurrentLanguage = article_about[language];
  return (
    <div className="container m-auto">
      <div className="max-w-[880px] mx-auto pb-40">
        <HeroTitle
          sub_title={dataInCurrentLanguage.sub_title}
          title={dataInCurrentLanguage.title}
          desc={dataInCurrentLanguage.description}
        />

        <Article articleBody={articleAboutInCurrentLanguage} />

        <div className="xl:text-[1.5rem] lg:text-[1.25rem] md:text-[1.125rem] text-[1rem] font-bold text-primary mx-auto mt-20 text-center">
          OUR TEAM
        </div>
        <div className="flex justify-between py-4">
          {teamDataInCurrentLanguage.map((member) => UserCard(member))}
        </div>
      </div>
    </div>
  );
}
