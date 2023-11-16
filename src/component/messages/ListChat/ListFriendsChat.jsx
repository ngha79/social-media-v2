import React, { useEffect, useRef } from 'react'
import FriendChat from './FriendChat'
import { useDispatch, useSelector } from 'react-redux'
import {
  getConversationFriendPage,
  getMessageByConversation,
} from '../../../store/conversation/conversationSlice'

const ListFriendsChat = ({ handleSetOpenChat }) => {
  const { conversationFriend } = useSelector((state) => state.conversation)
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
            getConversationFriendPage({
              userId: user?._id,
              type: 'single',
              limit: conversationFriend.length,
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
      {!!conversationFriend?.length &&
        conversationFriend?.map((conver) => (
          <FriendChat
            handleGetMessage={handleGetMessage}
            key={conver?._id}
            conver={conver}
            handleSetOpenChat={handleSetOpenChat}
          />
        ))}
    </div>
  )
}

export default ListFriendsChat
