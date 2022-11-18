import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './labeled-text-input.css'

const LabeledTextInput = (props) => {
  return (
    <div className="labeled-text-input-container">
      <div className="labeled-text-input-container1">
        <label htmlFor="input" className="labeled-text-input-label">
          {props.text}
        </label>
        {props.isRequired && (
          <label htmlFor="input" className="labeled-text-input-required">
            必須
          </label>
        )}
      </div>
      <input
        value={props.value}
        onChange={props.onChange}
        name={props.name}
        type="text"
        id="input"
        placeholder={props.textinput_placeholder}
        className="labeled-text-input-textinput input"
      />
      {props.errorString ? <span className='labeled-test-error'>{props.errorString}</span> : null}
    </div>
  )
}

LabeledTextInput.defaultProps = {
  textinput_placeholder: 'placeholder',
  text: 'Label',
  isRequired: false
}

LabeledTextInput.propTypes = {
  textinput_placeholder: PropTypes.string,
  text: PropTypes.string,
  isRequired: PropTypes.bool,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  errorString: PropTypes.string,
  onChange: PropTypes.func.isRequired,
}

export default LabeledTextInput
