import React from 'react'
import { FaFacebook } from 'react-icons/fa'
import { AiFillFacebook, AiOutlineSearch } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'
import { BiLogoFacebook } from 'react-icons/bi'

const LeftBar = () => {
  return (
    <div className="flex items-center justify-start gap-2 w-[20%] py-2 pl-4">
      <div className="rounded-full cursor-pointer w-max border  bg-blue-500 border-blue-500">
        <a href="/">
          <BiLogoFacebook
            className="text-white"
            size={40}
          />
        </a>
      </div>
      <div className="pl-2 relative rounded-2xl text-gray-600 dark:text-dark-item-hover flex items-center justify-start gap-2 border-2 border-light-search bg-light-search dark:bg-dark-search dark:border-dark-search">
        <AiOutlineSearch />
        <input
          className="text-sm focus:outline-none rounded-2xl bg-light-search dark:bg-dark-search p-2"
          type="search"
          name="search"
          placeholder="Search"
        />
      </div>
    </div>
  )
}

export default LeftBar
