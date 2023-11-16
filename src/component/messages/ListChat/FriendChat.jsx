import React from 'react'
import { useSelector } from 'react-redux'

const FriendChat = ({ handleSetOpenChat, conver, handleGetMessage }) => {
  const { user } = useSelector((state) => state.auth)
  const handleOpenChat = () => {
    handleSetOpenChat(conver)
    handleGetMessage(conver?._id)
  }

  const {
    avatarConversation,
    nameConversation,
    lastMessage,
    memberConversation,
  } = conver
  const findUser = memberConversation.find((member) => member._id !== user._id)

  return (
    <div className="flex items-center gap-2">
      <button
        className="flex items-center gap-2 hover:bg-gray-200 dark:hover:bg-dark-icon-story-hover rounded-md w-full px-2 py-2"
        onClick={handleOpenChat}
      >
        <div className="relative">
          <img
            src={avatarConversation || findUser?.avatar}
            alt=""
            className="w-[40px] h-[40px] rounded-full"
          />
          {findUser?.lastLogin === 'null' ? (
            <div className="absolute bottom-0 right-0 p-[1px] rounded-full bg-white">
              <div className="p-1 rounded-full bg-green-500"></div>
            </div>
          ) : (
            <div className="absolute bottom-0 right-0 p-[1px] rounded-full bg-white">
              <div className="p-1 rounded-full bg-red-400"></div>
            </div>
          )}
        </div>
        <span className="text-[15px] font-semibold">
          {nameConversation || findUser?.name}
        </span>
      </button>
    </div>
  )
}

export default FriendChat
