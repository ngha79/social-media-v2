import { Popover, Transition } from '@headlessui/react'
import React, { Fragment } from 'react'
import { BsMessenger, BsSearch, BsThreeDots } from 'react-icons/bs'
import ListMessageChat from './ListMessageChat/Index'
import { Link } from 'react-router-dom'

const Index = () => {
  return (
    <div className="">
      <Popover
        className={
          'relative h-max flex items-center justify-center transition-all duration-200 translate-x-1'
        }
      >
        <Popover.Button className={'outline-none'}>
          <div className="flex justify-center h-max items-center">
            <div className="p-[10px] cursor-pointer flex items-center justify-center rounded-full hover:bg-gray-300 bg-gray-200 dark:bg-dark-search dark:hover:bg-dark-icon">
              <BsMessenger
                className="dark:text-dark-item-hover"
                size={20}
              />
            </div>
          </div>
        </Popover.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <Popover.Panel
            className={
              'absolute overflow-y-scroll hidden-scrollbar max-h-[90vh] h-max top-16 -right-[88px] bg-white  dark:text-dark-item-hover dark:bg-dark-nav shadow-md rounded-md w-[350px]'
            }
          >
            <div className="flex items-center justify-between py-2 px-4">
              <h1 className="font-bold text-2xl ">Chat</h1>
              <div className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-dark-icon cursor-pointer">
                <BsThreeDots />
              </div>
            </div>
            <div className="flex items-center text-sm justify-start bg-light-search dark:bg-dark-search rounded-3xl px-4 mx-4 my-2">
              <BsSearch />
              <input
                type="text"
                className="bg-light-search dark:bg-dark-search p-2 w-full outline-none text-black dark:text-dark-item-hover"
                placeholder="Tìm kiếm trên Messenger"
              />
            </div>
            <ListMessageChat />
            <div className="sticky bottom-[-1px] left-0 w-full z-10 bg-white dark:bg-dark-nav border-t dark:border-dark-search">
              <Link to={'/messages'}>
                <button className="w-full text-center text-blue-600 hover:underline p-2 font-semibold">
                  Xem tất cả trong Messenger
                </button>
              </Link>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  )
}

export default Index
