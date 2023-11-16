import React, { useState } from 'react'
import HeaderChat from './HeaderChat'
import CreateMessage from './CreateMessage'
import ListMessages from './ListMessages'
import InfoChat from './InfoChat'
import { useSelector } from 'react-redux'

const Chat = ({
  handleSetCloseChat,
  openChat,
  conversationId,
  handleSetPage,
  page,
}) => {
  const { conversation } = useSelector((state) => state.conversation)
  const { user } = useSelector((state) => state.auth)
  const [more, setMore] = useState(false)
  const handleInfo = () => {
    setMore(!more)
  }

  const currentConversation = conversation?.find(
    (conver) => conver?._id === conversationId
  )
  const nameConversation =
    currentConversation?.type === 'group'
      ? currentConversation?.nameConversation
      : currentConversation?.memberConversation?.find(
          (member) => member._id !== user._id
        )?.name
  const avatarConversation =
    currentConversation?.type === 'group'
      ? currentConversation?.avatarConversation
      : currentConversation?.memberConversation?.find(
          (member) => member._id !== user._id
        )?.avatar
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
          conversationId={currentConversation?._id}
          name={nameConversation}
          avatar={avatarConversation}
          memberConversation={currentConversation?.memberConversation}
          type={currentConversation?.type}
        />
        <ListMessages
          conversationId={currentConversation?._id}
          handleSetPage={handleSetPage}
          page={page}
        />
        <CreateMessage conversation={currentConversation} />
      </div>
      {more && (
        <InfoChat
          handleInfo={handleInfo}
          conversationId={currentConversation?._id}
          handleSetCloseChat={handleSetCloseChat}
          member={currentConversation?.memberConversation}
          type={currentConversation?.type}
          leaderId={currentConversation?.leaderConversation}
          name={nameConversation}
          avatar={avatarConversation}
        />
      )}
    </div>
  )
}

export default Chat
