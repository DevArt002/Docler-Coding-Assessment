import React from 'react'
// Import custom components
import MessageBox from 'Components/MessageBox'
import MessageLog from 'Components/MessageLog'
// Import style
import './style.css'

const MainView = ({ settings, messages, onSendMessage, joiners }) => {
  return (
    <div className="main-view">
      <MessageLog messages={messages} settings={settings} joiners={joiners} />
      <MessageBox onSendMessage={onSendMessage} settings={settings} />
    </div>
  )
}

export default MainView
