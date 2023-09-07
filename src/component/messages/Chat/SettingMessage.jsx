import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'

export default function SettingMessage({ handleShowMore, handleCloseMore }) {
  return (
    <div className="relative top-0 w-max">
      <Menu
        as="div"
        className="inline-block text-left"
      >
        {({ open }) => {
          if (open) {
            handleShowMore()
          } else {
            handleCloseMore()
          }
          return (
            <>
              <div>
                <Menu.Button
                  title="Xem thêm"
                  className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-dark-icon-story-hover text-light-gray"
                >
                  <BsThreeDotsVertical />
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
                <Menu.Items className="absolute z-10 right-0 md:right-full font-semibold md:left-0 p-2 mt-2 w-max origin-top-right divide-y divide-gray-100 rounded-md bg-white dark:bg-dark-icon-story text-gray-700 dark:text-light-search border border-gray-200 dark:border-dark-icon-story-hover shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`flex w-full items-center gap-2 p-2 rounded-md text-sm ${
                          active
                            ? 'hover:bg-gray-200 dark:hover:bg-dark-icon-story-hover'
                            : ''
                        }`}
                      >
                        Xóa, gỡ
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
                        Chuyển tiếp
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
                        Ghim
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
