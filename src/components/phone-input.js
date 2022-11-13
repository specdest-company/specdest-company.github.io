import React from 'react'

import PropTypes from 'prop-types'

import './phone-input.css'

const PhoneInput = (props) => {
  return (
    <div className="phone-input-container">
      <div className="phone-input-container1">
        <label htmlFor="input" className="phone-input-label">
          {props.Label}
        </label>
        <label htmlFor="input" className="phone-input-required">
          必須
        </label>
      </div>
      <input
        type="text"
        id="input"
        placeholder={props.textinput_placeholder}
        className="phone-input-textinput input"
      />
    </div>
  )
}

PhoneInput.defaultProps = {
  Label: '電話番号',
  textinput_placeholder: '例）000-1234-5678',
}

PhoneInput.propTypes = {
  Label: PropTypes.string,
  textinput_placeholder: PropTypes.string,
}

export default PhoneInput
