import React from 'react'
// Import custom components
import Header from 'Components/Layout/Header'
import MainView from 'Components/MainView'
import SettingsModal from 'Components/SettingsModal'
// Import custom hooks
import { useSettings, useChat } from 'Hooks'
// Import style
import './style.css'

const Layout = () => {
  const {
    showSettingsModal,
    toggleSettingsModal,
    settings,
    onSettingsChange,
    onReset,
  } = useSettings()
  const { messages, onSendMessage, joiners, onUserNameChange } = useChat()

  return (
    <>
      <Header toggleSettingsModal={toggleSettingsModal} settings={settings} />
      <MainView
        settings={settings}
        messages={messages}
        onSendMessage={onSendMessage}
        joiners={joiners}
      />
      <SettingsModal
        showSettingsModal={showSettingsModal}
        toggleSettingsModal={toggleSettingsModal}
        settings={settings}
        onSettingsChange={onSettingsChange}
        onReset={onReset}
        onUserNameChange={onUserNameChange}
      />
    </>
  )
}

export default Layout
