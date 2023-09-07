import React, { useState } from 'react'
import HeaderChat from './HeaderChat'
import CreateMessage from './CreateMessage'
import ListMessages from './ListMessages'
import InfoChat from './InfoChat'

const Chat = ({ handleSetCloseChat, openChat }) => {
  const [more, setMore] = useState(false)
  const handleInfo = () => {
    setMore(!more)
  }
  return (
    <div
      className={`w-full ${
        openChat ? 'flex' : 'hidden'
      } min-[900px]:flex bg-white dark:bg-dark-nav h-[calc(100vh-58px)] overflow-hidden min-[900px]:max-w-[calc(100vw-360px)]`}
    >
      <div className="w-full border-r border-gray-200 dark:border-dark-icon-story-hover flex flex-col">
        <HeaderChat
          handleInfo={handleInfo}
          handleSetCloseChat={handleSetCloseChat}
        />
        <ListMessages />
        <CreateMessage />
      </div>
      {more && <InfoChat handleInfo={handleInfo} />}
    </div>
  )
}

export default Chat
