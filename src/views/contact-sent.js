import React, { useState, useRef, useEffect } from 'react'
import ReactRecaptcha3 from 'react-google-recaptcha3';

import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { useNavigate } from "react-router-dom";
import Navbar from '../components/navbar'
import LabeledTextInput from '../components/labeled-text-input'
import LabeledTextAriaInput from '../components/labeled-text-aria-input'
import Footer from '../components/footer'
import { sendEmail } from '../utils/sendEmail'
import './contact.css'

const ContactSent = (props) => {
  return (
    <div className="contact-container">
      <Helmet>
        <title>Contact - SPECDEST</title>
        <meta property="og:title" content="Contact - SPECDEST" />
      </Helmet>
      <Navbar></Navbar>
      <div className="contact-container1 max-content-container">
        <div className="contact-container2">
          <h1 className="contact-text">
            <span>お問い合わせが送信されました</span>
            <br></br>
          </h1>
        </div>
        <div className="contact-container2" >
          <div>お問い合わせいただき、ありがとうございます。</div>
          <div>お問い合わせ頂いた内容については、確認の上、ご返信させていただきます。</div>
          <br />
          <Link to="/" className="home-navlink">
            HOME
          </Link>
        </div>
      </div>
      {/* <Footer></Footer> */}
    </div>
  )
}

export default ContactSent
