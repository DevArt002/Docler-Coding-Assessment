import React from 'react'
// Import style
import './style.css'

const CircleAvatar = ({ id, name, shortName, small }) => {
  return (
    <div className={small ? 'circle-avatar small-avt' : 'circle-avatar'} id={id} name={name}>
      <label>{shortName}</label>
      {!small && <span></span>}
    </div>
  )
}

export default CircleAvatar
