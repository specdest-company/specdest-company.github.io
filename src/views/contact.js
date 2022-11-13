import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import LabeledTextInput from '../components/labeled-text-input'
import PhoneInput from '../components/phone-input'
import EmailLabeledTextinput from '../components/email-labeled-textinput'
import LabeledTextAriaInput from '../components/labeled-text-aria-input'
import Footer from '../components/footer'
import './contact.css'

const Contact = (props) => {
  return (
    <div className="contact-container">
      <Helmet>
        <title>Contact - SPECDEST</title>
        <meta property="og:title" content="Contact - SPECDEST" />
      </Helmet>
      <Navbar></Navbar>
      <div className="contact-container1">
        <div className="contact-container2">
          <h1 className="contact-text">
            <span>情報をご入力の上、</span>
            <br></br>
            <span>「送信する」ボタンを押してください。</span>
          </h1>
        </div>
        <div className="contact-container3">
          <h1>お問い合わせフォーム</h1>
        </div>
        <div className="contact-container4">
          <form className="contact-form">
            <LabeledTextInput
              text="会社名"
              textinput_placeholder="例）スペックデストカビ式会社式会社"
            ></LabeledTextInput>
            <LabeledTextInput
              text="会社URL"
              textinput_placeholder="例）https://specdest.com"
            ></LabeledTextInput>
            <LabeledTextInput
              text="役職（部署）"
              textinput_placeholder="例）営業部 部長"
            ></LabeledTextInput>
            <LabeledTextInput
              text="お名前"
              textinput_placeholder="例）山田 太郎"
            ></LabeledTextInput>
            <PhoneInput></PhoneInput>
            <EmailLabeledTextinput></EmailLabeledTextinput>
            <LabeledTextAriaInput></LabeledTextAriaInput>
            <button className="contact-button button">送信する</button>
          </form>
          <h1 className="contact-text05">個人情報の取り扱いについて</h1>
          <span className="contact-text06">
            <span>個人情報の定義</span>
            <br></br>
            <span>
              個人情報とは、個人に関する情報であり、お名前、生年月日、性別、電話番号、電子メールアドレス、職業、勤務先等、特定の個人を識別し得る情報をいいます。
            </span>
            <br></br>
            <br></br>
            <span>個人情報の収集・利用</span>
            <br></br>
            <span>
              当社は、以下の目的のため、その範囲内においてのみ、個人情報を収集・利用いたします。
              当社による個人情報の収集・利用は、お客様の自発的な提供によるものであり、お客様が個人情報を提供された場合は、当社が本方針に則って個人情報を利用することをお客様が許諾したものとします。
            </span>
            <br></br>
            <br></br>
            <span>個人情報の第三者提供</span>
            <br></br>
            <span>
              当社は、法令に基づく場合等正当な理由によらない限り、事前に本人の同意を得ることなく、個人情報を第三者に開示・提供することはありません。
            </span>
            <br></br>
            <br></br>
            <span>個人情報の管理</span>
            <br></br>
            <span>
              当社は、個人情報の漏洩、滅失、毀損等を防止するために、個人情報保護管理責任者を設置し、十分な安全保護に努め、また、個人情報を正確に、また最新なものに保つよう、お預かりした個人情報の適切な管理を行います。
            </span>
            <br></br>
            <br></br>
            <span>情報内容の照会、修正または削除</span>
            <br></br>
            <span>
              当社は、お客様が当社にご提供いただいた個人情報の照会、修正または削除を希望される場合は、ご本人であることを確認させていただいたうえで、合理的な範囲ですみやかに対応させていただきます。
            </span>
          </span>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Contact
