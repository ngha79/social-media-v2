import React from 'react'
import Message from '../../../messages/Chat/Message'

const ListMessagesChat = () => {
  return (
    <div className="overflow-y-scroll h-[calc(100vh-195.5px)]">
      <div className="flex flex-col gap-y-4 justify-end relative">
        <Message type={'send'} />
        <Message type={'receiver'} />
        <Message type={'receiver'} />
        <Message type={'send'} />
      </div>
    </div>
  )
}

export default ListMessagesChat
