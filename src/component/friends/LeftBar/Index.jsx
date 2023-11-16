import React from 'react'
import { AiFillSetting } from 'react-icons/ai'
import { BiSolidUserDetail } from 'react-icons/bi'
import { FaUserFriends, FaUserPlus } from 'react-icons/fa'
import { RiUserSharedFill } from 'react-icons/ri'
import { Link, useLocation } from 'react-router-dom'

const LeftBar = () => {
  const { pathname } = useLocation()

  return (
    <div className="sticky z-[1] w-full top-[57px] left-0 md:max-w-[360px] md:h-full border-r border-gray-200 dark:border-dark-icon-hover bg-white dark:bg-dark-nav">
      <div className="px-2">
        <div className="flex items-center justify-between p-2">
          <h1 className="font-bold text-2xl">Bạn bè</h1>
          <div className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 cursor-pointer dark:bg-dark-icon-story dark:hover:bg-dark-icon-story-hover">
            <AiFillSetting size={20} />
          </div>
        </div>
      </div>
      <div className="px-2">
        <Link to={'/friends'}>
          <div
            className={`flex items-center justify-start gap-2 p-2 hover:bg-gray-200 cursor-pointer rounded-md dark:hover:bg-dark-icon-story ${
              pathname === '/friends'
                ? 'bg-gray-200 dark:bg-dark-icon-story'
                : ''
            }`}
          >
            <div
              className={`p-2 rounded-full  cursor-pointer  ${
                pathname === '/friends'
                  ? 'text-white bg-blue-500'
                  : 'bg-gray-200 dark:bg-dark-icon-story-hover'
              }`}
            >
              <FaUserFriends size={20} />
            </div>
            <span className="font-semibold text-lg">Trang chủ</span>
          </div>
        </Link>
      </div>
      <div className="px-2">
        <Link to={'/friends/requests'}>
          <div
            className={`flex items-center justify-start gap-2 p-2 hover:bg-gray-200 cursor-pointer rounded-md dark:hover:bg-dark-icon-story ${
              pathname === '/friends/requests'
                ? 'bg-gray-200 dark:bg-dark-icon-story'
                : ''
            }`}
          >
            <div
              className={`p-2 rounded-full  cursor-pointer  ${
                pathname === '/friends/requests'
                  ? 'text-white bg-blue-500'
                  : 'bg-gray-200 dark:bg-dark-icon-story-hover'
              }`}
            >
              <RiUserSharedFill size={20} />
            </div>
            <span className="font-semibold text-lg">Lời mời kết bạn</span>
          </div>
        </Link>
      </div>
      <div className="px-2">
        <Link to={'/friends/suggestions'}>
          <div
            className={`flex items-center justify-start gap-2 p-2 hover:bg-gray-200 cursor-pointer rounded-md dark:hover:bg-dark-icon-story ${
              pathname === '/friends/suggestions'
                ? 'bg-gray-200 dark:bg-dark-icon-story'
                : ''
            }`}
          >
            <div
              className={`p-2 rounded-full  cursor-pointer  ${
                pathname === '/friends/suggestions'
                  ? 'text-white bg-blue-500'
                  : 'bg-gray-200 dark:bg-dark-icon-story-hover'
              }`}
            >
              <FaUserPlus size={20} />
            </div>
            <span className="font-semibold text-lg">Gợi ý</span>
          </div>
        </Link>
      </div>
      <div className="px-2">
        <Link to={'/friends/list'}>
          <div
            className={`flex items-center justify-start gap-2 p-2 hover:bg-gray-200 cursor-pointer rounded-md dark:hover:bg-dark-icon-story ${
              pathname === '/friends/list'
                ? 'bg-gray-200 dark:bg-dark-icon-story'
                : ''
            }`}
          >
            <div
              className={`p-2 rounded-full  cursor-pointer  ${
                pathname === '/friends/list'
                  ? 'text-white bg-blue-500'
                  : 'bg-gray-200 dark:bg-dark-icon-story-hover'
              }`}
            >
              <BiSolidUserDetail size={20} />
            </div>
            <span className="font-semibold text-lg">Tất cả bạn bè</span>
          </div>
        </Link>
      </div>
      <div className="px-2">
        <Link to={'/friends/invited'}>
          <div
            className={`flex items-center justify-start gap-2 p-2 hover:bg-gray-200 cursor-pointer rounded-md dark:hover:bg-dark-icon-story ${
              pathname === '/friends/invited'
                ? 'bg-gray-200 dark:bg-dark-icon-story'
                : ''
            }`}
          >
            <div
              className={`p-2 rounded-full  cursor-pointer  ${
                pathname === '/friends/invited'
                  ? 'text-white bg-blue-500'
                  : 'bg-gray-200 dark:bg-dark-icon-story-hover'
              }`}
            >
              <RiUserSharedFill size={20} />
            </div>
            <span className="font-semibold text-lg">Lời mời đã gửi</span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default LeftBar
