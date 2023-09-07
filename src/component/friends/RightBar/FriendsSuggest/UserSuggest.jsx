import React, { useState } from 'react'
import PopupUser from '../../../user/PopupUser'

const UserSuggest = ({ handleSetView }) => {
  return (
    <div
      className="w-full flex items-start p-4 hover:bg-gray-100 dark:hover:bg-dark-icon-story cursor-pointer gap-x-2"
      onClick={handleSetView}
    >
      <img
        src="https://scontent.fhan15-2.fna.fbcdn.net/v/t39.30808-6/353056562_915817816192346_4112625160337329471_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=EJj50W6YnhEAX9XCrXd&_nc_ht=scontent.fhan15-2.fna&oh=00_AfDoA-zhgrn2BexwnSUCqCsDFNCneOlywBEAcsfSk1w8Yw&oe=64F0ACF3"
        alt=""
        className="min-w-[50px] w-[50px] h-[50px] rounded-full shadow-md cursor-pointer"
      />
      <div className="flex flex-col justify-start w-full">
        <span className="font-semibold">Ha ngu vcl</span>
        <div className="flex flex-col items-start gap-y-2 p-2">
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
        <div className="flex items-center justify-between gap-x-4">
          <button className="w-full text-[15px] text-white font-semibold bg-blue-500 hover:bg-blue-600 rounded-lg py-2">
            Thêm bạn bè
          </button>
          <button className="w-full text-[15px] dark:text-white font-semibold text-dark-nav bg-gray-200 hover:bg-gray-300 dark:bg-dark-icon-story dark:hover:bg-dark-icon-story-hover rounded-lg py-2">
            Xóa, gỡ
          </button>
        </div>
      </div>
    </div>
  )
}

export default UserSuggest
