import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { getAllFriendsInvitedUser } from '../../../../store/friends/friendSlice'
import ListUserInvited from './ListUserInvited'
import { getAllPostProfile } from '../../../../store/post/postSlice'
import { getProfileUser } from '../../../../store/auth/authSlice'
import Profile from '../../../../pages/Profile'

const FriendInvited = () => {
  const { user, profile } = useSelector((state) => state.auth)
  const { friendsInvited } = useSelector((state) => state.friends)
  const [view, setView] = useState(false)
  const dispatch = useDispatch()
  const handleSetView = (user) => {
    setView(true)
    window.history.replaceState(
      { userId: user?._id, name: user?.name },
      '',
      `/${user?.name}/${user?._id}`
    )
    dispatch(getAllPostProfile({ userId: user?._id }))
    dispatch(getProfileUser(user?._id))
  }

  useEffect(() => {
    return () => {
      dispatch(
        getAllFriendsInvitedUser({ userId: user?._id, page: 1, limit: 20 })
      )
    }
  }, [])

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
            <h3 className="text-[20px] font-bold">Lời mời đã gửi</h3>
          </div>
        </div>
        <ListUserInvited
          handleSetView={handleSetView}
          friendsInvited={friendsInvited}
        />
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
export default FriendInvited
