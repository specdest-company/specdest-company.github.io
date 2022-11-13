import React from 'react'

import PropTypes from 'prop-types'

import './labeled-text-aria-input.css'

const LabeledTextAriaInput = (props) => {
  return (
    <div className="labeled-text-aria-input-container">
      <div className="labeled-text-aria-input-container1">
        <label htmlFor="textArea" className="labeled-text-aria-input-label">
          {props.Label}
        </label>
        <label htmlFor="input" className="labeled-text-aria-input-required">
          必須
        </label>
      </div>
      <textarea
        id="textArea"
        rows="6"
        placeholder={props.textarea_placeholder}
        className="labeled-text-aria-input-textarea textarea"
      ></textarea>
    </div>
  )
}

LabeledTextAriaInput.defaultProps = {
  required: '必須',
  textarea_placeholder:
    '聞きたいことや、電話発信について相談したいことをご入力ください。',
  Label: 'お問い合わせ内容',
}

LabeledTextAriaInput.propTypes = {
  required: PropTypes.string,
  textarea_placeholder: PropTypes.string,
  Label: PropTypes.string,
}

export default LabeledTextAriaInput
