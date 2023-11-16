import React, { useState } from 'react'
import {
  BsEmojiAngry,
  BsEmojiSmile,
  BsReplyFill,
  BsThreeDotsVertical,
} from 'react-icons/bs'
import SettingMessage from './SettingMessage'
import { useSelector } from 'react-redux'
import moment from 'moment/min/moment-with-locales'
import ReactMessage from './ReactMessage/ReactMessage'
import { AiFillHeart } from 'react-icons/ai'
import { FaRegSurprise } from 'react-icons/fa'
import { TbMoodCry } from 'react-icons/tb'

const Message = ({ type, message }) => {
  const { user } = useSelector((state) => state.auth)
  const [more, setMore] = useState(false)
  const [reactMessage, setReactMessage] = useState(false)
  const handleShowMore = () => {
    setMore(true)
  }
  const handleCloseMore = () => {
    setMore(false)
  }
  const handleSet = (open) => {
    setReactMessage(open)
  }
  if (type === 'send') {
    return (
      <>
        {message?.isDeleted || message?.deletedUserIds?.includes(user?._id) ? (
          <div className="shrink grow flex justify-end p-2">
            <div
              title={moment(message?.createdAt).fromNow()}
              className="py-2 px-4 rounded-3xl relative group  bg-blue-500 text-white max-w-[60%]"
            >
              Tin nhắn đã xóa
            </div>
          </div>
        ) : (
          <div className="shrink grow flex justify-end p-2">
            <div className="flex flex-col max-w-[50%] items-end relative group">
              {message?.images?.length > 0 && (
                <div className="flex flex-wrap gap-2 justify-end w-max">
                  {message?.images?.map((image, i) => (
                    <img
                      src={image}
                      key={i}
                      className="max-w-[20%] min-w-[120px] md:max-h-[200px] max-h-[150px] border border-gray-200 dark:border-dark-icon-hover shadow-sm"
                    />
                  ))}
                </div>
              )}
              <div className="w-full">
                {message?.text && (
                  <div
                    title={moment(message?.createdAt).fromNow()}
                    className="py-2 px-4 rounded-xl bg-blue-500 text-white w-full break-words"
                  >
                    {message?.text}
                  </div>
                )}
              </div>
              {message?.reacts?.length > 0 && (
                <div className="absolute -bottom-4 overflow-hidden -space-x-1 flex items-center  bg-white text-gray-600 text-center rounded-full shadow-lg cursor-pointer">
                  {message.reacts.find((react) => react.type === 5) && (
                    <button className="flex items-center justify-center gap-2 w-[24px] h-[24px] p-1 border shadow-md rounded-full hover:bg-gray-200 bg-gray-100 dark:hover:bg-dark-icon-story-hover dark:bg-dark-icon-story">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5 text-blue-500"
                      >
                        <path d="M7.493 18.75c-.425 0-.82-.236-.975-.632A7.48 7.48 0 016 15.375c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23h-.777zM2.331 10.977a11.969 11.969 0 00-.831 4.398 12 12 0 00.52 3.507c.26.85 1.084 1.368 1.973 1.368H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 01-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227z" />
                      </svg>
                    </button>
                  )}
                  {message.reacts.find((react) => react.type === 0) && (
                    <button className="flex items-center justify-center gap-2 w-[24px] h-[24px] p-1 border shadow-md rounded-full hover:bg-gray-200 bg-gray-100 dark:hover:bg-dark-icon-story-hover dark:bg-dark-icon-story">
                      <AiFillHeart
                        size={20}
                        className="text-red-500"
                      />
                    </button>
                  )}
                  {message.reacts.find((react) => react.type === 1) && (
                    <button className="flex items-center justify-center gap-2 w-[24px] h-[24px] p-1 border shadow-md rounded-full hover:bg-gray-200 bg-gray-100 dark:hover:bg-dark-icon-story-hover dark:bg-dark-icon-story">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5 text-yellow-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                        />
                      </svg>
                    </button>
                  )}
                  {message.reacts.find((react) => react.type === 2) && (
                    <button className="flex items-center justify-center gap-2 w-[24px] h-[24px] p-1 border shadow-md rounded-full hover:bg-gray-200 bg-gray-100 dark:hover:bg-dark-icon-story-hover dark:bg-dark-icon-story">
                      <FaRegSurprise
                        size={20}
                        className="text-yellow-500"
                      />
                    </button>
                  )}
                  {message.reacts.find((react) => react.type === 3) && (
                    <button className="flex items-center justify-center gap-2 w-[24px] h-[24px] p-1 border shadow-md rounded-full hover:bg-gray-200 bg-gray-100 dark:hover:bg-dark-icon-story-hover dark:bg-dark-icon-story">
                      <TbMoodCry
                        size={22}
                        className="text-yellow-500"
                      />
                    </button>
                  )}
                  {message.reacts.find((react) => react.type === 4) && (
                    <button className="flex items-center justify-center gap-2 w-[24px] h-[24px] p-1 border shadow-md rounded-full hover:bg-gray-200 bg-gray-100 dark:hover:bg-dark-icon-story-hover dark:bg-dark-icon-story">
                      <BsEmojiAngry
                        size={20}
                        className="text-red-500"
                      />
                    </button>
                  )}
                  <span className="px-2 text-sm">
                    {message?.reacts?.length}
                  </span>
                </div>
              )}
              <div
                className={`absolute right-full z-10 pr-4 top-[50%] translate-y-[-50%] h-full flex-row-reverse items-center gap-1 p-2 ${
                  more || reactMessage ? 'flex' : 'hidden'
                } group-hover:flex`}
              >
                <ReactMessage
                  messageId={message?._id}
                  reacts={message?.reacts}
                  handleSet={handleSet}
                />
                <button
                  title="Trả lời"
                  className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-dark-icon-story-hover text-light-gray"
                >
                  <BsReplyFill />
                </button>
                <SettingMessage
                  messageId={message?._id}
                  userSend={message?.userSendId?._id}
                  handleShowMore={handleShowMore}
                  handleCloseMore={handleCloseMore}
                  type={'send'}
                />
              </div>
            </div>
          </div>
        )}
      </>
    )
  }
  return (
    <>
      {message?.isDeleted || message?.deletedUserIds?.includes(user?._id) ? (
        <div className="shrink pl-10 grow flex justify-start items-center gap-2 p-2">
          <div
            title={moment(message?.createdAt).fromNow()}
            className="py-2 px-4 group rounded-3xl relative  bg-blue-500 text-white max-w-[60%]"
          >
            Tin nhắn đã xóa
          </div>
        </div>
      ) : (
        <div className="shrink grow flex justify-start items-center gap-2 p-2">
          <img
            src={message?.userSendId?.avatar}
            alt=""
            className="w-[30px] h-[30px] rounded-full"
            title={`${message?.userSendId?.name}`}
          />
          <div className="flex flex-col max-w-[50%]">
            <div
              title={moment(message?.createdAt).fromNow()}
              className="py-2 px-4 group rounded-xl relative w-full bg-blue-500 text-white "
            >
              {message?.images?.length > 0 && (
                <div className="py-4 flex flex-wrap gap-2 justify-start max-w-[80%]">
                  {message?.images?.map((image, i) => (
                    <img
                      src={image}
                      key={i}
                      className="max-w-[20%] md:max-w-[150px] md:max-h-[200px] max-h-[150px] border border-gray-200 dark:border-dark-icon-hover shadow-sm"
                    />
                  ))}
                </div>
              )}
              {message?.text && (
                <span className="w-full break-words">{message?.text}</span>
              )}
              <div
                className={`absolute left-[calc(100%-16px)] z-10 pl-6 top-[50%] translate-y-[-50%] h-full items-center gap-1 p-2 ${
                  more ? 'flex' : 'hidden'
                } group-hover:flex`}
              >
                <ReactMessage
                  messageId={message?._id}
                  reacts={message?.reacts}
                  handleSet={handleSet}
                  type={'receiver'}
                />
                <button
                  title="Trả lời"
                  className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-dark-icon-story-hover text-light-gray"
                >
                  <BsReplyFill />
                </button>
                <SettingMessage
                  handleShowMore={handleShowMore}
                  handleCloseMore={handleCloseMore}
                  userSend={message?.userSendId?._id}
                  messageId={message?._id}
                  type={'receiver'}
                />
              </div>
              {message?.reacts?.length > 0 && (
                <div className="absolute -bottom-4 overflow-hidden -space-x-1 flex items-center  bg-white text-gray-600 text-center rounded-full shadow-lg cursor-pointer">
                  {message.reacts.find((react) => react.type === 5) && (
                    <button className="flex items-center justify-center gap-2 w-[24px] h-[24px] p-1 border shadow-md rounded-full hover:bg-gray-200 bg-gray-100 dark:hover:bg-dark-icon-story-hover dark:bg-dark-icon-story">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5 text-blue-500"
                      >
                        <path d="M7.493 18.75c-.425 0-.82-.236-.975-.632A7.48 7.48 0 016 15.375c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23h-.777zM2.331 10.977a11.969 11.969 0 00-.831 4.398 12 12 0 00.52 3.507c.26.85 1.084 1.368 1.973 1.368H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 01-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227z" />
                      </svg>
                    </button>
                  )}
                  {message.reacts.find((react) => react.type === 0) && (
                    <button className="flex items-center justify-center gap-2 w-[24px] h-[24px] p-1 border shadow-md rounded-full hover:bg-gray-200 bg-gray-100 dark:hover:bg-dark-icon-story-hover dark:bg-dark-icon-story">
                      <AiFillHeart
                        size={20}
                        className="text-red-500"
                      />
                    </button>
                  )}
                  {message.reacts.find((react) => react.type === 1) && (
                    <button className="flex items-center justify-center gap-2 w-[24px] h-[24px] p-1 border shadow-md rounded-full hover:bg-gray-200 bg-gray-100 dark:hover:bg-dark-icon-story-hover dark:bg-dark-icon-story">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5 text-yellow-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                        />
                      </svg>
                    </button>
                  )}
                  {message.reacts.find((react) => react.type === 2) && (
                    <button className="flex items-center justify-center gap-2 w-[24px] h-[24px] p-1 border shadow-md rounded-full hover:bg-gray-200 bg-gray-100 dark:hover:bg-dark-icon-story-hover dark:bg-dark-icon-story">
                      <FaRegSurprise
                        size={20}
                        className="text-yellow-500"
                      />
                    </button>
                  )}
                  {message.reacts.find((react) => react.type === 3) && (
                    <button className="flex items-center justify-center gap-2 w-[24px] h-[24px] p-1 border shadow-md rounded-full hover:bg-gray-200 bg-gray-100 dark:hover:bg-dark-icon-story-hover dark:bg-dark-icon-story">
                      <TbMoodCry
                        size={22}
                        className="text-yellow-500"
                      />
                    </button>
                  )}
                  {message.reacts.find((react) => react.type === 4) && (
                    <button className="flex items-center justify-center gap-2 w-[24px] h-[24px] p-1 border shadow-md rounded-full hover:bg-gray-200 bg-gray-100 dark:hover:bg-dark-icon-story-hover dark:bg-dark-icon-story">
                      <BsEmojiAngry
                        size={20}
                        className="text-red-500"
                      />
                    </button>
                  )}
                  <span className="px-2 text-sm">
                    {message?.reacts?.length}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Message
