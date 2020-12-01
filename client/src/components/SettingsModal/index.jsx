import React from 'react'
// Import custom components
import { RadioInputGroup, TextInput } from 'Components/Common'
// Import style
import './style.css'
// Import constants
import INITIAL_SETTINGS_DATA from 'Constants'

const SettingsModal = ({
  showSettingsModal,
  toggleSettingsModal,
  settings,
  onSettingsChange,
  onReset,
  onUserNameChange,
}) => {
  return (
    <div className={showSettingsModal ? 'settings-modal' : 'settings-modal hide'}>
      <div className="overlay"></div>
      <div className="content">
        <span className="close" onClick={toggleSettingsModal}>
          X
        </span>
        <p>Your name</p>
        <TextInput
          id="settings_modal_user_name"
          name="settings_modal_user_name"
          value={settings ? settings.user_name : ''}
          placeholder="Enter your name"
          label="Your name"
          multiLine={false}
          onChange={(e) => {
            onSettingsChange('user_name', e.target.value)
            onUserNameChange(e.target.value)
          }}
        />
        <p>Clock display</p>
        <RadioInputGroup
          id="settings_modal_time_type"
          name="settings_modal_time_type"
          options={settings ? settings.time_type.options : []}
          value={settings ? settings.time_type.value : ''}
          onChange={(e) => onSettingsChange('time_type', e.target.value)}
        />
        <p>Send messages on Ctrl/Cmd+Enter</p>
        <RadioInputGroup
          id="settings_modal_short_cut"
          name="settings_modal_short_cut"
          options={settings ? settings.short_cut.options : []}
          value={settings ? settings.short_cut.value : ''}
          onChange={(e) => onSettingsChange('short_cut', e.target.value)}
        />
        <span
          className="reset"
          onClick={() => {
            onReset()
            onUserNameChange(INITIAL_SETTINGS_DATA.user_name)
          }}
        >
          Reset to default?
        </span>
      </div>
    </div>
  )
}

export default SettingsModal
