import React from 'react'
import {
  BsArrowLeft,
  BsFillCameraVideoFill,
  BsFillInfoCircleFill,
  BsFillTelephoneFill,
} from 'react-icons/bs'

const HeaderChat = ({ handleInfo, handleSetCloseChat }) => {
  return (
    <header className="flex items-center justify-between p-2 border-b border-gray-200 dark:border-dark-icon-story-hover">
      <div className="flex items-center justify-start gap-2">
        <button
          onClick={handleSetCloseChat}
          className="p-2 md:hidden rounded-full hover:bg-gray-200 dark:hover:bg-dark-icon-story-hover dark:bg-dark-icon-story"
        >
          <BsArrowLeft />
        </button>
        <div className="flex items-center p-1 rounded-md gap-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-dark-icon-story-hover">
          <img
            src="https://scontent.fhan5-11.fna.fbcdn.net/v/t39.30808-1/353056562_915817816192346_4112625160337329471_n.jpg?stp=c0.48.160.160a_dst-jpg_p160x160&_nc_cat=100&ccb=1-7&_nc_sid=fe8171&_nc_ohc=qwzobo5I_hgAX-bhEmI&_nc_ht=scontent.fhan5-11.fna&oh=00_AfBdIyG-Hpw4xWh6CoLr1ExYpEGbLQwRRrNtSY7GFsKXDw&oe=64FB6E35"
            alt=""
            className="w-[50px] h-[50px] rounded-full"
          />
          <span className="font-semibold text-lg">ha ngu vcl</span>
        </div>
      </div>
      <div className="flex items-center justify-end gap-4">
        <div className="p-2 rounded-full hover:bg-gray-200 cursor-pointer dark:bg-dark-icon-hover">
          <BsFillTelephoneFill
            size={20}
            className="text-blue-500"
          />
        </div>
        <div className="p-2 rounded-full hover:bg-gray-200 cursor-pointer dark:bg-dark-icon-hover">
          <BsFillCameraVideoFill
            size={20}
            className="text-blue-500"
          />
        </div>
        <div
          className="p-2 rounded-full hover:bg-gray-200 cursor-pointer dark:bg-dark-icon-hover"
          onClick={() => handleInfo()}
        >
          <BsFillInfoCircleFill
            size={20}
            className="text-blue-500"
          />
        </div>
      </div>
    </header>
  )
}

export default HeaderChat
