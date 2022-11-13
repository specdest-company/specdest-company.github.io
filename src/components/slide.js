import React from 'react'

import PropTypes from 'prop-types'

import './slide.css'

const Slide = (props) => {
  return (
    <div
      data-type="slide"
      className={`slide-slide slide ${props.rootClassName} `}
    >
      <div className="slide-max-width max-content-container">
        <div className="slide-left-side">
          <div className="slide-decorations-container">
            <img
              alt="image"
              src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
              className="slide-dots"
            />
            <div className="slide-squares-container">
              <div className="slide-light-green"></div>
              <div className="slide-orange"></div>
            </div>
          </div>
          <div className="slide-image-container">
            <img
              alt={props.image_alt}
              src={props.image_src}
              className="slide-image"
            />
            <div className="slide-slider-controls">
              <div data-action="previousSlide" className="slide-go-left">
                <svg viewBox="0 0 1024 1024" className="slide-icon">
                  <path d="M854 470v84h-520l238 240-60 60-342-342 342-342 60 60-238 240h520z"></path>
                </svg>
              </div>
              <div data-action="nextSlide" className="slide-go-right">
                <svg viewBox="0 0 1024 1024" className="slide-icon2">
                  <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="slide-right-side">
          <span className="slide-testimonial">{props.Testimonial}</span>
          <span className="slide-author">{props.Author}</span>
          <span className="slide-role">{props.Role}</span>
        </div>
      </div>
    </div>
  )
}

Slide.defaultProps = {
  Author: 'Elisabeth Brooke',
  Testimonial:
    '“Love it! I really like the user interface. The sleek aesthetic of the software makes it easy and pleasant to use. I am also a big fan of the way I can customize and organize different feeds and mail sources.”',
  rootClassName: '',
  image_src:
    'https://images.unsplash.com/photo-1606337321936-02d1b1a4d5ef?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDR8fGVuZ2luZXxlbnwwfHx8fDE2Njc5NzA1Mjg&ixlib=rb-4.0.3&w=700',
  image_alt: 'image',
  Role: 'Finance Broker',
}

Slide.propTypes = {
  Author: PropTypes.string,
  Testimonial: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  Role: PropTypes.string,
}

export default Slide
