import React from 'react'
// Import style
import './style.css'

const TextInput = ({ id, name, value, placeholder, multiLine, onChange, onKeyDown }) => {
  return multiLine ? (
    <textarea
      className="text-input multi"
      id={id}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  ) : (
    <input
      type="text"
      className="text-input mono"
      id={id}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  )
}

export default TextInput
