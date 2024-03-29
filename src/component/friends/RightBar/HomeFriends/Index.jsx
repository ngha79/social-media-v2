import React, { useEffect } from 'react'
import FriendCart from '../FriendCart/FriendCart'
import { AiFillCaretDown } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import LeftBar from '../../LeftBar/Index'

const HomeFriends = () => {
  const { friendsInvited, friendsSuggest, friendsRequest, friends } =
    useSelector((state) => state.friends)

  return (
    <div className="top-[58px] h-[calc(100vh-58px)] relative w-full flex flex-col md:flex-row">
      <LeftBar />
      <div className="flex flex-col p-8 gap-y-8 w-full">
        {friendsRequest?.length > 0 && (
          <div className="flex flex-col gap-y-4 w-full border-b pb-8 dark:border-dark-icon-story-hover border-gray-400">
            <div className="flex items-center justify-between">
              <h1 className="font-semibold text-lg">Lời mời kết bạn</h1>
              <Link to={'/friends/requests'}>
                <button className="text-blue-500 text-lg">Xem tất cả</button>
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-1 min-[900px]:grid-cols-2 lg:grid-cols-3 gap-4 xl:grid-cols-4 min-[1460px]:grid-cols-5 min-[1600px]:grid-cols-6">
              {friendsRequest?.map((friend) => (
                <FriendCart
                  key={friend?._id}
                  friend={friend}
                />
              ))}
            </div>
            <Link to={'/friends/requests'}>
              <button className="w-full text-lg hover:bg-gray-300 dark:hover:bg-dark-icon-story-hover dark:bg-dark-icon-story py-2 font-semibold text-blue-500 rounded-md flex items-center justify-center gap-2">
                Xem Thêm <AiFillCaretDown />
              </button>
            </Link>
          </div>
        )}
        <div className="flex flex-col gap-y-4 w-full">
          <div className="flex items-center justify-between">
            <h1 className="font-semibold text-lg">
              Những người bạn có thể biết
            </h1>
            <Link to={'/friends/requests'}>
              <button className="text-blue-500 text-lg">Xem tất cả</button>
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-1 min-[900px]:grid-cols-2 lg:grid-cols-3 gap-4 xl:grid-cols-4 min-[1460px]:grid-cols-5 min-[1600px]:grid-cols-6">
            {friendsSuggest?.map((friend) => (
              <FriendCart
                key={friend?._id}
                friend={friend}
              />
            ))}
          </div>
          <Link to={'/friends/suggestions'}>
            <button className="w-full text-lg hover:bg-gray-300 dark:hover:bg-dark-icon-story-hover dark:bg-dark-icon-story py-2 font-semibold text-blue-500 rounded-md flex items-center justify-center gap-2">
              Xem Thêm <AiFillCaretDown />
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HomeFriends
