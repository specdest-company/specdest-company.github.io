const ContactSent = () => {
  return (
    <div className="container m-auto">
      {/* <Helmet>
        <title>Contact - SPECDEST</title>
        <meta property="og:title" content="Contact - SPECDEST" />
      </Helmet> */}
      <div className="contact-container1 max-content-container">
        <div className="max-w-[880px] mx-auto pb-40">
          <div className="mt-[80px]">
            <h1 className="2xl:text-[4.375rem] xl:text-[3.75rem] lg:text-[3.125] md:text-[2.3rem] sm:text-[1.875rem] text-[1.5rem] font-bold">
              <span>お問い合わせが送信されました</span>
              <br></br>
            </h1>
          </div>
          <div className="mb-[24px]">
            <p className="xl:text-[1.5rem] lg:text-[1.25rem] md:text-[1.125rem] text-[1rem] font-normal text-[#000425]/80">
              お問い合わせいただき、ありがとうございます。
            </p>
            <p>
              お問い合わせ頂いた内容については、確認の上、ご返信させていただきます。
            </p>
            <br />
            <a
              href="/"
              className="xl:text-[1.5rem] lg:text-[1.25rem] md:text-[1.125rem] text-[1rem] font-bold text-primary">
              トップページに戻る
            </a>
          </div>
        </div>
      </div>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default ContactSent;
