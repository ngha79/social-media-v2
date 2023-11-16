import React, { useEffect, useMemo, useState } from 'react'
import ListChat from '../component/messages/ListChat/ListChat'
import Chat from '../component/messages/Chat/Chat'
import { useDispatch, useSelector } from 'react-redux'
import {
  findConversationByUser,
  getMessageByConversation,
  setCurrentMessage,
} from '../store/conversation/conversationSlice'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import NewChat from '../component/messages/Chat/NewChat'
import { socket } from '../utils/socket'
import Loading from '../component/Loading'

const Messages = () => {
  const { user } = useSelector((state) => state.auth)
  const { checkConversation, newConversationUser, loading } = useSelector(
    (state) => state.conversation
  )
  const [openChat, setOpenChat] = useState(false)
  const [conversation, setConversation] = useState()
  const [newConversation, setNewConversation] = useState(false)
  const [page, setPage] = useState(0)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const params = useParams()
  const converId = params.conversationId
  const { state } = useLocation()
  const handleSetPage = () => {
    setPage((page) => page + 1)
  }
  const handleSetOpenChat = (chat) => {
    if (chat._id === converId) return
    if (chat.type === 'single') {
      const member = chat?.memberConversation.find(
        (mem) => mem._id !== user._id
      )
      navigate(`/messages/${chat._id}`, {
        state: {
          name: chat.nameConversation || member?.name,
          avatar: chat.avatarConversation || member?.avatar,
          _id: chat._id,
        },
      })
    } else {
      navigate(`/messages/${chat._id}`, {
        state: {
          name: chat.nameConversation,
          avatar: chat.avatarConversation,
          _id: chat._id,
        },
      })
    }
  }
  const handleSetCloseChat = () => {
    setOpenChat(false)
    setConversation()
    dispatch(setCurrentMessage(''))
    setNewConversation(false)
  }

  useEffect(() => {
    if (state) {
      const { _id, friendId } = state
      if (_id) {
        dispatch(
          findConversationByUser({
            conversationId: _id,
            userId: user?._id,
          })
        )
      } else {
        dispatch(
          findConversationByUser({ friendId: friendId, userId: user?._id })
        )
      }
    }
  }, [state])
  useEffect(() => {
    if (converId !== 'all') {
      dispatch(
        findConversationByUser({
          conversationId: converId,
          userId: user?._id,
        })
      )
    }
    socket.on('toMemberKickConversation', (result) => {
      handleSetCloseChat()
      navigate('/messages/all', { state: undefined })
    })
    socket.on('disbandConversation', (result) => {
      handleSetCloseChat()
      if (result._id === converId) {
        navigate('/messages/all', { state: undefined })
      }
    })
  }, [])

  useEffect(() => {
    if (newConversationUser) {
      setOpenChat(true)
      setNewConversation(true)
    } else if (checkConversation) {
      setOpenChat(true)
      setConversation(checkConversation)
      dispatch(setCurrentMessage(checkConversation._id))
      setPage(0)
      navigate(`/messages/${checkConversation._id}`)
    } else {
      setConversation()
      setOpenChat(false)
    }
  }, [checkConversation, newConversationUser])

  const IsChat = () => {
    if (!openChat) {
      return (
        <div className="w-full hidden  min-[900px]:flex bg-white dark:bg-dark-nav overflow-hidden min-[900px]:max-w-[calc(100vw-360px)]">
          <div className="w-full flex text-2xl font-semibold justify-center items-center">
            Chọn cuộc hội thoại để nhắn tin
          </div>
        </div>
      )
    }
    return (
      <>
        {newConversation ? (
          <NewChat
            handleSetCloseChat={handleSetCloseChat}
            openChat={openChat}
            userChat={state}
            handleSetPage={handleSetPage}
            page={page}
          />
        ) : (
          <Chat
            handleSetCloseChat={handleSetCloseChat}
            openChat={openChat}
            conversationId={conversation?._id}
            handleSetPage={handleSetPage}
            page={page}
          />
        )}
      </>
    )
  }
  return (
    <div className="relative w-full top-[58px] flex h-[calc(100vh-58px)]">
      <ListChat
        handleSetOpenChat={handleSetOpenChat}
        openChat={openChat}
      />
      {loading ? <Loading /> : null}
      {IsChat()}
    </div>
  )
}

export default Messages
