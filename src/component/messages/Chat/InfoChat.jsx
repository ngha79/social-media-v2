import React, { Fragment } from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { AiOutlineClose, AiOutlineSearch } from 'react-icons/ai'
import { ImExit } from 'react-icons/im'
import ListFeature from './ListFeature'
import { useDispatch, useSelector } from 'react-redux'
import {
  disbandConversation,
  leaveConversation,
} from '../../../store/conversation/conversationSlice'
import AddMemberToConversation from './AddMemberToConversation/AddMemberToConversation'
import { useNavigate } from 'react-router-dom'

const InfoChat = ({
  handleInfo,
  conversationId,
  avatar,
  name,
  leaderId,
  member,
  type,
  handleSetCloseChat,
}) => {
  const { user } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleDisbandConversation = () => {
    dispatch(
      disbandConversation({
        leaderId: user?._id,
        conversationId: conversationId,
      })
    )
    handleSetCloseChat()
    navigate('/messages/all', { state: undefined })
  }
  const handleLeaveConversation = () => {
    dispatch(
      leaveConversation({
        userId: user?._id,
        conversationId: conversationId,
      })
    )
    handleSetCloseChat()
    navigate('/messages/all', { state: undefined })
  }

  const handleSetOpen = (e) => {
    e.stopPropagation()
  }
  return (
    <div
      className="w-screen h-screen fixed top-0 left-0"
      onClick={handleInfo}
    >
      <div
        onClick={handleSetOpen}
        className="max-w-[400px] fixed right-0 pb-12 top-[58px] h-full border-l border-gray-200 dark:dark:border-dark-icon-story-hover bg-white dark:bg-dark-nav w-full flex flex-col items-center pt-8"
      >
        <button
          onClick={handleInfo}
          className="absolute left-4 top-4 p-2 rounded-full bg-gray-200 hover:bg-gray-300 dark:hover:bg-dark-icon-story-hover dark:bg-dark-icon-story"
        >
          <AiOutlineClose />
        </button>
        <div className="flex flex-col items-center">
          <img
            src={avatar}
            alt=""
            className="w-[60px] h-[60px] rounded-full"
          />
          <span className="text-lg font-semibold max-w-[200px] text-center line-clamp-3">
            {name}
          </span>
        </div>
        <div className="flex items-center mt-4">
          {type === 'single' && (
            <div className="flex flex-col items-center justify-center">
              <div className="p-2 rounded-full cursor-pointer w-max bg-gray-200 hover:bg-gray-300 dark:bg-dark-icon-story dark:hover:bg-dark-icon-story-hover">
                <FaUserCircle size={20} />
              </div>
              <span className="text-sm max-w-[80px] truncate">
                Trang cá nhân
              </span>
            </div>
          )}
          {type === 'group' ? (
            leaderId === user?._id ? (
              <>
                <div className="flex flex-col items-center justify-center">
                  <div
                    onClick={handleDisbandConversation}
                    className="p-2 rounded-full cursor-pointer w-max bg-gray-200 hover:bg-gray-300 dark:bg-dark-icon-story dark:hover:bg-dark-icon-story-hover"
                  >
                    <FaUserCircle size={20} />
                  </div>
                  <span className="text-sm max-w-[80px] truncate">
                    Giải tán nhóm
                  </span>
                </div>
                <AddMemberToConversation conversationId={conversationId} />
              </>
            ) : (
              <>
                <div className="flex flex-col items-center justify-center">
                  <div
                    onClick={handleLeaveConversation}
                    className="p-2 rounded-full cursor-pointer w-max bg-gray-200 hover:bg-gray-300 dark:bg-dark-icon-story dark:hover:bg-dark-icon-story-hover"
                  >
                    <ImExit size={20} />
                  </div>
                  <span className="text-sm max-w-[80px] truncate">
                    Rời nhóm
                  </span>
                </div>
                <AddMemberToConversation conversationId={conversationId} />
              </>
            )
          ) : null}
          {/* <div className="flex flex-col items-center justify-center">
          <div className="p-2 rounded-full cursor-pointer w-max bg-gray-200 hover:bg-gray-300 dark:bg-dark-icon-story dark:hover:bg-dark-icon-story-hover">
            <IoIosNotifications size={20} />
          </div>
          <span className="text-sm max-w-[80px] truncate">Tắt thông báo</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="p-2 rounded-full cursor-pointer w-max bg-gray-200 hover:bg-gray-300 dark:bg-dark-icon-story dark:hover:bg-dark-icon-story-hover">
            <IoMdNotificationsOff size={20} />
          </div>
          <span className="text-sm max-w-[80px] truncate">Bật thông báo</span>
        </div> */}

          <div className="flex flex-col items-center justify-center">
            <div className="p-2 rounded-full cursor-pointer w-max bg-gray-200 hover:bg-gray-300 dark:bg-dark-icon-story dark:hover:bg-dark-icon-story-hover">
              <AiOutlineSearch size={20} />
            </div>
            <span className="text-sm max-w-[80px] truncate">Tìm kiếm</span>
          </div>
        </div>
        <ListFeature
          conversationId={conversationId}
          memberConversation={member}
          leaderConversation={leaderId}
          type={type}
        />
      </div>
    </div>
  )
}

export default InfoChat
