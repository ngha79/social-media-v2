import React, { useState } from 'react'
import HeaderChat from './HeaderChat'
import CreateMessage from './CreateMessage'
import ListMessages from './ListMessages'
import InfoChat from './InfoChat'
import { useSelector } from 'react-redux'

const NewChat = ({
  handleSetCloseChat,
  openChat,
  userChat,
  handleSetPage,
  page,
}) => {
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
          name={userChat?.name}
          avatar={userChat?.avatar}
        />
        <ListMessages
          handleSetPage={handleSetPage}
          page={page}
        />

        <CreateMessage userChat={userChat} />
      </div>
      {more && (
        <InfoChat
          handleInfo={handleInfo}
          handleSetCloseChat={handleSetCloseChat}
          type={'single'}
          name={userChat?.name}
          avatar={userChat?.avatar}
        />
      )}
    </div>
  )
}

export default NewChat
