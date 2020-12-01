import React from 'react'
// Import style
import './style.css'

const ButtonInput = ({ id, name, label, transparent, onClick }) => {
  return (
    <div
      className={transparent ? 'button-input transparent' : 'button-input'}
      id={id}
      name={name}
      onClick={onClick}
    >
      <label>{label}</label>
    </div>
  )
}

export default ButtonInput
