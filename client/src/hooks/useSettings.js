import { useEffect, useState } from 'react'
// Import utils
import { getShortName } from 'Utils'
// Import constants
import INITIAL_SETTINGS_DATA from 'Constants'

const useSettings = () => {
  const [showSettingsModal, setShowSettingsModal] = useState(false)
  const [settings, setSettings] = useState(null)

  // When page loaded, initialize settings
  useEffect(() => {
    init()
  }, [])

  // Initialize settings
  const init = () => {
    const localSettings = localStorage.getItem('settings')
    const initialSettings =
      localSettings === null ? INITIAL_SETTINGS_DATA : JSON.parse(localSettings)

    updateSettings(initialSettings)
  }

  // Reset settings to default
  const onReset = () => {
    updateSettings(INITIAL_SETTINGS_DATA)
  }

  // Toggle setting modal view
  const toggleSettingsModal = () => {
    setShowSettingsModal(!showSettingsModal)
  }

  // Listener for settings change by user
  const onSettingsChange = (key, val) => {
    const newSettings = JSON.parse(JSON.stringify(settings))

    // If clock and shortcut settings have been changed
    if (typeof newSettings[key] === 'object') newSettings[key].value = parseInt(val)
    // If user name has been changed
    else {
      newSettings[key] = val
      newSettings.short_name = getShortName(val)
    }

    updateSettings(newSettings)
  }

  // Update settings on localstorage and state
  const updateSettings = (json) => {
    localStorage.setItem('settings', JSON.stringify(json))
    setSettings(json)
  }

  return {
    showSettingsModal,
    toggleSettingsModal,
    settings,
    onSettingsChange,
    onReset,
  }
}

export default useSettings
