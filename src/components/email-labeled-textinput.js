import React from 'react'

import PropTypes from 'prop-types'

import './email-labeled-textinput.css'

const EmailLabeledTextinput = (props) => {
  return (
    <div className="email-labeled-textinput-container">
      <div className="email-labeled-textinput-container1">
        <label htmlFor="input" className="email-labeled-textinput-label">
          {props.Label}
        </label>
        <label htmlFor="input" className="email-labeled-textinput-required">
          {props.required}
        </label>
      </div>
      <input
        type="text"
        id="input"
        placeholder={props.textinput_placeholder}
        className="email-labeled-textinput-textinput input"
      />
    </div>
  )
}

EmailLabeledTextinput.defaultProps = {
  Label: 'メールアドレス',
  textinput_placeholder: '例）info@specdest.com',
  required: '必須',
}

EmailLabeledTextinput.propTypes = {
  Label: PropTypes.string,
  textinput_placeholder: PropTypes.string,
  required: PropTypes.string,
}

export default EmailLabeledTextinput
