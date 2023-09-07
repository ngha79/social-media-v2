import React from 'react'
import { AiOutlineClose, AiOutlineDown, AiOutlineMinus } from 'react-icons/ai'
import { BsFillCameraVideoFill } from 'react-icons/bs'
import { IoMdCall } from 'react-icons/io'

const HeaderBoxChat = () => {
  return (
    <div className="h-max border-b border-gray-200 dark:border-dark-icon-story-hover flex items-center justify-between">
      <div
        className="flex items-center gap-2 p-1 hover:bg-gray-200 dark:hover:bg-dark-icon-story-hover rounded-md cursor-pointer"
        title="Cài đặt chat"
      >
        <div className="w-max hover:bg-gray-200 dark:hover:bg-dark-icon-story-hover p-1 rounded-md">
          <img
            src="https://scontent.fhan5-11.fna.fbcdn.net/v/t39.30808-1/353056562_915817816192346_4112625160337329471_n.jpg?stp=c0.48.160.160a_dst-jpg_p160x160&_nc_cat=100&ccb=1-7&_nc_sid=fe8171&_nc_ohc=qwzobo5I_hgAX-bhEmI&_nc_ht=scontent.fhan5-11.fna&oh=00_AfBdIyG-Hpw4xWh6CoLr1ExYpEGbLQwRRrNtSY7GFsKXDw&oe=64FB6E35"
            alt=""
            className="w-[35px] h-[35px] rounded-full"
          />
        </div>
        <div className="flex flex-col">
          <h3 className="font-semibold text-[15px] leading-5">Handansfasd</h3>
          <span className="text-[13px] leading-4">Đang hoạt động</span>
        </div>
        <AiOutlineDown size={12} />
      </div>
      <div className="flex items-center justify-end p-1 gap-2">
        <div
          className="p-1 cursor-pointer hover:bg-gray-200 dark:hover:bg-dark-icon-story-hover rounded-full"
          title="Bắt đầu gọi thoại"
        >
          <IoMdCall />
        </div>
        <div
          className="p-1 cursor-pointer hover:bg-gray-200 dark:hover:bg-dark-icon-story-hover rounded-full"
          title="Bắt đầu gọi Video"
        >
          <BsFillCameraVideoFill />
        </div>
        <div
          className="p-1 cursor-pointer hover:bg-gray-200 dark:hover:bg-dark-icon-story-hover rounded-full"
          title="Thu nhỏ đoạn chat"
        >
          <AiOutlineMinus />
        </div>
        <div
          className="p-1 cursor-pointer hover:bg-gray-200 dark:hover:bg-dark-icon-story-hover rounded-full"
          title="Đóng đoạn chat"
        >
          <AiOutlineClose />
        </div>
      </div>
    </div>
  )
}

export default HeaderBoxChat
