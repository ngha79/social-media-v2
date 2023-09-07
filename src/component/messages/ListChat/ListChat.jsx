import React from 'react'
import { BsThreeDots } from 'react-icons/bs'
import SettingChat from './SettingChat'
import { AiOutlineSearch } from 'react-icons/ai'
import TypeChatList from './TypeChatList'

const ListChat = ({ handleSetOpenChat, openChat }) => {
  return (
    <div
      className={`w-full ${
        openChat ? 'hidden md:block' : 'block'
      } max-h-[calc(100vh-58px)] min-[900px]:max-w-[360px] h-full border-r border-gray-200 dark:border-dark-icon-story-hover bg-white dark:bg-dark-nav`}
    >
      <div className="flex items-center justify-between p-4">
        <h1 className="text-2xl font-bold">Chat</h1>
        <SettingChat />
      </div>
      <div className="flex gap-2 p-2 mx-4 items-center rounded-2xl bg-gray-100 dark:bg-dark-search">
        <AiOutlineSearch />
        <input
          type="text"
          placeholder="Tìm kiếm trên Messenger"
          className="outline-none w-full bg-gray-100 dark:bg-dark-search"
        />
      </div>
      <TypeChatList handleSetOpenChat={handleSetOpenChat} />
    </div>
  )
}

export default ListChat
