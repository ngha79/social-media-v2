import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PopupUser from '../../user/PopupUser'
import {
  acceptFriend,
  addFriend,
  cancelAddFriend,
  refuseFriend,
  unfriendUser,
} from '../../../store/friends/friendSlice'

const UserTag = ({ userProfile }) => {
  const { user } = useSelector((state) => state.auth)
  const { friends, friendsRequest, friendsInvited, friendsSuggest } =
    useSelector((state) => state.friends)
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

  const ActionUser = () => {
    if (friends?.find((friend) => friend._id === userProfile._id)) {
      return (
        <button className="p-2 rounded-md bg-blue-100 text-blue-500 font-medium hover:bg-blue-200">
          Bạn bè
        </button>
      )
    }
    if (friendsRequest?.find((friend) => friend._id === userProfile._id)) {
      return (
        <div className="flex items-center gap-2">
          <button
            className="p-2 rounded-md bg-blue-100 text-blue-500 font-medium hover:bg-blue-200"
            onClick={handleAcceptFriend}
          >
            Chấp nhận
          </button>
          <button
            className="p-2 rounded-md bg-red-100 text-red-500 font-medium hover:bg-red-200"
            onClick={handleRefuseFriend}
          >
            Từ chối
          </button>
        </div>
      )
    }
    if (friendsInvited?.find((friend) => friend._id === userProfile._id)) {
      return (
        <button
          className="p-2 rounded-md bg-blue-100 text-blue-500 font-medium hover:bg-blue-200"
          onClick={handleAddFriend}
        >
          Hủy lời mời
        </button>
      )
    }
    if (friendsSuggest?.find((friend) => friend._id === userProfile._id)) {
      return (
        <button
          className="p-2 rounded-md bg-blue-100 text-blue-500 font-medium hover:bg-blue-200"
          onClick={handleAddFriend}
        >
          Thêm bạn bè
        </button>
      )
    }
  }

  return (
    <div className="w-full p-4 bg-gray-50 rounded-lg shadow">
      <div className="flex items-center justify-between gap-2">
        <PopupUser userProfile={userProfile} />
        <ActionUser />
      </div>
    </div>
  )
}

export default UserTag
