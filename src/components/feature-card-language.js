import React from 'react'

import PropTypes from 'prop-types'

import './feature-card-language.css'

const FeatureCardLanguage = (props) => {
  return (
    <div
      className={`feature-card-language-feature-card ${props.rootClassName} `}
    >
      <img
        src={props.image_src1}
        alt="image"
        className="feature-card-language-image"
      />
      <h2 className="feature-card-language-text">{props.title}</h2>
      <span className="feature-card-language-text1">{props.description}</span>
    </div>
  )
}

FeatureCardLanguage.defaultProps = {
  image_src1: '/playground_assets/1_1-200h.png',
  description:
    'We use Javascript as it is used by all web browsers and smoothly paired with many modern frameworks and libraries that can perfectly fit with technology solutions to modern business challenges.',
  rootClassName: '',
  title: 'Javascript',
}

FeatureCardLanguage.propTypes = {
  image_src1: PropTypes.string,
  description: PropTypes.string,
  rootClassName: PropTypes.string,
  title: PropTypes.string,
}

export default FeatureCardLanguage
