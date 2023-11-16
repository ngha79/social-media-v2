import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { MdBlock } from 'react-icons/md'
import { PiMessengerLogo, PiUserSquare } from 'react-icons/pi'
import { useDispatch, useSelector } from 'react-redux'
import { kickMemberConversation } from '../../../store/conversation/conversationSlice'

export default function SettingMemberChat({
  conversationId,
  leaderConversation,
  memberId,
}) {
  const { user } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const handleKickMember = () => {
    dispatch(
      kickMemberConversation({
        leaderId: user?._id,
        userId: memberId,
        conversationId,
      })
    )
  }
  return (
    <div className="relative top-0 w-max">
      <Menu
        as="div"
        className="relative inline-block text-left"
      >
        <div>
          <Menu.Button
            title="Xem thêm"
            className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-dark-icon-story-hover text-light-gray"
          >
            <BsThreeDotsVertical />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 top-0 z-[10000] font-semibold p-2 mt-2 w-max origin-top-right divide-y divide-gray-100 rounded-md bg-white text-gray-700 dark:text-light-search border border-gray-200 dark:border-dark-icon-story-hover dark:bg-dark-nav shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`flex w-full items-center gap-2 p-2 rounded-md text-sm ${
                    active
                      ? 'hover:bg-gray-200 dark:hover:bg-dark-icon-story-hover'
                      : ''
                  }`}
                >
                  <PiMessengerLogo size={20} />
                  Nhắn tin
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
                  }`}
                >
                  <PiUserSquare size={20} />
                  Xem trang cá nhân
                </button>
              )}
            </Menu.Item>
            {leaderConversation === user?._id && (
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={handleKickMember}
                    className={`flex w-full items-center gap-2 border-none p-2 rounded-md text-sm ${
                      active
                        ? 'hover:bg-gray-200 dark:hover:bg-dark-icon-story-hover'
                        : ''
                    }`}
                  >
                    <MdBlock size={20} />
                    Mời ra khỏi nhóm
                  </button>
                )}
              </Menu.Item>
            )}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}
