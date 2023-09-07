import { Popover, Transition } from '@headlessui/react'
import { Fragment, useEffect, useState } from 'react'
import { BsThreeDots } from 'react-icons/bs'
import { AiFillBell } from 'react-icons/ai'
import Notification from '../component/header/RightBar/Notifications/Notification/Index'
import { Link } from 'react-router-dom'
import Loading from '../component/header/RightBar/Notifications/Loading/Loading'

const Notifications = () => {
  const [isLoading, setIsLoading] = useState(true)

  const handleLoading = () => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }

  const handleSetLoading = () => {
    setIsLoading(true)
  }

  useEffect(() => {
    const loading = setTimeout(() => {
      setIsLoading(false)
    }, 1000)
    return () => {
      clearTimeout(loading)
    }
  }, [isLoading])

  return (
    <div className="flex h-max items-start justify-center my-4">
      <div className="max-w-xl bg-white dark:bg-dark-nav rounded-md shadow-md mt-2 w-full flex items-center justify-start flex-col">
        <div className="flex items-center justify-between py-2 px-4 w-full">
          <h1 className="font-bold text-2xl ">Thông báo</h1>
          <div className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-dark-icon cursor-pointer">
            <BsThreeDots />
          </div>
        </div>
        {isLoading ? (
          <>
            {[...Array(10).keys()].map((item, i) => (
              <Loading key={i} />
            ))}
          </>
        ) : (
          <>
            <div className="flex items-center w-full justify-between text-sm gap-2 px-4">
              <div className="flex items-center justify-start gap-2">
                <button
                  className="p-2 font-semibold rounded-2xl hover:bg-gray-200 dark:hover:bg-dark-icon"
                  onClick={handleSetLoading}
                >
                  Tất cả
                </button>
                <button
                  className="p-2 font-semibold rounded-2xl hover:bg-gray-200 dark:hover:bg-dark-icon"
                  onClick={handleSetLoading}
                >
                  Chưa đọc
                </button>
              </div>
            </div>
            <div className="min-h-[300px] ">
              {[...Array(10).keys()].map((item, i) => (
                <Notification key={i} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Notifications
