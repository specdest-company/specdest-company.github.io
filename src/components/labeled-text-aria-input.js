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
        {props.isRequired && (<label htmlFor="input" className="labeled-text-aria-input-required">
          必須
        </label>)}
      </div>
      <textarea
        value={props.value}
        onChange={props.onChange}
        name={props.name}
        id="textArea"
        rows="6"
        placeholder={props.textarea_placeholder}
        className="labeled-text-aria-input-textarea textarea"
      ></textarea>
      {props.errorString ? <span className='labeled-text-aria-error'>{props.errorString}</span> : null}
    </div>
  )
}

LabeledTextAriaInput.defaultProps = {
  isRequired: false,
  textarea_placeholder:
    '聞きたいことや、電話発信について相談したいことをご入力ください。',
  Label: 'お問い合わせ内容',
}

LabeledTextAriaInput.propTypes = {
  isRequired: PropTypes.bool,
  textarea_placeholder: PropTypes.string,
  Label: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  errorString: PropTypes.string,
  onChange: PropTypes.func.isRequired,
}

export default LabeledTextAriaInput
