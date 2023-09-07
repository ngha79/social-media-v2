import React from 'react'
import { BiSolidLike } from 'react-icons/bi'

const CreateMessage = () => {
  return (
    <div className="p-3 h-max flex items-center justify-between gap-4">
      <input
        type="text"
        placeholder="Aa"
        className="px-4 py-2 text-[15px] rounded-2xl bg-gray-200 dark:bg-dark-search outline-none w-full"
      />
      <div className="p-1 hover:bg-gray-200 cursor-pointer dark:hover:bg-dark-icon-story-hover rounded-full text-blue-500">
        <BiSolidLike size={24} />
      </div>
    </div>
  )
}

export default CreateMessage
