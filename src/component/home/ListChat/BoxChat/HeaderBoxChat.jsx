import React from 'react'
import { AiOutlineClose, AiOutlineDown, AiOutlineMinus } from 'react-icons/ai'
import { BsFillCameraVideoFill } from 'react-icons/bs'
import { IoMdCall } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import {
  closePopup,
  miniIconPopup,
} from '../../../../store/conversation/conversationSlice'
import moment from 'moment/min/moment-with-locales'

const HeaderBoxChat = ({ chat }) => {
  const { user } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const { avatarConversation, memberConversation, nameConversation, type } =
    chat
  const avatar =
    avatarConversation ||
    memberConversation.filter((member) => member !== user?._id)?.[0]?.avatar
  const name =
    nameConversation ||
    memberConversation.filter((member) => member !== user?._id)?.[0]?.name
  const handleClosePopup = () => {
    dispatch(closePopup(chat))
  }
  const handleMiniPopup = () => {
    dispatch(miniIconPopup(chat))
  }

  const StatusChat = (members, type) => {
    const findMember = members.find((member) => {
      if (member._id !== user._id && member.lastLogin === 'null') {
        return member
      }
    })
    if (findMember) {
      return (
        <span className="text-[12px] leading-4 line-clamp-1">
          Đang hoạt động
        </span>
      )
    }
    if (type === 'single') {
      const findUser = members.find((mem) => mem._id !== user._id)
      return (
        <span className="text-[12px] leading-4 line-clamp-1">
          Hoạt động {moment(findUser?.lastLogin).fromNow()}
        </span>
      )
    } else {
      return
    }
  }

  return (
    <div className="h-max border-b border-gray-200 dark:border-dark-icon-story-hover flex items-center justify-between">
      <div
        className="flex items-center gap-2 p-1 hover:bg-gray-200 dark:hover:bg-dark-icon-story-hover rounded-md cursor-pointer"
        title="Cài đặt chat"
      >
        <div className="w-max hover:bg-gray-200 dark:hover:bg-dark-icon-story-hover p-1 rounded-md">
          <img
            src={avatar}
            alt=""
            className="min-w-[30px] max-w-[30px] h-[30px] rounded-full"
          />
        </div>
        <div className="flex flex-col">
          <h3 className="font-semibold text-[15px] leading-5 line-clamp-1">
            {name}
          </h3>
          {StatusChat(memberConversation, type)}
        </div>
      </div>
      <div className="flex items-center justify-end p-1 gap-2">
        <div
          className="p-1 cursor-pointer hover:bg-gray-200 dark:hover:bg-dark-icon-story-hover rounded-full"
          title="Bắt đầu gọi thoại"
        >
          <IoMdCall />
        </div>
        <div
          className="p-1 cursor-pointer hover:bg-gray-200 dark:hover:bg-dark-icon-story-hover rounded-full"
          title="Bắt đầu gọi Video"
        >
          <BsFillCameraVideoFill />
        </div>
        <div
          onClick={handleMiniPopup}
          className="p-1 cursor-pointer hover:bg-gray-200 dark:hover:bg-dark-icon-story-hover rounded-full"
          title="Thu nhỏ đoạn chat"
        >
          <AiOutlineMinus />
        </div>
        <div
          onClick={handleClosePopup}
          className="p-1 cursor-pointer hover:bg-gray-200 dark:hover:bg-dark-icon-story-hover rounded-full"
          title="Đóng đoạn chat"
        >
          <AiOutlineClose />
        </div>
      </div>
    </div>
  )
}

export default HeaderBoxChat
