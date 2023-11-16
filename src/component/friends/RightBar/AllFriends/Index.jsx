import React, { useEffect, useState } from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { AiOutlineSearch } from 'react-icons/ai'
import ListFriends from './ListFriends'
import { useDispatch, useSelector } from 'react-redux'
import { getProfileUser } from '../../../../store/auth/authSlice'
import { getAllPostProfile } from '../../../../store/post/postSlice'
import Profile from '../../../../pages/Profile'

const AllFriends = () => {
  const { user, profile } = useSelector((state) => state.auth)
  const { friends } = useSelector((state) => state.friends)
  const [view, setView] = useState(false)
  const dispatch = useDispatch()
  const handleSetView = (user) => {
    setView(true)
    window.history.replaceState(
      { userId: user?._id, name: user?.name },
      'profile',
      `/${user?.name}/${user?._id}`
    )
    dispatch(getAllPostProfile({ userId: user?._id }))
    dispatch(getProfileUser(user?._id))
  }
  return (
    <div className="flex flex-col md:flex-row w-full top-[57px] relative max-h-[calc(100vh-58px)] h-full transition-all duration-200 overflow-hidden">
      <div className="bg-white dark:bg-dark-nav h-full w-full md:max-w-[360px]">
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
          {friends?.length} người bạn
        </h2>
        <ListFriends handleSetView={handleSetView} />
      </div>
      <div className="flex-[4]">
        {view ? (
          <div className="w-full z-[2] md:w-4/5 -top-[57px] absolute">
            <Profile />
          </div>
        ) : (
          <div className="md:flex hidden items-center justify-center w-full h-full">
            <span className="text-lg font-bold text-gray-500 dark:text-light-search mt-20">
              Chọn tên của người mà bạn muốn xem trước trang cá nhân.
            </span>
          </div>
        )}
      </div>
    </div>
  )
}

export default AllFriends
