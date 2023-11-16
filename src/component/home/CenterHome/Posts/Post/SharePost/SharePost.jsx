import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { PiMessengerLogoLight, PiShareFatLight } from 'react-icons/pi'
import { useDispatch, useSelector } from 'react-redux'
import { sharePost } from '../../../../../../store/post/postSlice'

export default function SharePost({ post }) {
  const { user } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const handleSharePost = (type) => {
    dispatch(
      sharePost({
        userId: user?._id,
        postId: post?._id,
        text: '',
        typePost: type,
      })
    )
  }
  return (
    <div className="flex-1 w-full">
      <Menu
        as="div"
        className="relative block text-left"
      >
        <Menu.Button className="flex items-center w-full font-semibold text-light-gray dark:text-dark-hover dark:hover:bg-dark-icon-story-hover gap-2 justify-center flex-1 rounded-md p-2 cursor-pointer hover:bg-gray-100">
          <PiShareFatLight size={18} />
          Chia sẻ
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-[3] bottom-full w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="p-2">
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => handleSharePost('public')}
                    className={`${
                      active ? 'bg-gray-200 dark:bg-dark-icon-story-hover' : ''
                    } group flex w-full items-center gap-2 p-2 line-clamp-1 truncate rounded-md text-sm`}
                  >
                    <PiShareFatLight size={18} />
                    Chia sẻ ngay với mọi người
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => handleSharePost('friend')}
                    className={`${
                      active ? 'bg-gray-200 dark:bg-dark-icon-story-hover' : ''
                    } group flex w-full items-center gap-2 p-2 line-clamp-1 truncate rounded-md text-sm`}
                  >
                    <PiShareFatLight size={18} />
                    Chia sẻ ngay với bạn bè
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => handleSharePost('private')}
                    className={`${
                      active ? 'bg-gray-200 dark:bg-dark-icon-story-hover' : ''
                    } group flex w-full items-center gap-2 p-2 line-clamp-1 truncate rounded-md text-sm`}
                  >
                    <PiShareFatLight size={18} />
                    Chia sẻ ngay (chỉ mình tôi)
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => handleSharePost('messages')}
                    className={`${
                      active ? 'bg-gray-200 dark:bg-dark-icon-story-hover' : ''
                    } group flex w-full items-center gap-2 p-2 line-clamp-1 truncate rounded-md text-sm`}
                  >
                    <PiMessengerLogoLight size={20} />
                    Gửi qua tin nhắn
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}
