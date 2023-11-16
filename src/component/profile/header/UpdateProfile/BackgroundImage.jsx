import React, { useState } from 'react'

const BackgroundImage = ({
  backgroundImage,
  handleUploadBackground,
  handleCancelUploadBackground,
}) => {
  const [isUpdate, setIsUpdate] = useState(false)
  const handleUpload = (e) => {
    handleUploadBackground(e)
    setIsUpdate(true)
  }

  const handleCancelUpload = (e) => {
    handleCancelUploadBackground(e)
    setIsUpdate(false)
  }
  return (
    <div className="p-4 flex flex-col items-center text-gray-900 dark:text-light-search gap-y-4">
      <div className="flex items-center justify-between w-full">
        <h1 className="font-bold text-xl">Ảnh bìa</h1>
        <div>
          <label
            htmlFor="upload-bacground"
            className="text-base px-2 py-1 cursor-pointer hover:bg-gray-200 text-blue-500 dark:hover:bg-dark-icon-story-hover rounded-md"
          >
            Chỉnh sửa
          </label>
          <input
            type="file"
            onChange={handleUpload}
            name="upload-bacground"
            className="hidden"
            id="upload-bacground"
          />
        </div>
      </div>
      <div className="flex items-center justify-center w-full">
        {backgroundImage ? (
          <img
            src={backgroundImage}
            alt=""
            className="w-[80%] h-[150px] rounded-md"
          />
        ) : (
          <span>Thêm ảnh</span>
        )}
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

export default BackgroundImage
