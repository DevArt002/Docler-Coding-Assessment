import React from 'react'
// Import custom components
import { ButtonInput, CircleAvatar } from 'Components/Common'
// Import style
import './style.css'

const Header = ({ toggleSettingsModal, settings }) => {
  return (
    <div className="header">
      <CircleAvatar
        id="header_user_avatar"
        name="header_user_avatar"
        shortName={settings ? settings.short_name : ''}
        small={false}
      />
      <p className="app-name-label">Message</p>
      <ButtonInput
        id="settings_btn"
        name="settings-btn"
        label="Settings"
        transparent={true}
        onClick={toggleSettingsModal}
      />
    </div>
  )
}

export default Header
