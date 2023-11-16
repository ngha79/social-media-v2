import React, { useState } from 'react'

const UpdateAvatar = ({
  avatar,
  handleUploadAvatar,
  handleCancelUploadAvatar,
}) => {
  const [isUpdate, setIsUpdate] = useState(false)
  const handleUpload = (e) => {
    handleUploadAvatar(e)
    setIsUpdate(true)
  }

  const handleCancelUpload = (e) => {
    handleCancelUploadAvatar(e)
    setIsUpdate(false)
  }
  return (
    <div className="p-4 flex flex-col items-center text-gray-900 dark:text-light-search gap-y-4">
      <div className="flex items-center justify-between w-full">
        <h1 className="font-bold text-xl">Ảnh đại diện</h1>
        <div>
          <label
            htmlFor="upload-avatar"
            className="text-base px-2 py-1 cursor-pointer hover:bg-gray-200 text-blue-500 dark:hover:bg-dark-icon-story-hover rounded-md"
          >
            Chỉnh sửa
          </label>
          <input
            type="file"
            onChange={handleUpload}
            name="upload-avatar"
            className="hidden"
            id="upload-avatar"
          />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <img
          src={avatar}
          alt=""
          className="w-[150px] h-[150px] rounded-full"
        />
      </div>
      {isUpdate && (
        <button
          onClick={handleCancelUpload}
          className="text-base px-2 py-1 cursor-pointer hover:bg-gray-200 text-red-500 dark:hover:bg-dark-icon-story-hover rounded-md"
        >
          Hủy
        </button>
      )}
    </div>
  )
}

export default UpdateAvatar
