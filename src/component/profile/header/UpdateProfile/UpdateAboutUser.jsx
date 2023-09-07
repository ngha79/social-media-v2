import React, { useState } from 'react'
import { AiFillHome } from 'react-icons/ai'
import { MdLocationOn, MdSchool, MdWork } from 'react-icons/md'

const UpdateAboutUser = () => {
  const [updateAbout, setUpdateAbout] = useState(false)
  const [update, setUpdate] = useState('')
  return (
    <div className="p-4 flex flex-col items-center text-gray-900 dark:text-light-search gap-y-4">
      <div className="flex items-center justify-between w-full">
        <h1 className="font-bold text-xl">Chỉnh sửa phần giới thiệu</h1>
        <button
          onClick={() => setUpdateAbout(!updateAbout)}
          className="text-base px-2 py-1 hover:bg-gray-200 text-blue-500 dark:hover:bg-dark-icon-story-hover rounded-md"
        >
          Thêm
        </button>
      </div>
      <div className="flex items-start flex-col gap-1 justify-center w-full">
        {updateAbout ? (
          <div className="w-full space-y-2">
            <div className="flex items-center gap-2 w-full">
              <AiFillHome
                size={20}
                className="text-gray-400"
              />
              <input
                type="text"
                className="rounded-md px-2 py-1 w-full bg-gray-200 dark:bg-dark-icon-story-hover outline-none"
                placeholder="Tỉnh/Thành phố hiện tại"
              />
            </div>
            <div className="flex items-center gap-2">
              <MdWork
                size={20}
                className="text-gray-400"
              />
              <input
                type="text"
                className="rounded-md px-2 py-1 w-full bg-gray-200 dark:bg-dark-icon-story-hover outline-none"
                placeholder="Nơi làm việc"
              />
            </div>
            <div className="flex items-center gap-2">
              <MdSchool
                size={20}
                className="text-gray-400"
              />
              <input
                type="text"
                className="rounded-md px-2 py-1 w-full bg-gray-200 dark:bg-dark-icon-story-hover outline-none"
                placeholder="Trường học"
              />
            </div>
            <div className="flex items-center gap-2">
              <MdLocationOn
                size={20}
                className="text-gray-400"
              />
              <input
                type="text"
                className="rounded-md px-2 py-1 w-full bg-gray-200 dark:bg-dark-icon-story-hover outline-none"
                placeholder="Quê quán"
              />
            </div>
            <div className="flex items-center justify-end gap-4">
              <button
                onClick={() => setUpdateAbout(!updateAbout)}
                className="px-2 py-1 font-semibold rounded-md bg-gray-200 hover:bg-gray-300 dark:bg-dark-icon-story dark:hover:bg-dark-icon-story-hover"
              >
                Hủy
              </button>
              <button
                className={`px-2 py-1 font-semibold rounded-md  ${
                  update.length > 0
                    ? 'cursor-pointer bg-gray-200 hover:bg-gray-300 dark:bg-dark-icon-story dark:hover:bg-dark-icon-story-hover'
                    : 'cursor-not-allowed bg-gray-200 dark:bg-dark-icon-story text-gray-500 dark:text-gray-300'
                }`}
              >
                Lưu
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="flex items-center gap-2">
              <AiFillHome
                size={20}
                className="text-gray-400"
              />
              <span>Tỉnh/Thành phố hiện tại</span>
            </div>
            <div className="flex items-center gap-2">
              <MdWork
                size={20}
                className="text-gray-400"
              />
              <span>Nơi làm việc</span>
            </div>
            <div className="flex items-center gap-2">
              <MdSchool
                size={20}
                className="text-gray-400"
              />
              <span>Trường học</span>
            </div>
            <div className="flex items-center gap-2">
              <MdLocationOn
                size={20}
                className="text-gray-400"
              />
              <span>Quê quán</span>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default UpdateAboutUser
