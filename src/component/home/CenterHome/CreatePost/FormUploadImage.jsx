import { PhotoIcon } from '@heroicons/react/24/solid'
import React, { useRef } from 'react'
import { AiOutlineClose } from 'react-icons/ai'

const FormUploadImage = ({
  closeImage,
  handleUploadImages,
  images,
  handleDeleteImageUpload,
}) => {
  const handleOnChange = (e) => {
    handleUploadImages(e)
  }

  const handleDeleteImage = (e, image, index) => {
    e.stopPropagation()
    handleDeleteImageUpload(image, index)
  }

  return (
    <div className="col-span-full relative">
      {!images?.length ? (
        <>
          <label
            htmlFor="file-upload"
            className="mt-2 flex justify-center dark:bg-dark-icon dark:text-dark-item-hover dark:hover:bg-dark-icon-story-hover cursor-pointer rounded-lg border border-dashed border-gray-900/25 px-6 py-10"
          >
            <div className="text-center">
              <PhotoIcon
                className="mx-auto h-12 w-12 text-gray-400 dark:text-dark-item"
                aria-hidden="true"
              />
              <div className="mt-4 flex text-sm leading-6 text-gray-600 dark:text-dark-item-hover">
                <label className="relative cursor-pointer rounded-md bg-white dark:bg-dark-icon dark:hover:bg-dark-icon-story-hover font-semibold text-indigo-600 dark:text-dark-item-hover">
                  <span className="dark:text-dark-item-hover">
                    Upload a file
                  </span>
                  <input
                    id="file-upload"
                    name="file-upload"
                    onChange={handleOnChange}
                    multiple
                    type="file"
                    className="sr-only hidden"
                  />
                </label>
                <p className="pl-1 dark:text-dark-item-hover">
                  or drag and drop
                </p>
              </div>
              <p className="text-xs leading-5 text-gray-600 dark:text-dark-item-hover">
                PNG, JPG, GIF up to 10MB
              </p>
            </div>
          </label>
          <div
            onClick={closeImage}
            className="absolute top-4 right-4 p-1 rounded-full border cursor-pointer bg-white hover:bg-gray-200 dark:bg-dark-icon"
          >
            <AiOutlineClose
              className=""
              size={20}
            />
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center gap-2">
          <label
            htmlFor="file-upload"
            className="px-4 py-1 rounded-md cursor-pointer bg-blue-500 text-light-search w-max font-semibold text-lg"
          >
            Thêm ảnh
            <input
              id="file-upload"
              name="file-upload"
              onChange={handleOnChange}
              multiple
              type="file"
              className="sr-only hidden"
            />
          </label>
          <div className="flex flex-wrap">
            {images?.map((image, index) => (
              <div
                className="relative"
                key={index}
              >
                <img
                  src={image}
                  alt="image"
                />
                <div
                  onClick={(e) => handleDeleteImage(e, image, index)}
                  className="absolute top-2 right-2 p-2 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-dark-icon-story dark:hover:bg-dark-icon-story-hover cursor-pointer"
                >
                  <AiOutlineClose />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default FormUploadImage
