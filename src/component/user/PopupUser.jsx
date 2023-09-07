import React from 'react'
import { AiFillHome } from 'react-icons/ai'
import { BsMessenger } from 'react-icons/bs'
import { FaUserCheck } from 'react-icons/fa'
import { RiUserSharedFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const PopupUser = () => {
  return (
    <div className="flex items-start justify-start gap-2 relative group">
      <Link to={'/123'}>
        <img
          src="https://scontent.fhan15-2.fna.fbcdn.net/v/t39.30808-6/353056562_915817816192346_4112625160337329471_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=EJj50W6YnhEAX9XCrXd&_nc_ht=scontent.fhan15-2.fna&oh=00_AfDoA-zhgrn2BexwnSUCqCsDFNCneOlywBEAcsfSk1w8Yw&oe=64F0ACF3"
          alt=""
          className="min-w-[40px] object-cover w-[40px] h-[40px] rounded-full cursor-pointer border border-gray-400 shadow"
        />
      </Link>
      <Link to={'/123'}>
        <span className="font-semibold max-w-[150px] truncate line-clamp-1 text-ellipsis overflow-hidden hover:underline cursor-pointer">
          Hang u vcl
        </span>
      </Link>

      <div className="absolute bg-white gap-y-2 dark:bg-dark-nav shadow-lg dark:border-dark-icon border z-[3] p-4 flex-col rounded-md group-hover:flex hidden top-10 left-0 translate-x-0">
        <div className="flex items-start justify-start gap-4 max-w-[400px] w-max">
          <Link to={'/123'}>
            <img
              src="https://scontent.fhan15-2.fna.fbcdn.net/v/t39.30808-6/353056562_915817816192346_4112625160337329471_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=EJj50W6YnhEAX9XCrXd&_nc_ht=scontent.fhan15-2.fna&oh=00_AfDoA-zhgrn2BexwnSUCqCsDFNCneOlywBEAcsfSk1w8Yw&oe=64F0ACF3"
              alt=""
              className="min-w-[40px] object-cover w-[40px] h-[40px] rounded-full cursor-pointer border border-gray-400 shadow"
            />
          </Link>
          <div className="flex flex-col justify-start gap-y-4 h-full w-full">
            <Link to={'/123'}>
              <span className="font-semibold max-w-[150px] truncate line-clamp-1 text-ellipsis overflow-hidden hover:underline cursor-pointer">
                Hang u vcl
              </span>
            </Link>

            <div className="w-full flex items-start gap-4 break-words">
              <AiFillHome
                size={20}
                className="text-gray-500"
              />
              <span className="flex line-clamp-2 text-inherit gap-1">
                Sống tại
                <span className="font-semibold hover:underline cursor-pointer text-inherit">
                  Thành phố Hồ Chí Minh
                </span>
              </span>
            </div>
            <span className="max-w-[200px] flex items-start gap-4 justify-start">
              <RiUserSharedFill
                size={20}
                className="text-gray-500"
              />
              57 bạn bè
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between gap-4 text-sm font-semibold">
          {/* <button className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 rounded-md p-2 w-full text-white">
            <FaUserPlus /> Thêm bạn bè
          </button> */}
          <button className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 rounded-md p-2 w-full text-white">
            <FaUserCheck size={18} /> Bạn bè
          </button>
          <button className="flex items-center justify-center gap-2 bg-gray-200 dark:bg-dark-icon-story rounded-md w-full p-2 hover:bg-gray-300 dark:hover:bg-dark-icon-story-hover">
            <BsMessenger size={18} /> Nhắn tin
          </button>
        </div>
      </div>
    </div>
  )
}

export default PopupUser
