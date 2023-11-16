import {
  BiLogoMessenger,
  BiSolidUserCheck,
  BiUserPlus,
  BiUserX,
} from 'react-icons/bi'
import ListFunction from './ListFunction'
import UpdateProfile from './UpdateProfile/UpdateProfile'
import { useDispatch, useSelector } from 'react-redux'
import {
  acceptFriend,
  addFriend,
  cancelAddFriend,
  deleteUser,
  refuseFriend,
  unfriendUser,
} from '../../../store/friends/friendSlice'
import { findConversationByUser } from '../../../store/conversation/conversationSlice'
import { useNavigate } from 'react-router-dom'

const DetailProfile = ({ userId, avatar, name, friendsProfile }) => {
  const { user } = useSelector((state) => state.auth)
  const { friendsInvited, friends, friendsRequest } = useSelector(
    (state) => state.friends
  )
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleAddFriend = (e) => {
    e.stopPropagation()
    dispatch(addFriend({ userId: user?._id, friendId: userId }))
  }
  // const handleDeleteUser = (e) => {
  //   e.stopPropagation()
  //   dispatch(deleteUser(userId))
  // }
  const handleUnfriend = (e) => {
    e.stopPropagation()
    dispatch(unfriendUser({ userId: user?._id, friendId: userId }))
  }
  const handleCancelAddFriend = (e) => {
    e.stopPropagation()
    dispatch(cancelAddFriend({ userId: user?._id, friendId: userId }))
  }
  const handleRefuseFriend = (e) => {
    e.stopPropagation()
    dispatch(refuseFriend({ userId: user?._id, friendId: userId }))
  }
  const handleAcceptFriend = (e) => {
    e.stopPropagation()
    dispatch(acceptFriend({ userId: user?._id, friendId: userId }))
  }

  const handleNewMessage = () => {
    dispatch(findConversationByUser({ friendId: userId, userId: user._id }))
    navigate(`/messages/${userId}`, {
      state: { name, avatar, friendId: userId },
    })
  }

  const listFeature = () => {
    if (user?._id === userId) {
      return <UpdateProfile />
    } else if (friends?.find((userCheck) => userCheck?._id === userId)) {
      return (
        <>
          <button
            onClick={handleUnfriend}
            className="p-2 w-max flex items-center gap-1 font-semibold text-[15px] bg-gray-200 hover:bg-gray-300 dark:bg-dark-icon-story hover:dark:bg-dark-icon-story-hover rounded-md"
          >
            <BiSolidUserCheck size={20} /> Bạn bè
          </button>
          <button
            className="p-2 w-max text-white/90 flex items-center gap-1 font-semibold text-[15px] bg-blue-500 hover:bg-blue-600 rounded-md"
            onClick={handleNewMessage}
          >
            <BiLogoMessenger size={20} />
            Nhắn tin
          </button>
        </>
      )
    }
    if (friendsInvited?.find((userCheck) => userCheck?._id === userId)) {
      return (
        <>
          <button
            onClick={handleCancelAddFriend}
            className="p-2 w-max flex items-center gap-1 font-semibold text-[15px] bg-gray-200 hover:bg-gray-300 dark:bg-dark-icon-story hover:dark:bg-dark-icon-story-hover rounded-md"
          >
            <BiUserX size={20} /> Hủy
          </button>
          <button
            className="p-2 w-max text-white/90 flex items-center gap-1 font-semibold text-[15px] bg-blue-500 hover:bg-blue-600 rounded-md"
            onClick={handleNewMessage}
          >
            <BiLogoMessenger size={20} />
            Nhắn tin
          </button>
        </>
      )
    }
    if (friendsRequest?.find((userCheck) => userCheck?._id === userId)) {
      return (
        <>
          <button
            onClick={handleAcceptFriend}
            className="p-2 w-max flex items-center gap-1 font-semibold text-[15px] bg-gray-200 hover:bg-gray-300 dark:bg-dark-icon-story hover:dark:bg-dark-icon-story-hover rounded-md"
          >
            <BiSolidUserCheck size={20} /> Chấp nhận
          </button>
          <button
            onClick={handleRefuseFriend}
            className="p-2 w-max text-white/90 flex items-center gap-1 font-semibold text-[15px] bg-blue-500 hover:bg-blue-600 rounded-md"
          >
            <BiUserX size={20} /> Từ chối
          </button>
        </>
      )
    }
    return (
      <>
        <button
          onClick={handleAddFriend}
          className="p-2 w-max flex items-center gap-1 font-semibold text-[15px] bg-gray-200 hover:bg-gray-300 dark:bg-dark-icon-story hover:dark:bg-dark-icon-story-hover rounded-md"
        >
          <BiUserPlus size={20} /> Kết bạn
        </button>
        <button
          className="p-2 w-max text-white/90 flex items-center gap-1 font-semibold text-[15px] bg-blue-500 hover:bg-blue-600 rounded-md"
          onClick={handleNewMessage}
        >
          <BiLogoMessenger size={20} />
          Nhắn tin
        </button>
      </>
    )
  }

  return (
    <div className="flex flex-col w-full items-center">
      <div className="flex items-center flex-col gap-y-8 min-[920px]:flex-row p-8 max-w-[1200px] justify-center w-full">
        <div className="flex items-center justify-start flex-col min-[920px]:flex-row gap-4 gap-y-12 w-full">
          <div className="relative w-[176px]">
            <div className="w-[176px] absolute bottom-0 left-0 translate-y-[40px] rounded-full p-1 bg-white">
              <img
                src={avatar}
                alt=""
                className="w-[168px] h-[168px] rounded-full"
              />
            </div>
          </div>
          <div className="flex flex-col gap-y-2 items-center md:items-start">
            <h1 className="font-bold text-3xl">{name}</h1>
            {friendsProfile && (
              <span className="hover:underline text-sm cursor-pointer font-semibold">
                {friendsProfile.length} bạn bè
              </span>
            )}
          </div>
        </div>
        <div className="flex items-center gap-4">{listFeature()}</div>
      </div>
      <div className="flex items-center justify-center w-full">
        <ListFunction />
      </div>
    </div>
  )
}

export default DetailProfile
