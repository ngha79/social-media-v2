import React from 'react'
import {
  BiLogoMessenger,
  BiSolidPencil,
  BiSolidUserCheck,
} from 'react-icons/bi'
import ListFunction from './ListFunction'
import UpdateProfile from './UpdateProfile/UpdateProfile'
const DetailProfile = () => {
  return (
    <div className="flex flex-col w-full items-center">
      <div className="flex items-center flex-col gap-y-8 min-[920px]:flex-row p-8 max-w-[1200px] justify-center w-full">
        <div className="flex items-center justify-start flex-col min-[920px]:flex-row gap-4 gap-y-12 w-full">
          <div className="relative w-[176px]">
            <div className="w-[176px] absolute bottom-0 left-0 translate-y-[40px] rounded-full p-1 bg-white">
              <img
                src="https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-6/240527394_520194609088004_8050637018545073386_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=1b51e3&_nc_ohc=c7l47JoSOEwAX9SOBiD&_nc_ht=scontent.fhan5-2.fna&oh=00_AfDSfjWouXoxoDBSfXHtnjWMrRxDlBNNakYd7hIpcltf3Q&oe=64F7F7A7"
                alt=""
                className="w-[168px] h-[168px] rounded-full"
              />
            </div>
          </div>
          <div className="flex flex-col gap-y-2 items-center md:items-start">
            <h1 className="font-bold text-3xl">Han gu vcl</h1>
            <span className="hover:underline text-sm cursor-pointer font-semibold">
              125 bạn bè
            </span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          {/* <button className="p-2 w-max flex items-center gap-1 font-semibold text-[15px] bg-gray-200 hover:bg-gray-300 dark:bg-dark-icon-story hover:dark:bg-dark-icon-story-hover rounded-md">
            <BiSolidUserCheck size={20} /> Bạn bè
          </button>
          <button className="p-2 w-max text-white/90 flex items-center gap-1 font-semibold text-[15px] bg-blue-500 hover:bg-blue-600 rounded-md">
            <BiLogoMessenger size={20} />
            Nhắn tin
          </button> */}
          <UpdateProfile />
        </div>
      </div>
      <div className="flex items-center justify-center w-full">
        <ListFunction />
      </div>
    </div>
  )
}

export default DetailProfile
