import React from 'react'
import { AiFillHome } from 'react-icons/ai'
import { BsMessenger } from 'react-icons/bs'
import { FaUserCheck } from 'react-icons/fa'
import { RiUserSharedFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
  acceptFriend,
  addFriend,
  cancelAddFriend,
  refuseFriend,
  unfriendUser,
} from '../../store/friends/friendSlice'

const PopupUser = ({ userProfile }) => {
  const { user } = useSelector((state) => state.auth)
  const { friendsInvited, friends, friendsRequest } = useSelector(
    (state) => state.friends
  )

  const dispatch = useDispatch()

  const handleAddFriend = (e) => {
    e.stopPropagation()
    dispatch(addFriend({ userId: user?._id, friendId: userProfile?._id }))
  }
  const handleUnfriend = (e) => {
    e.stopPropagation()
    dispatch(unfriendUser({ userId: user?._id, friendId: userProfile?._id }))
  }
  const handleCancelAddFriend = (e) => {
    e.stopPropagation()
    dispatch(cancelAddFriend({ userId: user?._id, friendId: userProfile?._id }))
  }
  const handleRefuseFriend = (e) => {
    e.stopPropagation()
    dispatch(refuseFriend({ userId: user?._id, friendId: userProfile?._id }))
  }
  const handleAcceptFriend = (e) => {
    e.stopPropagation()
    dispatch(acceptFriend({ userId: user?._id, friendId: userProfile?._id }))
  }
  return (
    <div className="flex items-start justify-start gap-2 relative group">
      <Link to={`/${userProfile?.name}/${userProfile?._id}`}>
        <img
          src={userProfile?.avatar}
          alt=""
          className="min-w-[40px] object-cover w-[40px] h-[40px] rounded-full cursor-pointer border border-gray-400 shadow"
        />
      </Link>
      <Link to={`/${userProfile?.name}/${userProfile?._id}`}>
        <span className="font-semibold max-w-[150px] truncate line-clamp-1 text-ellipsis overflow-hidden hover:underline cursor-pointer">
          {userProfile?.name}
        </span>
      </Link>

      <div
        className={`absolute ${
          userProfile?._id === user?._id ? 'hidden' : 'group-hover:flex hidden'
        } bg-white gap-y-2 dark:bg-dark-nav shadow-lg dark:border-dark-icon border z-[3] p-4 flex-col rounded-md top-10 left-0 translate-x-0`}
      >
        <div className="flex items-start justify-start gap-4 max-w-[400px] min-w-[300px] w-max">
          <Link to={`/${userProfile?.name}/${userProfile?._id}`}>
            <img
              src={userProfile?.avatar}
              alt=""
              className="min-w-[40px] object-cover w-[40px] h-[40px] rounded-full cursor-pointer border border-gray-400 shadow"
            />
          </Link>
          <div className="flex flex-col justify-start gap-y-4 h-full w-full">
            <Link to={`/${userProfile?.name}/${userProfile?._id}`}>
              <span className="font-semibold max-w-[150px] truncate line-clamp-1 text-ellipsis overflow-hidden hover:underline cursor-pointer">
                {userProfile?.name}
              </span>
            </Link>

            {userProfile?.address && (
              <div className="w-full flex items-start gap-4 break-words">
                <AiFillHome
                  size={20}
                  className="text-gray-500"
                />
                <span className="flex line-clamp-2 text-inherit gap-1">
                  Sống tại
                  <span className="font-semibold hover:underline cursor-pointer text-inherit">
                    {userProfile?.address}
                  </span>
                </span>
              </div>
            )}
          </div>
        </div>
        <div className="flex items-center justify-between gap-4 text-sm font-semibold">
          {friends?.find((friend) => friend._id === userProfile?._id) ? (
            <>
              <button
                onClick={handleUnfriend}
                className="w-full py-2 font-semibold text-[15px] rounded-md bg-blue-500 text-white hover:bg-blue-600"
              >
                Hủy kết bạn
              </button>
              <button className="w-full py-2 font-semibold text-[15px] rounded-md bg-gray-200 hover:bg-gray-300 dark:bg-dark-icon-story dark:hover:bg-dark-icon-story-hover">
                Nhắn tin
              </button>
            </>
          ) : friendsRequest?.find(
              (friend) => friend._id === userProfile?._id
            ) ? (
            <>
              <button
                onClick={handleCancelAddFriend}
                className="w-full py-2 font-semibold text-[15px] rounded-md bg-gray-200 hover:bg-gray-300 dark:bg-dark-icon-story dark:hover:bg-dark-icon-story-hover"
              >
                Hủy
              </button>
            </>
          ) : friendsInvited?.find(
              (friend) => friend._id === userProfile?._id
            ) ? (
            <>
              <button
                onClick={handleAcceptFriend}
                className="w-full py-2 font-semibold text-[15px] rounded-md bg-blue-500 text-white hover:bg-blue-600"
              >
                Xác nhận
              </button>
              <button
                onClick={handleRefuseFriend}
                className="w-full py-2 font-semibold text-[15px] rounded-md bg-gray-200 hover:bg-gray-300 dark:bg-dark-icon-story dark:hover:bg-dark-icon-story-hover"
              >
                Từ chối
              </button>
            </>
          ) : (
            <>
              <button
                onClick={handleAddFriend}
                className="w-full py-2 font-semibold text-[15px] rounded-md bg-blue-500 text-white hover:bg-blue-600"
              >
                Kết bạn
              </button>
              <button className="w-full py-2 font-semibold text-[15px] rounded-md bg-gray-200 hover:bg-gray-300 dark:bg-dark-icon-story dark:hover:bg-dark-icon-story-hover">
                Nhắn tin
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default PopupUser
