import { Popover, Transition } from '@headlessui/react'
import React, { Fragment, useEffect, useState } from 'react'
import { FaMoon } from 'react-icons/fa'
import { ImExit } from 'react-icons/im'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import useDarkSide from '../../../../utils/useDarkSide'
import { useDispatch, useSelector } from 'react-redux'
import RequestApi from '../../../../helper/api'
import { logout } from '../../../../store/auth/authSlice'
import ChangePassword from '../../../user/ChangePassword'

const Index = () => {
  const { user } = useSelector((state) => state.auth)

  const [themeOpen, setThemeOpen] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleSetTheme = () => {
    setThemeOpen(!themeOpen)
  }
  const [colorTheme, setTheme] = useDarkSide()

  const handleChangeThemeMode = (theme) => {
    setTheme(theme)
  }

  const handleLogout = async () => {
    dispatch(logout())
  }
  return (
    <div className="">
      <Popover
        className={
          'relative h-max flex items-center justify-center transition-all duration-200 translate-x-1'
        }
      >
        <Popover.Button className={'outline-none'}>
          <div
            className="cursor-pointer h-max flex items-center"
            onClick={() => setThemeOpen(false)}
          >
            <img
              src={user?.avatar}
              alt=""
              className="w-[40px] h-[40px] rounded-full cursor-pointer"
            />
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
          {!themeOpen ? (
            <Popover.Panel className="absolute z-10 top-16 bg-white dark:bg-dark-nav dark:text-dark-item-hover shadow p-4 rounded-md w-80 right-0 flex flex-col gap-y-2">
              <div className="flex flex-col items-start justify-start shadow-sm rounded-lg">
                <Link
                  to={`/${user?.name}/${user?._id}`}
                  className="w-full"
                >
                  <div className="flex justify-start overflow-hidden items-center gap-2 border border-gray-200 dark:border-transparent cursor-pointer hover:bg-dark-hover dark:hover:bg-dark-search transition-colors duration-200 w-full p-2 rounded-lg">
                    <img
                      src={user?.avatar}
                      alt=""
                      className="w-[40px] h-[40px] rounded-full cursor-pointer border border-gray-400 shadow"
                    />
                    <span className="font-semibold truncate max-w-[160px] line-clamp-1">
                      {user?.name}
                    </span>
                  </div>
                </Link>
              </div>
              <div
                onClick={handleSetTheme}
                className="flex items-center justify-start p-2 hover:bg-gray-200 dark:hover:bg-dark-search transition-colors duration-200 cursor-pointer gap-2 font-semibold rounded-md"
              >
                <div className="bg-gray-200 dark:bg-dark-icon p-2 rounded-full">
                  <FaMoon />
                </div>
                <span>Màn hình</span>
              </div>
              <ChangePassword />
              <div
                onClick={handleLogout}
                className="flex items-center justify-start p-2 hover:bg-gray-200 dark:hover:bg-dark-search transition-colors duration-200 cursor-pointer gap-2 font-semibold rounded-md"
              >
                <div className="bg-gray-200 dark:bg-dark-icon p-2 rounded-full">
                  <ImExit />
                </div>
                <span>Đăng xuất</span>
              </div>
            </Popover.Panel>
          ) : (
            <Popover.Panel className="absolute z-10 top-16 bg-white dark:bg-dark-nav dark:text-dark-item-hover shadow p-4 rounded-md w-80 right-0 flex flex-col gap-y-2">
              <div className="flex items-center justify-start gap-2 px-2">
                <div
                  className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-dark-icon cursor-pointer"
                  onClick={handleSetTheme}
                >
                  <AiOutlineArrowLeft className="dark:text-dark-item-hover" />
                </div>
                <h4 className="font-bold text-2xl">Màn hình</h4>
              </div>
              <div className="flex items-start justify-start p-2 gap-2 font-semibold rounded-md">
                <div className="bg-gray-200 p-2 rounded-full dark:bg-dark-icon">
                  <FaMoon />
                </div>
                <div className="flex flex-col justify-start gap-y-2">
                  <span className="text-lg">Chế độ tối</span>
                  <p className="text-sm font-normal">
                    Điều chỉnh giao diện của Facebook để giảm độ chói và cho đôi
                    mắt được nghỉ ngơi.
                  </p>
                  <div onClick={() => handleChangeThemeMode('light')}>
                    <div className="flex items-center justify-between p-2 rounded-md hover:bg-gray-200 dark:hover:bg-dark-search transition-colors duration-200 cursor-pointer ">
                      <label
                        htmlFor="turn-off-theme"
                        className="w-full"
                      >
                        Tắt
                      </label>
                      <input
                        type="radio"
                        id="turn-off-theme"
                        defaultChecked={colorTheme === 'dark' ? true : false}
                        value={colorTheme === 'dark' ? true : false}
                        name="default-radio"
                      />
                    </div>
                  </div>
                  <div onClick={() => handleChangeThemeMode('dark')}>
                    <div className="flex items-center justify-between p-2 rounded-md hover:bg-gray-200 dark:hover:bg-dark-search transition-colors duration-200 cursor-pointer ">
                      <label
                        htmlFor="turn-on-theme"
                        className="w-full"
                      >
                        Bật
                      </label>
                      <input
                        type="radio"
                        id="turn-on-theme"
                        value={colorTheme !== 'dark' ? true : false}
                        defaultChecked={colorTheme !== 'dark' ? true : false}
                        name="default-radio"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          )}
        </Transition>
      </Popover>
    </div>
  )
}

export default Index
