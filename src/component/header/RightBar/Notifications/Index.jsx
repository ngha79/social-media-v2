import { Popover, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { BsThreeDots } from 'react-icons/bs'
import { AiFillBell } from 'react-icons/ai'
import Notification from './Notification/Index'
import Loading from './Loading/Loading'
import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Index = () => {
  const { loading, notification } = useSelector((state) => state.notification)

  const { pathname } = useLocation()
  return (
    <Popover
      className={
        'relative h-max flex items-center justify-center transition-all duration-200 translate-x-1'
      }
    >
      <Popover.Button
        className={'outline-none'}
        disabled={pathname === '/notifications'}
      >
        <div className="flex justify-center h-max items-center">
          <div className="p-[10px] cursor-pointer flex items-center justify-center rounded-full hover:bg-gray-300 bg-gray-200 dark:bg-dark-search dark:hover:bg-dark-icon">
            <AiFillBell
              className={`dark:text-dark-item-hover ${
                pathname === '/notifications' && 'text-blue-600'
              }`}
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
            'absolute overflow-y-scroll max-h-[90vh] h-max top-16 -right-10 bg-white  dark:text-dark-item-hover dark:bg-dark-nav shadow-md rounded-md w-[350px]'
          }
        >
          <div className="flex items-center justify-between py-2 px-4">
            <h1 className="font-bold text-2xl ">Thông báo</h1>
            <div className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-dark-icon cursor-pointer">
              <BsThreeDots />
            </div>
          </div>
          <div className="flex items-center justify-between text-sm gap-2 px-4">
            <div className="flex items-center justify-start gap-2">
              <button className="p-2 font-semibold rounded-2xl hover:bg-gray-200 dark:hover:bg-dark-icon">
                Tất cả
              </button>
              <button className="p-2 font-semibold rounded-2xl hover:bg-gray-200 dark:hover:bg-dark-icon">
                Chưa đọc
              </button>
            </div>
            <div className="flex justify-end w-max">
              <Link to={'/notifications'}>
                <Popover.Button>
                  <button className="p-2 font-semibold rounded-2xl text-blue-600">
                    Xem tất cả
                  </button>
                </Popover.Button>
              </Link>
            </div>
          </div>
          {loading ? (
            <>
              {[...Array(10).keys()].map((item, i) => (
                <Loading key={i} />
              ))}
            </>
          ) : (
            <>
              <div className="min-h-[300px] ">
                {notification?.map((item, i) => (
                  <Notification
                    key={i}
                    noti={item}
                  />
                ))}
              </div>
            </>
          )}
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

export default Index
