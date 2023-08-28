import { Popover, Transition } from '@headlessui/react'
import React, { Fragment, useEffect, useState } from 'react'
import { BsMoonFill } from 'react-icons/bs'
import { ImExit } from 'react-icons/im'
import useDarkSide from '../../../utils/useDarkSide'
import { AiOutlineArrowLeft } from 'react-icons/ai'

const Index = () => {
  const [themeOpen, setThemeOpen] = useState(false)

  const handleSetTheme = () => {
    setThemeOpen(!themeOpen)
  }
  const [colorTheme, setTheme] = useDarkSide()

  const handleChangeThemeMode = (theme) => {
    setTheme(theme)
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
              src="https://scontent.fhan15-2.fna.fbcdn.net/v/t39.30808-6/353056562_915817816192346_4112625160337329471_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=EJj50W6YnhEAX9XCrXd&_nc_ht=scontent.fhan15-2.fna&oh=00_AfDoA-zhgrn2BexwnSUCqCsDFNCneOlywBEAcsfSk1w8Yw&oe=64F0ACF3"
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
            <Popover.Panel className="absolute z-10 top-16 bg-white dark:bg-dark-nav dark:text-white shadow p-4 rounded-md w-80 right-0 flex flex-col gap-y-2">
              <div className="flex flex-col items-start justify-start shadow-sm rounded">
                <div className="flex justify-start items-center gap-2 border border-gray-200 dark:border-transparent cursor-pointer hover:bg-dark-hover dark:hover:bg-dark-search transition-colors duration-200 w-full p-2 rounded">
                  <div className="cursor-pointer h-max flex items-center">
                    <img
                      src="https://scontent.fhan15-2.fna.fbcdn.net/v/t39.30808-6/353056562_915817816192346_4112625160337329471_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=EJj50W6YnhEAX9XCrXd&_nc_ht=scontent.fhan15-2.fna&oh=00_AfDoA-zhgrn2BexwnSUCqCsDFNCneOlywBEAcsfSk1w8Yw&oe=64F0ACF3"
                      alt=""
                      className="w-[40px] h-[40px] rounded-full cursor-pointer border border-gray-400 shadow"
                    />
                  </div>
                  <span className="font-semibold truncate w-40">
                    Nguyen ha ngu vcl
                  </span>
                </div>
              </div>
              <div
                onClick={handleSetTheme}
                className="flex items-center justify-start p-2 hover:bg-gray-200 dark:hover:bg-dark-search transition-colors duration-200 cursor-pointer gap-2 font-semibold rounded-md"
              >
                <div className="bg-gray-200 dark:bg-dark-icon p-2 rounded-full">
                  <BsMoonFill />
                </div>
                <span>Màn hình</span>
              </div>
              <div className="flex items-center justify-start p-2 hover:bg-gray-200 dark:hover:bg-dark-search transition-colors duration-200 cursor-pointer gap-2 font-semibold rounded-md">
                <div className="bg-gray-200 dark:bg-dark-icon p-2 rounded-full">
                  <ImExit />
                </div>
                <span>Đăng xuất</span>
              </div>
            </Popover.Panel>
          ) : (
            <Popover.Panel className="absolute z-10 top-16 bg-white dark:bg-dark-nav dark:text-white shadow p-4 rounded-md w-80 right-0 flex flex-col gap-y-2">
              <div className="flex items-center justify-start gap-2 px-2">
                <div
                  className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-dark-icon cursor-pointer"
                  onClick={handleSetTheme}
                >
                  <AiOutlineArrowLeft className="dark:text-white" />
                </div>
                <h4 className="font-bold text-2xl">Màn hình</h4>
              </div>
              <div className="flex items-start justify-start p-2 gap-2 font-semibold rounded-md">
                <div className="bg-gray-200 p-2 rounded-full dark:bg-dark-icon">
                  <BsMoonFill />
                </div>
                <div className="flex flex-col justify-start gap-y-2">
                  <span>Chế độ tối</span>
                  <p>
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
                        value={''}
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
                        value={''}
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
