import React from 'react'
import { BsEmojiSmile, BsReplyFill, BsThreeDotsVertical } from 'react-icons/bs'
import SettingMessage from './SettingMessage'
import Message from './Message'

const ListMessages = () => {
  return (
    <div className="overflow-y-scroll h-[calc(100vh-195.5px)]">
      <div className="flex flex-col gap-y-4 justify-end relative">
        <Message type={'send'} />
        <Message type={'receiver'} />
        <Message type={'receiver'} />
        <Message type={'receiver'} />
        <Message type={'send'} />
        <Message type={'send'} />
        <Message type={'send'} />
      </div>
    </div>
  )
}

export default ListMessages
