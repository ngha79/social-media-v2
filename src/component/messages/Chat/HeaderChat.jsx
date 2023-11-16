import { useCallback } from 'react'
import {
  BsArrowLeft,
  BsFillCameraVideoFill,
  BsFillInfoCircleFill,
  BsFillTelephoneFill,
} from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { socket } from '../../../utils/socket'
import { setIsCallVideo } from '../../../store/conversation/conversationSlice'
import moment from 'moment/min/moment-with-locales'

const HeaderChat = ({
  handleInfo,
  handleSetCloseChat,
  name,
  avatar,
  conversationId,
  memberConversation,
  type,
}) => {
  const { user } = useSelector((state) => state.auth)

  const dispatch = useDispatch()

  const handleShowInfo = () => {
    handleInfo(name, avatar)
  }

  const handleCallVideoChat = useCallback(
    (e) => {
      e.preventDefault()
      socket.emit('call video to rooms', {
        userId: user._id,
        roomId: conversationId,
      })
      dispatch(setIsCallVideo(conversationId))
    },
    [user, conversationId, socket]
  )

  const StatusChat = () => {
    if (!memberConversation) {
      return
    }
    const findMember = memberConversation.find((member) => {
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
      const findUser = memberConversation.find((mem) => mem._id !== user._id)
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
    <header className="flex items-center justify-between p-2 border-b border-gray-200 dark:border-dark-icon-story-hover">
      <div className="flex items-center justify-start gap-2">
        <button
          onClick={handleSetCloseChat}
          className="p-2 md:hidden rounded-full hover:bg-gray-200 dark:hover:bg-dark-icon-story-hover dark:bg-dark-icon-story"
        >
          <BsArrowLeft />
        </button>
        <div className="flex items-center p-1 rounded-md gap-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-dark-icon-story-hover">
          <img
            src={avatar}
            alt=""
            className="w-[50px] h-[50px] rounded-full"
          />
          <div>
            <span className="font-semibold text-lg">{name}</span>
            {StatusChat()}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-end gap-4">
        {conversationId && (
          <>
            <div className="p-2 rounded-full hover:bg-gray-200 cursor-pointer dark:bg-dark-icon-hover">
              <BsFillTelephoneFill
                size={20}
                className="text-blue-500"
              />
            </div>
            <div
              className="p-2 rounded-full hover:bg-gray-200 cursor-pointer dark:bg-dark-icon-hover"
              onClick={handleCallVideoChat}
            >
              <BsFillCameraVideoFill
                size={20}
                className="text-blue-500"
              />
            </div>
          </>
        )}
        <div
          className="p-2 rounded-full hover:bg-gray-200 cursor-pointer dark:bg-dark-icon-hover"
          onClick={() => handleShowInfo()}
        >
          <BsFillInfoCircleFill
            size={20}
            className="text-blue-500"
          />
        </div>
      </div>
    </header>
  )
}

export default HeaderChat
