import React, { useState } from 'react'
import PopupUser from '../../../user/PopupUser'
import { BsThreeDots } from 'react-icons/bs'
import ActionsFriend from './ActionsFriend'

const Friend = ({ handleSetView }) => {
  return (
    <div
      className="w-full flex relative items-start p-4 hover:bg-gray-100 dark:hover:bg-dark-icon-story cursor-pointer gap-x-4"
      onClick={handleSetView}
    >
      <img
        src="https://scontent.fhan15-2.fna.fbcdn.net/v/t39.30808-6/353056562_915817816192346_4112625160337329471_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=EJj50W6YnhEAX9XCrXd&_nc_ht=scontent.fhan15-2.fna&oh=00_AfDoA-zhgrn2BexwnSUCqCsDFNCneOlywBEAcsfSk1w8Yw&oe=64F0ACF3"
        alt=""
        className="min-w-[50px] w-[50px] h-[50px] rounded-full shadow-md cursor-pointer"
      />
      <div className="flex flex-col justify-start w-full">
        <span className="font-semibold">Ha ngu vcl</span>
        <span className="text-sm font-light">24 bạn chung</span>
      </div>
      <ActionsFriend />
    </div>
  )
}

export default Friend
