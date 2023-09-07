import React, { useState } from 'react'
import { BsEmojiSmile, BsReplyFill, BsThreeDotsVertical } from 'react-icons/bs'
import SettingMessage from './SettingMessage'

const Message = ({ type }) => {
  const [more, setMore] = useState(false)
  const handleShowMore = () => {
    setMore(true)
  }
  const handleCloseMore = () => {
    setMore(false)
  }
  return (
    <>
      {type === 'send' ? (
        <div className="shrink grow flex justify-end p-2">
          <div
            title="haha"
            className="py-2 px-4 rounded-3xl relative group  bg-blue-500 text-white max-w-[60%]"
          >
            haha haha haha haha haha haha haha haha haha haha haha haha haha
            haha haha haha haha haha haha haha haha haha haha haha haha haha
            haha haha haha haha haha haha haha haha haha haha haha haha haha
            haha haha haha haha haha haha haha haha haha haha haha haha haha
            haha haha haha haha haha haha haha haha haha haha haha haha haha
            haha haha haha haha haha haha haha haha haha haha haha haha haha
            haha haha haha haha haha haha haha haha
            <div
              className={`absolute right-[calc(100%-16px)] z-10 pr-6 top-[50%] translate-y-[-50%] h-full flex-row-reverse items-center gap-1 p-2 ${
                more ? 'flex' : 'hidden'
              } group-hover:flex`}
            >
              <button
                title="Bày tỏ cảm xúc"
                className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-dark-icon-story-hover text-light-gray"
              >
                <BsEmojiSmile />
              </button>
              <button
                title="Trả lời"
                className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-dark-icon-story-hover text-light-gray"
              >
                <BsReplyFill />
              </button>
              <SettingMessage
                handleShowMore={handleShowMore}
                handleCloseMore={handleCloseMore}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="shrink grow flex justify-start items-center gap-2 p-2">
          <img
            src="https://scontent.fhan5-11.fna.fbcdn.net/v/t39.30808-6/353056562_915817816192346_4112625160337329471_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=qwzobo5I_hgAX-bhEmI&_nc_ht=scontent.fhan5-11.fna&oh=00_AfCmudUG6RpVffoDwhDKT90sVfO0slo4eJl_6RW2FTKACg&oe=64FA9033"
            alt=""
            className="w-[30px] h-[30px] rounded-full"
            title="Hangu vcl"
          />
          <div
            title="haha"
            className="py-2 px-4 group rounded-3xl relative  bg-blue-500 text-white max-w-[60%]"
          >
            haha
            <div
              className={`absolute left-[calc(100%-16px)] z-10 pl-6 top-[50%] translate-y-[-50%] h-full items-center gap-1 p-2 ${
                more ? 'flex' : 'hidden'
              } group-hover:flex`}
            >
              <button
                title="Bày tỏ cảm xúc"
                className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-dark-icon-story-hover text-light-gray"
              >
                <BsEmojiSmile />
              </button>
              <button
                title="Trả lời"
                className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-dark-icon-story-hover text-light-gray"
              >
                <BsReplyFill />
              </button>
              <SettingMessage
                handleShowMore={handleShowMore}
                handleCloseMore={handleCloseMore}
              />
            </div>
          </div>
        </div>
      )}
      <div className="shrink grow flex justify-start items-center gap-2 p-2">
        <img
          src="https://scontent.fhan5-11.fna.fbcdn.net/v/t39.30808-6/353056562_915817816192346_4112625160337329471_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=qwzobo5I_hgAX-bhEmI&_nc_ht=scontent.fhan5-11.fna&oh=00_AfCmudUG6RpVffoDwhDKT90sVfO0slo4eJl_6RW2FTKACg&oe=64FA9033"
          alt=""
          className="w-[30px] h-[30px] rounded-full"
          title="Hangu vcl"
        />
        <div
          title="haha"
          className="py-2 px-4 group rounded-3xl relative  bg-blue-500 text-white max-w-[60%]"
        >
          Tin nhắn đã xóa
        </div>
      </div>
      <div className="shrink grow flex justify-end p-2">
        <div
          title="haha"
          className="py-2 px-4 rounded-3xl relative group  bg-blue-500 text-white max-w-[60%]"
        >
          Tin nhắn đã xóa
        </div>
      </div>
    </>
  )
}

export default Message
