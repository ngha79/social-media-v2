import React, { useState } from 'react'
import PopupUser from '../../../user/PopupUser'
import { useDispatch, useSelector } from 'react-redux'
import {
  addFriend,
  cancelAddFriend,
  deleteUser,
} from '../../../../store/friends/friendSlice'

const UserSuggest = ({ handleSetView, friend }) => {
  const { user } = useSelector((state) => state.auth)
  const { friendsInvited } = useSelector((state) => state.friends)

  const dispatch = useDispatch()
  const handleAddFriend = (e) => {
    e.stopPropagation()
    dispatch(addFriend({ userId: user?._id, friendId: friend?._id }))
  }
  const handleDeleteUser = (e) => {
    e.stopPropagation()
    dispatch(deleteUser(friend?._id))
  }
  const handleCancelAddFriend = (e) => {
    e.stopPropagation()
    dispatch(cancelAddFriend({ userId: user?._id, friendId: friend?._id }))
  }
  return (
    <div
      className="w-full flex items-start p-4 hover:bg-gray-100 dark:hover:bg-dark-icon-story cursor-pointer gap-x-2"
      onClick={() => handleSetView(friend)}
    >
      <img
        src={friend?.avatar}
        alt=""
        className="min-w-[50px] w-[50px] h-[50px] rounded-full shadow-md cursor-pointer"
      />
      <div className="flex flex-col justify-start w-full">
        <span className="font-semibold">{friend?.name}</span>
        <div className="flex flex-col items-start gap-y-2 p-2">
          <div className="flex items-center justify-start gap-2 text-[15px] cursor-pointer">
            <div className="flex items-center -space-x-2">
              <img
                src={friend?.avatar}
                alt=""
                className="w-[20px] h-[20px] rounded-full bg-gray-200 cursor-pointer border border-gray-400 shadow"
              />
              <img
                src={friend?.avatar}
                alt=""
                className="w-[20px] h-[20px] rounded-full bg-gray-200 cursor-pointer border border-gray-400 shadow"
              />
            </div>
            <span>24 bạn chung</span>
          </div>
        </div>
        <div className="flex items-center justify-between gap-x-4">
          {!friendsInvited.includes(friend?._id) ? (
            <>
              <button
                onClick={handleAddFriend}
                className="w-full text-[15px] text-white font-semibold bg-blue-500 hover:bg-blue-600 rounded-lg py-2"
              >
                Thêm bạn bè
              </button>
              <button
                onClick={handleDeleteUser}
                className="w-full text-[15px] dark:text-white font-semibold text-dark-nav bg-gray-200 hover:bg-gray-300 dark:bg-dark-icon-story dark:hover:bg-dark-icon-story-hover rounded-lg py-2"
              >
                Xóa, gỡ
              </button>
            </>
          ) : (
            <button
              onClick={handleCancelAddFriend}
              className="w-full text-[15px] dark:text-white font-semibold text-dark-nav bg-gray-200 hover:bg-gray-300 dark:bg-dark-icon-story dark:hover:bg-dark-icon-story-hover rounded-lg py-2"
            >
              Hủy yêu cầu
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default UserSuggest
