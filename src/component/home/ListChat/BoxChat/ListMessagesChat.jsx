import React, { useEffect, useRef, useState } from 'react'
import Message from '../../../messages/Chat/Message'
import { useDispatch, useSelector } from 'react-redux'
import { getMessageByConversationPopup } from '../../../../store/conversation/conversationSlice'

const ListMessagesChat = ({ messages, conversationId }) => {
  const { user } = useSelector((state) => state.auth)
  const [page, setPage] = useState(0)
  const scroll = useRef()
  const scrollBottom = useRef()
  const dispatch = useDispatch()
  useEffect(() => {
    scrollBottom.current?.scrollIntoView({ behavior: 'smooth', block: 'end' })
  }, [messages])
  const onScroll = () => {
    if (scroll.current) {
      const { scrollTop } = scroll.current
      if (scrollTop === 0) {
        setPage(page + 1)
      }
    }
  }
  useEffect(() => {
    if (page) {
      dispatch(
        getMessageByConversationPopup({
          conversationId: conversationId,
          page: Math.ceil(messages?.length / 20) + 1,
        })
      )
    }
  }, [page])
  return (
    <div
      className="overflow-y-scroll flex-1 h-full"
      ref={scroll}
      onScroll={onScroll}
    >
      <div className="flex flex-col gap-y-4 justify-end relative">
        {messages?.map((message) =>
          message?.userSendId?._id === user?._id ? (
            <Message
              type={'send'}
              key={message?._id}
              message={message}
            />
          ) : (
            <Message
              type={'receiver'}
              message={message}
              key={message?._id}
            />
          )
        )}
        <div ref={scrollBottom}></div>
      </div>
    </div>
  )
}

export default ListMessagesChat
