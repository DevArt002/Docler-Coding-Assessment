import React, { useState } from 'react'
// Import custom components
import { CircleAvatar } from 'Components/Common'
// Import utils
import { validURL } from 'Utils'
// Import style
import './style.css'

const MessageLogItem = ({ time, senderName, senderShortName, message, fromMe, reference }) => {
  const [imgErr, setImgErr] = useState(false)

  return (
    <div className={fromMe ? 'message-log-item right-align' : 'message-log-item'} ref={reference}>
      {!fromMe && (
        <CircleAvatar
          id="message_log_item_user_avatar"
          name="message_log_item_user_avatar"
          shortName={senderShortName}
          small={true}
        />
      )}
      <div className="message-content">
        <p className="time">{`${fromMe ? 'Me' : senderName}, ${time}`}</p>
        {validURL(message) && !imgErr ? (
          <img className="message image" src={message} alt="" onError={() => setImgErr(true)} />
        ) : (
          <p
            className="message"
            dangerouslySetInnerHTML={{ __html: message.replace(/\n\r?/g, '<br />') }}
          ></p>
        )}
      </div>
    </div>
  )
}

export default MessageLogItem
