import React, { useEffect, useRef } from 'react'
// Import custom components
import MessageLogItem from 'Components/MessageLogItem'
// Import style
import './style.css'

const MessageLog = ({ messages, settings, joiners }) => {
  const lastMessage = useRef()

  // Scroll to bottom of chat log view
  useEffect(() => {
    if (lastMessage.current) lastMessage.current.scrollIntoView()
  }, [messages])

  return (
    <div className="message-log">
      {messages.map((message, index) => {
        return (
          <MessageLogItem
            time={settings.time_type.value === 1 ? message.time[0] : message.time[1]}
            senderName={joiners[message.id].name}
            senderShortName={joiners[message.id].short_name}
            message={message.content}
            fromMe={message.from_me}
            key={`message-${index}`}
            reference={index === messages.length - 1 ? lastMessage : null}
          />
        )
      })}
    </div>
  )
}

export default MessageLog
