import React from 'react'

import PropTypes from 'prop-types'

import './feature-card-framework1.css'

const FeatureCardFramework1 = (props) => {
  return (
    <div
      className={`feature-card-framework1-feature-card ${props.rootClassName} `}
    >
      <img
        src={props.image_src1}
        alt="image"
        className="feature-card-framework1-image"
      />
      <h2 className="feature-card-framework1-text">{props.title}</h2>
      <span className="feature-card-framework1-text1">{props.description}</span>
    </div>
  )
}

FeatureCardFramework1.defaultProps = {
  title: 'Javascript frameworks',
  rootClassName: '',
  image_src1: '/playground_assets/1_1-200h.png',
  description:
    'Frameworks are the structural foundation with a particular context that can help to create web applications within their context. JavaScript frameworks such as React, Vue.js or Angular are a collection of libraries containing  codes written in Javascript which can make it lot easier to develop softwares.',
}

FeatureCardFramework1.propTypes = {
  title: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src1: PropTypes.string,
  description: PropTypes.string,
}

export default FeatureCardFramework1
