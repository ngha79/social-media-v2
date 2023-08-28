import React from 'react'
import { FaFacebookF } from 'react-icons/fa'
import { AiOutlineSearch } from 'react-icons/ai'

const LeftBar = () => {
  return (
    <div className="flex items-center justify-start gap-2 w-[20%] py-2 pl-4">
      <div className="p-2 rounded-full cursor-pointer bg-blue-500 w-max">
        <a href="/">
          <FaFacebookF
            className="text-white"
            size={24}
          />
        </a>
      </div>
      <div className="pl-2 relative rounded-2xl text-gray-600 dark:text-white flex items-center justify-start gap-2 border-2 border-gray-200 bg-gray-200 dark:bg-dark-search dark:border-dark-search">
        <AiOutlineSearch />
        <input
          className="text-sm focus:outline-none rounded-2xl bg-gray-200 dark:bg-dark-search p-2"
          type="search"
          name="search"
          placeholder="Search"
        />
      </div>
    </div>
  )
}

export default LeftBar
