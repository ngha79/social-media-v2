import { Popover, Transition } from '@headlessui/react'
import { Fragment, useEffect, useState } from 'react'
import { BsThreeDots } from 'react-icons/bs'
import { AiFillBell } from 'react-icons/ai'
import Notification from '../component/header/RightBar/Notifications/Notification/Index'
import { Link } from 'react-router-dom'
import Loading from '../component/header/RightBar/Notifications/Loading/Loading'
import { useSelector } from 'react-redux'

const Notifications = () => {
  const { loading, notification } = useSelector((state) => state.notification)
  return (
    <div className="flex h-max items-start justify-center my-4">
      <div className="max-w-xl bg-white dark:bg-dark-nav rounded-md shadow-md mt-2 w-full flex items-center justify-start flex-col">
        <div className="flex items-center justify-between py-2 px-4 w-full">
          <h1 className="font-bold text-2xl ">Thông báo</h1>
          <div className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-dark-icon cursor-pointer">
            <BsThreeDots />
          </div>
        </div>
        <div className="flex items-center w-full justify-between text-sm gap-2 px-4">
          <div className="flex items-center justify-start gap-2">
            <button className="p-2 font-semibold rounded-2xl hover:bg-gray-200 dark:hover:bg-dark-icon">
              Tất cả
            </button>
            <button className="p-2 font-semibold rounded-2xl hover:bg-gray-200 dark:hover:bg-dark-icon">
              Chưa đọc
            </button>
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
            <div className="min-h-[300px] w-full">
              {notification?.map((item, i) => (
                <Notification
                  key={i}
                  noti={item}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Notifications
