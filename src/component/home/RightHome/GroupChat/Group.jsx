import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { openMiniPopup } from '../../../../store/conversation/conversationSlice'

const Group = ({ chat }) => {
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

  return (
    <div
      onClick={handleOpenPopup}
      className="flex items-center w-full cursor-pointer dark:hover:bg-item-hover hover:bg-dark-item-hover rounded-md justify-start gap-2 p-2"
    >
      <div className="relative w-max">
        <img
          src={avatar}
          alt=""
          className="min-w-[40px] w-[40px] h-[40px] rounded-full cursor-pointer border border-gray-400 shadow"
        />
        {memberConversation.find((member) => member.lastLogin === 'null') ? (
          <div className="absolute bg-white flex items-center justify-center w-[12px] h-[12px] z-[1] rounded-full bottom-0 right-0">
            <div className="bg-green-600 w-[8px] h-[8px] rounded-full"></div>
          </div>
        ) : (
          <div className="absolute bg-white flex items-center justify-center w-[12px] h-[12px] z-[1] rounded-full bottom-0 right-0">
            <div className="bg-red-400 w-[8px] h-[8px] rounded-full"></div>
          </div>
        )}
      </div>
      <span className="font-semibold max-w-[200px] truncate">{name}</span>
    </div>
  )
}

export default Group
