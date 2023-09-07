import React, { useState } from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import ListUserSuggest from './ListUserSuggest'
import ProfileUser from '../../../../pages/ProfileUser'

const FriendsSuggest = () => {
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
            <h3 className="text-[20px] font-bold">Gợi ý</h3>
          </div>
        </div>
        <h2 className="font-semibold px-4 py-2">Những người bạn có thể biết</h2>
        <ListUserSuggest handleSetView={handleSetView} />
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

export default FriendsSuggest
