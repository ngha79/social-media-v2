import React, { useState } from 'react'
import { AiFillHome } from 'react-icons/ai'
import { MdLocationOn, MdSchool, MdWork } from 'react-icons/md'

const UpdateAboutUser = ({
  address,
  education,
  residence,
  workplace,
  handleOnchange,
  handleCancelOnchange,
}) => {
  const [updateAbout, setUpdateAbout] = useState(false)
  const handleUpdate = (e) => {
    handleOnchange(e)
  }
  const handleCancelUpdate = (e) => {
    handleCancelOnchange(e)
    setUpdateAbout(false)
  }
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
                value={residence}
                name="residence"
                onChange={handleUpdate}
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
                value={workplace}
                onChange={handleUpdate}
                name="workplace"
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
                value={education}
                onChange={handleUpdate}
                name="education"
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
                value={address}
                onChange={handleUpdate}
                type="text"
                name="address"
                className="rounded-md px-2 py-1 w-full bg-gray-200 dark:bg-dark-icon-story-hover outline-none"
                placeholder="Quê quán"
              />
            </div>
            <div className="flex items-center justify-end gap-4">
              <button
                onClick={handleCancelUpdate}
                className="px-2 py-1 font-semibold rounded-md bg-gray-200 hover:bg-gray-300 dark:bg-dark-icon-story dark:hover:bg-dark-icon-story-hover"
              >
                Hủy
              </button>
              <button
                onClick={() => setUpdateAbout(false)}
                className="px-2 py-1 font-semibold rounded-md cursor-pointer bg-gray-200 hover:bg-gray-300 dark:bg-dark-icon-story dark:hover:bg-dark-icon-story-hover"
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
              {residence ? (
                <span>
                  Đang sống tại{' '}
                  <span className="font-semibold hover:underline">
                    {residence}
                  </span>
                </span>
              ) : (
                <span>Tỉnh/Thành phố hiện tại</span>
              )}
            </div>
            <div className="flex items-center gap-2">
              <MdWork
                size={20}
                className="text-gray-400"
              />
              {workplace ? (
                <span>
                  Đang làm việc tại{' '}
                  <span className="font-semibold hover:underline">
                    {workplace}
                  </span>
                </span>
              ) : (
                <span>Nơi làm việc</span>
              )}
            </div>
            <div className="flex items-center gap-2">
              <MdSchool
                size={20}
                className="text-gray-400"
              />
              {education ? (
                <span>
                  Học tại{' '}
                  <span className="font-semibold hover:underline">
                    {education}
                  </span>
                </span>
              ) : (
                <span>Trường học</span>
              )}
            </div>
            <div className="flex items-center gap-2">
              <MdLocationOn
                size={20}
                className="text-gray-400"
              />
              {address ? (
                <span>
                  Sinh ra ở{' '}
                  <span className="font-semibold hover:underline">
                    {address}
                  </span>
                </span>
              ) : (
                <span>Quê quán</span>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default UpdateAboutUser
