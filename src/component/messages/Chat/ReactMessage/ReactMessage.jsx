import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { BsEmojiAngry, BsEmojiSmile } from 'react-icons/bs'
import { AiFillHeart } from 'react-icons/ai'
import { FaRegSurprise } from 'react-icons/fa'
import { TbMoodCry } from 'react-icons/tb'
import { useDispatch, useSelector } from 'react-redux'
import { reactMessage } from '../../../../store/conversation/conversationSlice'

export default function ReactMessage({ handleSet, messageId, reacts, type }) {
  const { user } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const handleReactMessage = (type) => {
    dispatch(
      reactMessage({
        messageId: messageId,
        type: type,
        userId: user?._id,
      })
    )
  }
  return (
    <div className="relative top-0 w-max">
      <Menu
        as="div"
        className="inline-block text-left"
      >
        {({ open }) => {
          handleSet(open)
          return (
            <>
              <div>
                <Menu.Button
                  title="Xem thêm"
                  className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-dark-icon-story-hover text-light-gray"
                >
                  <BsEmojiSmile />
                </Menu.Button>
              </div>

              <Transition
                show={open}
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items
                  className={`absolute z-10 flex  ${
                    type === 'receiver' ? '-left-14 ' : '-right-16'
                  } bottom-[110%] font-semibold p-2 mt-2 w-max origin-top-right divide-y divide-gray-100 rounded-md bg-white dark:bg-dark-icon-story text-gray-700 dark:text-light-search border border-gray-200 dark:border-dark-icon-story-hover shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none`}
                >
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`flex w-full items-center gap-2 p-2 rounded-md text-sm ${
                          active
                            ? 'hover:bg-gray-200 dark:hover:bg-dark-icon-story-hover'
                            : ''
                        } ${
                          reacts?.find((react) => react.userId === user?._id)
                            ?.type === 0 &&
                          'bg-gray-200 dark:bg-dark-icon-story-hover'
                        }`}
                        onClick={() => handleReactMessage(0)}
                      >
                        <AiFillHeart
                          size={20}
                          className="text-red-500"
                        />
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`flex w-full items-center gap-2 p-2 rounded-md text-sm ${
                          active
                            ? 'hover:bg-gray-200 dark:hover:bg-dark-icon-story-hover'
                            : ''
                        } ${
                          reacts?.find((react) => react.userId === user?._id)
                            ?.type === 1 &&
                          'bg-gray-200 dark:bg-dark-icon-story-hover'
                        }`}
                        onClick={() => handleReactMessage(1)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6 text-yellow-500"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                          />
                        </svg>
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`flex w-full items-center gap-2 p-2 rounded-md text-sm ${
                          active
                            ? 'hover:bg-gray-200 dark:hover:bg-dark-icon-story-hover'
                            : ''
                        } ${
                          reacts?.find((react) => react.userId === user?._id)
                            ?.type === 2 &&
                          'bg-gray-200 dark:bg-dark-icon-story-hover'
                        }`}
                        onClick={() => handleReactMessage(2)}
                      >
                        <FaRegSurprise
                          size={20}
                          className="text-yellow-500"
                        />
                      </button>
                    )}
                  </Menu.Item>

                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`flex w-full items-center gap-2 border-none p-2 rounded-md text-sm ${
                          active
                            ? 'hover:bg-gray-200 dark:hover:bg-dark-icon-story-hover'
                            : ''
                        } ${
                          reacts?.find((react) => react.userId === user?._id)
                            ?.type === 3 &&
                          'bg-gray-200 dark:bg-dark-icon-story-hover'
                        }`}
                        onClick={() => handleReactMessage(3)}
                      >
                        <TbMoodCry
                          size={22}
                          className="text-yellow-500"
                        />
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`flex w-full items-center gap-2 border-none p-2 rounded-md text-sm ${
                          active
                            ? 'hover:bg-gray-200 dark:hover:bg-dark-icon-story-hover'
                            : ''
                        } ${
                          reacts?.find((react) => react.userId === user?._id)
                            ?.type === 4 &&
                          'bg-gray-200 dark:bg-dark-icon-story-hover'
                        }`}
                        onClick={() => handleReactMessage(4)}
                      >
                        <BsEmojiAngry
                          size={20}
                          className="text-red-500"
                        />
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`flex w-full items-center gap-2 border-none p-2 rounded-md text-sm ${
                          active
                            ? 'hover:bg-gray-200 dark:hover:bg-dark-icon-story-hover'
                            : ''
                        } ${
                          reacts?.find((react) => react.userId === user?._id)
                            ?.type === 5 &&
                          'bg-gray-200 dark:bg-dark-icon-story-hover'
                        }`}
                        onClick={() => handleReactMessage(5)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-6 h-6 text-blue-500"
                        >
                          <path d="M7.493 18.75c-.425 0-.82-.236-.975-.632A7.48 7.48 0 016 15.375c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23h-.777zM2.331 10.977a11.969 11.969 0 00-.831 4.398 12 12 0 00.52 3.507c.26.85 1.084 1.368 1.973 1.368H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 01-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227z" />
                        </svg>
                      </button>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </>
          )
        }}
      </Menu>
    </div>
  )
}
