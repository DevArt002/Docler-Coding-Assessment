import React, { useState } from 'react'
// Import custom components
import { ButtonInput, TextInput } from 'Components/Common'
// Import utils
import { getTime } from 'Utils'
// Import style
import './style.css'

const MessageBox = ({ onSendMessage: pushMessage, settings }) => {
  const [message, setMessage] = useState('')

  // When user types on message input box.
  const onMsgBoxChange = (e) => {
    setMessage(e.target.value)
  }

  // When user clicks shortcut for sending message
  const onMsgBoxKeyDown = (e) => {
    if (
      ((e.key === 'Enter' && e.ctrlKey) || (e.key === 'Enter' && e.metaKey)) &&
      settings.short_cut.value === 1
    ) {
      e.preventDefault()
      onSendMessage()
    }
  }

  // Send message
  const onSendMessage = () => {
    if (!message) return

    pushMessage({
      sender_name: settings.user_name,
      sender_short_name: settings.short_name,
      body: {
        content: message,
        time: getTime(new Date()),
      },
    })
    setMessage('')
  }

  return (
    <div className="message-box">
      <TextInput
        id="message_input"
        name="message_input"
        value={message}
        placeholder="Enter a message"
        multiLine={true}
        onChange={onMsgBoxChange}
        onKeyDown={onMsgBoxKeyDown}
      />
      <ButtonInput
        id="send_btn"
        name="send_btn"
        label="Send"
        transparent={false}
        onClick={onSendMessage}
      />
    </div>
  )
}

export default MessageBox
