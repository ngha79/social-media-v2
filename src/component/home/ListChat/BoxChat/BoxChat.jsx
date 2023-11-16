import React, { useEffect } from 'react'
import HeaderBoxChat from './HeaderBoxChat'
import ListMessagesChat from './ListMessagesChat'
import FormCreateMessage from './FormCreateMessage'
import { useDispatch } from 'react-redux'
import { getMessageByConversationPopup } from '../../../../store/conversation/conversationSlice'

const BoxChat = ({ chat }) => {
  const dispatch = useDispatch()
  useEffect(() => {
    if (!chat?.messages) {
      dispatch(
        getMessageByConversationPopup({
          conversationId: chat?._id,
          page: 1,
          limit: 20,
        })
      )
    }
  }, [chat])
  return (
    <div className="bg-white dark:bg-dark-nav shadow-lg rounded-md w-80 h-[450px] flex flex-col">
      <HeaderBoxChat chat={chat} />
      <ListMessagesChat
        messages={chat?.messages}
        conversationId={chat?._id}
      />
      <FormCreateMessage conversation={chat} />
    </div>
  )
}

export default BoxChat
