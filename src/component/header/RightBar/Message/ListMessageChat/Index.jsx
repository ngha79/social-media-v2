import { useRef } from 'react'
import MessageChat from './MessageChat/Index'
import { useDispatch, useSelector } from 'react-redux'
import { getAllConversationPage } from '../../../../../store/conversation/conversationSlice'

const ListMessageChat = ({ handleSetOpenChat }) => {
  const { user } = useSelector((state) => state.auth)
  const { conversation } = useSelector((state) => state.conversation)
  const dispatch = useDispatch()
  const ref = useRef()
  const onScroll = () => {
    if (ref.current) {
      if (ref.current) {
        const { scrollTop, scrollHeight, clientHeight } = ref.current
        if (scrollTop + clientHeight === scrollHeight) {
          dispatch(
            getAllConversationPage({
              userId: user?._id,
              skip: conversation.length,
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
      {!!conversation.length &&
        conversation?.map((conver) => (
          <MessageChat
            handleSetOpenChat={handleSetOpenChat}
            conver={conver}
            key={conver?._id}
          />
        ))}
    </div>
  )
}

export default ListMessageChat
