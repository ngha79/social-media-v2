import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { openMiniPopup } from '../../../../store/conversation/conversationSlice'

const Friend = ({ conversation }) => {
  const { user } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const contact = conversation?.memberConversation?.find(
    (member) => member._id !== user?._id
  )
  const handleOpenPopup = () => {
    dispatch(openMiniPopup(conversation))
  }
  return (
    <div
      className="flex items-center w-full cursor-pointer dark:hover:bg-item-hover hover:bg-dark-item-hover rounded-md justify-start gap-2 p-2"
      onClick={handleOpenPopup}
    >
      <div className="relative w-max">
        <img
          src={contact?.avatar}
          alt=""
          className="min-w-[40px] w-[40px] h-[40px] rounded-full cursor-pointer border border-gray-400 shadow"
        />
        {contact?.lastLogin === 'null' ? (
          <div className="absolute bg-white flex items-center justify-center w-[12px] h-[12px] z-[1] rounded-full bottom-0 right-0">
            <div className="bg-green-600 w-[8px] h-[8px] rounded-full"></div>
          </div>
        ) : (
          <div className="absolute bg-white flex items-center justify-center w-[12px] h-[12px] z-[1] rounded-full bottom-0 right-0">
            <div className="bg-red-400 w-[8px] h-[8px] rounded-full"></div>
          </div>
        )}
      </div>
      <span className="font-semibold max-w-[200px] truncate">
        {contact?.name}
      </span>
    </div>
  )
}

export default Friend
