import React, { useState } from 'react'
import PopupUser from '../../../user/PopupUser'
import { BsThreeDots } from 'react-icons/bs'
import ActionsFriend from './ActionsFriend'
import { Link } from 'react-router-dom'

const Friend = ({ handleSetView, friend }) => {
  return (
    <div
      className="w-full flex relative items-start p-4 hover:bg-gray-100 dark:hover:bg-dark-icon-story cursor-pointer gap-x-4"
      onClick={() => handleSetView(friend)}
    >
      <img
        src={friend?.avatar}
        alt=""
        className="min-w-[50px] w-[50px] h-[50px] rounded-full shadow-md cursor-pointer"
      />
      <div className="flex flex-col justify-start w-full">
        <span className="font-semibold">{friend?.name}</span>
        <span className="text-sm font-light">
          {friend?.friends?.length} bạn chung
        </span>
      </div>
      <ActionsFriend friendId={friend?._id} />
    </div>
  )
}

export default Friend
