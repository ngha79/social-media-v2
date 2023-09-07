import React, { useState } from 'react'
import ListChat from '../component/messages/ListChat/ListChat'
import Chat from '../component/messages/Chat/Chat'

const Messages = () => {
  const [openChat, setOpenChat] = useState(false)
  const handleSetOpenChat = () => {
    setOpenChat(true)
  }
  const handleSetCloseChat = () => {
    setOpenChat(false)
  }
  return (
    <div className="relative h-full w-full">
      <div className="flex w-full">
        <ListChat
          handleSetOpenChat={handleSetOpenChat}
          openChat={openChat}
        />
        {openChat ? (
          <Chat
            handleSetCloseChat={handleSetCloseChat}
            openChat={openChat}
          />
        ) : (
          <div className="w-full hidden  min-[900px]:flex bg-white dark:bg-dark-nav h-[calc(100vh-58px)] overflow-hidden min-[900px]:max-w-[calc(100vw-360px)]">
            <div className="w-full h-full flex text-2xl font-semibold justify-center items-center">
              Chọn cuộc hội thoại để nhắn tin
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Messages
