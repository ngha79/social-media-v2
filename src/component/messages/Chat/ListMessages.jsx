import React, { useEffect, useRef, useState } from 'react'
import Message from './Message'
import { useDispatch, useSelector } from 'react-redux'
import {
  getMessageByConversation,
  getMessageByConversationScroll,
} from '../../../store/conversation/conversationSlice'
import Loading from '../../Loading'

const ListMessages = ({ conversationId, page, handleSetPage }) => {
  const { messageConversation, currentPage } = useSelector(
    (state) => state.conversation
  )
  const { user } = useSelector((state) => state.auth)
  const scroll = useRef()
  const scrollBottom = useRef()
  const dispatch = useDispatch()
  useEffect(() => {
    scrollBottom.current?.scrollIntoView({ behavior: 'smooth', block: 'end' })
  }, [messageConversation])

  const onScroll = () => {
    if (scroll.current) {
      const { scrollTop } = scroll.current
      if (scrollTop === 0) {
        handleSetPage()
      }
    }
  }
  useEffect(() => {
    if (conversationId) {
      if (page) {
        dispatch(
          getMessageByConversationScroll({
            conversationId,
            page: currentPage + 1,
          })
        )
      } else {
        dispatch(
          getMessageByConversation({
            conversationId,
            page: 1,
          })
        )
      }
    }
  }, [page, conversationId])
  return (
    <div
      className="overflow-y-scroll h-[calc(100vh-195.5px)]"
      ref={scroll}
      onScroll={onScroll}
    >
      <div className="flex flex-col gap-y-4 justify-end relative pt-20">
        {!!messageConversation?.length &&
          messageConversation?.map((message) => (
            <Message
              message={message}
              key={message?._id}
              type={
                user?._id === message?.userSendId?._id ? 'send' : 'receiver'
              }
            />
          ))}
        <div ref={scrollBottom}></div>
      </div>
    </div>
  )
}

export default ListMessages
