import React from 'react'
import { FaUserFriends } from 'react-icons/fa'
import { BsMessenger } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const HeaderLeft = () => {
  const { user } = useSelector((state) => state.auth)
  return (
    <div className="flex flex-col justify-start text-[15px] w-full">
      <Link to={`/${user?.name}/${user?._id}`}>
        <div className="flex items-center cursor-pointer dark:hover:bg-item-hover hover:bg-dark-item-hover rounded-md justify-start gap-2 p-2">
          <img
            src={user?.avatar}
            alt=""
            className="min-w-[40px] object-cover w-[40px] h-[40px] rounded-full cursor-pointer border border-gray-400 shadow"
          />
          <span className="font-semibold max-w-[150px] truncate line-clamp-1 text-ellipsis overflow-hidden">
            {user?.name}
          </span>
        </div>
      </Link>
      <Link to={'/friends'}>
        <div className="flex items-center cursor-pointer dark:hover:bg-item-hover hover:bg-dark-item-hover rounded-md justify-start gap-2 p-2">
          <div className="p-[6px]">
            <FaUserFriends
              size={28}
              className="text-blue-500"
            />
          </div>
          <span className="font-semibold ">Bạn bè</span>
        </div>
      </Link>
      <Link to={'/messages/all'}>
        <div className="flex items-center cursor-pointer dark:hover:bg-item-hover hover:bg-dark-item-hover rounded-md justify-start gap-2 p-2">
          <div className="p-2">
            <BsMessenger
              size={24}
              className="text-blue-500"
            />
          </div>
          <span className="font-semibold ">Tin nhắn</span>
        </div>
      </Link>
    </div>
  )
}

export default HeaderLeft
