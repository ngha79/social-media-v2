import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { BsThreeDots } from 'react-icons/bs'

export default function MenuListPopup() {
  return (
    <div className="z-10">
      <Menu
        as="div"
        className="relative inline-block text-left"
      >
        <div>
          <Menu.Button className="flex items-center justify-center cursor-pointer p-2 w-max rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-dark-icon-story dark:hover:bg-dark-icon-story-hover">
            <BsThreeDots />
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
          <Menu.Items className="absolute bottom-full right-full mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white dark:bg-dark-nav shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active
                        ? 'bg-gray-200 dark:bg-dark-icon-story-hover'
                        : 'text-gray-900 dark:text-light-search'
                    } group flex w-full items-center font-semibold rounded-md gap-2 px-2 py-2 text-[15px]`}
                  >
                    <AiOutlineCloseCircle size={20} />
                    Đóng tất cả đoạn chat
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
