import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'

const PopupChat = () => {
  return (
    <div className="relative cursor-pointer group">
      <img
        src="https://scontent.fhan5-11.fna.fbcdn.net/v/t39.30808-1/353056562_915817816192346_4112625160337329471_n.jpg?stp=c0.48.160.160a_dst-jpg_p160x160&_nc_cat=100&ccb=1-7&_nc_sid=fe8171&_nc_ohc=qwzobo5I_hgAX-bhEmI&_nc_ht=scontent.fhan5-11.fna&oh=00_AfBdIyG-Hpw4xWh6CoLr1ExYpEGbLQwRRrNtSY7GFsKXDw&oe=64FB6E35"
        alt=""
        className="w-[50px] h-[50px] rounded-full"
      />
      <div className="absolute -top-1 shadow-sm -right-1 hidden p-1 group-hover:block bg-white dark:bg-dark-icon-story dark:hover:bg-dark-icon-story-hover rounded-full hover:bg-gray-100">
        <AiOutlineClose size={16} />
      </div>
      <div className="absolute bottom-[2px] shadow-sm right-[2px] p-[1px] bg-white rounded-full">
        <div className="bg-green-500 p-1 rounded-full"></div>
      </div>
    </div>
  )
}

export default PopupChat
