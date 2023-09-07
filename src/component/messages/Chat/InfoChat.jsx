import React from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { AiOutlineClose, AiOutlineSearch } from 'react-icons/ai'
import { IoIosNotifications, IoMdNotificationsOff } from 'react-icons/io'
import ListFeature from './ListFeature'

const InfoChat = ({ handleInfo }) => {
  return (
    <div className="max-w-[400px] fixed right-0 top-[58px] h-full border-l border-gray-200 dark:dark:border-dark-icon-story-hover bg-white dark:bg-dark-nav w-full overflow-y-scroll flex flex-col items-center pt-8">
      <div
        onClick={handleInfo}
        className="absolute left-4 top-4 p-2 rounded-full bg-gray-200 hover:bg-gray-300 dark:hover:bg-dark-icon-story-hover dark:bg-dark-icon-story"
      >
        <AiOutlineClose />
      </div>
      <div className="flex flex-col items-center">
        <img
          src="https://scontent.fhan5-11.fna.fbcdn.net/v/t39.30808-6/353056562_915817816192346_4112625160337329471_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=qwzobo5I_hgAX-bhEmI&_nc_ht=scontent.fhan5-11.fna&oh=00_AfCmudUG6RpVffoDwhDKT90sVfO0slo4eJl_6RW2FTKACg&oe=64FA9033"
          alt=""
          className="w-[60px] h-[60px] rounded-full"
        />
        <span className="text-lg font-semibold max-w-[200px] text-center line-clamp-3">
          ha ngu vcl 123 ahihiaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaa
          aaaaaaaaaa
        </span>
      </div>
      <div className="flex items-center mt-4">
        <div className="flex flex-col items-center justify-center">
          <div className="p-2 rounded-full cursor-pointer w-max bg-gray-200 hover:bg-gray-300 dark:bg-dark-icon-story dark:hover:bg-dark-icon-story-hover">
            <FaUserCircle size={20} />
          </div>
          <span className="text-sm max-w-[80px] truncate">Trang cá nhân</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="p-2 rounded-full cursor-pointer w-max bg-gray-200 hover:bg-gray-300 dark:bg-dark-icon-story dark:hover:bg-dark-icon-story-hover">
            <IoIosNotifications size={20} />
          </div>
          <span className="text-sm max-w-[80px] truncate">Tắt thông báo</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="p-2 rounded-full cursor-pointer w-max bg-gray-200 hover:bg-gray-300 dark:bg-dark-icon-story dark:hover:bg-dark-icon-story-hover">
            <IoMdNotificationsOff size={20} />
          </div>
          <span className="text-sm max-w-[80px] truncate">Bật thông báo</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="p-2 rounded-full cursor-pointer w-max bg-gray-200 hover:bg-gray-300 dark:bg-dark-icon-story dark:hover:bg-dark-icon-story-hover">
            <AiOutlineSearch size={20} />
          </div>
          <span className="text-sm max-w-[80px] truncate">Tìm kiếm</span>
        </div>
      </div>
      <ListFeature />
    </div>
  )
}

export default InfoChat
