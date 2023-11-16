import React from 'react'
import PopupUser from '../../../user/PopupUser'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
  acceptFriend,
  addFriend,
  cancelAddFriend,
  deleteUser,
  refuseFriend,
  unfriendUser,
} from '../../../../store/friends/friendSlice'

const FriendCart = ({ friend }) => {
  const { user } = useSelector((state) => state.auth)
  const { friendsInvited, friends, friendsRequest, friendsSuggest } =
    useSelector((state) => state.friends)
  const dispatch = useDispatch()

  const handleAddFriend = (e) => {
    e.stopPropagation()
    dispatch(addFriend({ userId: user?._id, friendId: friend?._id }))
  }
  const handleDeleteUser = (e) => {
    e.stopPropagation()
    dispatch(deleteUser(friend?._id))
  }
  const handleUnfriend = (e) => {
    e.stopPropagation()
    dispatch(unfriendUser({ userId: user?._id, friendId: friend?._id }))
  }
  const handleCancelAddFriend = (e) => {
    e.stopPropagation()
    dispatch(cancelAddFriend({ userId: user?._id, friendId: friend?._id }))
  }
  const handleRefuseFriend = (e) => {
    e.stopPropagation()
    dispatch(refuseFriend({ userId: user?._id, friendId: friend?._id }))
  }
  const handleAcceptFriend = (e) => {
    e.stopPropagation()
    dispatch(acceptFriend({ userId: user?._id, friendId: friend?._id }))
  }

  return (
    <div className="bg-white dark:bg-dark-nav rounded-md shadow-lg max-w-[260px]">
      <Link to={`/${friend?.name}/${friend?._id}`}>
        <img
          src={friend?.avatar}
          alt=""
          className="w-full min-h-[200px] rounded-t-md max-h-[300px] lg:h-[200px] cursor-pointer shadow"
        />
      </Link>

      <div className="flex flex-col items-start gap-y-2 p-2">
        <PopupUser userProfile={friend} />
        {/* <div className="flex items-center justify-start gap-2 text-[15px] cursor-pointer">
          <div className="flex items-center">
            <img
              src={friend?.avatar}
              alt=""
              className="w-[20px] h-[20px] rounded-full cursor-pointer border border-gray-400 shadow"
            />
            <img
              src={friend?.avatar}
              alt=""
              className="w-[20px] h-[20px] rounded-full cursor-pointer border border-gray-400 shadow"
            />
          </div>
          <span>24 bạn chung</span>
        </div> */}
      </div>
      <div className="flex flex-col gap-y-2 p-2">
        {friends?.find((user) => user?._id === friend?._id) ? (
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
        ) : friendsInvited?.find((user) => user?._id === friend?._id) ? (
          <button
            onClick={handleCancelAddFriend}
            className="w-full py-2 font-semibold text-[15px] rounded-md bg-gray-200 hover:bg-gray-300 dark:bg-dark-icon-story dark:hover:bg-dark-icon-story-hover"
          >
            Hủy
          </button>
        ) : friendsRequest?.find((user) => user?._id === friend?._id) ? (
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
            <button
              onClick={handleDeleteUser}
              className="w-full py-2 font-semibold text-[15px] rounded-md bg-gray-200 hover:bg-gray-300 dark:bg-dark-icon-story dark:hover:bg-dark-icon-story-hover"
            >
              Xóa
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export default FriendCart
