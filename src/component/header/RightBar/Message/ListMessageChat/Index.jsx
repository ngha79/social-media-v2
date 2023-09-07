import React from 'react'
import MessageChat from './MessageChat/Index'

const ListMessageChat = ({ handleSetOpenChat }) => {
  return (
    <div className="min-h-[400px] flex flex-col">
      <MessageChat handleSetOpenChat={handleSetOpenChat} />
      <MessageChat handleSetOpenChat={handleSetOpenChat} />
      <MessageChat handleSetOpenChat={handleSetOpenChat} />
      <MessageChat handleSetOpenChat={handleSetOpenChat} />
      <MessageChat handleSetOpenChat={handleSetOpenChat} />
      <MessageChat handleSetOpenChat={handleSetOpenChat} />
      <MessageChat handleSetOpenChat={handleSetOpenChat} />
      <MessageChat handleSetOpenChat={handleSetOpenChat} />
      <MessageChat handleSetOpenChat={handleSetOpenChat} />
      <MessageChat handleSetOpenChat={handleSetOpenChat} />
      <MessageChat handleSetOpenChat={handleSetOpenChat} />
      <MessageChat handleSetOpenChat={handleSetOpenChat} />
    </div>
  )
}

export default ListMessageChat
