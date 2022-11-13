import React from 'react'

import PropTypes from 'prop-types'

import './feature-card-language.css'

const FeatureCardLanguage = (props) => {
  return (
    <div
      className={`feature-card-language-feature-card ${props.rootClassName} `}
    >
      <img
        alt={props.image_alt1}
        src={props.image_src1}
        className="feature-card-language-image"
      />
      <h2 className="feature-card-language-text">{props.title}</h2>
      <span className="feature-card-language-text1">{props.description}</span>
    </div>
  )
}

FeatureCardLanguage.defaultProps = {
  image_src1:
    '/playground_assets/b59a78e2ed76c705f3c0dcb300f3f222aefdcd99-200h.png',
  description:
    'We use Javascript as it is used by all web browsers and smoothly paired with many modern frameworks and libraries that can perfectly fit with technology solutions to modern business challenges.',
  image_alt1: 'image',
  rootClassName: '',
  title: 'Javascript',
}

FeatureCardLanguage.propTypes = {
  image_src1: PropTypes.string,
  description: PropTypes.string,
  image_alt1: PropTypes.string,
  rootClassName: PropTypes.string,
  title: PropTypes.string,
}

export default FeatureCardLanguage
