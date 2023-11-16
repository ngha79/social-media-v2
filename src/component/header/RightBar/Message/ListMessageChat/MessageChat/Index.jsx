import { useSelector } from 'react-redux'
import moment from 'moment/min/moment-with-locales'

const Index = ({ handleSetOpenChat, conver }) => {
  const { user } = useSelector((state) => state.auth)
  const handleOpenChat = () => {
    handleSetOpenChat(conver)
  }

  const {
    avatarConversation,
    nameConversation,
    lastMessage,
    memberConversation,
  } = conver
  const findUser = memberConversation?.find((member) => member._id !== user._id)

  return (
    <div
      className="flex items-center p-4 hover:bg-slate-100 dark:hover:bg-dark-icon-story-hover cursor-pointer rounded-md dark:text-dark-item-hover gap-2"
      onClick={handleOpenChat}
    >
      <div className="relative">
        <img
          src={avatarConversation || findUser?.avatar}
          alt=""
          className="w-[40px] h-[40px] rounded-full cursor-pointer border border-gray-400 shadow"
        />
        {memberConversation.find((member) => {
          if (member.lastLogin === 'null' && member._id !== user._id) {
            return member
          }
        }) ? (
          <div className="absolute bottom-0 right-0 p-[1px] rounded-full bg-white">
            <div className="p-1 rounded-full bg-green-500"></div>
          </div>
        ) : (
          <div className="absolute bottom-0 right-0 p-[1px] rounded-full bg-white">
            <div className="p-1 rounded-full bg-red-400"></div>
          </div>
        )}
      </div>
      <div className="flex flex-col items-start justify-start">
        <h2 className="font-semibold max-w-[200px] truncate text-[15px]">
          {nameConversation || findUser?.name}
        </h2>
        {lastMessage &&
          (lastMessage?.isDeleted ? (
            <span className="text-[13px] text-gray-700 dark:text-gray-200 max-w-[150px] truncate">
              Tin nhắn đã xóa
            </span>
          ) : (
            <div className="flex items-center justify-start gap-4 text-sm">
              <p className="text-[13px] text-gray-700 dark:text-gray-200 max-w-[150px] truncate">
                {lastMessage?.userSendId?._id === user?._id
                  ? 'Bạn: '
                  : `${lastMessage?.userSendId?.name}: `}
                {lastMessage?.images?.length
                  ? `đã gửi ${lastMessage?.images?.length} ảnh`
                  : lastMessage?.text}
              </p>
              <p className="text-[13px]">
                {moment(lastMessage?.createdAt).fromNow()}
              </p>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Index
