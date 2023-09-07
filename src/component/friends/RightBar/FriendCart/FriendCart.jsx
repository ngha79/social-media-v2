import React from 'react'
import PopupUser from '../../../user/PopupUser'
import { Link } from 'react-router-dom'

const FriendCart = () => {
  return (
    <div className="bg-white dark:bg-dark-nav rounded-md shadow-lg max-w-[260px]">
      <Link to={'/123'}>
        <img
          src="https://scontent.fhan15-2.fna.fbcdn.net/v/t39.30808-6/353056562_915817816192346_4112625160337329471_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=EJj50W6YnhEAX9XCrXd&_nc_ht=scontent.fhan15-2.fna&oh=00_AfDoA-zhgrn2BexwnSUCqCsDFNCneOlywBEAcsfSk1w8Yw&oe=64F0ACF3"
          alt=""
          className="w-full min-h-[200px] rounded-t-md max-h-[300px] lg:h-[200px] cursor-pointer shadow"
        />
      </Link>

      <div className="flex flex-col items-start gap-y-2 p-2">
        <PopupUser />
        <div className="flex items-center justify-start gap-2 text-[15px] cursor-pointer">
          <div className="flex items-center">
            <img
              src="https://scontent.fhan15-2.fna.fbcdn.net/v/t39.30808-6/353056562_915817816192346_4112625160337329471_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=EJj50W6YnhEAX9XCrXd&_nc_ht=scontent.fhan15-2.fna&oh=00_AfDoA-zhgrn2BexwnSUCqCsDFNCneOlywBEAcsfSk1w8Yw&oe=64F0ACF3"
              alt=""
              className="w-[20px] h-[20px] rounded-full cursor-pointer border border-gray-400 shadow"
            />
            <img
              src="https://scontent.fhan15-2.fna.fbcdn.net/v/t39.30808-6/353056562_915817816192346_4112625160337329471_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=EJj50W6YnhEAX9XCrXd&_nc_ht=scontent.fhan15-2.fna&oh=00_AfDoA-zhgrn2BexwnSUCqCsDFNCneOlywBEAcsfSk1w8Yw&oe=64F0ACF3"
              alt=""
              className="w-[20px] h-[20px] rounded-full cursor-pointer border border-gray-400 shadow"
            />
          </div>
          <span>24 bạn chung</span>
        </div>
      </div>
      <div className="flex flex-col gap-y-2 p-2">
        <button className="w-full py-2 font-semibold text-[15px] rounded-md bg-blue-500 text-white hover:bg-blue-600">
          Xác nhận
        </button>
        <button className="w-full py-2 font-semibold text-[15px] rounded-md bg-gray-200 hover:bg-gray-300 dark:bg-dark-icon-story dark:hover:bg-dark-icon-story-hover">
          Xóa
        </button>
      </div>
    </div>
  )
}

export default FriendCart
