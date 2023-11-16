import { Menu, Popover, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { BsThreeDots } from 'react-icons/bs'
import { AiOutlinePlus, AiOutlineUser } from 'react-icons/ai'
import CreateNewConversation from './CreateNewConversation/CreateNewConversation'

export default function SettingChat() {
  return (
    <div className="relative top-0 w-56 text-right">
      <Popover
        as="div"
        className="relative inline-block text-left"
      >
        <div>
          <Popover.Button className="inline-flex w-full justify-center rounded-full bg-gray-200 dark:bg-dark-icon-story dark:hover:bg-dark-icon-story-hover p-2 text-sm font-medium hover:bg-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <BsThreeDots size={20} />
          </Popover.Button>
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
          <Popover.Panel className="absolute right-0 min-[900px]:right-full z-[1] font-semibold shadow min-[900px]:left-0 p-2 mt-2 w-max origin-top-right divide-y divide-gray-100 rounded-md bg-white dark:bg-dark-nav ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div>
              <div
                className={
                  'flex w-full items-center gap-2 p-2 text-dark-search dark:text-dark-hover rounded-md text-[15px] hover:bg-gray-200 cursor-pointer dark:hover:bg-dark-icon-story-hover  }'
                }
              >
                <AiOutlineUser size={20} />
                Người liên hệ đang hoạt động
              </div>
            </div>
            <div>
              <div
                className={
                  'flex w-full items-center gap-2 border-none text-dark-search dark:text-dark-hover p-2 rounded-md text-[15px] hover:bg-gray-200 cursor-pointer dark:hover:bg-dark-icon-story-hover'
                }
              >
                <CreateNewConversation />
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  )
}
