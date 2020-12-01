import { useEffect, useRef, useState } from 'react'
import socketIOClient from 'socket.io-client'
// Import utils
import { getShortName } from 'Utils'
// Import configuration
import CONFIGURATION from 'Config'

const useChat = () => {
  const [joiners, setJoiners] = useState({})
  const [messages, setMessages] = useState([])
  const socketRef = useRef()

  // When page loaded, connect to socket server
  useEffect(() => {
    socketRef.current = socketIOClient(CONFIGURATION.socket_host)

    // Listener for new message
    socketRef.current.on('newMessage', (data) => {
      let fromMe = false

      if (data.id === socketRef.current.id) fromMe = true

      updateJoiners(data.id, data.sender_name, data.sender_short_name)
      setMessages((currentMessages) => [
        ...currentMessages,
        { ...data.body, from_me: fromMe, id: data.id },
      ])
    })

    // Listener for user name change
    socketRef.current.on('userNameChange', (data) => {
      updateJoiners(data.id, data.name, data.short_name)
    })

    return () => {
      socketRef.current.disconnect()
    }
  }, [])

  // Send message
  const onSendMessage = (data) => {
    socketRef.current.emit('newMessage', { ...data, id: socketRef.current.id })
  }

  // Change username
  const onUserNameChange = (name) => {
    socketRef.current.emit('userNameChange', {
      name,
      short_name: getShortName(name),
      id: socketRef.current.id,
    })
  }

  // Update joiners
  const updateJoiners = (id, name, short_name) => {
    setJoiners((currentJoiners) => {
      return {
        ...currentJoiners,
        [id]: { name, short_name },
      }
    })
  }

  return { messages, onSendMessage, joiners, onUserNameChange }
}

export default useChat
