import React from 'react'
import { FaUserFriends } from 'react-icons/fa'
import { BsMessenger } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const HeaderLeft = () => {
  return (
    <div className="flex flex-col justify-start text-[15px] w-full">
      <Link to={'/123'}>
        <div className="flex items-center cursor-pointer dark:hover:bg-item-hover hover:bg-dark-item-hover rounded-md justify-start gap-2 p-2">
          <img
            src="https://scontent.fhan15-2.fna.fbcdn.net/v/t39.30808-6/353056562_915817816192346_4112625160337329471_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=EJj50W6YnhEAX9XCrXd&_nc_ht=scontent.fhan15-2.fna&oh=00_AfDoA-zhgrn2BexwnSUCqCsDFNCneOlywBEAcsfSk1w8Yw&oe=64F0ACF3"
            alt=""
            className="min-w-[40px] object-cover w-[40px] h-[40px] rounded-full cursor-pointer border border-gray-400 shadow"
          />
          <span className="font-semibold max-w-[150px] truncate line-clamp-1 text-ellipsis overflow-hidden">
            Hang u vcl
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
      <Link to={'/messages'}>
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
