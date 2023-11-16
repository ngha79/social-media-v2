import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import {
  deleteMiniPopup,
  openMiniPopup,
} from '../../../store/conversation/conversationSlice'

const PopupChat = ({ chat }) => {
  const { user } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const { avatarConversation, memberConversation, nameConversation } = chat
  const avatar =
    avatarConversation ||
    memberConversation.filter((member) => member !== user?._id)?.[0]?.avatar
  const name =
    nameConversation ||
    memberConversation.filter((member) => member !== user?._id)?.[0]?.name
  const handleOpenPopup = () => {
    dispatch(openMiniPopup(chat))
  }
  const handledeleteIconPopup = () => {
    dispatch(deleteMiniPopup(chat))
  }
  return (
    <div className="relative cursor-pointer group">
      <img
        onClick={handleOpenPopup}
        src={avatar}
        alt="Popup user"
        title={name}
        className="w-[50px] h-[50px] rounded-full"
      />
      <div
        onClick={handledeleteIconPopup}
        className="absolute -top-1 shadow-sm -right-1 hidden p-1 group-hover:block bg-white dark:bg-dark-icon-story dark:hover:bg-dark-icon-story-hover rounded-full hover:bg-gray-100"
      >
        <AiOutlineClose size={16} />
      </div>
      {memberConversation.find((member) => member.lastLogin === 'null') ? (
        <div className="absolute bottom-[2px] shadow-sm right-[2px] p-[1px] bg-white rounded-full">
          <div className="bg-green-500 p-1 rounded-full"></div>
        </div>
      ) : (
        <div className="absolute bottom-[2px] shadow-sm right-[2px] p-[1px] bg-white rounded-full">
          <div className="bg-red-400 p-1 rounded-full"></div>
        </div>
      )}
    </div>
  )
}

export default PopupChat
