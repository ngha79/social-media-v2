import React, { useEffect, useRef } from 'react'
import FriendChat from './FriendChat'
import { useDispatch, useSelector } from 'react-redux'
import {
  getConversationGroupPage,
  getMessageByConversation,
} from '../../../store/conversation/conversationSlice'
import MessageChat from '../../../component/header/RightBar/Message/ListMessageChat/MessageChat/Index'

const ListGroupsChat = ({ handleSetOpenChat }) => {
  const { conversationGroup } = useSelector((state) => state.conversation)
  const { user } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const handleGetMessage = (conversationId) => {
    dispatch(
      getMessageByConversation({
        conversationId,
        page: 1,
        limit: 30,
      })
    )
  }

  const ref = useRef()
  const onScroll = () => {
    if (ref.current) {
      if (ref.current) {
        const { scrollTop, scrollHeight, clientHeight } = ref.current
        if (scrollTop + clientHeight === scrollHeight) {
          dispatch(
            getConversationGroupPage({
              userId: user?._id,
              type: 'group',
              limit: conversationGroup.length,
            })
          )
        }
      }
    }
  }

  return (
    <div
      className="h-[calc(100vh-238px)] overflow-y-scroll flex flex-col"
      ref={ref}
      onScroll={onScroll}
    >
      {!!conversationGroup?.length &&
        conversationGroup?.map((conver) => (
          <MessageChat
            handleGetMessage={handleGetMessage}
            key={conver?._id}
            conver={conver}
            handleSetOpenChat={handleSetOpenChat}
          />
        ))}
    </div>
  )
}

export default ListGroupsChat
