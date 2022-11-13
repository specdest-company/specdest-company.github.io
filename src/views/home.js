import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import FeatureCardLanguage from '../components/feature-card-language'
import FeatureCardServer from '../components/feature-card-server'
import FeatureCardFramework1 from '../components/feature-card-framework1'
import OurServiceFooter from '../components/our-service-footer'
import Footer from '../components/footer'
import Copyright from '../components/copyright'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>SPECDEST</title>
        <meta property="og:title" content="SPECDEST" />
      </Helmet>
      <main className="home-main">
        <Navbar rootClassName="navbar-root-class-name"></Navbar>
        <div className="section-container">
          <div className="home-max-width max-content-container">
            <div className="home-content-container">
              <h1 className="home-text">
                <span className="home-text01">Excellence,</span>
                <br className="home-text02"></br>
                <span className="home-text03">
                  Trustworthiness,
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br className="home-text04"></br>
                <span className="home-text05">&amp; Consistency</span>
                <br className="Heading1"></br>
                <br className="Heading1"></br>
                <br className="Heading1"></br>
                <br className="Heading1"></br>
                <br className="Heading1"></br>
                <br className="Heading1"></br>
                <br className="Heading1"></br>
                <br className="Heading1"></br>
              </h1>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link"
              >
                Contact us
              </a>
              <div className="home-features-container">
                <div className="home-feature">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon"
                  >
                    <path d="M733.714 419.429c0-9.714-3.429-19.429-10.286-26.286l-52-51.429c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-233.143 232.571-129.143-129.143c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-52 51.429c-6.857 6.857-10.286 16.571-10.286 26.286s3.429 18.857 10.286 25.714l206.857 206.857c6.857 6.857 16.571 10.857 25.714 10.857 9.714 0 19.429-4 26.286-10.857l310.286-310.286c6.857-6.857 10.286-16 10.286-25.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text14">
                    Team of experts in software development
                  </span>
                </div>
                <div className="home-feature1">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon02"
                  >
                    <path d="M733.714 419.429c0-9.714-3.429-19.429-10.286-26.286l-52-51.429c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-233.143 232.571-129.143-129.143c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-52 51.429c-6.857 6.857-10.286 16.571-10.286 26.286s3.429 18.857 10.286 25.714l206.857 206.857c6.857 6.857 16.571 10.857 25.714 10.857 9.714 0 19.429-4 26.286-10.857l310.286-310.286c6.857-6.857 10.286-16 10.286-25.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text15">
                    Simple and effective softwares
                  </span>
                </div>
                <div className="home-feature2">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon04"
                  >
                    <path d="M733.714 419.429c0-9.714-3.429-19.429-10.286-26.286l-52-51.429c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-233.143 232.571-129.143-129.143c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-52 51.429c-6.857 6.857-10.286 16.571-10.286 26.286s3.429 18.857 10.286 25.714l206.857 206.857c6.857 6.857 16.571 10.857 25.714 10.857 9.714 0 19.429-4 26.286-10.857l310.286-310.286c6.857-6.857 10.286-16 10.286-25.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text16">
                    <span>
                      Quick and high quality
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>solutions</span>
                    <span> </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="home-image-container">
              <img
                alt="image"
                src="/playground_assets/light-bulb-isolated-realistic-photo-image-d9wcde-removebg-preview-1200w.png"
                className="home-image"
              />
            </div>
          </div>
        </div>
        <div className="home-section-one section-container">
          <div className="home-max-width1 max-content-container">
            <h2 className="home-text20 Heading2">
              <span className="home-text21">
                Just tell us what you imagine 
              </span>
              <span>and</span>
              <br></br>
              <span> we will make them into reality</span>
            </h2>
            <div className="home-cards-container">
              <div className="home-card">
                <svg viewBox="0 0 1024 1024" className="home-icon06">
                  <path d="M896 704v-512c0-35.2-28.8-64-64-64h-640c-35.2 0-64 28.8-64 64v512h-128v192h1024v-192h-128zM640 832h-256v-64h256v64zM832 704h-640v-511.886c0.034-0.040 0.076-0.082 0.114-0.114h639.77c0.040 0.034 0.082 0.076 0.116 0.116v511.884z"></path>
                </svg>
                <h4 className="home-text25 Heading4">Software Development</h4>
                <div className="home-container1">
                  <span className="home-text26">
                    <span>
                      Whether you are a start-up or an established businesses,
                      we will be happy to provide support at any 
                    </span>
                    <span>
                      and every stage of the software development lifecycles.
                    </span>
                  </span>
                  <Link to="/contact" className="home-navlink">
                    Contact us
                  </Link>
                </div>
              </div>
              <div className="home-card1">
                <svg viewBox="0 0 1024 1024" className="home-icon08">
                  <path d="M192 470q-28 0-46-19t-18-45 18-45 46-19 46 19 18 45-18 45-46 19zM946 392q0 110-77 196t-187 100v166h128v84h-682v-212h-42v-172q0-18 12-30t30-12h128q18 0 30 12t12 30v172h-42v128h342v-168q-104-16-177-102t-73-192q0-124 88-212t212-88 211 88 87 212z"></path>
                </svg>
                <h4 className="home-text29 Heading4">IT Consulting</h4>
                <div className="home-container2">
                  <span className="home-text30 Content">
                    <span>
                      We offer digital consulting  services aimed at solving
                      specific business challenges throughout the  
                    </span>
                    <span>digital transformation of their  </span>
                    <span>services and processes.</span>
                  </span>
                  <Link to="/contact" className="home-navlink1">
                    Contact us
                  </Link>
                </div>
              </div>
              <div className="home-card2">
                <svg viewBox="0 0 1024 1024" className="home-icon10">
                  <path d="M800 330q54 82 54 182 0 140-101 241t-241 101v128l-170-172 170-170v128q106 0 181-75t75-181q0-60-30-120zM512 256q-106 0-181 75t-75 181q0 64 30 120l-62 62q-54-82-54-182 0-140 101-241t241-101v-128l170 172-170 170v-128z"></path>
                </svg>
                <h4 className="home-text34 Heading4">Test Automation</h4>
                <div className="home-container3">
                  <span className="home-text35">
                    <span className="Content">
                      Our company offers full-range test automation services to
                      help companies and businesses optimize testing 
                    </span>
                    <span className="Content">time </span>
                    <span className="Content">and save their costs. </span>
                    <br></br>
                  </span>
                  <Link to="/contact" className="home-navlink2">
                    Contact us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="software-development" className="section-container">
          <div className="home-max-width2 max-content-container">
            <img
              alt="image"
              src="/playground_assets/photo-1542382156909-9ae37b3f56fd-removebg-preview-500h.png"
              className="home-image1"
            />
            <div className="home-content-container1">
              <h1 className="home-text40 Heading2">
                <span>Full Stack Website Development Service.</span>
                <br className="home-text42"></br>
                <br className="home-text43"></br>
                <span className="home-text44">Let us hear your needs.</span>
              </h1>
              <span className="home-text45">
                <span className="home-text46">
                  Whether you are a start-up or an established businesses, we
                  will be happy to provide support at any and every stage of the
                  software development lifecycles from conceptualization,
                  business analysis and prototyping to the development and
                  deployment of a complete solution. With more than 10 years of
                  experience in the field, we offer wide range of website
                  development services including consulting, planning and
                  identifying improvement of existing websites by introducing
                  better connectivity with systems and adding a variety of
                  functions.
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br className="Content-Light"></br>
              </span>
            </div>
          </div>
        </div>
        <div id="consulting" className="home-section-three section-container">
          <div className="home-max-width3 max-content-container">
            <div className="home-content-container2">
              <h1 className="home-text49 Heading2">
                <span>The IT Consultancy Service.</span>
                <br></br>
                <br></br>
                <span className="home-text53">Consult with us anytime.</span>
              </h1>
              <span className="home-text54">
                We offer digital consulting services aimed at solving specific
                business challenges that the companies of different sizes and in
                different industries experience throughout the digital
                transformation of their services and processes.
              </span>
            </div>
            <img
              alt="image"
              src="/playground_assets/photo-1498335746477-0c73d7353a07-500w.jpeg"
              className="home-image2"
            />
          </div>
        </div>
        <div id="test-automation" className="home-section4 section-container">
          <div className="home-max-width4 max-content-container">
            <img
              alt="image"
              src="/playground_assets/photo-1532456745301-b2c645d8b80d-500w.jpeg"
              className="home-image3"
            />
            <div className="home-content-container3">
              <h1 className="home-text55 Heading2">
                <span>Test Automation Service.</span>
                <br className="home-text57"></br>
                <br className="home-text58"></br>
                <span className="home-text59">
                  Detect, Diagnose &amp; Save Time.
                </span>
              </h1>
              <span className="home-text60">
                <span>
                  Specdest offers full-range test automation services to help
                  companies optimize testing time and and save their costs. We
                  will help you to start building the most resilient end-to-end
                  tests by testing testing concerns, managing test data, and
                  tracking test results. 
                </span>
                <br className="Content-Light"></br>
              </span>
            </div>
          </div>
        </div>
        <div id="technology" className="home-section5 section-container">
          <div className="home-features">
            <h1 className="home-text63">
              <span>Our Technology</span>
              <br></br>
            </h1>
            <div className="home-container4">
              <FeatureCardLanguage rootClassName="feature-card-language-root-class-name2"></FeatureCardLanguage>
              <FeatureCardServer rootClassName="feature-card-server-root-class-name"></FeatureCardServer>
              <FeatureCardFramework1 rootClassName="feature-card-framework1-root-class-name"></FeatureCardFramework1>
            </div>
          </div>
        </div>
        <div className="home-section7 section-container">
          <div className="home-max-width5 max-content-container">
            <div className="home-content-container4">
              <h1 className="home-text66"> Get started today. </h1>
              <div className="home-input-container">
                <div className="home-container5 input">
                  <input
                    type="text"
                    placeholder="Your email"
                    className="home-textinput input"
                  />
                </div>
                <button className="home-button button-primary button">
                  Get started
                </button>
              </div>
              <OurServiceFooter rootClassName="our-service-footer-root-class-name"></OurServiceFooter>
            </div>
            <div className="home-image-container1">
              <img
                alt="image"
                src="/playground_assets/logo%20specdest%20white-600w.png"
                className="home-image4"
              />
            </div>
          </div>
        </div>
      </main>
      <Footer></Footer>
      <Copyright></Copyright>
    </div>
  )
}

export default Home
