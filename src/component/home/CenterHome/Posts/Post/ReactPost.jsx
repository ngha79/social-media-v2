import React, { useState } from 'react'
import { AiOutlineLike } from 'react-icons/ai'
import { FaShare, FaRegCommentAlt } from 'react-icons/fa'
import { PiShareFatLight } from 'react-icons/pi'
import DialogPost from './DialogPost'

const ReactPost = ({ type }) => {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    type && setIsOpen(true)
  }
  return (
    <div className="flex flex-col px-4 pt-4">
      <div
        className={`flex items-center justify-around text-sm md:text-base gap-4 md:px-8 py-1 border-gray-200 dark:border-dark-icon-story ${
          type ? 'border-t' : 'border-y'
        }`}
      >
        <div className="flex items-center w-max font-semibold text-light-gray dark:text-dark-hover dark:hover:bg-dark-icon-story-hover gap-2 justify-center flex-1 rounded-md p-2 cursor-pointer hover:bg-gray-100">
          <AiOutlineLike size={18} />
          Thích
        </div>
        <div
          onClick={openModal}
          className="flex items-center w-max font-semibold text-light-gray dark:text-dark-hover dark:hover:bg-dark-icon-story-hover gap-2 justify-center flex-1 rounded-md p-2 cursor-pointer hover:bg-gray-100"
        >
          <FaRegCommentAlt size={16} />
          Bình luận
        </div>
        <DialogPost
          isOpen={isOpen}
          closeModal={closeModal}
          openModal={openModal}
        />

        <div className="flex items-center w-max font-semibold text-light-gray dark:text-dark-hover dark:hover:bg-dark-icon-story-hover gap-2 justify-center flex-1 rounded-md p-2 cursor-pointer hover:bg-gray-100">
          <PiShareFatLight size={18} />
          Chia sẻ
        </div>
      </div>
    </div>
  )
}

export default ReactPost
