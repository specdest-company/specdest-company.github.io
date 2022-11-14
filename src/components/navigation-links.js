import React from 'react'

import PropTypes from 'prop-types'

import './navigation-links.css'

const NavigationLinks = (props) => {
  return (
    <nav className={`navigation-links-nav ${props.rootClassName} `}>
      <div className="navigation-links-container">
        <a
          href="https://specdest.com/#consulting"
          className="navigation-links-link navbar-link"
        >
          {props.text}
        </a>
      </div>
      <div className="navigation-links-container1">
        <a
          href="https://specdest.com/#software-development"
          className="navigation-links-link1 navbar-link"
        >
          {props.text1}
        </a>
      </div>
      <div className="navigation-links-container2">
        <a
          href="https://specdest.com/#test-automation"
          className="navigation-links-link2 navbar-link"
        >
          {props.text2}
        </a>
      </div>
      <div className="navigation-links-container3">
        <a
          href="https://specdest.com/#technology"
          className="navigation-links-link3 navbar-link"
        >
          {props.text3}
        </a>
      </div>
    </nav>
  )
}

NavigationLinks.defaultProps = {
  text2: 'Test Automation',
  text3: 'Technology',
  rootClassName: '',
  text: 'IT Consultancy',
  text1: 'Software Development',
}

NavigationLinks.propTypes = {
  text2: PropTypes.string,
  text3: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
}

export default NavigationLinks
