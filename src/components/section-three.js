import React from 'react'

import PropTypes from 'prop-types'

import './section-three.css'

const SectionThree = (props) => {
  return (
    <div className="section-three-section-three section-container">
      <div className="section-three-max-width max-content-container">
        <div className="section-three-content-container">
          <h1 className="section-three-text Heading2">
            <span>The best IT consultancy service.</span>
            <br></br>
            <br></br>
            <span className="section-three-text4">
              Consult with us anytime.
            </span>
          </h1>
          <span className="section-three-text5">{props.text}</span>
        </div>
        <div className="section-three-image-container">
          <img
            alt={props.image_alt}
            src={props.image_src}
            className="section-three-image"
          />
        </div>
      </div>
    </div>
  )
}

SectionThree.defaultProps = {
  image_src:
    'https://images.unsplash.com/photo-1470137237906-d8a4f71e1966?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIyfHxpZGVhfGVufDB8fHx8MTY2Nzk2OTQyOA&ixlib=rb-4.0.3&h=700',
  text: 'We offer digital consulting services aimed at solving specific business challenges that the companies of different sizes and in different industries experience throughout the digital transformation of their services and processes.',
  image_alt: 'image',
}

SectionThree.propTypes = {
  image_src: PropTypes.string,
  text: PropTypes.string,
  image_alt: PropTypes.string,
}

export default SectionThree
