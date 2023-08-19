const ContactSent = () => {
  return (
    <div className="contact-container">
      {/* <Helmet>
        <title>Contact - SPECDEST</title>
        <meta property="og:title" content="Contact - SPECDEST" />
      </Helmet> */}
      <div className="contact-container1 max-content-container">
        <div className="contact-container2">
          <h1 className="contact-text">
            <span>お問い合わせが送信されました</span>
            <br></br>
          </h1>
        </div>
        <div className="contact-container2">
          <div>お問い合わせいただき、ありがとうございます。</div>
          <div>
            お問い合わせ頂いた内容については、確認の上、ご返信させていただきます。
          </div>
          <br />
          <a href="/" className="home-navlink">
            HOME
          </a>
        </div>
      </div>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default ContactSent;
