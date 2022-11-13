import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './labeled-text-input.css'

const LabeledTextInput = (props) => {
  const [isRequired, setIsRequired] = useState(true)
  return (
    <div className="labeled-text-input-container">
      <div className="labeled-text-input-container1">
        <label htmlFor="input" className="labeled-text-input-label">
          {props.text}
        </label>
        {isRequired && (
          <label htmlFor="input" className="labeled-text-input-required">
            必須
          </label>
        )}
      </div>
      <input
        type="text"
        id="input"
        placeholder={props.textinput_placeholder}
        className="labeled-text-input-textinput input"
      />
    </div>
  )
}

LabeledTextInput.defaultProps = {
  textinput_placeholder: 'placeholder',
  text: 'Label',
}

LabeledTextInput.propTypes = {
  textinput_placeholder: PropTypes.string,
  text: PropTypes.string,
}

export default LabeledTextInput
