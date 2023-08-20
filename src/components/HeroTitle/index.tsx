const HeroTitle = ({ sub_title, title, desc }: any) => {
  return (
    <div className="text-center mt-[80px]">
      <div className="mb-[24px]">
        <h2 className="xl:text-[1.5rem] lg:text-[1.25rem] md:text-[1.125rem] text-[1rem] font-bold text-primary">
          {sub_title}
        </h2>
      </div>
      <div className="mb-[24px]">
        <h1 className="2xl:text-[4.375rem] xl:text-[3.75rem] lg:text-[3.125] md:text-[2.3rem] sm:text-[1.875rem] text-[1.5rem] font-bold">
          {title}
        </h1>
      </div>
      <div className="lg:w-[75%] m-auto">
        <p className="xl:text-[1.5rem] lg:text-[1.25rem] md:text-[1.125rem] text-[1rem] font-normal text-[#000425]/80">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default HeroTitle;
