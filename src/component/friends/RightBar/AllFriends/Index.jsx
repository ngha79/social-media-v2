import React, { useState } from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import ProfileUser from '../../../../pages/ProfileUser'
import { AiOutlineSearch } from 'react-icons/ai'
import ListFriends from './ListFriends'

const AllFriends = () => {
  const [view, setView] = useState(false)

  const handleSetView = () => {
    setView(true)
    window.history.replaceState(null, '', '/hanguvcl')
  }

  return (
    <div className="flex h-full transition-all duration-200">
      <div className="fixed left-0 top-[58px] bg-white dark:bg-dark-nav h-full w-[360px]">
        <div className="flex items-center justify-start gap-4 p-2">
          <Link to={'/friends'}>
            <div className="p-2 rounded-full cursor-pointer hover:bg-gray-300 dark:hover:bg-dark-icon-story-hover">
              <BsArrowLeft />
            </div>
          </Link>
          <div className="flex flex-col">
            <Link
              to={'/friends'}
              className="leading-4"
            >
              <span className="text-sm hover:underline">Bạn bè</span>
            </Link>
            <h3 className="text-[20px] font-bold">Tất cả bạn bè</h3>
          </div>
        </div>
        <div className="flex gap-2 items-center justify-start bg-gray-100 dark:bg-dark-search rounded-2xl p-2 mx-4 mb-4">
          <AiOutlineSearch
            size={24}
            className="text-gray-500 dark:text-dark-hover"
          />
          <input
            type="text"
            name=""
            placeholder="Tìm kiếm bạn bè"
            id=""
            className="w-full outline-none bg-gray-100 dark:bg-dark-search text-[15px]"
          />
        </div>
        <h2 className="font-semibold px-4 py-2 border-t border-gray-300 dark:border-dark-icon-story-hover">
          113 người bạn
        </h2>
        <ListFriends handleSetView={handleSetView} />
      </div>
      {view ? (
        <div className="w-full h-full">
          <ProfileUser />
        </div>
      ) : (
        <div className="flex items-center justify-center w-full h-full">
          <span className="text-lg font-bold text-gray-500 dark:text-light-search">
            Chọn tên của người mà bạn muốn xem trước trang cá nhân.
          </span>
        </div>
      )}
    </div>
  )
}

export default AllFriends
