import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import PopupUser from '../../user/PopupUser'
import FriendProfile from './friends/FriendProfile'
import { Link } from 'react-router-dom'

const FriendsProfile = () => {
  return (
    <div className="flex flex-col bg-white p-4 dark:bg-dark-nav shadow rounded-md">
      <div className="flex items-center justify-between flex-col md:flex-row gap-y-4">
        <h1 className="font-bold text-lg">Bạn bè</h1>
        <div className="flex items-center gap-2 md:justify-end justify-center">
          <div className="p-2 bg-gray-200 dark:bg-dark-seach rounded-3xl gap-2 flex items-center">
            <AiOutlineSearch />
            <input
              type="text"
              className="w-[150px] bg-gray-200 dark:bg-dark-seach outline-none"
              placeholder="Tìm kiếm"
            />
          </div>
          <Link to={'/friends'}>
            <button className="text-blue-500 font-semibold hover:bg-gray-200 dark:hover:bg-dark-icon-story-hover p-2 rounded-md">
              Lời mời kết bạn
            </button>
          </Link>

          <Link to={'/friends'}>
            <button className="text-blue-500 font-semibold hover:bg-gray-200 dark:hover:bg-dark-icon-story-hover p-2 rounded-md">
              Tìm bạn bè
            </button>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-x-2 gap-y-2 mt-8 min-h-[300px]">
        <FriendProfile />
        <FriendProfile />
      </div>
    </div>
  )
}

export default FriendsProfile
