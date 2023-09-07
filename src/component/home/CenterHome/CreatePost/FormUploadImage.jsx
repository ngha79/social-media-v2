import { PhotoIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'

const FormUploadImage = ({ closeImage }) => {
  return (
    <div className="col-span-full relative">
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
            <label
              htmlFor="file-upload"
              className="relative cursor-pointer rounded-md bg-white dark:bg-dark-icon dark:hover:bg-dark-icon-story-hover font-semibold text-indigo-600 dark:text-dark-item-hover"
            >
              <span className="dark:text-dark-item-hover">Upload a file</span>
              <input
                id="file-upload"
                name="file-upload"
                type="file"
                className="sr-only"
              />
            </label>
            <p className="pl-1 dark:text-dark-item-hover">or drag and drop</p>
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
    </div>
  )
}

export default FormUploadImage
